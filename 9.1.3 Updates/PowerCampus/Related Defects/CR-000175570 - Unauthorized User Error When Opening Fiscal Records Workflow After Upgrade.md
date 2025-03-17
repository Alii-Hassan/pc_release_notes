# CR-000175570 - "Unauthorized User" Error When Opening Fiscal Records Workflow After Upgrade

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-09-12 02:07:24  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- After **upgrading from PowerCampus 9.0.2 to 9.1.1**, users encountered an **"Unauthorized user must authenticate"** error when attempting to **open the Fiscal Records workflow**.  
- The following **error message** was recorded in **Allevents.log**:  
  `Message: The EXECUTE permission was denied on the object 'spSelWebAdminPermissions', 
  database 'Campus_Test', schema 'WebAdmin'.`
---

## 🔍 Client Impact
- Users were unable to access the Fiscal Records workflow after upgrading.
- Missing database permissions caused authentication failures.
- The issue required manual intervention to restore access.
---

## ✅ Resolution
🔧 **Fix Implemented:**  
- Database permissions were corrected, granting the required EXECUTE permission for `spSelWebAdminPermissions`.
- Now, users can access the Fiscal Records workflow without encountering authentication errors.
---

🚀 **Status:** **Resolved**