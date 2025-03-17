# CR-000181941 - PowerCampus Using Integrated Security is Not Updating LAST_LOGON_DATE

## **Issue Summary**
**Issue:**  
- When **PowerCampus Fiscal Records** is using **integrated security**, it **does not update the LAST_LOGON_DATE field**.
- As a result, **users cannot log in** to the **Fiscal Record Application**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - General  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-06-30  

---

## **Replication Details**
- Issue **replicated in Fiscal Records 9.1.4**.
- LAST_LOGON_DATE is **not updated**, causing login failures.

---

## **Client Impact**
- **Incorrect data is retrieved** when searching for the **last logon date** of a user.
- **Users are unable to log in** to the **Fiscal Record Application**.

---

## **Resolution**
- **Added a condition**:  
  - If a record exists **(even if operator_id ≠ login_id)**, the **record is updated**.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000181941  
**Patch Number:** (If applicable)  
**Created Date:** 2021-10-07  
**Object/Process:** LAST_LOGON_DATE Update in Fiscal Records  
**Knowledge Article ID:** (If applicable)  
