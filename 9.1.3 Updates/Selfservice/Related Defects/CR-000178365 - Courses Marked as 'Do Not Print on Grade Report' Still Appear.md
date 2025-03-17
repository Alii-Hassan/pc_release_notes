# CR-000178365 - Courses Marked as 'Do Not Print on Grade Report' Still Appear  

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
- **Created Date:** 🗓️ 2021-03-04 21:13:53  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Courses marked as 'Do not print on grade report'** still appear on the **Self-Service grade report**, even though the **Transcript drilldown window** correctly hides them.

---

## 🔍 Client Impact  
- Users can see all courses on the grade report, including those marked as **"Do not print on report card"**, leading to incorrect or unwanted information being shown.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- Modified the stored procedure (`sp`) to filter courses by **Print Course on Report Card = Yes**, ensuring that only eligible courses appear on the grade report.

🚀 **Status:** **Resolved**
