# PD0009715 - Self-Service Advising Create a What If Plan is Missing Degree from Selection

## Issue Summary
**Issue:** In **Self-Service Advising**, the option to **create a What If academic plan** for students is missing for certain degrees. If an **advisor** has a What If plan for a specific **degree**, that degree **does not appear as an option** when creating a plan for students.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. The **advisor** was **previously or currently a student** with an academic What If plan.
2. The advisor goes to **Self-Service Advising** and attempts to **create a What If plan** for a student.
3. The **degree is missing** from the selection list, preventing the advisor from creating the plan for the student.

---

## Expected Result
- The system should allow the **advisor** to create a **What If plan** for students.
- The **degree selection** should be available for students regardless of whether the **advisor** has a What If plan for that degree.

## Actual Result
- The system **removes the degree option** from the student's What If plan selection **if the advisor has already created a What If plan** with the same degree.
- The **advisor cannot create a What If plan** for the student.

---

## Workaround
- **Remove the What If plan** for the degree from the **advisor's records** to make it available for students.

---

## Additional Information
**Client Impact:**
- Advisors **cannot create What If plans** for students when they have already created one for themselves.
- This affects **academic advising processes**, limiting flexibility in academic planning.

---

## Resolution
- **Fixed issue by ensuring that Period, Program, and Degree information in the What If page are fetched using the advisee's information, not the advisor's.**  

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009715  
**Patch Number:** (If applicable)  
**Created Date:** 2023-09-01  
**Object/Process:** Advising - What If Plans  
**Knowledge Article ID:** (If applicable)
