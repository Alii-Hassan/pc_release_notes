# CR-000179354 - Course Advisor Approved but on Hold for Student in PowerCampus

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `c5c2dfb01b44451024818732604bcb24`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-03 22:32:24  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- Registration was **set to require advisor approval** for courses.  
- When the **advisor approved a course**, it **appeared as approved** for both the **student and advisor**.  
- However, the **course status** in the student's **Transcript Detail record** incorrectly showed **"Hold"**, preventing registration.  

📌 **When This Occurs:**  
- If a section has a **maximum participant limit** (e.g., 14), the **14th student** added **was placed on hold**, even though they **met (not exceeded)** the limit.  

📌 **Expected Behavior:**  
- The **last available student** should be **registered**, not placed on **Hold**.  

---

## 🔍 Client Impact
- Students **could not register** for a course **when only one spot remained**.  
- The system **incorrectly flagged the last available spot as exceeding the maximum**, causing unnecessary registration blocks.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **stored procedure logic** was modified:  
  - Previously, if a course was **closed**, and a student status changed to **Add**, **no further actions were executed**.  
  - Now, the system **only prevents actions if the course is already closed and the status change is from Drop to Add**.  
- This ensures that **students meeting the max participant limit can register correctly**.  

---

🚀 **Status:** **Resolved**
