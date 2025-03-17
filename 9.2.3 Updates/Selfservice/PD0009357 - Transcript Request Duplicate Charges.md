# PD0009357 - Transcript Request Duplicate Charges

## Issue Summary
**Issue:** When submitting a **transcript request** in **Self-Service**, the **charge credit** is **created twice** for the request, leading to duplicate charges.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. In **Self-Service**, go to **Administration > Students > Transcript Request**.
2. Set up:
   - **Fee:** $10.00  
   - **Charge Credit Code:** Transcript Fee  
   - **Online Payment Required:** Yes  
3. In **Billing Workflow**, ensure the **fee for Transcript Fee** in **Charge Credit Code Table** is also set to **$10.00**.
4. Submit a **transcript request**.

---

## Expected Result
- The student should **only** be charged **$10.00** as per the **Self-Service** setup.

## Actual Result
- The student is **charged twice**:
  - **$10.00** from **Self-Service** setup.
  - **$10.00** from **Billing Workflow Charge Credit Code Table**.
- After successful payment:
  - **Only one** charge is marked as **paid**.
  - The **second charge remains unpaid** on the student’s account.
- Additional Issue:
  - **Charge credit is created** **before** payment is successful.
  - **Charge is applied even when payment fails**, leaving the student with a **pending charge** despite no transcript request being created.

---

## Workaround
No known workaround.

---

## Additional Information
**Client Impact:**
- **Students are incorrectly charged twice** for transcript requests.
- **Failed payments still result in pending charges** on the student’s account.

---

## Resolution
- **Fixed indirectly** to ensure charges are applied correctly.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009357  
**Patch Number:** (If applicable)  
**Created Date:** 2023-08-15  
**Object/Process:** Transcript Request Payment Handling  
**Knowledge Article ID:** (If applicable)
