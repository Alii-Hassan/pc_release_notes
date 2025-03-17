# CR-000180543 - Sheet Filter/Search Not Working in User Information Workflow

## Issue Summary
**Issue:** The **filter/search functionality** in **System Administrator Setflow > User Information** is **not working** as expected. Several issues have been identified:
1. The **field label** previously displayed **"Start With Operator ID"**, but now only shows **"Start With"**.
2. Entering **any information** into the text field (Operator ID, PowerCampus ID, or the first two letters of an Operator ID) **does not return results**.
3. The **Operator IDs** that are returned are **not always in alphabetical order**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Navigate to **System Administrator Setflow > User Information**.
2. Observe that the **field label** now only displays **"Start With"** instead of **"Start With Operator ID"**.
3. Attempt to **filter/search** by entering:
   - An **Operator ID**
   - A **PowerCampus ID**
   - The **first two letters** of an Operator ID
4. Notice that **no results are returned**.
5. Observe that the **Operator IDs returned** are **not sorted alphabetically**.

---

## Expected Result
- The **filter should correctly return results** when searching by **Operator ID, PowerCampus ID, or partial ID**.
- The **Operator ID list should be sorted alphabetically**.
- The **field label should correctly display** "Start With Operator ID".

## Actual Result
- **No search results** are returned when filtering by Operator ID.
- **Returned Operator IDs** are **not in alphabetical order**.
- **Field label is missing proper context**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users **cannot effectively search or filter** Operator IDs in **User Information**.
- The **incorrect label** may cause confusion.
- **Sorting inconsistencies** make it harder to locate specific Operator IDs.

---

## Resolution
- Fixed an **SQL syntax error** (incorrect syntax near **WHERE clause**) that was causing the query window option to **fail**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** CR-000180543  
**Patch Number:** (If applicable)  
**Created Date:** 2021-07-20  
**Object/Process:** User Information Filtering  
**Knowledge Article ID:** (If applicable)

