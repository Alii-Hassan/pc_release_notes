# CR-000177048 - Custom Views in Dossier Not Displaying Data  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `91f9a36b977f81105154d004a253affa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-12-09 04:38:02  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When **creating a view** with columns from **multiple tables**, if **two columns have the same name**, then the **custom view area in the dossier** becomes **unavailable** 🚫.  

📌 **Steps to Reproduce:**  
1️⃣ Create a **custom view** in PowerCampus Self-Service.  
2️⃣ Add **columns from multiple tables** where at least **two columns share the same name**.  
3️⃣ Attempt to **display the view in the dossier**.  
4️⃣ The view **fails to load** and the area is shown as **"Not Available"**.  

---

## 🔍 Client Impact  
- **Custom views fail to display data**, making them unusable for reporting.  
- Users are **unable to retrieve critical information** from Self-Service dossiers.  
- Increased **manual troubleshooting efforts** due to unexpected failures.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- Updated the stored procedure `spSelDossierCustomViewForWeb` to **use `COLUMN_ALIAS` instead of `COLUMN_NAME`**.  
- This ensures that **duplicate column names** do not cause conflicts in dossier views.  

---

🚀 **Status:** **Resolved**
