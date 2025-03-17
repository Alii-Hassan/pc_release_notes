# PD0002499 - Grade Comments Red Icon Not Appearing in Self-Service Overall Grades

## Issue Summary
**Issue:**  
- The **red icon indicator** for grade comments **does not appear** next to the **message icon** in **Self-Service > Classes > Overall Grades** when the comment is entered from **PowerCampus Grades Setflow**.
- The **icon only appears** if the **comment was entered directly in Self-Service**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Enter a grade comment** from **PowerCampus Grades Setflow**.
2. **Navigate to** Self-Service → **Classes → Overall Grades**.
3. **Observe the missing red icon** next to the message icon.

---

## Expected Result
- The **red icon** should appear **for all grade comments**, regardless of whether they were entered in **PowerCampus Grades Setflow** or **Self-Service**.

## Actual Result
- The **red icon does not appear** if the **comment was entered via PowerCampus**.
- The **icon appears correctly** only for **comments entered through Self-Service**.

---

## Workaround
- **No direct workaround** available.

---

## Client Impact
- **Students may not realize** that a **grade comment exists**, leading to **missed important information** from instructors.
- **Inconsistency in UI behavior** between **PowerCampus** and **Self-Service**.

---

## Resolution
- The logic for **displaying the red icon** was **updated**.
- Now, the **red dot appears** for **all records with transcript comments, midterm, or final grades**.
- The **Department Head > Overall Grades page** and **Approve Grades page** were also **updated** to reflect this change.
