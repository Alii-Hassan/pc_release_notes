# CR-000180827 - Self-Service Dossier View Shows Duplicate Courses on Course Schedule Tab

## Issue Summary
**Issue:**  
- In **Self-Service**, the **Dossier view** displays **duplicate course entries** for each **Section Fee** associated with a course.
- If a **course has multiple Section Fees**, it appears **multiple times** in the **student's schedule**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Open** Self-Service and navigate to the **Dossier view**.
2. **Check** a student's **Course Schedule tab**.
3. **Observe** that **each registered course** appears **multiple times**.
4. The number of **duplicates** corresponds to the **number of Section Fees** for the course.

---

## Expected Result
- Each **registered course** should appear **only once** in the **Course Schedule tab**.
- Section Fees should **not cause duplication** in the schedule.

## Actual Result
- Courses are **displayed multiple times** due to **each Section Fee** triggering a duplicate entry.

---

## Workaround
- **No direct workaround available**. Admins must **manually verify schedules** for accuracy.

---

## Client Impact
- **Student schedules appear incorrect** in Self-Service.
- **Confusion arises** due to **multiple identical course entries**.
- May **cause issues** when reviewing schedules for **course registration and billing**.

---

## Resolution
- **Issue was fixed indirectly** in a subsequent update.
