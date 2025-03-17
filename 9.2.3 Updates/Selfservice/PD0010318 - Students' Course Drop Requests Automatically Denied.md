# PD0010318 - Students' Course Drop Requests Automatically Denied

## Issue Summary
**Issue:** When a student **requests advisor approval** for a **course drop**, the request is **automatically denied**.  
- The **schedulerequest** record is created with a **deny status**, preventing the advisor from reviewing the request.  
- The advisor **does not get an option** to **approve or deny** the course drop.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Expected Result
- The **schedulerequest** record should be created with a **Pending** status.
- The **advisor** should be able to **approve or deny** the course drop request.

## Actual Result
- The **schedulerequest** record is automatically set to **Deny**.
- The **advisor does not have the option** to approve or deny the request.

---

## Client Impact
- **Advisors cannot review or approve drop requests.**
- **Students' course drop requests are immediately denied**, leading to confusion.
- **Workaround:** None. Advisors **must manually override** the system behavior.

---

## Resolution
- A **decision property** was added to **ensure** that **drop requests are initially set to Pending**.
- Now, **advisors have the ability to review and approve/deny** course drop requests.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0010318  
**Patch Number:** (If applicable)  
**Created Date:** 2023-10-02  
**Object/Process:** Course Drop Approval - Advisor Review  
**Knowledge Article ID:** (If applicable)
