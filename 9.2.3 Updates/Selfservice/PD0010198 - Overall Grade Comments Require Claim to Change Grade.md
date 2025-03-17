# PD0010198 - Overall Grade Comments Require Claim to Change Grade

## Issue Summary
**Issue:** Faculty and Department Heads **cannot enter overall grade comments** unless they have the **claim to change transcript grades**.  
If they **do not** have this permission, they receive a **403 - Forbidden** error when attempting to add comments.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** (Not specified)  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Assign a faculty or department head **without** the `OverallGrades.ChangeTranscriptGrade` claim.
2. Navigate to **Course Management > Overall Grades**.
3. Select a **course** and go to the **Overall Grades tab**.
4. Click on the **comments** section.
5. **Result:**
   - A **403 - Forbidden** error appears.
   - Faculty cannot **view or enter comments**.

6. If the faculty **has the claim** to change grades:
   - They can enter **grade comments** before the final grade is submitted.
   - After final grades are submitted, they can **view grade comments in read-only mode**.

---

## Expected Result
- Faculty and department heads should be able to **enter or view grade comments** **without** needing the **"Change Transcript Grade"** permission.

## Actual Result
- If they **do not** have the **Change Transcript Grade** permission, they **cannot enter or view grade comments**.

---

## Client Impact
- **Faculty and department heads cannot enter grade comments** unless they are given the **ability to change transcript grades**.
- This **creates security concerns** since allowing comment entry should **not require access to modify grades**.
- **Workaround:** The only way to enable comment entry was to grant **Change Transcript Grade** permissions.

---

## Resolution
- **Claims were updated** so that:
  - Faculty and department heads can **enter or view grade comments** **without requiring** the **Change Transcript Grade** permission.
  - The **Overall Grades page now applies the correct access claims** for comment entry.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0010198  
**Patch Number:** (If applicable)  
**Created Date:** 2023-09-25  
**Object/Process:** Overall Grades - Grade Comments  
**Knowledge Article ID:** (If applicable)
