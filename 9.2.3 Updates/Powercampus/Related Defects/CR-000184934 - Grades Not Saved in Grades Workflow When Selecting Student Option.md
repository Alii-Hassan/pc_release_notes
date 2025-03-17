# CR-000184934 - Grades Not Saved in Grades Workflow When Selecting "Student" Option

## Issue Summary
**Issue:** In **Academic Record Setflow > Grades Workflow**, when selecting a **student from the dropdown list**, the grades **are not saved**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Navigate to **Academic Record Setflow > Grades Workflow**.
2. Select a **student** from the **dropdown list**.
3. Enter the grades and attempt to save them.
4. Observe that the grades **are not saved**.

---

## Expected Result
- Grades should be **saved successfully** when a student is selected from the dropdown list in **Grades Workflow**.

## Actual Result
- **Grades are not saved**, preventing proper record updates for students.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Grades **can be saved** through the **Transcripts workflow** for the required student.

---

## Additional Information
**Client Impact:**
- Users **cannot save grades** for students directly within the **Grades Workflow**.
- Manual workarounds are required, increasing administrative effort.

---

## Resolution
- The **data window** was modified to **correctly save midterm and final grades** when the **"Student"** option is selected in **Grades Workflow**.

---

## Related Information
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000184934  
**Patch Number:** (If applicable)  
**Created Date:** 2022-05-31  
**Object/Process:** Grades Workflow Issue  
**Knowledge Article ID:** (If applicable)

