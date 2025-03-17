# CR-000180440 - Incorrect "Completed Time" Field When Marking Checklist Items Complete

## Issue Summary
**Issue:** When marking a checklist item as **Complete**, the **"Completed Time"** field displays incorrect information:
1. **Always shows "AM"**, even when it should be "PM."
2. **Uses local time instead of server time**, causing inconsistencies for users in different time zones.
   - This may **result in incorrect dates** if a user submits an item at **1 AM in a different time zone**.
3. **Only the date portion** is shown in the **desktop client** or **Self-Service**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Navigate to **Self-Service** and open a **Checklist**.
2. **Mark an item as "Complete"**.
3. Observe the **"Completed Time"** field:
   - The time **always displays AM**, even when it should be PM.
   - The time **reflects local time instead of server time**, leading to discrepancies across different time zones.

---

## Expected Result
- The **"Completed Time"** field should:
  - **Accurately display AM/PM** based on the correct submission time.
  - **Use server time instead of local time** to maintain consistency.

## Actual Result
- The **"Completed Time"** field **always shows AM**, even when it should be PM.
- The **time is recorded in local time instead of server time**, causing inconsistencies.

---

## Workaround
- **No known workaround**; users must manually verify and adjust times if necessary.

---

## Client Impact
- **Completed time is displayed incorrectly** on the **action details window**, leading to confusion, especially for users in different time zones.

---

## Resolution
- **Issue was fixed indirectly** when the **Ellucian Path Design System** was **updated**.
