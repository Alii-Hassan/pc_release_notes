---
title: PowerCampus Data Migration Guide
description: Best practices and considerations for data migration when upgrading PowerCampus
---

# PowerCampus Data Migration Guide

This guide outlines the best practices and considerations for data migration when upgrading to PowerCampus 9.3.0. Proper data migration planning is critical for a successful upgrade process.

## Data Migration Overview

When upgrading PowerCampus, data migration is a critical component that requires careful planning and execution. This process involves:

1. Backing up your existing database
2. Upgrading the database schema to support new features
3. Transforming existing data to comply with new structures
4. Validating data integrity after migration

## Pre-Migration Planning

### Data Assessment

Before migration, perform a comprehensive assessment of your current database:

- [ ] **Size Analysis**: Determine the total size of your database and largest tables
- [ ] **Data Quality Check**: Identify and clean up any data inconsistencies
- [ ] **Custom Fields Review**: Document all custom fields and their usage
- [ ] **Obsolete Data Review**: Identify obsolete data that can be archived
- [ ] **Index Analysis**: Review existing indexes and their performance impact

### Environment Preparation

Prepare your environment for the migration:

- [ ] **Test Environment**: Create a complete test environment that mirrors production
- [ ] **Storage Requirements**: Ensure sufficient storage for the database, backups, and logs
- [ ] **Backup Strategy**: Define a comprehensive backup strategy
- [ ] **Rollback Plan**: Document a detailed rollback plan in case of migration failure
- [ ] **Downtime Window**: Identify an appropriate downtime window for the migration

## Data Backup Procedures

### Full Database Backup

Always perform a full database backup before starting the migration process:

```sql
-- SQL Server full backup command
BACKUP DATABASE [PowerCampus] TO DISK = 'D:\Backups\PowerCampus_FullBackup_PreMigration.bak'
WITH COMPRESSION, CHECKSUM, STATS = 10;
```

### Transaction Log Backup

Capture a transaction log backup to enable point-in-time recovery if needed:

```sql
-- SQL Server transaction log backup command
BACKUP LOG [PowerCampus] TO DISK = 'D:\Backups\PowerCampus_LogBackup_PreMigration.trn'
WITH COMPRESSION, CHECKSUM, STATS = 10;
```

### Backup Verification

Always verify your backups are valid before proceeding:

```sql
-- SQL Server backup verification
RESTORE VERIFYONLY FROM DISK = 'D:\Backups\PowerCampus_FullBackup_PreMigration.bak';
```

## Database Schema Changes

### Schema Changes in 9.3.0

PowerCampus 9.3.0 introduces several schema changes from previous versions:

| Table Name | Change Type | Description |
|------------|------------|-------------|
| ACADEMIC | Modified | Added Gender_X field for expanded gender options |
| PERSON | Modified | Added fields for preferred pronouns and legal name |
| BUILDING | Modified | Added fields for accessibility information |
| SECTION | Modified | New fields for online/hybrid delivery methods |
| COMMUNICATION | New | New table for enhanced communication tracking |
| USER_PREF | Modified | Added fields for accessibility preferences |
| PAYMENT_GATEWAY | Modified | Updated for new payment gateway integrations |

### Handling Custom Schema Extensions

If you have custom schema extensions, consider these best practices:

1. **Document All Customizations**: Create a comprehensive list of all custom fields, tables, and triggers
2. **Compatibility Check**: Verify if custom schema elements conflict with new schema changes
3. **Update Custom Code**: Modify custom code to work with new schema structures
4. **Test Thoroughly**: Test all customizations in a test environment before production migration

## Data Transformation Requirements

Certain data elements may require transformation during migration:

### Gender Data Migration

Version 9.3.0 introduces expanded gender options:

```sql
-- Example SQL to transform gender data
UPDATE ACADEMIC
SET Gender_X = 
    CASE 
        WHEN Gender = 'M' THEN 'Male'
        WHEN Gender = 'F' THEN 'Female'
        WHEN Gender = 'N' THEN 'Non-Binary'
        ELSE 'Unspecified'
    END;
```

### Communication Preferences

Migrate existing communication preferences to the new structure:

```sql
-- Example SQL to migrate communication preferences
INSERT INTO COMMUNICATION (PEOPLE_ID, COMM_TYPE, COMM_VALUE, PREFERRED)
SELECT PEOPLE_ID, 'EMAIL', Email, 1
FROM PERSON
WHERE Email IS NOT NULL;
```

## Data Validation Procedures

### Post-Migration Validation Queries

Run these validation queries after migration to ensure data integrity:

```sql
-- Verify record counts match pre-migration totals
SELECT COUNT(*) FROM ACADEMIC;
SELECT COUNT(*) FROM PERSON;
SELECT COUNT(*) FROM SECTION;

-- Check for orphaned records
SELECT a.PEOPLE_ID 
FROM ACADEMIC a
LEFT JOIN PERSON p ON a.PEOPLE_ID = p.PEOPLE_ID
WHERE p.PEOPLE_ID IS NULL;

-- Verify critical data integrity
SELECT COUNT(*) 
FROM SECTION 
WHERE SECTION_NO IS NULL OR SECTION_NO = '';
```

### Data Quality Reports

Run the following reports to verify data quality:

1. **Demographic Data Validation**: Checks for completeness of demographic data
2. **Academic Records Validation**: Verifies integrity of academic records
3. **Financial Records Reconciliation**: Ensures financial data balance is maintained
4. **User Security Audit**: Confirms user access rights are properly migrated

## Handling Large Datasets

For institutions with large datasets, consider these strategies:

### Table Partitioning

Consider partitioning large tables for better performance:

