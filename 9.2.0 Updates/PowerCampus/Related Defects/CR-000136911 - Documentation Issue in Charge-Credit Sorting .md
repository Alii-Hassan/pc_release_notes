# CR-000136911 - Documentation Issue in Charge/Credit Sorting  

## **Issue Summary**  
**Issue:**  
- The **documentation incorrectly states** the sorting logic for **Charge/Credit records** in the **ALL view**.  
- The **documentation states** that sorting is done in the following order:  
  1. **Entry Date (Descending Order)**  
  2. **Academic Year/Term/Session (Ascending Order)**  
  3. **Print Order from Charge/Credit Code Table**  
  4. **Charge/Credit Number (Ascending Order)**  

- **Actual Behavior:** The system only considers:  
  1. **Entry Date**  
  2. **Term Order from the Academic Term Code Table**  

**Business Purpose:**  
- Users need **accurate documentation** to understand the **sorting order of Charge/Credit records**.  

**Severity:** Low  
**Product Line:** PowerCampus - General - Billing  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Open the **Charge/Credit Tab** in PowerCampus.  
2. Select **ALL view** to display all charges and credits.  
3. Observe the **order of the records**.  
4. Compare with the **sorting logic described in the documentation**.  
5. Notice that the **system does not use Academic Year/Term/Session** for sorting as the documentation states.  

---

## **Workaround**  
- **Refer to system behavior** instead of relying on incorrect documentation.  

---

## **Expected vs. Actual Result**  
| **Expected Result (Based on Documentation)** | **Actual Result (System Behavior)** |
|--------------------------------|--------------------------|
| Charges/Credits sorted by Entry Date, then Academic Year/Term/Session, then Print Order. | Only Entry Date and Term Order from the Academic Term Code Table are considered. |

---

## **Client Impact**  
- Customers were **confused** about how **Charge/Credit records** were being sorted.  
- The **discrepancy between documentation and system behavior** led to **incorrect expectations**.  

---

## **Resolution**  
- The **sorting logic** used in PowerCampus **was added to the online help** documentation.  
- Users can now reference the **correct sorting logic** when working with Charge/Credit records.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Billing  
**Identifier:** CR-000136911  
**Patch Number:** (If applicable)  
**Created Date:** 2016-01-11  
**Object/Process:** Charge/Credit Tab - Sorting Logic  
**Knowledge Article ID:** (If applicable)  
