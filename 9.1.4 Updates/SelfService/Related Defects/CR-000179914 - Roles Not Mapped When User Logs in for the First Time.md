# CR-000179914 - Roles Not Mapped When User Logs in for the First Time

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.0  
- **Identifier:** `4f12df301b44451024818732604bcba3`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-06-07 21:41:06  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- When using **ADFS authentication**, if the **AuthenticationSettings.config** file has **UserMaskName set** and **UserMaskFirst enabled**,  
  - The **user logs in for the first time**, but **roles are not mapped**.  
  - The **user has no tabs visible** after logging in.  

🛠 **Workaround Before Fix:**  
- Users needed to **log in using "domain\user" format** on the first attempt.  
- After this, roles would map correctly, and the tabs would display.  

---

## 🔍 Client Impact
- **New users logging in for the first time** had **no roles assigned** and could not access any tabs.  
- **Confusion and manual intervention** were required for role synchronization.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- A **validation check** was added to ensure that **role synchronization** occurs correctly **when a mask is configured**.  
- Now, **users logging in for the first time** will have their **roles mapped properly** without requiring manual intervention.  

---

🚀 **Status:** **Resolved**
