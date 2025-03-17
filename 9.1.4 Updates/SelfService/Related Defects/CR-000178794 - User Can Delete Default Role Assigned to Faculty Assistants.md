# CR-000178794 - User Can Delete Default Role Assigned to Faculty Assistants

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `c5c2dfb01b44451024818732604bcb24`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-03-30 04:42:26  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **User Management > Self-Service > Settings > Role Assignment**, the **admin can assign a role** to users.  
- However, in **User Management > Self-Service > Roles**, the admin could **delete the role assigned to faculty assistants**, even if it was set as **default**.  
- If a **faculty assistant was added** and attempted to log in **after role deletion**, they encountered an **error message** and could not access the system.  

---

## 🔍 Client Impact
- **Faculty assistants were created without a default role**, preventing them from logging in.  
- System administrators could **accidentally remove critical roles**, leading to user access issues.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- A **new validation service** was added to check if a **role is assigned as a default** during creation.  
- If a **role is set as default**, the **delete option is now disabled**, preventing accidental removal.  

---

🚀 **Status:** **Resolved**
