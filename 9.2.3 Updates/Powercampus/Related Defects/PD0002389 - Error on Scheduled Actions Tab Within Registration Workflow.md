# PD0002389 - Error on Scheduled Actions Tab Within Registration Workflow

## Issue Summary
**Issue:** When attempting to open a **scheduled action** by clicking on the **More** or **Notes** option in the **Scheduled Actions tab** within the **Registration workflow**, the following error occurs:

> **"Expecting 4 retrieval arguments but got 3."**

This issue only occurs within the **Registration workflow**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Navigate to **Registration Workflow > Scheduled Actions tab**.
2. Click on the **More** or **Notes** option for a scheduled action.
3. Observe the error message:
   > **"Expecting 4 retrieval arguments but got 3."**

---

## Expected Result
- The scheduled action should **open without errors** when accessed via **More** or **Notes** in the **Registration workflow**.

## Actual Result
- The system **throws an error** due to a missing retrieval argument.
- The scheduled action **fails to open** in the **Registration workflow**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Open the scheduled action **from another workflow**, such as the **Student workflow**, where the issue does not occur.

---

## Additional Information
**Client Impact:**
- Users **cannot open scheduled actions** in the **Registration workflow**.
- This may lead to **delays in reviewing scheduled actions**.

---

## Resolution
- The **action schedule ID** was **included as a parameter**, allowing the **window to open without error**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0002389  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-06  
**Object/Process:** Scheduled Actions in Registration Workflow  
**Knowledge Article ID:** (If applicable)

