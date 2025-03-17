# PD0002450 - Registration Section Search Not Updating Correctly, Preventing Course Addition  

## **Issue Summary**  
**Issue:**  
- When users navigate to **Registration > Courses**, conduct an **Advanced Search**, and change the term from a **closed term** to an **open term**, the **"Add"** button does not appear, preventing course registration.  
- Additionally, the **"Term is closed"** warning **persists** even after selecting an open term.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. **Login** to PowerCampus Self-Service.  
2. Navigate to **Registration > Courses**.  
3. Select **Advanced Search** and change the **Term** from a **closed term** to an **open term**.  
4. **Expected Result:** The selected courses should display the **"Add"** button, allowing registration.  
5. **Actual Result:**  
   - The **"Add"** button is missing.  
   - The **"Term is closed"** warning remains active, preventing course selection.  

---

## **Workaround**  
- **Manually select the open term** from the "Search for" list of open registration terms before conducting the search.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Selecting an open term enables the "Add" button for courses. | The "Add" button does not appear, and the "Term is closed" warning remains. |

---

## **Client Impact**  
- **Users are unable to add courses** via the **Registration Section Search** due to incorrect term updates.  

---

## **Resolution**  
- **Reset the Advanced Search filters** when the user changes the term to ensure proper course availability and enable registration.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0002450  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-10  
**Object/Process:** Registration > Courses  
**Knowledge Article ID:** (If applicable)  
