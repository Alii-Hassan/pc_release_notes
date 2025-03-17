# PD0006711 - Students Cannot Make Preferred Address Nor Edit an Address - Error Message

## Issue Summary
**Issue:** In **Profile > Addresses**, users encounter the error message **"There was an error in PowerCampus Self-Service. Try again."** when attempting to **edit** or **set a preferred address**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Ensure that **SEQUENCE_NO** in the **AddressSchedule** table has a value **greater than 40,000**.
   - Example: **SEQUENCE_NO = 266933**
2. **Login** as a user in **Self-Service**.
3. Navigate to **Profile > Addresses**.
4. **Select an address** and click on **Address Type** or **Make Preferred**.
5. **Error message is displayed.**

---

## Expected Result
- Users should be able to **edit their address** and **set a preferred address** **without errors**.

## Actual Result
- Users receive the error: **"There was an error in PowerCampus Self-Service. Try again."**  
- Addresses **cannot be edited or set as preferred**.

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Users are unable** to **set their preferred address**.
- **Error occurs** due to **SEQUENCE_NO exceeding the allowed Int16 limit**.

---

## Resolution
- **Updated the data access layer** by **changing a parameter** from **Int16 to Int32** to correctly retrieve the **Address Schedule record**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0006711  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-23  
**Object/Process:** Address Management - Preferred Address Selection  
**Knowledge Article ID:** (If applicable)
