# CR-000179050 - Migration of Self-Service Roles Fails

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Object/Process:** Knowledge Article  
- **Created Date:** 🗓️ 2021-04-15 22:27:36  
- **Affected Language(s):** 🇺🇸 English (US)  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  

🔹 **Issue:**  
- When running the **migration script** to transfer **users and roles from Self-Service 8.x to 9.x**, the migration **fails if a role name exceeds 25 characters**.  
- The **spInsSiteMapRoleForWeb stored procedure** in the PowerCampus database **accepts role names up to 50 characters**.  
- However, the **dbo.SiteMapRole table** has a **RoleName field limited to 25 characters**, causing an **insertion error** during migration.  

---

## 🔍 Client Impact
- Customers were **unable to migrate user and role information** from **Self-Service 8.x to 9.x**.  
- Any role name **longer than 25 characters** caused the **site map modification to fail**, preventing role updates.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **RoleName field length** in **PowerCampus and Identity databases** was **aligned** to **prevent mismatches**.  
- The migration script can now **handle role names correctly**, ensuring **successful data transfer**.  

---

🚀 **Status:** **Resolved**
