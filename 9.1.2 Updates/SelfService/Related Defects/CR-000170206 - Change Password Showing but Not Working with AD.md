# CR-000170206 - Change Password Showing but Not Working with AD

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.1  
- **Identifier:** `5b52db701b44451024818732604bcbaa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-02-09  
- **Created Date:** 🗓️ 2019-10-31 00:37:11  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- The **Change Password** option is visible in **Profile > Account > Reset Password**, but it does not work when using ADFS or Active Directory (AD) authentication.  
- Although it appears to change the password, it does not successfully update the password in the AD system.

---

## 🔍 Client Impact  
- **Impact:** Users using ADFS or AD for authentication were unable to reset their password via the Self-Service interface, leading to confusion and possible access issues.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The password reset functionality was removed from the interface for users authenticated via ADFS or AD, as it should not be available for these users.

🚀 **Status:** **Resolved**
