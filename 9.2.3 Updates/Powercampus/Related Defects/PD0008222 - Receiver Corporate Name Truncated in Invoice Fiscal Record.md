# PD0008222 - Receiver Corporate Name Truncated in Invoice Fiscal Record

## Issue Summary
**Issue:** When an **invoice fiscal record** is generated, the **Receiver Corporate Name** is truncated to **60 characters**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.5  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Process a new invoice**.
2. **Review the XML file generated**.
3. Observe that the **Receiver Corporate Name** is **truncated to 60 characters**.

---

## Expected Result
- The **full Receiver Corporate Name** should be correctly **stored and displayed** in the **XML file** for the invoice.

## Actual Result
- The **Receiver Corporate Name** is **truncated to 60 characters**, leading to **data loss**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Fiscal records** are generated with **truncated names** for both **receiver and issuer**.
- The issue may cause **errors in financial reporting and record-keeping**.

---

## Resolution
- The **nvarchar size** was adjusted to **match the correct column size** for both:
  - **Receiver Corporate Name**
  - **Issuer Name**

---

## Related Information
**Product Line/Product:** PowerCampus - General - Cash Receipts  
**Identifier:** PD0008222  
**Patch Number:** (If applicable)  
**Created Date:** 2023-06-09  
**Object/Process:** Invoice Fiscal Record Name Handling  
**Knowledge Article ID:** (If applicable)

