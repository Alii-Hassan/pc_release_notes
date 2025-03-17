# PD0007389 - Process Button Icon Missing in Stop List Process (Spanish Language)

## **Issue Summary**
**Issue:**  
- The **"Process" button in the Stop List Process** does not display an icon when **PowerCampus language is set to Spanish**.
- The button is still **functional**, but it appears **blank (no text, no image)**.

**Severity:** 4 - Low  
**Product Line:** PowerCampus - General - Academic Records  
**Found in Version:** 9.2.1  
**Resolution Date:** 2023-06-30  

---

## **Replication Steps**
1. **Login to PowerCampus** and select **Spanish** as the language.
2. **Navigate to:**  
   - **Cobro setflow** > Select **"Proceso de Cobro" workflow**  
   - Choose **"Proceso de Lista de Suspensión"**.
3. The **Process button appears blank** (no icon or text), but it **still works**.

---

## **Expected vs. Actual Result**
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| The **Process button** should display with a **red hand icon**. | The **button is blank** (no icon, no text). |

---

## **Client Impact**
- **Users may be confused** since the **Process button is not visible** in the Spanish interface.
- **Functionality remains**, but the **missing icon affects usability**.

---

## **Resolution**
- **Replaced the stop icon** with a **new image** that meets button characteristics.  
- **Removed code attempting to translate the image**, as images do not require translation.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0007389  
**Patch Number:** (If applicable)  
**Created Date:** 2023-04-27  
**Object/Process:** Stop List Process (Proceso de Lista de Suspensión)  
**Knowledge Article ID:** (If applicable)  
