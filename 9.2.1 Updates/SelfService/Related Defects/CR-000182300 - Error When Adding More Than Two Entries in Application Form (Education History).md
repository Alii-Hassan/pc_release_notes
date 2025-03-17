# CR-000182300 - Error When Adding More Than Two Entries in Application Form (Education History)  

## **Issue Summary**  
**Issue:**  
- A **500 Server Error** occurs when applicants **attempt to add more Education History entries** in the online application **after saving the form**.  
- If at least **one entry was stored before saving**, adding a second or third entry triggers the error.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-22  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service** > **Admissions** > **Apply**.  
2. Fill in the required fields, then proceed to the **Education History section**.  
3. **Add one education history entry** and **save the application form**.  
4. Attempt to **add a second or third entry** to the Education History section.  
5. **Expected Result:** The system should allow multiple education history entries without errors.  
6. **Actual Result:** A **500 Server Error** is displayed, preventing additional entries from being added.  

---

## **Workaround**  
- **Applicants should add all their Education History entries before saving the form** to avoid triggering the error.  
- If the form is saved with one entry, users **must delete the saved entry and re-enter all education history details before adding more**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Applicants can add multiple Education History entries after saving the form. | A 500 Server Error occurs when adding more than two entries. |

---

## **Client Impact**  
- **Applicants are unable to complete their Education History section** after saving their application form.  
- **Potential application submission issues** due to incomplete education history information.  

---

## **Resolution**  
- **Modified the container function** to include the **sectionIndex parameter** in a condition to prevent errors.  
- The fix ensures that **multiple Education History entries can be added even after saving the form**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000182300  
**Patch Number:** (If applicable)  
**Created Date:** 2021-10-29  
**Object/Process:** Online Application - Education History Section  
**Knowledge Article ID:** (If applicable)  
