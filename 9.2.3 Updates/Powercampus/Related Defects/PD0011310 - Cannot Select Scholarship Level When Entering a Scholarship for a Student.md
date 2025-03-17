# PD0011310 - Cannot Select Scholarship Level When Entering a Scholarship for a Student

## Issue Summary
**Issue:** Cannot select **Scholarship level** when entering a scholarship in **Student workflow > Scholarship tab**.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Set up a Scholarship** in the **Scholarship workflow**.
2. Ensure that **a level is set up** on the **Levels tab**.
3. Navigate to **Student workflow > Scholarship tab**.
4. **Enter a scholarship** for a student.
5. **Observe that no levels are displayed** in the level field.
6. **Attempt to save the scholarship** and receive an error message:
   - "Level may not be blank."

---

## Expected Result
- **Scholarship levels** should be displayed **based on the scholarship setup**.
- Users should be able to **select a level and save the scholarship**.

## Actual Result
- **Scholarship levels are not displayed**, preventing users from selecting a scholarship level.
- **Saving the scholarship is not possible** due to the missing level field.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Instead of setting up the scholarship in **Scholarship workflow > Scholarship tab**, use the **Scholarship Offering workflow**.
- Enter the scholarship on the **Scholarship Offering tab** in **Student workflow**.
- The **level field appears editable** but is **view-only**.

---

## Additional Information
**Client Impact:**
- Users are **unable to select a scholarship level**, preventing them from **adding new scholarships**.

---

## Resolution
- **Updated the scholarship level dropdown** to make it **updatable**.
- Changed the display to show the **medium description instead of the code value**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0011310  
**Patch Number:** (If applicable)  
**Created Date:** 2023-11-20  
**Object/Process:** Scholarship Workflow - Level Selection Issue  
**Knowledge Article ID:** (If applicable)

