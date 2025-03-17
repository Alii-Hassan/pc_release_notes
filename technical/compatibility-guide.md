---
title: PowerCampus Compatibility Guide
description: Detailed compatibility information for PowerCampus with operating systems, databases, browsers, and other components
---

# PowerCampus Compatibility Guide

This guide provides detailed compatibility information for PowerCampus 9.3.0 with various operating systems, databases, browsers, and other software components. Use this information to ensure your environment meets the necessary compatibility requirements.

## Operating System Compatibility

### Windows Server Compatibility

| PowerCampus Version | Windows Server 2016 | Windows Server 2019 | Windows Server 2022 |
|---------------------|---------------------|---------------------|---------------------|
| 9.1.1               | Supported           | Supported           | Not Tested          |
| 9.1.2               | Supported           | Supported           | Not Tested          |
| 9.1.3               | Supported           | Supported           | Not Tested          |
| 9.1.4               | Supported           | Supported           | Not Tested          |
| 9.2.0               | Supported           | Supported           | Limited Support     |
| 9.2.1               | Supported           | Supported           | Limited Support     |
| 9.2.2               | Supported           | Supported           | Limited Support     |
| 9.2.3               | Supported           | Supported           | Supported           |
| 9.2.4               | Supported           | Supported           | Supported           |
| 9.3.0               | Limited Support     | Supported           | Supported           |

**Notes**:
- **Supported**: Fully tested and supported
- **Limited Support**: May work but not fully tested; not recommended for production
- **Not Tested**: Not tested with this combination; use at your own risk
- **Not Supported**: Known issues exist; not recommended

### Client Operating System Compatibility

| PowerCampus Version | Windows 10 | Windows 11 | macOS (via Browser) |
|---------------------|------------|------------|---------------------|
| 9.1.1               | Supported  | Not Tested | Limited Support     |
| 9.1.2               | Supported  | Not Tested | Limited Support     |
| 9.1.3               | Supported  | Not Tested | Limited Support     |
| 9.1.4               | Supported  | Not Tested | Limited Support     |
| 9.2.0               | Supported  | Limited Support | Limited Support |
| 9.2.1               | Supported  | Limited Support | Limited Support |
| 9.2.2               | Supported  | Limited Support | Limited Support |
| 9.2.3               | Supported  | Supported  | Limited Support     |
| 9.2.4               | Supported  | Supported  | Limited Support     |
| 9.3.0               | Supported  | Supported  | Supported           |

## Database Compatibility

### Microsoft SQL Server Compatibility

| PowerCampus Version | SQL Server 2016 | SQL Server 2017 | SQL Server 2019 | SQL Server 2022 |
|---------------------|-----------------|-----------------|-----------------|-----------------|
| 9.1.1               | Supported       | Supported       | Not Tested      | Not Supported   |
| 9.1.2               | Supported       | Supported       | Not Tested      | Not Supported   |
| 9.1.3               | Supported       | Supported       | Limited Support | Not Supported   |
| 9.1.4               | Supported       | Supported       | Limited Support | Not Supported   |
| 9.2.0               | Supported       | Supported       | Supported       | Not Tested      |
| 9.2.1               | Supported       | Supported       | Supported       | Not Tested      |
| 9.2.2               | Supported       | Supported       | Supported       | Not Tested      |
| 9.2.3               | Limited Support | Supported       | Supported       | Limited Support |
| 9.2.4               | Limited Support | Supported       | Supported       | Limited Support |
| 9.3.0               | Not Supported   | Limited Support | Supported       | Supported       |

### SQL Server Edition Compatibility

| SQL Server Edition | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|--------------------|-------------------|-------------------|-------------------|
| Express            | Not Recommended   | Not Recommended   | Not Recommended   |
| Standard           | Supported         | Supported         | Supported         |
| Enterprise         | Supported         | Supported         | Supported         |

**Notes**:
- "Not Recommended" means the edition may work for testing but lacks features needed for optimal performance in production environments.

