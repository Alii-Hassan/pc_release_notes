# CR-000181203 - Self Service Profile Grades Tab Error

## Issue Summary
**Issue:**  
- In **Self Service**, if a **student has only a transfer course** where the corresponding **TRANSCRIPTDETAIL** records have **SECTION** values that **do not exist** in the **SECTIONS** table (for the given **EVENT_ID** and **EVENT_SUB_TYPE** values), an **error occurs** when selecting that period on the **Profile > Grades** tab.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Log into** PowerCampus **Self Service**.
2. **Navigate to** the **Profile** tab.
3. **Select the Grades tab** for a **student who has only transfer courses**.
4. **Observe the error** when selecting a period.

---

## Expected Result
- The **grades tab** should **load properly** even if the student has **only transfer courses**.
- The **transfer courses should display correctly** without an error.

## Actual Result
- **An error occurs** when selecting a period on the **grades tab** if the student's **TRANSCRIPTDETAIL records** reference **SECTION values** that **do not exist** in the **SECTIONS** table.

---

## Workaround
- **No direct workaround** available.

---

## Client Impact
- **Advisors are unable to view the grades report** for **students with only transfer courses**.
- **Incomplete academic records** displayed in **Self Service**.

---

## Resolution
- **Fixed indirectly** when a related **defect for displaying transfer courses** in the grade report was resolved.
