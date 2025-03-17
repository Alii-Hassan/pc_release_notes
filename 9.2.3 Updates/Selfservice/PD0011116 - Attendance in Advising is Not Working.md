# PD0011116 - Attendance in Advising is Not Working

## Issue Summary
**Issue:** When accessing the **Attendance tab** through **Manage Advising**, the page does not work and displays a **403 - Forbidden** error.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
### **Steps to Reproduce**
1. **Prerequisites:**
   - Go to **PowerCampus User Management** → **Roles** → **Site Map**.
   - Under **Advising** → **Manage Advisees**, ensure the following options are selected:
     - **AllStudents.Profile**
     - **AllStudents.Profile.Alerts**
     - **AllStudents.Profile.Attendance**
     - **AllStudents.Profile.Attendance.DailyAttendance**
     - **AllStudents.Profile.Checklist**
     - **AllStudents.Profile.TestScores**
     - **AllStudents.Profile.UnofficialTranscript**

2. **Reproduce the Issue:**
   - Login as an **advisor**.
   - Navigate to **Advising → Manage Advisees → List: All Students**.
   - Select a student and click **View Profile**.
   - Click on the **Attendance** tab.
   - A **403 Forbidden error** is displayed.

---

## Expected Result
- The **Attendance tab** should display the **attendance information** for the selected student.

## Actual Result
- The **Attendance tab** fails to load, and a **403 Forbidden error** is displayed.

---

## Additional Notes
1. **Same behavior occurs** when selecting an **Advisee → Attendance**.
2. **The issue is also present** for other lists such as:
   - **My Advisees**
   - **Former Advisees**
   - **Alumni**
3. **Workaround:**  
   - Select **ALL** options under **PowerCampus User Management → Roles → Site Map → Advising → Manage Advisees** (including **AllStudents.Profile**).

---

## Client Impact
- **Advisors are unable to access attendance information** for their students.

---

## Resolution
- The system now **correctly reads the tab ID** of the **Attendance tab**, allowing advisors to access attendance details without errors.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0011116  
**Patch Number:** (If applicable)  
**Created Date:** 2023-11-10  
**Object/Process:** Manage Advising - Attendance Tab  
**Knowledge Article ID:** (If applicable)