## Web Browser Compatibility

### Self-Service Web Browser Compatibility

| Browser              | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|----------------------|-------------------|-------------------|-------------------|
| Chrome (Latest)      | Supported         | Supported         | Supported         |
| Firefox (Latest)     | Supported         | Supported         | Supported         |
| Edge (Chromium)      | Limited Support   | Supported         | Supported         |
| Safari (Latest)      | Limited Support   | Limited Support   | Supported         |
| Internet Explorer 11 | Limited Support   | Not Supported     | Not Supported     |

### Mobile Browser Compatibility

| Browser                   | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|---------------------------|-------------------|-------------------|-------------------|
| Chrome on Android         | Limited Support   | Supported         | Supported         |
| Safari on iOS             | Limited Support   | Supported         | Supported         |
| Samsung Internet          | Not Tested        | Limited Support   | Supported         |

## Framework and Development Tool Compatibility

### .NET Framework Compatibility

| PowerCampus Version | .NET 4.6.x | .NET 4.8 | .NET 5.0 | .NET 6.0 |
|---------------------|------------|----------|----------|----------|
| 9.1.1 - 9.1.4       | Supported  | Not Tested | Not Supported | Not Supported |
| 9.2.0 - 9.2.2       | Supported  | Supported | Not Supported | Not Supported |
| 9.2.3 - 9.2.4       | Limited Support | Supported | Limited Support | Not Supported |
| 9.3.0               | Not Supported | Limited Support | Supported | Supported |

### PowerBuilder Compatibility

| PowerCampus Version | PowerBuilder 2017 | PowerBuilder 2019 | PowerBuilder 2022 |
|---------------------|-------------------|-------------------|-------------------|
| 9.1.1 - 9.1.4       | Supported         | Not Tested        | Not Supported     |
| 9.2.0 - 9.2.2       | Limited Support   | Supported         | Not Tested        |
| 9.2.3 - 9.2.4       | Not Supported     | Supported         | Limited Support   |
| 9.3.0               | Not Supported     | Limited Support   | Supported         |

## Integration Compatibility

### Authentication Systems

| Authentication System | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|-----------------------|-------------------|-------------------|-------------------|
| LDAP                  | Supported         | Supported         | Supported         |
| Active Directory      | Supported         | Supported         | Supported         |
| SAML 2.0              | Limited Support   | Supported         | Supported         |
| OAuth 2.0             | Not Supported     | Limited Support   | Supported         |
| OpenID Connect        | Not Supported     | Limited Support   | Supported         |

### Ellucian Solution Compatibility

| Ellucian Solution        | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|--------------------------|-------------------|-------------------|-------------------|
| Banner                   | Limited Support   | Supported         | Supported         |
| Colleague                | Limited Support   | Supported         | Supported         |
| Ethos                    | Limited Support   | Supported         | Supported         |
| PowerFAIDS               | Supported         | Supported         | Supported         |
| PowerFAIDS Cloud         | Not Supported     | Limited Support   | Supported         |
| Intelligent Learning Platform | Not Supported | Limited Support   | Supported         |
| Experience               | Not Supported     | Limited Support   | Supported         |

### Third-Party Integration

| Integration Type     | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|----------------------|-------------------|-------------------|-------------------|
| LMS (Canvas, etc.)   | Limited Support   | Supported         | Supported         |
| Payment Gateways     | Supported         | Supported         | Supported         |
| Reporting Tools      | Supported         | Supported         | Supported         |
| CRM Systems          | Limited Support   | Supported         | Supported         |
| BI Tools             | Supported         | Supported         | Supported         |

## Hardware Compatibility

### Minimum Hardware Requirements

| Component               | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|-------------------------|-------------------|-------------------|-------------------|
| CPU (Application Server)| 4 cores           | 4 cores           | 4+ cores          |
| RAM (Application Server)| 8 GB              | 12 GB             | 16 GB             |
| CPU (Database Server)   | 4 cores           | 6 cores           | 8+ cores          |
| RAM (Database Server)   | 16 GB             | 24 GB             | 32 GB             |
| Storage Type            | SAS/SSD           | SSD               | SSD               |

