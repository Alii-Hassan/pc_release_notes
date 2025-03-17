# PD0002846 - Self-Service Displaying Denied Courses in Student Schedules

## Issue Summary
**Issue:**  
- **Denied courses** are displayed **in red** in **student schedules**.
- This **confuses students**, as they may think **denied courses** are **still part of their schedule**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Navigate to** Self-Service → **Student Schedule**.
2. **Observe that denied courses are displayed in red**.
3. **Students may assume** these courses are still **active** in their schedule.

---

## Expected Result
- **Denied courses should not appear by default** in **student schedules**.
- **Students should have the option** to **view denied courses** separately if needed.

## Actual Result
- **Denied courses are displayed in red** in **student schedules**.
- **Students misunderstand the status** of their denied courses.

---

## Workaround
- **No workaround** was available before the fix.

---

## Client Impact
- **Confusion for students** regarding **their final schedule**.
- **Inaccurate representation** of **enrolled courses**.
- **Potential scheduling issues** due to misinterpretation.

---

## Resolution
- **A new checkbox** was added in:
  - **Registration Cart**
  - **My Schedule**
  - **Dossier**
- **By default, denied courses do NOT appear** in **list or calendar view**.
- **Students can choose to view denied courses** by selecting the **Denied Courses** checkbox.
