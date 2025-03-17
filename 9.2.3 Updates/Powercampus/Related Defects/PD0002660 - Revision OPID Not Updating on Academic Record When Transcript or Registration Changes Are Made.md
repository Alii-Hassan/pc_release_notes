# PD0002660 - Revision OPID Not Updating on Academic Record When Transcript or Registration Changes Are Made

## Issue Summary
**Issue:** When changes are made to a **student's transcript detail record** (Transcript Workflow) or **student's registration** (Registration Workflow, e.g., dropping a course), the system updates the **revision date and time** on the corresponding **academic record**, but it **does not update the revision OPID**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Modify a **student's transcript detail record** in the **Transcript Workflow**.
2. Observe that the **revision date and time** on the **academic record** is updated, but the **revision OPID remains unchanged**.
3. Modify a **student's registration** (e.g., **drop a course**) in the **Registration Workflow**.
4. Observe that the **revision date and time** on the **academic record** is updated, but the **revision OPID remains unchanged**.

---

## Expected Result
- The **revision OPID** should be updated when changes are made to **transcript details** or **registration records**.

## Actual Result
- The **revision OPID does not update**, making it difficult to track who made changes to the **academic record**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users **cannot accurately track** who made **modifications** to **transcript and registration records**.
- This affects **audit trails and historical record-keeping**.

---

## Resolution
- Added **revision information** to changes that affect the **academic table**.
- The following fields were added to the **stored procedure** used to recalculate academic information:
  - **OPID** (Operator ID)
  - **TERMINAL** (Workstation ID)
  - **REVISION_DATE**
  - **REVISION_TIME**

---

## Related Information
**Product Line/Product:** PowerCampus - General  
**Identifier:** PD0002660  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-20  
**Object/Process:** Academic Record Revision Tracking  
**Knowledge Article ID:** (If applicable)

