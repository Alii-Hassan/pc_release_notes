# CR-000178438 - SQL Error When Retrieving Attendance (Daily) Report in Academic Records Setflow

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Academic Records  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-03-09 20:06:43  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- Users encountered an **SQL error** when retrieving data from the **Attendance (Daily) report** in the **Reports workflow under Academic Records Setflow**.  
- **Error Message:**  
  ```plaintext
  Select Error: SQLSTATE = 42000
  Microsoft SQL Server Native Client 11.0
  Incorrect syntax near 'tranattendance'.
  ```
- Issue Occurs When:
    - The default filter is used.
    - If a new filter is created, the report works correctly.

## 🛠 Temporary Workaround Before Fix:

- Users could create a new filter with at least one criterion to bypass the issue.
---

## 🔍 Client Impact
- Users were unable to generate the Attendance (Daily) report when using the default filter.
- Manual intervention was required to create a new filter as a workaround.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- Report parameters were corrected, ensuring the default filter now functions properly.
- Users can now retrieve attendance data without requiring a custom filter.
---

🚀 **Status:** **Resolved**
