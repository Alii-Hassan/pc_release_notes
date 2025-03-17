# CR-000171519 - SelfService Role Names > 25 Characters Cannot be Managed

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-02-09  
- **Created Date:** 🗓️ 2020-01-20 21:50:59  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When creating a new role in **SelfService**, if the **role name** exceeds **25 characters**, the role will be created successfully, but you will not be able to assign **sitemap** options to the role. Attempting to assign the sitemap link will result in a **500 error**.

---

## 🔍 Client Impact  
- **Impact:** Roles with names longer than 25 characters could not have sitemap options managed, impacting users who needed roles with longer names.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- Roles with names longer than **25 characters** can no longer be created, or if created, cannot have **sitemap** options assigned.

🚀 **Status:** **Resolved**

---

## 🔄 Workaround  
- Create roles with names **less than 25 characters** to avoid the issue.

