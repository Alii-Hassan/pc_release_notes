# PE0003459 - Add Ability to Remove "Notifications" Option from Web Administration

## Issue Summary
**Issue:** In **PowerCampus version 9.2.1 and higher**, the **Web Administration** interface includes a **"Notifications"** option in the top menu. However, there is currently no way to **hide this option** for users who should only have access to **PowerFAIDS Integration**. Adding the ability to hide this option would provide better system control.

**Product Line:** PowerCampus  
**Product Name:** General  
**Created Date:** 2024-01-19  

---

## Expected Result
- Administrators should be able to **hide** the "Notifications" option for users who do not require access to it.

## Actual Result
- The "Notifications" option is **always visible**, even to users who should only have permission for **PowerFAIDS Integration**.
- No existing configuration allows administrators to **restrict access** to this menu item.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users are **unable to restrict access** to the **Notifications** option in **Web Administration**, leading to potential **unnecessary exposure of features**.

---

## Resolution
A modification was made to a **stored procedure** (`sp`) that now:
- **Checks for permission** on **message sources setup** before granting access to the **Notifications** option.
- Previously, the procedure checked for **System Administrator setup** permissions, which inadvertently allowed **PowerFAIDS users** to access the **Notifications** option.
- This change ensures that only users with the **appropriate permissions** can access **Notifications**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PE0003459  
**Object/Process:** Web Administration Permissions  
**Knowledge Article ID:** (If applicable)

