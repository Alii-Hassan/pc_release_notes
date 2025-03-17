# PD0009473 - PowerCampus User Management Requires Delegation of Control in AD for Role Changes

## Issue Summary
**Issue:** When a user has an **Active Directory Creation Store** assigned and attempts to **change assigned roles** in **User Management**, an **error is returned**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Assign a **user** to an **Active Directory Creation Store**.
2. Attempt to **change their assigned roles** in **User Management**.
3. **Error occurs** if the connection user in **`authenticationsettings.json`** lacks delegation permissions.

---

## Expected Result
- Role changes should be successfully **saved** in **User Management**.

## Actual Result
- **Error occurs** when trying to modify roles.
- The issue arises because the **connection user lacks necessary AD permissions**.
- Many institutions only grant **read permissions** to the **connection user**, preventing role modifications.

---

## Workaround
No known workaround.

---

## Additional Information
**Client Impact:**
- **Users cannot modify roles in User Management** without granting additional **Active Directory permissions**.

---

## Resolution
- **Code was updated** to **separate sections** in the **Edit User modal**:
  - **Role changes are now saved independently** of AD-related information.
  - **If AD-related values are edited**, but the user lacks permissions, **an exception is displayed**, and **roles are not saved**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009473  
**Patch Number:** (If applicable)  
**Created Date:** 2023-08-21  
**Object/Process:** User Management - AD Role Changes  
**Knowledge Article ID:** (If applicable)
