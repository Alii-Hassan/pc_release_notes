# CR-000177384 - Only One Academic Plan Visible in Self-Service  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-01-07 20:55:18  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Students with multiple academic plans** under the same program **can only see one plan** in Self-Service.  
- Example: A student enrolled in an **Undergraduate program** with **multiple academic plans** can only view **one plan**.  

📌 **Steps to Reproduce:**  
1️⃣ A student is enrolled in multiple **academic plans** for the same **program**.  
2️⃣ Log in to **PowerCampus Self-Service** as the student.

3️⃣ Only **one** academic plan is displayed instead of **all assigned plans**.  

---

## 🔍 Client Impact  
- Students **cannot switch or view** other **academic plans**.  
- Advisors **cannot access** the complete academic plan history of students.  
- Potential **miscommunication** about academic progress and advising sessions.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- Added a **validation check** to ensure that **all academic plans** display correctly.  
- The system now supports **multiple degrees and curriculums** under the same program.  

---

🚀 **Status:** **Resolved**
