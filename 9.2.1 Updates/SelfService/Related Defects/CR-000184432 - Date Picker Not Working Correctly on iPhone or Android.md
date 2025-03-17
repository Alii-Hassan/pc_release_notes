# CR-000184432 - Date Picker Not Working Correctly on iPhone or Android  

## **Issue Summary**  
**Issue:**  
- The **Date Picker** does not allow users to **select a date** when completing an **online application** using an **iPhone or Android** device.  

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. **Open PowerCampus Self-Service** on an **iPhone** or **Android** device.  
2. Navigate to **an online application form** that includes a **date selection field**.  
3. Attempt to **select a date** using the **Date Picker**.  
4. **Expected Result:** Users should be able to select a date without issues.  
5. **Actual Result:** The **Date Picker does not function**, preventing date selection.  

---

## **Workaround**  
- **Temporary Solution:** Users can **manually type** the date instead of using the **Date Picker**.  
- Alternatively, users can **complete the form using a desktop browser**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Users can select a date using the Date Picker. | The Date Picker does not respond, preventing date selection. |

---

## **Client Impact**  
- **Mobile users are unable to complete online applications properly.**  
- **Affects usability and accessibility**, potentially leading to incomplete applications.  

---

## **Resolution**  
- **Removed the withStyles function** from the **DatePicker component**.  
- **Updated the Date Picker component** for **Self-Service** and **User Management**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000184432  
**Patch Number:** (If applicable)  
**Created Date:** 2022-04-21  
**Object/Process:** Online Application / Date Picker  
**Knowledge Article ID:** (If applicable)  
