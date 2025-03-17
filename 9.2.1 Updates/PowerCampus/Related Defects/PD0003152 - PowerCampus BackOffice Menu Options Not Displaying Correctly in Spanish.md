# PD0003152 - PowerCampus BackOffice Menu Options Not Displaying Correctly in Spanish  

## **Issue Summary**  
**Issue:**  
- **Incorrect characters or labels** appear on **menu options** in **PowerCampus BackOffice 9.2.0** when the language is set to **Spanish**.  
- Some menus may display **garbled text or incorrect translations**.  

**Severity:** 2 - High  
**Product Line:** PowerCampus - General - System Administrator Module  
**Resolution Date:** 2023-01-20  

---

## **Replication Steps**  
1. Open **PowerCampus BackOffice 9.2.0**.  
2. Set the **language to Spanish**.  
3. Navigate through various **menu options**.  
4. **Expected Result:** Menu labels should display correctly.  
5. **Actual Result:** Some menus show **incorrect characters or labels**.  

---

## **Workaround**  
- **Close the current workflow** and **reopen it** to display the correct menu labels.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Menu options should **display correctly** in Spanish. | Some menu options display **garbled text or incorrect labels**. |

---

## **Client Impact**  
- **Users cannot navigate menus properly** when using PowerCampus in Spanish.  
- Confusion and **difficulty accessing key functionalities**.  

---

## **Resolution**  
- Identified an issue where **some menus were translated twice** in the code.  
- Corrected the **translation logic** to ensure **proper label display**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0003152  
**Patch Number:** (If applicable)  
**Created Date:** 2022-09-21  
**Object/Process:** Menu Translations in Spanish  
**Knowledge Article ID:** (If applicable)  
