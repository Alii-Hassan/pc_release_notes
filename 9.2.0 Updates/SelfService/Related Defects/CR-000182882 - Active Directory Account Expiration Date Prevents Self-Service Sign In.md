# CR-000182882 - Active Directory Account Expiration Date Prevents Self-Service Sign In

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.4  
- **Identifier:** `9fc213f01b44451024818732604bcbaa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2022-03-31  
- **Created Date:** 🗓️ 2021-12-16 18:26:19  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
In **Self-Service 9.1.4**, when using **Active Directory authentication**, users **could not log in** if their **Active Directory account** had an **"Account expires"** date set—even when the expiration date was in the future.

---

## 🔍 Client Impact
- **AD users were unable to log in** to Self-Service if any expiration date was set in their account.  
- This issue caused unnecessary login failures, preventing access to Self-Service.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The code was modified to **properly validate the expiration date**.  
- Users can now **log in normally until their actual expiration date**.  

---

🚀 **Status:** **Resolved**
