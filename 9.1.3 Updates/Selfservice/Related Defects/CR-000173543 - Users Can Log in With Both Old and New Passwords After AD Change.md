# CR-000173543 - Users Can Log in With Both Old and New Passwords After AD Change  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-05-13 04:21:05  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- If an **administrator changes a user's password** in **Active Directory (AD)**, the user is **still able to log in with both the old and new passwords**.  

---

## 🔍 Client Impact  
- **Security risk**: Users could **retain access with outdated credentials**.  
- **Administrative confusion**: System administrators **could not enforce password changes effectively**.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was related to **Active Directory’s "Maximum Tolerance for Computer Clock Synchronization" setting**.  
- **Adjusting this setting** ensures that password changes **propagate immediately** and prevent login with old credentials.  

---

🚀 **Status:** **Resolved**
