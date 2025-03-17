# CR-000171124 - Missing Process to Create Accounts for ADFS Authentication

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2019-12-21 00:17:47  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When **creating new user accounts** in **PowerCampus User Management**, there was:  
  - **No available method or configuration** to manipulate the **name provisioning** for new accounts.  
  - **ADFS authentication required** that usernames in **PowerCampus DB (`personuser` table)** and **Identity DB (`auth.identityuser` table)** include the **domain\ prefix** as part of the **User ID**.  
- **Without this, ADFS authentication failed**, preventing users from accessing Self-Service menu items.  

🛠 **Temporary Workaround Before Fix:**  
- **Manually update** the username fields in `personuser` and `auth.identityuser` using **SQL Server Management Studio (SSMS)** to include the required **domain\ prefix**.  

---

## 🔍 Client Impact
- **Users could not log in via ADFS authentication** unless manual intervention was performed.  
- **System administrators had to manually update usernames**, increasing workload and risk of errors.  
- **Self-Service access was affected**, causing delays in account provisioning.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **New account provisioning model implemented** in **PowerCampus 9.1.3**.  
- Now, the system **automatically assigns the correct username format**, ensuring:  
  - **ADFS authentication works without manual intervention**.  
  - **Self-Service menu items display properly**.  

---

🚀 **Status:** **Resolved**
