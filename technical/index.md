---
title: Technical Resources
description: Comprehensive technical resources for PowerCampus deployment, compatibility, and data migration
---

# PowerCampus Technical Resources

Welcome to the technical documentation for PowerCampus 9.3.0. This section provides detailed technical information for IT administrators, database administrators, and technical staff responsible for deploying, upgrading, and maintaining PowerCampus.

## Available Technical Guides

- [**Deployment Guide**](./deployment-guide.html) - Detailed technical requirements and step-by-step installation instructions
- [**Compatibility Guide**](./compatibility-guide.html) - Comprehensive compatibility information with operating systems, databases, and browsers
- [**Data Migration Guide**](./data-migration-guide.html) - Best practices and considerations for data migration

## Planning Your Upgrade

Planning a successful upgrade requires careful consideration of several factors:

1. **Assessment**: Evaluate your current environment, customizations, and integrations
2. **Planning**: Develop a detailed implementation plan with timelines and responsibilities
3. **Testing**: Set up a test environment and thoroughly test the upgrade process
4. **Deployment**: Execute the upgrade according to plan
5. **Verification**: Validate the upgraded system functionality
6. **Training**: Ensure staff are trained on new features and changes

## Technical Requirements Checklist

Use this quick checklist to verify your environment meets the minimum requirements:

- **Server OS**: Windows Server 2019 or 2022
- **Database**: SQL Server 2019 or 2022
- **Framework**: .NET 6.0
- **Web Server**: IIS 10.0+
- **Client OS**: Windows 10 or 11
- **Development Tools**: PowerBuilder 2022 R3 (if applicable)
- **Browser Support**: Chrome, Edge (Chromium), Firefox (latest versions)

See the [Compatibility Guide](./compatibility-guide.html) for detailed requirements.

## Frequently Asked Questions

### What is the recommended upgrade path to 9.3.0?

The recommended upgrade path depends on your current version. For versions 9.1.x and 9.2.x, you can upgrade directly to 9.3.0. For versions earlier than 9.1.0, a staged upgrade approach is recommended.

### Can we skip intermediate versions when upgrading?

You can upgrade directly from 9.1.x or 9.2.x to 9.3.0 without installing intermediate versions. However, all cumulative database scripts must be run in sequence.

### How much downtime should we plan for?

Downtime varies based on database size and system complexity. For medium-sized institutions, plan for 8-24 hours of downtime. Large institutions with complex customizations may require up to 48 hours.

### How do we handle customizations during the upgrade?

Document all customizations before upgrading. Test each customization in a test environment after upgrading. Some customizations may need to be reimplemented or modified to work with the new version.

---

**Need Technical Assistance?** Contact Ellucian Support or review the full documentation on the [Ellucian Customer Center](https://elluciansupport.service-now.com/).
