# PD0002652 - PowerCampus Email Notification Services for REGPENDAPP Not Working

## Issue Summary
**Issue:** The **Pending Advisor Approval (REGPENDAPP)** email notification, which alerts advisors when a new schedule has been submitted for approval, is **not being sent** when a student submits a cart containing courses that **require advisor approval**.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student submits a **course cart** that includes **advisor approval-required courses**.
2. The **Pending Advisor Approval (REGPENDAPP)** email notification **does not get sent** to the advisor.
3. Advisors are unaware that a pending schedule requires their approval.

---

## Expected Result
- Advisors should receive an **email notification** when a **student submits a schedule** requiring **advisor approval**.

## Actual Result
- The **email notification is not sent**, preventing advisors from being alerted to pending approvals.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Advisors can manually view **pending course approvals** by:
  1. Navigating to **Manage Advisee**.
  2. Selecting **My Advisee**.
  3. Using **Advanced Search** to filter **pending schedules**.

---

## Additional Information
**Client Impact:**
- Advisors **do not receive notifications** when a student submits a **schedule requiring approval**.
- This may cause **delays in course approval and registration processing**.

---

## Resolution
- The **timing of when notifications are sent** was adjusted.
- **New validations** were added to ensure that **notifications are correctly triggered** when a student submits a cart requiring **advisor approval**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Wide  
**Identifier:** PD0002652  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-19  
**Object/Process:** Advisor Approval Notifications  
**Knowledge Article ID:** (If applicable)

