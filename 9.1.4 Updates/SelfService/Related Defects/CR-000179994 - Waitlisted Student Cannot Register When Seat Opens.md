# CR-000179994 - Waitlisted Student Cannot Register When Seat Opens

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
- **Created Date:** 🗓️ 2021-06-12 01:34:39  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- When a **student is on a waitlist** and a **seat opens**, they receive an **email notification** instructing them to **register before the expiration time**.  
- The student logs into **Self-Service**, clicks **Register**, and receives a **confirmation message**:  
  - ✅ *"Congratulations! You have completed your registration."*  
- However, the **class remains in the student's cart** instead of appearing in their **registered courses**.  

🛠 **Hotfix Released:**  
- **SELFSERVICE_HOTFIX_9.1.3_CR-000179994** was issued for version **9.1.3** to address this problem.  

---

## 🔍 Client Impact
- **Students could not register** for a course even when a **seat became available**.  
- **Waitlisted students remained stuck in their cart**, causing **registration failures** and **frustration**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **stored procedure logic** was corrected:  
  - Previously, when a **course was closed**, and the student's **status changed to Add**, the stored procedure **exited early**.  
  - Now, the logic **only prevents changes if the course is closed and the status change is from Drop to Add**.  
- This ensures that **waitlisted students can register successfully** when a **seat becomes available**.  

---

🚀 **Status:** **Resolved**
