# CR-000179355 - Course Management > Activities Page Slow

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `81c2dfb01b44451024818732604bcb21`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-03 23:11:04  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **Self-Service 9.1.3**, the **Activities page** in **Course Management** became **very slow** if a course had **more than 40 activities** set up.  
- The system **executed multiple queries per activity**, leading to performance issues.  

---

## 🔍 Client Impact
- **Faculty members experienced delays** when managing course activities.  
- Courses with **40+ activities** took significantly **longer to load** and manage.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **service logic was optimized** to **reduce redundant database queries** for each activity.  
- The **UI was modified** to **calculate percentages by activity type**, rather than calculating all activities at once.  
- This significantly **improved page load speed and performance**.  

---

🚀 **Status:** **Resolved**
