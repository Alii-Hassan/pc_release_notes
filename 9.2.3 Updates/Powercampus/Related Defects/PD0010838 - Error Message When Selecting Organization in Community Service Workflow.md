# PD0010838 - Error Message When Selecting Organization in Community Service Workflow

## Issue Summary
**Issue:** On the **Community Service workflow**, if there are **more than 37,767 records** in the **Organizations table**, selecting an organization **triggers an error message**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Prerequisite:** Ensure that the **Organizations table contains at least 37,767 records**.
2. **Open** Academic Records Setflow and select **Community Service**.
3. **Enter the required information** in the fields.
4. **Select an organization** from the list.
5. **Observe the error message displayed:**
   - "Entry is not valid. You may use the mouse to click on the arrow for valid entries."
   - "Captura inválida. Use el ratón para dar clic en la flecha para las capturas válidas."
6. **The information cannot be saved.**

---

## Expected Result
- The system should **allow saving the selected organization** in the **Community Service window**.

## Actual Result
- An **error message is displayed**, preventing the **selection and saving** of the organization.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Admins cannot save or update records** in the **Community Service workflow** when the **Organizations catalog contains more than 37,767 records**.

---

## Resolution
- **Modified the control** to allow users to **select an organization record** and **successfully save changes** in the **Community Service window**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0010838  
**Patch Number:** (If applicable)  
**Created Date:** 2023-10-25  
**Object/Process:** Community Service Workflow  
**Knowledge Article ID:** (If applicable)

