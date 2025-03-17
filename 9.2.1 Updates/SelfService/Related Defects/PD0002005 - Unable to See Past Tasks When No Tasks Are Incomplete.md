# PD0002005 - Unable to See Past Tasks When No Tasks Are Incomplete  

## **Issue Summary**  
**Issue:**  
- In **Checklist/My Tasks**, the button to **view completed scheduled actions** is **not displayed** if the user has **zero incomplete scheduled actions** assigned.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-09  

---

## **Replication Steps**  
1. **Login** to PowerCampus **Self-Service**.  
2. Navigate to **Checklist > My Tasks**.  
3. Ensure there are **no incomplete scheduled actions** assigned to the user.  
4. **Expected Result:** A button should be available to **view completed scheduled actions**.  
5. **Actual Result:** The button is **missing**, preventing the user from accessing past tasks.  

---

## **Workaround**  
- **No workaround available**; users **cannot** access completed tasks if they have no incomplete tasks.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Users can always view completed scheduled actions, even if no tasks are incomplete. | The button to view past tasks is missing if there are no incomplete tasks. |

---

## **Client Impact**  
- **Users cannot access their past tasks**, making it difficult to review completed scheduled actions.  

---

## **Resolution**  
- A **button was added** to **always display past tasks**, even if no incomplete scheduled actions exist.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0002005  
**Patch Number:** (If applicable)  
**Created Date:** 2022-07-21  
**Object/Process:** Checklist/My Tasks  
**Knowledge Article ID:** (If applicable)  
