# CR-000178297 - Activity Grades Doesn't Allow Grade Values with a Decimal Point  

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
- **Created Date:** 🗓️ 2021-03-02 02:12:36  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Activity Grades section** in Self-Service **doesn't allow users** to enter a grade value with a decimal point.  
- The error message displayed: "**Grade is alphanumeric**".  
- This functionality was previously available in version 8.X.  

---

## 🔍 Client Impact  
- **Inability to enter decimal grades** for activities.  
- **Incorrect behavior** where only integer values are accepted, which is problematic for schools requiring decimal grades (e.g., 95.5 or 88.75).  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Code was modified** to **remove the mask**, allowing the correct functionality of entering decimal points for grades.  

🚀 **Status:** **Resolved**
