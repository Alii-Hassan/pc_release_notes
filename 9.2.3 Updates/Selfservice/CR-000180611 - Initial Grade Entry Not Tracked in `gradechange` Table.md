# CR-000180611 - Initial Grade Entry Not Tracked in `gradechange` Table

## Issue Summary
**Issue:**  
- In **Self-Service**, a record is **created** in the `gradechange` table **only when** a final grade is **changed** from one grade to another.  
- However, when **entering a final grade for the first time**, **no record** is created in the `gradechange` table.  
- Since **PowerCampus tracks** this first grade change, **Self-Service should track it the same way**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.0.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. In **Self-Service**, enter a **final grade** for a student **for the first time**.
2. Verify the **`gradechange` table** – **no record** is created.
3. Now, **change** the final grade to a **different grade**.
4. Verify the **`gradechange` table** – a **record is created**.

---

## Expected Result
- The **first-time** final grade entry should be **logged** in the `gradechange` table, just like **subsequent changes**.

## Actual Result
- The **initial** final grade entry is **not tracked**, while **subsequent changes** are.

---

## Workaround
- **No direct workaround available**. Admins must **manually track initial grade entries**.

---

## Client Impact
- **Initial grade changes are missing** from the `gradechange` table.  
- **Incomplete grade change history** makes tracking final grades **difficult**.  
- **Inconsistency** between PowerCampus and Self-Service tracking.

---

## Resolution
- In the **stored procedure** that **submits grades**, a call to `dbo.spAddGradeChange` was **added**.  
- Now, the **initial grade entry** is **also recorded** in the `gradechange` table, ensuring **consistent tracking**.  
