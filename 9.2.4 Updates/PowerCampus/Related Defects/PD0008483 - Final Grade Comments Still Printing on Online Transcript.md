# PD0008483 - Final Grade Comments Still Printing on Online Transcript

## Issue Summary
**Issue:** Final grade comments are still visible on the **online transcript** in the student workflow even after deselecting the **Print Comments on Transcript** option.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.1  
**Resolution Date:** 2024-06-28  

---

## Replication Steps
1. Navigate to **Transcript Workflow > Transcript Tab**.
2. Enter final grade comments for one of the student's courses and **save**.
3. Ensure the **Print Comment on Transcript** option is **selected**.
4. Deselect the **Print Comment on Transcript** option.
5. Navigate to **Student Workflow > Online Transcript Tab**.
6. Observe that the **final grade comments** are still visible for the course.
7. The comments also appear under the **Transcript tab** in the **Academic Plan Workflow**.

---

## Expected Result
- After deselecting **Print Comment on Transcript**, the comment should **not** appear on the student's online transcript.

## Actual Result
- Despite deselecting **Print Comment on Transcript**, the comment still appears on the **online transcript**.
- The comment is also visible when selecting the **Transcript tab** in the **Academic Plan Workflow**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- PowerCampus users can still view **final grade comments** under **Transcript > Online Transcript Tab** even when the **Print Comment on Transcript** option is not selected.

---

## Resolution
A **condition** was added to the system to **hide** the comment when the **Print Comment on Transcript** option is not selected.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0008483  
**Patch Number:** (If applicable)  
**Created Date:** 2023-06-26  
**Object/Process:** Transcript Comments Visibility  
**Knowledge Article ID:** (If applicable)