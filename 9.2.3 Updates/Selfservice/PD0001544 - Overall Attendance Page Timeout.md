# PD0001544 - Overall Attendance Page Timeout

## Issue Summary
**Issue:**  
- When a **class has a high enrollment** (approximately **80+ students**), attempting to access the **Overall Attendance page** in **Course Management** results in a **timeout error**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Enroll a large number of students** (e.g., **80+**) in a course.
2. **Navigate to Course Management** → **Overall Attendance page**.
3. **Page fails to load**, resulting in a **timeout error**.

---

## Expected Result
- The **Overall Attendance page** should **load properly**, regardless of **class size**.

## Actual Result
- The page **times out** when trying to **retrieve attendance data** for **large classes**.

---

## Workaround
- **No direct workaround** available.

---

## Client Impact
- **Instructors cannot track attendance** for large courses.
- **Course management efficiency is impacted** due to **slow or failed loading** of attendance records.

---

## Resolution
- The `spSelAttendanceForUI` **stored procedure** was previously retrieving **all meeting information**, causing delays.
- Now, the procedure **fetches meeting details only when necessary**, significantly **reducing load time**.
