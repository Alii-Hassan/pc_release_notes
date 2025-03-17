# PD0009494 - PowerCampus User Management Throws Error When Creating User with No Password

## Issue Summary
**Issue:** When a **Creation User Store** has **no password policy**, **User Management** allows the creation of a user **without a password**. This results in an **error**, where a record is created in the **personuser table** but **not in the auth.appuser table**, effectively orphaning the **personuser** record.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Ensure that the **Creation User Store** has **no password policy**.
2. Navigate to **User Management** and select **Create User**.
3. Notice that the **"Password"** fields display **"*"** indicating they are required.
4. **Leave the password fields empty** and proceed to the next step.
5. Click **"Create"**.
6. **Issue:** User Management throws an **error**, creating a record in **personuser table** but **not in auth.appuser table**, orphaning the record.

---

## Expected Result
- The system should **require a password** before proceeding.
- If a password is not entered, the system should **not allow the user creation process to continue**.

## Actual Result
- The system **allows user creation** without a password.
- User Management **throws an error**.
- A **personuser record is created**, but **no auth.appuser record is generated**, leading to an orphaned record.

---

## Workaround
No known workaround.

---

## Additional Information
**Client Impact:**
- Users can create accounts **without passwords**, leading to authentication issues.
- Causes **orphaned records** in the database, requiring manual cleanup.

---

## Resolution
- **Validation was added** to ensure that **user creation only proceeds if a password is entered**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009494  
**Patch Number:** (If applicable)  
**Created Date:** 2023-08-22  
**Object/Process:** User Management - Password Policy  
**Knowledge Article ID:** (If applicable)
