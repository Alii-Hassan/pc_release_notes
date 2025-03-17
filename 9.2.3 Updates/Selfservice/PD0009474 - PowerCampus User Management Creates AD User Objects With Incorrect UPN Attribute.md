# PD0009474 - PowerCampus User Management Creates AD User Objects With Incorrect UPN Attribute

## Issue Summary
**Issue:** When creating new **Self-Service users** with associated **Active Directory (AD) user objects**, the **UPN attribute** is incorrectly set to the **SAMAccountName** (username) instead of the **user's primary email address**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Configure **PowerCampus User Management** to allow creating **Self-Service users** and **Active Directory user objects**.
2. **Create a new user** in PowerCampus.
3. Check the **User Principal Name (UPN) attribute** in Active Directory.
4. **Issue:** The UPN is incorrectly set to the **username (SAMAccountName)** instead of the **user's primary email address**.

---

## Expected Result
- The **UPN attribute** should be set to the **user’s primary email address**.

## Actual Result
- The **UPN attribute** is incorrectly set to the **SAMAccountName** (username).

---

## Workaround
No known workaround.

---

## Additional Information
**Client Impact:**
- **Active Directory accounts are created incorrectly**, causing potential login and authentication issues.
- Users may face problems with **Single Sign-On (SSO)** and **email-based authentication**.

---

## Resolution
- **Code was updated** to ensure that the **UPN attribute** is now set to the **user’s primary email address** instead of the **username**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009474  
**Patch Number:** (If applicable)  
**Created Date:** 2023-08-21  
**Object/Process:** User Management - Active Directory UPN Attribute  
**Knowledge Article ID:** (If applicable)
