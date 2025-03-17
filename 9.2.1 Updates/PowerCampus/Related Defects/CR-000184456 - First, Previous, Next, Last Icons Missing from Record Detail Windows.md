# CR-000184456 - "First, Previous, Next, Last" Icons Missing from Record Detail Windows  

## **Issue Summary**  
**Issue:**  
- **Navigation icons ("First, Previous, Next, Last")** are missing from **record detail windows** in **PowerCampus 9.2.0 Backoffice**.  
- If "Show Text" is enabled, the text appears, and navigation works, but the icons remain missing.  
- Additionally, the **printer icon** in the **Transcript Request window** does not display. Users can still click the area where the icon should be, and the print function works.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - General - System Administrator Module  
**Resolution Date:** 2023-01-23  

---

## **Replication Steps**  
1. Open **PowerCampus 9.2.0 Backoffice Client**.  
2. Navigate to a **record detail window**.  
3. **Expected Result:** Navigation icons should be visible.  
4. **Actual Result:** Icons are missing, but clicking where they should be still functions.  
5. **Transcript Request Window:**  
   - The **printer icon is missing**, but hovering and clicking the space still triggers the print function.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| **Navigation icons ("First, Previous, Next, Last") should be visible** and functional. | **Icons are missing**, but text is available when "Show Text" is enabled. |
| **Printer icon in the Transcript Request window should be displayed.** | **Printer icon is missing**, but clicking the space where it should be still prints the transcript. |

---

## **Client Impact**  
- Users **cannot visually navigate records** using icons.  
- **Transcript printing is confusing** because the printer icon is missing.  

---

## **Resolution**  
- **Icon names were stored incorrectly** in the database after updating the themes.  
- **Corrected icon names** in the tables to restore visibility.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** CR-000184456  
**Patch Number:** (If applicable)  
**Created Date:** 2022-04-22  
**Object/Process:** UI Navigation Icons & Transcript Request Printer Icon  
**Knowledge Article ID:** (If applicable)  
