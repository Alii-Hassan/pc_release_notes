# CR-000178734 - Filtering and Sorting Not Working on Activity Grades

## Issue Summary
**Issue:** When selecting and changing the **filter/sort values** in **Activity Grades** and pressing the **Save** button, an error is displayed:

> **Error Message:** Null object reference.  
> **"Error occurred at line 12 in event columns_From_dw of object w_r_view_filter"**

**Severity:** 4 - Low  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Open **Activity Grades** from **Academic Records**.
2. Notice that the **View icon** is **greyed out**.
3. Select and open a course—**the button is enabled**.
4. Click the **View icon**.
5. Select the **Filter/Sort button**.
6. Change the **filter/sort values** and press **Save**.
7. Observe the **null object reference error**.

---

## Expected Result
- The system should **allow sorting and filtering** in **Activity Grades** without errors.
- **Save operation** should be successful after modifying filter/sort values.

## Actual Result
- The system throws a **null object reference error** when trying to **save the filter/sort changes**.
- Sorting and filtering **do not work correctly** in **Activity Grades**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Administrators are unable to use the filter and sort functionality** in **Activity Grades**.
- Limits the ability to efficiently manage and review student grades.

---

## Resolution
- **Code modifications** were implemented to **enable sorting and filtering functionality** in **Activity Grades**.

---

## Related Information
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000178734  
**Patch Number:** (If applicable)  
**Created Date:** 2021-03-26  
**Object/Process:** Activity Grades Sorting & Filtering  
**Knowledge Article ID:** (If applicable)