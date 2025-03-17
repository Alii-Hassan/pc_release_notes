# CR-000173372 - Custom Roles Not Visible in User Management After Upgrade  

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
- **Created Date:** 🗓️ 2020-05-01 19:23:56  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- After **upgrading from PowerCampus Self-Service 8.8.x to 9.1.0**, **User Management** does not display **custom roles**.  
- The roles were **successfully migrated** and **exist in the `auth.IdentityRole` table**, but they do **not appear in the UI**.  
- **Only standard Self-Service roles** are visible in the interface.  

🛠 **Temporary Workaround Before Fix:**  
- **Manually recreate the roles** in User Management **using the exact name** from the `auth.IdentityRole` table.  
- If users were **previously attached** to the custom roles, they will **reappear once the role is recreated**.  

---

## 🔍 Client Impact  
- **Custom roles were missing** from User Management, requiring **manual recreation**.  
- **System administrators faced additional workload** to restore roles.  
- **Access permissions were disrupted**, causing potential operational delays.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **upgrade process now correctly migrates custom roles** from **8.x to 9.x**.  
- **User Management now displays all roles**, including **custom roles**, after an upgrade.  

---

🚀 **Status:** **Resolved**
