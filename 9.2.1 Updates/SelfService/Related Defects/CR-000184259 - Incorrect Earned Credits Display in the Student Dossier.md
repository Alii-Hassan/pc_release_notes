# CR-000184259 - Incorrect Earned Credits Display in the Student Dossier  

## **Issue Summary**  
**Issue:**  
- The **Student Dossier** incorrectly displays **Attempted Credits** as **Earned Credits**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service > Student Dossier**.  
2. View the **academic portion** of the student dossier.  
3. **Expected Result:** The student’s **earned credits** should be displayed correctly.  
4. **Actual Result:** The **attempted credits** are shown instead of **earned credits**.  

---

## **Workaround**  
- **Temporary Solution:** Remove the **academic information** from the Student Dossier **display settings** until the issue is resolved.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Displays **earned credits** correctly. | Displays **attempted credits** as earned credits. |

---

## **Client Impact**  
- **Misrepresentation of earned credits** may cause confusion for students and advisors.  
- **Affects academic progress tracking** and potential reporting errors.  

---

## **Resolution**  
- **Modified the EarnedCredits calculation** to ensure the correct data is selected.  
- Now **EarnedCredits** are displayed **instead of AttemptedCredits**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000184259  
**Patch Number:** (If applicable)  
**Created Date:** 2022-04-06  
**Object/Process:** Student Dossier / Academic Information  
**Knowledge Article ID:** (If applicable)  
