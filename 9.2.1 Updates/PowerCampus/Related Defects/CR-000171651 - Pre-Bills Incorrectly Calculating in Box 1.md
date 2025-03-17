# CR-000171651 - Pre-Bills Incorrectly Calculating in Box 1  

## **Issue Summary**  
**Issue:**  
- **Pre-bills are being included in Box 1 calculations** of the **1098-T report**, despite not being considered actual charges.  

**Severity:** 2 - High  
**Product Line:** PowerCampus - General - Cash Receipts  
**Resolution Date:** 2022-10-03  

---

## **Replication Steps**  
1. Generate the **1098-T report** for **Box 1**.  
2. **Pre-billed amounts** are included if the **entry date is in 2019**.  
3. **Workaround:** Manually change the **entry date to 2020** to exclude pre-bills.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| **Pre-bills should not be included** in **Box 1** unless IRS regulations require it. | **Pre-billed charges are included** in **Box 1** when the entry date is in 2019. |

---

## **Client Impact**  
- Users **cannot generate the 1098-T report correctly**.  
- **Box 1 amount is incorrect**, leading to potential compliance issues.  

---

## **Resolution**  
- **Code was modified** to **exclude pre-billed charges** from **Box 1 calculations**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Cash Receipts  
**Identifier:** CR-000171651  
**Patch Number:** (If applicable)  
**Created Date:** 2020-01-28  
**Object/Process:** 1098-T Report - Box 1 Calculation  
**Knowledge Article ID:** (If applicable)  
