---
title: PowerCampus Deployment Guide
description: Detailed technical requirements and installation steps for upgrading PowerCampus
---

# PowerCampus Deployment Guide

This guide provides detailed information about deploying or upgrading PowerCampus to version 9.3.0, including technical requirements, installation steps, and post-installation tasks.

## System Requirements

### Hardware Requirements

**PowerCampus Application Server**:
- **CPU**: Intel Xeon or AMD EPYC processor with 4+ cores
- **Memory**: 16 GB RAM minimum (32 GB recommended)
- **Disk Space**: 100 GB for application + additional space for database
- **Network**: Gigabit Ethernet connection

**Database Server**:
- **CPU**: Intel Xeon or AMD EPYC processor with 8+ cores
- **Memory**: 32 GB RAM minimum (64 GB recommended for large institutions)
- **Disk Space**: 200+ GB (dependent on database size and growth projections)
- **Network**: Gigabit Ethernet connection

**Web Server**:
- **CPU**: Intel Xeon or AMD EPYC processor with 4+ cores
- **Memory**: 16 GB RAM minimum (32 GB recommended)
- **Disk Space**: 100 GB
- **Network**: Gigabit Ethernet connection

### Software Requirements

**Operating Systems**:
- **Windows Server 2019** (with latest service packs)
- **Windows Server 2022** (recommended)

**Database Systems**:
- **SQL Server 2019** (with latest updates)
- **SQL Server 2022** (recommended)

**Required Frameworks and Components**:
- **.NET 6.0**
- **PowerBuilder 2022 R3** (for development environments)
- **IIS 10.0+** with:
  - ASP.NET Core Module
  - URL Rewrite Module
  - Application Request Routing Module

**Client Requirements**:
- **Operating System**: Windows 10 or Windows 11
- **Browser**: Google Chrome (latest), Microsoft Edge (latest), Firefox (latest)
- **Screen Resolution**: 1920x1080 or higher recommended

## Pre-Upgrade Tasks

### 1. Environment Assessment

- [ ] Verify current version and patch level of PowerCampus
- [ ] Document customizations and integrations
- [ ] Review license status and ensure it covers the new version
- [ ] Check database size and growth rates
- [ ] Identify downtime window for the upgrade process

### 2. Infrastructure Preparation

- [ ] Update operating system to supported version if necessary
- [ ] Install or upgrade SQL Server to supported version
- [ ] Install required .NET framework version
- [ ] Install IIS and required modules
- [ ] Configure IIS for SSL/TLS

### 3. Backup Strategy

- [ ] Perform full backup of PowerCampus database
- [ ] Backup configuration files
- [ ] Backup customizations and integrations
- [ ] Verify backups are valid and restorable

## Upgrade Process

### 1. Installation Planning

#### A. Database Server
- Upgrade SQL Server if required
- Apply latest SQL Server service packs and updates
- Ensure database compatibility level is appropriate

#### B. Application Server
- Install/upgrade Windows Server if required
- Apply latest Windows Updates
- Install/upgrade .NET Framework
- Configure IIS with required modules

#### C. Web Server
- Install/upgrade Windows Server if required
- Apply latest Windows Updates
- Install/upgrade .NET Framework
- Configure IIS with required modules

### 2. Installation Steps

#### A. PowerCampus Core Installation

1. **Download Installation Files**
   - Download PowerCampus 9.3.0 installation files from Ellucian Download Center
   - Verify checksums to ensure integrity

2. **Database Preparation**
   - Run PowerCampus database upgrade scripts
   - Verify database upgrade completed successfully

3. **Application Installation**
   - Run PowerCampus installer
   - Follow on-screen instructions for the installation
   - Configure application settings
   - Apply any required patches or hotfixes

#### B. Self-Service Installation

1. **Prepare Web Environment**
   - Configure IIS application pools
   - Set up required certificates
   - Configure virtual directories

2. **Install Self-Service Components**
   - Run Self-Service installer
   - Follow on-screen instructions
   - Configure application settings
   - Set up authentication providers

#### C. User Management Installation

1. **Install User Management Components**
   - Run User Management installer
   - Configure user stores
   - Set up password policies
   - Configure integration with authentication systems

### 3. Post-Installation Tasks

- [ ] Verify application functionality
- [ ] Update configuration files with site-specific settings
- [ ] Apply customizations and integrations
- [ ] Update documentation with new version details
- [ ] Conduct user acceptance testing

## Specific Version Upgrade Considerations

### Upgrading from 9.1.x

1. **Database Changes**
   - Run specific database scripts for 9.1.x to 9.3.0 migration
   - Check for schema compatibility issues

2. **.NET Framework Migration**
   - Migrate from .NET 4.6 to .NET 6.0
   - Test any custom applications for compatibility

3. **PowerBuilder Migration**
   - Update from PowerBuilder 2019 to 2022 R3
   - Test compatibility of custom PowerBuilder components

### Upgrading from 9.2.x

1. **Database Changes**
   - Run specific database scripts for 9.2.x to 9.3.0 migration
   - Check for schema compatibility issues

2. **Gender X Advisory Report**
   - Run the Gender X advisory report (if upgrading from pre-9.2.3)
   - Address any non-standard gender values

3. **PowerFAIDS Cloud Integration**
   - Configure PowerFAIDS Cloud integration settings
   - Test data exchange functionality

## Troubleshooting Common Issues

### Installation Failures

**Symptom**: Installation fails with error code
**Resolution**:
1. Check system requirements are met
2. Verify permissions for installation account
3. Check Windows Event Logs for details
4. Review installation logs in the temp directory

### Database Upgrade Issues

**Symptom**: Database upgrade scripts fail
**Resolution**:
1. Verify SQL Server version compatibility
2. Check for adequate disk space
3. Verify database permissions
4. Review SQL Server error logs

### Web Application Connectivity Issues

**Symptom**: Unable to access Self-Service
**Resolution**:
1. Verify IIS services are running
2. Check application pool configuration
3. Verify binding and certificate configuration
4. Check network connectivity and firewall settings

## Additional Resources

- [PowerCampus 9.3.0 Release Notes](https://elluciansupport.service-now.com/)
- [PowerCampus Technical Reference Guide](https://elluciansupport.service-now.com/)
- [PowerCampus Installation Guide](https://elluciansupport.service-now.com/)
- [Ellucian Customer Support](https://elluciansupport.service-now.com/)

---

**Need more help?** Contact Ellucian Support or review the full documentation on the [Ellucian Customer Center](https://elluciansupport.service-now.com/). 