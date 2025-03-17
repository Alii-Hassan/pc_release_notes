# PD0006297 - Self-Service Intermittently Showing Only IDs in Course Management

## Issue Summary
**Issue:** In **Course Management**, the **Class List** intermittently displays only **student IDs** instead of **student names**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Login** as **faculty** in Self-Service.
2. **Navigate to:** **Classes > Course Management**.
3. **Select a Course** for the desired **Period**.
4. **Open Class List**:
   - Initially, student names **display correctly**.
   - After some time, **only student IDs are displayed** instead of names.

---

## Expected Result
- The **Class List** should **always display student names**.

## Actual Result
- The **Class List intermittently** displays **only student IDs** instead of names.

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Faculty **cannot see student names** in Course Management after a period of inactivity.

---

## Resolution
- **Implemented a fix** to ensure that the **currentLinkId** is sent in **HttpContext.Items** to a **Layout hidden element** and retrieved from a **custom request header**.  
- **CurrentPage** value was also added to request headers to maintain session information correctly.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0006297  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-04  
**Object/Process:** Course Management - Class List  
**Knowledge Article ID:** (If applicable)
