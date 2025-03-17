# PD0005587 - Residency Information Commute Preference Saves Incorrectly

## Issue Summary
**Issue:**  
- In the **online application**, the **Commute Preference** under **Residency Information** does not **save the correct option**.  
- If **Resident** is selected, the system **saves Commute**, and vice versa.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Submit an online application**:
   - Under **Residency Information → Commute Preference**, select **Resident**.
   - After submission, **open the application** in the **Handle Application workflow**.
   - **Observed Result:** **Commute** is displayed instead of **Resident**.

2. **Submit another online application**:
   - Select **Commuter** as the **Commute Preference**.
   - After submission, **open the application** in the **Handle Application workflow**.
   - **Observed Result:** **Resident** is displayed instead of **Commuter**.

---

## Expected Result
- The **selected Commute Preference** (Resident or Commuter) should **match** what is shown in the **Handle Application workflow**.

## Actual Result
- The system **swaps the selected value** (Resident → Commute, Commuter → Resident).

---

## Workaround
- **Remove the Commute Preference field** from the **Residency Information** section in the online application.

---

## Client Impact
- **Incorrect residency status** stored for applicants.
- **Misinterpretation of student application data**.
- **Potential administrative confusion** when processing applications.

---

## Resolution
- **Dropdown values for Resident and Commuter were swapped**.
- Now, **each field correctly stores the selected value**.
