# PD0006804 - Unable to Remove "Visa Issued Date" and "Expiration Date" from Government Tab

## **Issue Summary**
**Issue:**  
- Users are **unable to remove the "Visa Issued Date" and "Expiration Date"** from the **Government tab** under **Students (Academic Records)**.
- Once a date is entered, it **cannot be cleared**. When trying to save, the **previous date reappears**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - General - Billing  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-06-30  

---

## **Client Impact**
- Users **cannot set the Visa Issued Date and Expiration Date to blank**,  
  even though **these fields are optional**.

---

## **Resolution**
- **Updated database fields** to allow **null values** for these dates.  
- Now, users can **remove the values** if needed.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General - Billing  
**Identifier:** PD0006804  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-28  
**Object/Process:** Government Tab - Visa Issued Date & Expiration Date  
**Knowledge Article ID:** (If applicable)  
