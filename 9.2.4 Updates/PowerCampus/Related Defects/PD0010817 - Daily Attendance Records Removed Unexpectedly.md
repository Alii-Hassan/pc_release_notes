# PD0010817 - Daily Attendance Records Removed Unexpectedly

## Issue Summary
**Issue:** Faculty take daily attendance via **Self-Service**. Records are created in the `tranattendance` table. However, at a later point in time, the previously created records get deleted without any user input.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.1  
**Resolution Date:** 2024-06-28  

---

## Replication Steps
1. Faculty record daily attendance using **Self-Service**.
2. Attendance records are successfully created in the `tranattendance` table.
3. At a later point, these records **disappear** from the database **without any user action**.

---

## Expected Result
- Attendance records should persist in the database and should not be deleted unless explicitly removed by an authorized action.

## Actual Result
- Attendance records get **deleted unexpectedly** from the `tranattendance` table without user intervention.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Daily attendance records were being removed unexpectedly, causing data loss and inconsistencies.

---

## Resolution
A fix was implemented by adding **transaction management** and **error handling** to the stored procedure `spInsStudentMeetingAttendanceBatch`. The procedure now:
- **Performs delete and insert operations in the same transaction** to prevent data loss.
- **Prevents deletion** if the insertion has not been successfully completed.
- **Logs return statuses** in the **Self-Service logs**, ensuring visibility if an insertion fails or encounters an error.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0010817  
**Patch Number:** (If applicable)  
**Created Date:** 2023-10-25  
**Object/Process:** Student Attendance Handling  
**Knowledge Article ID:** (If applicable)

