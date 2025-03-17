# CR-000182103 - User Last Logon Date and Time Not Updated Correctly

## **Issue Summary**
**Issue:**  
- When a user logs into **PowerCampus**, the **Last Logon Date and Time** **is not updated** if the **OPERATOR_ID** and **LOGON_ID** fields **are different**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - General  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-06-30  

---

## **Replication Details**
- The **Last Logon Date and Time** **fails to update** if the **OPERATOR_ID ≠ LOGON_ID**.

---

## **Client Impact**
- **Database does not properly update** the **logon date and time**.
- This can cause **incorrect login tracking** and impact **user authentication records**.

---

## **Resolution**
- **Added a condition**:  
  - If a record exists **(even if OPERATOR_ID ≠ LOGON_ID)**, the **logon date and time are updated**.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000182103  
**Patch Number:** (If applicable)  
**Created Date:** 2021-10-18  
**Object/Process:** User Logon Tracking  
**Knowledge Article ID:** (If applicable)  
