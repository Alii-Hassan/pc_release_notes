# CR-000175185 - Self-Service Upgrade Installer Changes Application Name  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-22 01:31:55  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When running the **Self-Service 9.1.1 upgrade installer**, the application name is **reset to "PowerCampusSelfService"**, even if the user selects the option to **keep the existing name**.  
- Example:  
  - **Before Upgrade:** Application appears as `SelfService902` in IIS.  
  - **After Upgrade:** The application is **renamed to** `PowerCampusSelfService`, **ignoring the existing name**.  

📌 **Steps to Reproduce:**  
1️⃣ **Prerequisite:** Self-Service **9.0.2** installed and appears in IIS as **SelfService902**.  
2️⃣ **Run** the upgrade installer from **9.0.2 to 9.1.1**.  
3️⃣ The **application name is changed** to **PowerCampusSelfService**, instead of keeping `SelfService902`.  

---

## 🔍 Client Impact  
- **System administrators must manually rename the application in IIS** after upgrading.  
- **Breaks existing configurations** where external links or services reference the previous application name.  
- **Extra manual work** required for organizations using custom IIS configurations.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **installer was modified** to **retain the existing application name** during the upgrade process.  
- Now, when upgrading **Self-Service**, the application name **remains unchanged** in IIS.  

---

🚀 **Status:** **Resolved**
