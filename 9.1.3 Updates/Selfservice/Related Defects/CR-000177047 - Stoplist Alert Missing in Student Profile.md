# CR-000177047 - Stoplist Alert Missing in Student Profile  

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
- **Created Date:** 🗓️ 2020-12-09 04:28:51  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- Stoplist alerts **display in the Student Profile** even when they do **not impact grades or registration**, but **no details are shown**.  

📌 **Steps to Reproduce:**  
1️⃣ Create a **Stoplist record** for a student **without** the *Stop Registration* or *Stop Grades* flags.  
2️⃣ The student **opens their Profile page** in Self-Service.  
3️⃣ A **Stoplist alert appears** 🚨 but **does not contain any details**.  

---

## 🔍 Client Impact  
- **Confusing experience for students**, as they see an alert but **cannot determine the issue**.  
- **Potentially unnecessary inquiries** to administrators for clarification.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **Student Profile logic was updated** so that:  
  - **If a Stoplist item has either the "Stop Registration" or "Stop Grades" flag**, the alert **displays with details**.  
  - **If neither flag is set**, the alert **does not display**.  
  - **If there are multiple Stoplist records**, only the ones with relevant flags **will be shown**.  

---

🚀 **Status:** **Resolved**
