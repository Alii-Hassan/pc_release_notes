# CR-000179969 - Inquiry Form Personal Information Missing First Name Field  

## **Issue Summary**  
**Issue:**  
- When creating a **new inquiry form** in **Self-Service**, if the **finishID field** is opened and saved, the **First Name field (firstNameGroup) disappears** and is replaced with **finishIdGroup**.  
- The issue only occurs when using a **custom inquiry form layout** rather than the **default layout** in **PowerCampus Tools > Setup**.  

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-11  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service** > **Inquiry Form Setup**.  
2. Create a **new inquiry form** with a **custom layout**.  
3. Open the **finishID field** and **save** the form.  
4. Attempt to edit the **Personal Information component**.  
5. **Expected Result:** The **First Name field (firstNameGroup)** should be available.  
6. **Actual Result:** The **First Name field disappears**, and the component changes to **finishIdGroup**.  
7. Users attempting to submit the inquiry form receive a **success message**, but **data is not saved to the database**.  

---

## **Workaround**  
- **Use the default inquiry form layout** in **PowerCampus Tools > Setup** instead of a custom layout.  
- If a custom layout is required, **avoid modifying the finishID field** to prevent the First Name field from being removed.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| First Name field should remain available in Personal Information. | First Name field disappears and is replaced with finishIdGroup. |
| Inquiry form should save entered data correctly. | Inquiry form submits but does not save to the database. |

---

## **Client Impact**  
- **Administrators cannot find the First Name field** when setting up inquiry forms.  
- **Users filling out the inquiry form cannot enter their first name**, causing incomplete submissions.  
- **Inquiry data is lost** due to submission issues.  

---

## **Resolution**  
- Fixed issue where **editing the finishIdGroup field incorrectly impacted the First Name field**.  
- Now, **custom layouts retain the First Name field** and save changes correctly **without affecting other fields**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000179969  
**Patch Number:** (If applicable)  
**Created Date:** 2021-06-11  
**Object/Process:** Inquiry Form Setup  
**Knowledge Article ID:** (If applicable)  
