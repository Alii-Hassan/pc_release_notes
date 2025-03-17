# CR-000180790 - Invalid Addresses Showing in Profile

## Issue Summary
**Issue:**  
- When **Self-Service** is set up to allow **address edits** and **requires approval** for changes, a **status message** (Pending, Approved, or Denied) is displayed next to the address in the profile.
- If **address editing with approval** is **disabled later**, past **requests for address changes** still appear, but the **status messages disappear**.
- If an **address change request was denied**, it **still appears** on the profile **without a "Denied" message**, making it look like a **valid address**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Enable** address edits in **Self-Service** and require **approval**.
2. **Submit** an address change request.
3. **Observe** that the address shows **Pending, Approved, or Denied** status.
4. **Disable** address editing with approval.
5. **Check** the Address tab:
   - Address change **requests still appear**.
   - **Status messages disappear**.
   - **Denied requests** appear **without any indication** that they were rejected.

---

## Expected Result
- If **address editing approval is removed**, **past denied requests** should **not** be displayed as valid addresses.
- The **status messages** (Pending, Approved, Denied) should **still be visible**.

## Actual Result
- **Status messages disappear** when address approval is turned off.
- **Denied address changes look like valid addresses**.

---

## Workaround
- **No direct workaround available**. Admins must **manually verify** address records.

---

## Client Impact
- **Users see incorrect address records** in their profile.
- **Denied address requests appear as valid**, leading to **potential confusion**.
- **Missing status messages** make it **harder to track** address change requests.

---

## Resolution
- A **validation was added** so that **disabling address approval** **automatically deletes** all **pending or denied requests**.
- This **prevents invalid addresses** from appearing in the profile.
