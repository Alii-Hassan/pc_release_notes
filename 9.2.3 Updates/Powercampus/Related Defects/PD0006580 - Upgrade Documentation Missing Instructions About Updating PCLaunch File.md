# PD0006580 - Upgrade Documentation Missing Instructions About Updating PCLaunch File

## Issue Summary
**Issue:** After upgrading **PowerCampus** to **9.2.0**, users receive the following error:

> **"Page failed to load. URL: file {path}/PCLaunch.htm Error: File not found (-6)"**

Additionally, if users have a **custom launch page** with a **.html** extension, they may also encounter this error.

To resolve the issue, users must manually navigate to the **pb.ini folder** where the **launch page** is located and change its extension from **.html** to **.htm**. However, these instructions **are not included in the upgrade guide**.

**Severity:** 4 - Low  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Upgrade **PowerCampus** to **9.2.0**.
2. Attempt to launch the application.
3. Observe the **"Page failed to load"** error message.
4. If a **custom launch page** with a **.html** extension exists, the same error occurs.

---

## Expected Result
- The application should **load without errors** after upgrading.
- The **PCLaunch file** should be updated automatically, or clear upgrade instructions should be provided.

## Actual Result
- The **error occurs** because the **PCLaunch file** extension is incorrect.
- The upgrade guide **does not provide instructions** on how to resolve this issue.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Navigate to the **pb.ini folder** where the **launch page** is located.
- Change the **file extension** from **.html** to **.htm**.

---

## Additional Information
**Client Impact:**
- Users must **manually change the extension** of their **launch page** to avoid this error.
- The **lack of instructions in the upgrade guide** causes confusion.

---

## Resolution
- **Code was modified** to read the **entire URL** regardless of the **length of the extension**, preventing the issue from occurring.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0006580  
**Patch Number:** (If applicable)  
**Created Date:** 2023-03-17  
**Object/Process:** PowerCampus Upgrade Instructions  
**Knowledge Article ID:** 000051709 v3.0

