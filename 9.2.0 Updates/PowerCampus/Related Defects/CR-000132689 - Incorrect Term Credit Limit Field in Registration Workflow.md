# CR-000132689 - Incorrect Term Credit Limit Field in Registration Workflow  

## **Issue Summary**  
**Issue:**  
- In **Registration Workflow > Academic Tab**, the **Term Credit Limit** field **displays incorrectly**.  
- **When first opened**, the field is **blank**.  
- After updating the registration record, the field **shows "##0.00" instead of the correct value**.  
- When attempting to **edit the field**, the **date** appears but is **truncated**.  

**Business Purpose:**  
- Users need to **set and view term credit limits** accurately in the **registration workflow**.  

**Severity:** Moderate  
**Product Line:** PowerCampus - General - Academic Records  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Navigate to **Registration Workflow > Academic Tab**.  
2. Open an **Academic Record**.  
3. Observe that the **Term Credit Limit field is blank**.  
4. Update the **Registration Record**.  
5. Notice that the **Term Credit Limit field now shows "##0.00"**.  
6. Try to **edit the field**, and the **date appears but is truncated**.  

---

## **Workaround**  
- **Edit the Term Credit Limit field** in the **Student Workflow** instead of the **Registration Workflow**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Term Credit Limit should display correctly when opening the Academic Record. | Field is blank upon opening. |
| Updating the Registration Record should retain the correct value. | Field incorrectly displays "##0.00". |
| Editing the field should allow users to enter the correct value. | Field displays a truncated date when edited. |

---

## **Client Impact**  
- Users **cannot set or view the Term Credit Limit** correctly.  
- Leads to **incorrect registration data** and potential **manual errors**.  

---

## **Resolution**  
- Fixed the **formatting issue** that caused incorrect display and truncation.  
- The **Term Credit Limit field now displays and updates correctly**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** CR-000132689  
**Patch Number:** (If applicable)  
**Created Date:** 2015-08-27  
**Object/Process:** Registration Workflow - Academic Tab  
**Knowledge Article ID:** (If applicable)  
