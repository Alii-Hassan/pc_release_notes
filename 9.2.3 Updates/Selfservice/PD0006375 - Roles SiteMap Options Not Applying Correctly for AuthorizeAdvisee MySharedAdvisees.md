# PD0006375 - Roles SiteMap Options Not Applying Correctly for AuthorizeAdvisee > MySharedAdvisees

## Issue Summary
**Issue:** In **User Management**, the **role permissions** for **AuthorizeAdvisee > MySharedAdvisees** are **not applying correctly**.  
Even when the **permissions are not granted**, the **option remains visible**, and advisors can still **authorize registration** for shared advisees.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Navigate to:** **User Management > Self Service > Roles > Advisor > Site Map**.
2. **Check permissions:** Ensure that **Advising > Authorize Advisees > My Shared Advisees** is **not checked**.
3. **Verify access:** 
   - The **option should not appear** for the role.
   - The **Advisor should not have access** to authorize registration.

---

## Expected Result
- The **Advisor should not be able to access** the **Authorize Registration** tab for shared advisees **if permissions are not granted**.

## Actual Result
- The **Advisor can still authorize registration** for shared advisees **despite lacking permissions**.

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Unauthorized advisors** are able to **authorize shared advisees' registration**, violating role-based access control.

---

## Resolution
- **Fixed issue** where **AdvisingAuthorizeAdviseesMySharedAdvisees** claim **was not saving correctly** when setting up roles.  
- Now, **permissions apply correctly**, preventing unauthorized advisors from accessing shared advisee authorization.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0006375  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-08  
**Object/Process:** Role Permissions - Authorize Advisees  
**Knowledge Article ID:** (If applicable)
