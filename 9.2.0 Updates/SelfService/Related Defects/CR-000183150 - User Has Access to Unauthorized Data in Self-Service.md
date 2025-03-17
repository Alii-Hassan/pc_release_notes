# CR-000183150 - User Has Access to Unauthorized Data in Self-Service

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.4  
- **Identifier:** `5bc213f01b44451024818732604bcba7`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2022-03-31  
- **Created Date:** 🗓️ 2022-01-14 22:14:45  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
An authenticated user could manipulate **Self-Service source HTML code** to **query and retrieve data** from users they were **not authorized to access**.  

⚠️ **Affected Areas:**  
- **Advisee pages** that should only be accessible to advisors.  
- Other sensitive student-related data.  

---

## 🔍 Client Impact
- Authenticated users could **access unauthorized records**, leading to **data privacy concerns**.  
- **Confidential student data** was at risk of exposure due to improper permission validation.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Permissions for authenticated users** were **reviewed and strengthened**.  
- Pages in **Advising, Admissions, and Student areas** were updated with **new validation checks**.  
- Users can now **only access records they are explicitly authorized to view**.  

---

🚀 **Status:** **Resolved**
