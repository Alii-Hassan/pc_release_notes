# CR-000159527 - Account Creation Does Not Add Email if Student Had No Email in PowerCampus

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 8.8.1  
- **Identifier:** `7de197301b44451024818732604bcb02`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2018-07-18 02:04:54  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
When creating a **new student account** via **Self-Service > Admin > User Maintenance > Create User**, if the student **did not already have an email** in PowerCampus, the system **fails to add the provided email** to the student's record.  

📌 **Result:**  
- The user **account is created**, but the email **is missing** from PowerCampus.  

🛠 **Workaround Before Fix:**  
- Ensure the student **already has an email in PowerCampus** before creating the Self-Service account.  
- If an email exists, it **can be updated** during account creation, and it will correctly reflect in the **emailaddress table** and **Email tab in PowerCampus**.  

---

## 🔍 Client Impact
- Users created **without an email** in PowerCampus **cannot receive system notifications**.  
- Manual updates were required to ensure email addresses were stored correctly.  

---

## 🔧 Resolution
✅ **Fix Implemented:**  
- The system now ensures that **if an email is entered during account creation, it is properly stored in PowerCampus**.  
- The **emailaddress table** and **Email tab in PowerCampus** now update correctly.  

---

🚀 **Status:** **Resolved**