```sql
-- Example partitioning scheme for historical data
CREATE PARTITION FUNCTION pf_TransactionDate (DATETIME)
AS RANGE RIGHT FOR VALUES 
('2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01');

CREATE PARTITION SCHEME ps_TransactionDate
AS PARTITION pf_TransactionDate
TO (FG_Archive, FG_Archive, FG_Recent, FG_Current);

-- Apply to transactions table
ALTER TABLE TRANSACTION
DROP CONSTRAINT PK_TRANSACTION;

ALTER TABLE TRANSACTION
ADD CONSTRAINT PK_TRANSACTION PRIMARY KEY CLUSTERED (TRANSACTION_ID, TRANSACTION_DATE)
ON ps_TransactionDate(TRANSACTION_DATE);
```

### Staged Migration

For very large databases, consider a staged migration approach:

1. Migrate reference data first
2. Migrate current academic year data
3. Migrate historical data in chronological batches
4. Migrate transactional data

## Customization Migration

### Custom Report Migration

For custom reports:

1. Inventory all custom reports
2. Identify reports that need updating due to schema changes
3. Test reports in the test environment
4. Update report distribution settings

### PowerBuilder Customization Migration

For PowerBuilder customizations:

1. Verify compatibility with PowerBuilder 2022 R3
2. Recompile custom objects with new PowerBuilder version
3. Test customizations thoroughly
4. Document any changes required for compatibility

## Performance Optimization

### Database Optimization Post-Migration

After migration, optimize database performance:

```sql
-- Update statistics
EXEC sp_updatestats;

-- Rebuild indexes
ALTER INDEX ALL ON ACADEMIC REBUILD;
ALTER INDEX ALL ON PERSON REBUILD;
ALTER INDEX ALL ON SECTION REBUILD;
```

### Configuration Settings

Review and update these configuration settings for optimal performance:

| Configuration | Pre-9.3.0 Value | Recommended 9.3.0 Value |
|---------------|-----------------|-------------------------|
| Max Server Memory | 12 GB | 24 GB |
| Max Degree of Parallelism | 4 | Based on CPU cores |
| Cost Threshold for Parallelism | 5 | 50 |
| Database Compatibility Level | 130 | 150 |
| Auto Create Statistics | ON | ON |
| Auto Update Statistics | ON | ON |

## Common Migration Issues

### Known Issues and Resolutions

| Issue | Symptom | Resolution |
|-------|--------|------------|
| Schema Version Mismatch | Error during migration stating schema version is incorrect | Ensure all pre-requisite patches are applied in sequence |
| Data Type Conversion | Errors about data type conversion | Identify problematic data and cleanse before migration |
| Custom Triggers Failing | Errors in trigger execution | Disable triggers during migration, update, then enable |
| Index Rebuild Timeout | Timeout errors during index rebuilds | Increase command timeout or rebuild indexes separately |
| Space Issues | Disk space errors during migration | Ensure 1.5x database size free space available |

### Troubleshooting Tools

- Database Consistency Checker (DBCC)
- SQL Server Profiler
- PowerCampus Database Validation Utility
- SQL Server Extended Events

## Post-Migration Tasks

### Immediate Post-Migration Tasks

- [ ] Verify database integrity with DBCC CHECKDB
- [ ] Test critical business processes
- [ ] Verify security roles and permissions
- [ ] Test integrations with third-party systems
- [ ] Verify reporting functionality

### Long-term Monitoring

- [ ] Monitor application performance
- [ ] Review error logs for 72 hours post-migration
- [ ] Collect user feedback
- [ ] Document any outstanding issues
- [ ] Optimize based on performance metrics

## Migration Timeline Template

| Phase | Tasks | Estimated Duration |
|-------|-------|-------------------|
| Planning | Requirements gathering, environment setup | 2-4 weeks |
| Pre-Migration Testing | Test migration in non-production | 1-2 weeks |
| Production Backup | Full backups, verification | 2-8 hours |
| Schema Migration | Apply schema changes | 2-6 hours |
| Data Migration | Migrate and transform data | 4-24 hours |
| Validation | Run validation scripts and tests | 4-8 hours |
| Performance Optimization | Index rebuilds, statistics updates | 2-6 hours |
| User Acceptance Testing | Critical business process testing | 1-3 days |

## Special Considerations for Specific Versions

### Migrating from 9.1.x

When migrating from version 9.1.x, pay special attention to:

1. **Authentication Changes**: User authentication mechanism has been significantly updated
2. **Security Model Changes**: Review all security roles for compatibility
3. **Communication Module**: Data needs to be migrated to new communication structure
4. **API Changes**: APIs have been updated with breaking changes

### Migrating from 9.2.x

When migrating from version 9.2.x, focus on:

1. **Gender X Implementation**: Ensure proper migration of gender data
2. **Payment Gateway Integration**: Verify payment gateway compatibility
3. **PowerFAIDS Integration**: Test PowerFAIDS integration thoroughly
4. **Mobile App Compatibility**: Verify compatibility with mobile applications

## Resources

### Migration Scripts

- [PowerCampus 9.3.0 Migration Script Package](https://elluciansupport.service-now.com/)
- [Custom Migration Script Templates](https://elluciansupport.service-now.com/)
- [Data Validation Script Package](https://elluciansupport.service-now.com/)

### Reference Documentation

- [PowerCampus 9.3.0 Database Schema Guide](https://elluciansupport.service-now.com/)
- [PowerCampus 9.3.0 Technical Installation Guide](https://elluciansupport.service-now.com/)
- [SQL Server 2019/2022 Migration Best Practices](https://docs.microsoft.com/en-us/sql/sql-server/migrate/sql-server-migration-guide)

---

**Need more help?** Contact Ellucian Support or review the full documentation on the [Ellucian Customer Center](https://elluciansupport.service-now.com/). 