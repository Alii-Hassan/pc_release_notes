# CR-000170358 - Roles Not Mapping When Multiple People Types Exist

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.1  
- **Identifier:** `5b52db701b44451024818732604bcbaa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2019-11-07 03:15:59  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When a user had **multiple associated people types**, and their account was created via:  
  - **PeopleUser API**  
  - **UserManagement application**  
- **Only one people type mapping role** was associated with the user account.  

📝 **Note:**  
- If a **single people type** was assigned **multiple roles**, it worked **correctly**.  

---

## 🔍 Client Impact
- **User roles were not properly mapped**, leading to **access restrictions**.  
- **Manual intervention was required** to fix incorrect role assignments.  
- **Institutions faced challenges managing users** with multiple associated people types.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **migration process from PowerCampus 8.x** was updated to **consider multiple people type assignments**.  
- Now, all **applicable roles are mapped correctly** when an account is created.  

---

🚀 **Status:** **Resolved**
