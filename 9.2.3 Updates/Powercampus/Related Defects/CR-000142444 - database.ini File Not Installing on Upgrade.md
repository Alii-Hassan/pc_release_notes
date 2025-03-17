# CR-000142444 - database.ini File Not Installing on Upgrade

## Issue Summary
**Issue:** Some clients installing **PowerCAMPUS 8.7.0** reported that the **database.ini** file **was not copied** over during the installation process. Instead, an outdated version located in the **AppData** folder was used by Windows, preventing proper system configuration.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 8.7.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Install **PowerCAMPUS 8.7.0**.
2. Notice that the **database.ini** file is missing from the **PowerCAMPUS** installation directory.
3. Windows defaults to using an outdated copy of **database.ini** stored in:
   ```
   C:\Users\*username*\AppData\Roaming\Microsoft\Windows\...
   ```
4. System misconfigurations occur due to incorrect database connection settings.

---

## Expected Result
- The **database.ini** file should be **properly installed** in the **PowerCAMPUS directory**.
- The outdated **AppData** copy should not interfere with the installation.

## Actual Result
- The **database.ini** file is **not copied** over correctly.
- Windows defaults to using an outdated **AppData** version, leading to connection issues.
- Users must **manually copy** the correct **database.ini** file.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- **Manually copy** the **database.ini** file from the **installation directory** to the **PowerCAMPUS** directory.
- **Delete the outdated** `database.ini` file from:
  ```
  C:\Users\*username*\AppData\Roaming\Microsoft\Windows\...
  ```

---

## Additional Information
**Client Impact:**
- Users must manually **copy the database.ini file** after installation to avoid misconfigurations.
- **Potential connection failures** due to Windows defaulting to the outdated version.

---

## Resolution
- Issue was **fixed indirectly**.
- Unable to reproduce in **PowerCAMPUS 9.2.2**.
- Tested and confirmed that the issue does not occur in the latest versions.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Install  
**Identifier:** CR-000142444  
**Patch Number:** (If applicable)  
**Created Date:** 2016-08-29  
**Object/Process:** Installation & Configuration  
**Knowledge Article ID:** (If applicable)

