# CR-000179051 - Cannot Create Shared Access Account with PeopleId as Username

---

## 📌 Product Information
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.3  
- **Identifier:** `81c2dfb01b44451024818732604bcb21`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-04-15 22:30:58  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- When attempting to **create a Shared Access account** via an **invitation**, if the **username creation format** was set to **PeopleId only**, the **account creation process failed**.  

📌 **Expected Behavior:**  
- Users should be able to create **Shared Access accounts** using **PeopleId** as their username.  

📌 **Actual Behavior:**  
- The **account creation process failed**, preventing relatives from setting up their **Self-Service access**.  

---

## 🔍 Client Impact
- **Relatives were unable to create Self-Service accounts** when the **PeopleId** was set as the username format.  
- This issue caused **delays and confusion** in granting Shared Access permissions.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **PeopleId parameter** was correctly **added** when creating **Shared Access accounts**.  
- Users can now **successfully create accounts** when the **PeopleId format** is enabled.  

---

🚀 **Status:** **Resolved**
