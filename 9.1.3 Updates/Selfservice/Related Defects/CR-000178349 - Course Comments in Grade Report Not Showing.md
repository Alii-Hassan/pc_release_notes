# CR-000178349 - Course Comments in Grade Report Not Showing  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-03-04 04:20:56  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Configured course comments** for midterm and final grades **do not appear** in the **Grade Report page** in Self-Service (Version 9.1.2).  
- Users are unable to view comments entered for courses in the grade report section.  

---

## 🔍 Client Impact  
- **Grade comments are not visible** in the Grade Report page, affecting users' ability to review critical feedback for midterms and final grades.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Modified the `GradeReportDetails.tsx` file** to ensure that **course comments are displayed** in the grade report.  

🚀 **Status:** **Resolved**
