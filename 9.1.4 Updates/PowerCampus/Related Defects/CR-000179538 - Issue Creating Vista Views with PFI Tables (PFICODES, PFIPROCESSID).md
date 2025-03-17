# CR-000179538 - Issue Creating Vista Views with PFI Tables (PFICODES, PFIPROCESSID)

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - System Administrator Module  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-12 19:50:24  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When setting up a **Where clause** on a column in `[WebAdmin.PFICODES]`, an **SQL error** occurred when using **"Select from Values existing in Column"**.  
- **Error Message:**  
  
  `Select Error: SQLSTATE=42S02 Microsoft SQL Server Native Client 11.0 
  Invalid object name 'PFICODES'
This issue was due to the system not recognizing PowerFAIDS tables in schemas other than dbo.`
---

## 🔍 Client Impact
- Users could not create Vista views for certain PFI tables (PFICODES, PFIPROCESSID).
- The application failed to recognize non-dbo schema tables, causing SQL errors.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The table schema was explicitly added to queries, ensuring the system correctly recognizes tables outside the dbo schema.
- This allows users to successfully create Vista views without encountering SQL errors.
---

🚀 **Status:** **Resolved**
