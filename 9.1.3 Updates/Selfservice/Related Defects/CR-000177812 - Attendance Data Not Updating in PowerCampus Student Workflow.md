# CR-000177812 - Attendance Data Not Updating in PowerCampus Student Workflow  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-02-01 21:38:55  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Attendance values entered in PowerCampus Student Workflow (Attendance Tab) are not saved.**  
- Even when the **user has update rights**, the field remains **view-only**, preventing data entry.  
- No error message is displayed, but **attendance records do not update**.  

📌 **Steps to Reproduce:**  
1️⃣ Log in to **PowerCampus Self-Service** as a faculty member.  
2️⃣ Navigate to **Student Workflow > Attendance Tab**.  
3️⃣ Enter attendance values and attempt to save.  
4️⃣ **Observed Behavior:** Data **does not save**, and the field remains **view-only**.  

---

## 🔍 Client Impact  
- Faculty **cannot update attendance records** directly from the Student Workflow.  
- Institutions relying on accurate attendance tracking for **grading or financial aid compliance** may face **data integrity issues**.  
- Requires **manual workarounds** involving other roles (e.g., department head or assistant) to update attendance.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Corrected data retrieval** logic to properly **allow attendance updates** in the Student Workflow **Attendance Tab**.  

🚀 **Status:** **Resolved**
