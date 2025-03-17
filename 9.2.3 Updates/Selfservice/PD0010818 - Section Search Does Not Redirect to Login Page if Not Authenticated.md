# PD0010818 - Section Search Does Not Redirect to Login Page if Not Authenticated

## Issue Summary
**Issue:** When the **Section Search** URL (`http://localhost/PowerCampusSelfService/Search/Section`) is entered directly, **unauthenticated users** receive a **403 Forbidden error page** instead of being redirected to the **login page**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
### **Prerequisites**
- Under **PowerCampus User Management**, remove **Section Search** from the **sitemap** for **unauthenticated users**.

### **Steps to Reproduce**
1. Open a browser and enter the URL:  
   `http://localhost/PowerCampusSelfService/Search/Section`
2. Observe the error message.

---

## Expected Result
- Unauthenticated users should be **redirected** to the **login page**.

## Actual Result
- Instead of redirecting, a **403 Forbidden error** page is displayed.

---

## Client Impact
- Users who are **not logged in** receive a **403 error** instead of being redirected to **Sign In**.
- This creates confusion, as they are not prompted to authenticate before searching for sections.

---

## Resolution
- A **condition** was added to **redirect unauthenticated users** to the **Sign In page**.
- **Authenticated users** who lack permission will still see the **403 Forbidden error page**.
- The **"Make a Gift" page** was also updated to correctly **implement sitemap permissions**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0010818  
**Patch Number:** (If applicable)  
**Created Date:** 2023-10-25  
**Object/Process:** Section Search - Authentication  
**Knowledge Article ID:** (If applicable)
