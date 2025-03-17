# CR-000179898 - Dropped Students Receive Final Grades When Faculty Submits Grades

## Issue Summary
**Issue:** If faculty saves **Midterm or Final Grades** before a student **drops a course**, the **TranscriptDetail** record is later updated with those grades when the course grades are submitted.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.0.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Faculty **saves Midterm or Final Grades** for a student **before** the **drop/add period ends**.
2. The student **drops the course** after grades are saved.
3. Later, faculty **submits Midterm or Final Grades** for the course.
4. The **TranscriptDetail** record for the dropped student is incorrectly **updated with the previously saved grades**.

---

## Expected Result
- When a student **drops a course**, their **TranscriptDetail** record **should not be updated** with saved grades when faculty submits grades for the class.

## Actual Result
- The **dropped student’s grades** are **updated incorrectly**, even though they are no longer enrolled.

---

## Workaround
- **No workaround available**; grades need **manual correction**.

---

## Client Impact
- **Dropped students** incorrectly receive **final grades**, leading to **potential transcript errors**.

---

## Resolution
- **Now, grades are only submitted for students with 'Add' status** to ensure that **dropped students do not receive grades**.
