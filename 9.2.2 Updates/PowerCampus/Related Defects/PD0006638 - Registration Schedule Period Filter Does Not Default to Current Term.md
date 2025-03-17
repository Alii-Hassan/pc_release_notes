# PD0006638 - Registration Schedule Period Filter Does Not Default to Current Term

## **Issue Summary**
**Issue:**  
- In **Academic Records Setflow** under **Registration > Schedule**,  
  the **default Year/Term/Semester selection** in the **dropdown filter** **does not select the current term**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - General - Academic Records  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-06-30  

---

## **Client Impact**
- **Customers must manually browse** and select the correct **Year/Term/Semester**.
- **The incorrect default selection** may cause confusion and slow down registration.

---

## **Resolution**
- Fixed **an issue in the code** where the **"ALL" option** was incorrectly assigned to the wrong dropdown list.
- **Corrected index selection** to ensure that the **current Year/Term/Semester** is **automatically selected** by default.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0006638  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-18  
**Object/Process:** Registration Schedule Period Filter  
**Knowledge Article ID:** (If applicable)  
