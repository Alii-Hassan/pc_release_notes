# CR-000179118 - Installer for PowerCampus Web Administration 9.1.3 Changes Application Name to Default

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `c5c2dfb01b44451024818732604bcb24`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-04-20 19:36:36  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When upgrading to **PowerCampus Web Administration 9.1.3**, the **installer changes the application name** to **"PowerCampusWebAdministrationUI"**.  
- This occurs **even when the user selects the option to retain the existing application name**.  
- The upgrade **overrides the previous name**, leading to **unexpected application behavior**.  

---

## 🔍 Client Impact
- Users **could not successfully upgrade** without the installer **resetting the application name**.  
- This caused **configuration mismatches**, requiring **manual intervention** to restore the correct name.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **Web Administration installer** was modified to **preserve the existing application name** during upgrades.  
- Now, the **installer correctly updates the system** without **resetting the application name to default**.  

---

🚀 **Status:** **Resolved**
