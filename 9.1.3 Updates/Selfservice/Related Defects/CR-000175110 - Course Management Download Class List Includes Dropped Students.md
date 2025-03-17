# CR-000175110 - Course Management Download Class List Includes Dropped Students  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.0  
- **Identifier:** `4f12df301b44451024818732604bcba3`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-17 21:48:26  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When downloading the **class list** in **Course Management**, the exported **Excel file always includes all students**, even those with a **dropped status**.  
- This **happens even if the instructor selects a specific status** (e.g., "Add" only).  

---

## 🔍 Client Impact  
- **Instructors could not filter students** correctly in the exported class list.  
- **Extra manual work** was required to remove students with incorrect statuses.  
- **Download/View options did not reflect the selected student status.**  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Code modified** to correctly filter **students by status** in the downloaded class list.  
- **Now, the Download/View/Enum options differentiate students based on selected status** in Course Management.  

---

🚀 **Status:** **Resolved**
