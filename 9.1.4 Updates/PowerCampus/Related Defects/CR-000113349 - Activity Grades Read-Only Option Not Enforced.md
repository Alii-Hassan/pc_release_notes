# CR-000113349 - Activity Grades Read-Only Option Not Enforced

---

## 📌 Product Information
- **Product Line:** PowerCampus - System Administrator  
- **Found in Version:** 8.4  
- **Identifier:** `7ce6df7c1b44451024818732604bcb42`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2014-05-22 20:53:47  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- A **user profile** was configured with **Read-Only permissions** for **Activity Grades**.  
- However, users assigned to this profile **were still able to modify** the **earned points** and **save changes**.  
- This violated **permission settings**, allowing unauthorized modifications.  

---

## 🔍 Client Impact
- **Users with read-only access** could **incorrectly modify grade records**.  
- This led to **unauthorized changes** in **student grades**, impacting **academic integrity**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **window rights validation** was reviewed and **updated**.  
- **Menu options** are now **enabled/disabled** based on the **permissions granted** to the logged-in user.  
- **Users with Read-Only rights** can now **only view** Activity Grades **without modifying them**.  

---

🚀 **Status:** **Resolved**
