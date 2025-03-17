# CR-000179423 - Unable to Add Profile Addresses When None Are Displayed  

## **Issue Summary**  
**Issue:**  
- Users **cannot add addresses** in **Self Service > Profile** section **if no addresses are displayed**.  
- This occurs when the **current address type is not selected in setup**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-12  

---

## **Replication Steps**  
1. Log in to **PowerCampus Self-Service**.  
2. Navigate to **Profile > Addresses**.  
3. If **no addresses are displayed** due to **address type not being selected**, attempt to add a new address.  
4. **Expected Result:** Users should be able to **add a new address**.  
5. **Actual Result:** The **list is empty**, and users **cannot add an address** if **"Allow Change"** is disabled.  

---

## **Workaround**  
- Ensure that the **address type is selected** in the setup.  
- Enable **"Allow Change"** in the **Self-Service address settings** to allow users to add addresses.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Users should be able to **add an address** even if none are displayed. | Users **cannot add an address** if none are displayed and "Allow Change" is disabled. |

---

## **Client Impact**  
- Users **cannot update or add addresses** if they are not pre-displayed.  
- The **address list remains empty**, causing confusion for users trying to update their profiles.  

---

## **Resolution**  
- **Modified** the **AddressesMain.tsx** file to allow users to **add profile addresses** even when none are initially displayed.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000179423  
**Patch Number:** (If applicable)  
**Created Date:** 2021-05-05  
**Object/Process:** Self-Service Profile Address Management  
**Knowledge Article ID:** (If applicable)  
