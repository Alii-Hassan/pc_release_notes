# CR-000183512 - Sort Order for Charge Credits in Organization Billing

## **Issue Summary**
**Issue:**  
- The **sort order for charge credits** in **Organization Billing** **changes per row** when multiple charges are entered on the **same date**.
- Users attempting to track specific charges by modifying the **Long Description** (e.g., adding a student's name) face **inconsistent sorting** in the **drill-down detail window**.
- If multiple charges exist on the same entry date, the order **changes unpredictably** when clicking on a row.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - General - Billing  
**Found in Version:** 8.8.4  
**Resolution Date:** 2023-06-30  

---

## **Client Impact**
- **Users cannot consistently view** the details of a selected charge/credit record.
- **Confusion arises** when opening and closing details for specific records, as the **order changes unexpectedly**.

---

## **Resolution**
- **Implemented a sort order** for **charge/credit records** in **Organization Billing**.
- Records are **now sorted by Charge/Credit Number in ascending order**, ensuring a **consistent display order**.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General - Billing  
**Identifier:** CR-000183512  
**Patch Number:** (If applicable)  
**Created Date:** 2022-02-08  
**Object/Process:** Organization Billing Charge Sorting  
**Knowledge Article ID:** (If applicable)  