### Recommended Hardware for 2,000+ Students

| Component               | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|-------------------------|-------------------|-------------------|-------------------|
| CPU (Application Server)| 8 cores           | 8 cores           | 8+ cores          |
| RAM (Application Server)| 16 GB             | 24 GB             | 32 GB             |
| CPU (Database Server)   | 8 cores           | 12 cores          | 16+ cores         |
| RAM (Database Server)   | 32 GB             | 48 GB             | 64 GB             |
| Storage Type            | SSD               | SSD               | SSD               |

## Virtualization Compatibility

| Virtualization Platform | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|-------------------------|-------------------|-------------------|-------------------|
| VMware                  | Supported         | Supported         | Supported         |
| Hyper-V                 | Supported         | Supported         | Supported         |
| Citrix                  | Limited Support   | Supported         | Supported         |
| Azure Virtual Machines  | Limited Support   | Supported         | Supported         |
| AWS EC2                 | Limited Support   | Supported         | Supported         |

## Additional Considerations

### Support Lifecycle

| PowerCampus Version | General Availability | Mainstream Support End | Extended Support End |
|---------------------|---------------------|------------------------|----------------------|
| 9.1.1               | Q1 2019             | Q1 2021                | Q1 2022              |
| 9.1.2               | Q2 2019             | Q2 2021                | Q2 2022              |
| 9.1.3               | Q3 2019             | Q3 2021                | Q3 2022              |
| 9.1.4               | Q4 2019             | Q4 2021                | Q4 2022              |
| 9.2.0               | Q1 2020             | Q1 2022                | Q1 2023              |
| 9.2.1               | Q2 2020             | Q2 2022                | Q2 2023              |
| 9.2.2               | Q3 2020             | Q3 2022                | Q3 2023              |
| 9.2.3               | Q4 2020             | Q4 2022                | Q4 2023              |
| 9.2.4               | Q1 2021             | Q1 2023                | Q1 2024              |
| 9.3.0               | Q2 2022             | Q2 2024                | Q2 2025              |

### Security Compatibility

| Security Feature             | PowerCampus 9.1.x | PowerCampus 9.2.x | PowerCampus 9.3.0 |
|------------------------------|-------------------|-------------------|-------------------|
| TLS 1.2                      | Supported         | Supported         | Supported         |
| TLS 1.3                      | Not Supported     | Limited Support   | Supported         |
| FIPS 140-2 Compliance        | Limited Support   | Supported         | Supported         |
| Multi-factor Authentication  | Not Supported     | Limited Support   | Supported         |
| Data Encryption at Rest      | Limited Support   | Supported         | Supported         |

## Compatibility Notes

1. **Operating System End of Support**:
   - Windows Server 2016 mainstream support ends on January 11, 2022
   - Plan for migration to Windows Server 2019 or 2022

2. **Database End of Support**:
   - SQL Server 2016 mainstream support ended on July 13, 2021
   - SQL Server 2017 mainstream support ends on October 11, 2022
   - Plan for migration to SQL Server 2019 or 2022

3. **Browser Compatibility**:
   - Self-Service is optimized for Chrome and Edge (Chromium)
   - Internet Explorer 11 support has been discontinued in PowerCampus 9.2.x and later

4. **PowerBuilder Development**:
   - Custom PowerBuilder applications may need to be recompiled when migrating to PowerCampus 9.3.0
   - Test all custom development thoroughly before upgrading

5. **.NET Framework Migration**:
   - Migration from .NET 4.x to .NET 6.0 may require code changes for custom applications
   - Test all integrations thoroughly before upgrading

---

**Need more help?** Contact Ellucian Support or review the full documentation on the [Ellucian Customer Center](https://elluciansupport.service-now.com/). 