# CR-000184055 - Inconsistent Session Order in Period Filters and Authorize Registration  

## **Issue Summary**  
**Issue:**  
- The order of **open periods** in the **Period Filter setup** does not match the **order of periods** in the dropdown menu of **Authorize Registration**.  
- This causes **inconsistent display of session order**, leading to confusion.  

**Severity:** 4 - Low  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-12  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service > Advising > Authorize Registration**.  
2. Check the **order of periods in the dropdown menu**.  
3. Compare it with the order set in **Period Filters**.  
4. **Expected Result:** The periods should be listed in the same order in both locations.  
5. **Actual Result:** The order differs, creating **inconsistencies in navigation**.  

---

## **Workaround**  
- Set the **Period Filters** order as:  
  - **Year:** Descending  
  - **Term Order:** Ascending  
  - **Session Order:** Ascending  
- Set the **Authorize Registration** order as:  
  - **Year:** Descending  
  - **Term Order:** Descending  
  - **Session Order:** Descending  
- **Note:** Changing the session order here may also affect other areas where the period filter is used.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Periods should be displayed in a **consistent order** across all filters and dropdowns. | The session order **differs between Period Filters and Authorize Registration**, leading to user confusion. |

---

## **Client Impact**  
- **Users may struggle to locate correct periods** due to inconsistent ordering.  
- **Administrative processes may be slowed down** as users navigate discrepancies.  

---

## **Resolution**  
- **Updated the sorting logic** for the **term and session fields**.  
- Ensured that **Authorize Registration and Period Filters use the same sorting method**.  
- This fix **standardizes session ordering** across the system.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000184055  
**Patch Number:** (If applicable)  
**Created Date:** 2022-03-23  
**Object/Process:** Period Filters / Authorize Registration  
**Knowledge Article ID:** (If applicable)  
