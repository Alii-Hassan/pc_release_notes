# CR-000175318 - Electronic Degree Requires a Second LastName as Mandatory

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Academic Records  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 2 - High  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2020-08-29 02:04:13  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Problem:** In the WebAdministration application, when a new **Electronic Degree** is created, the "Second LastName" field is incorrectly marked as **mandatory**, despite regulatory documentation stating it should be **optional**.  
- **Regulatory Info:** The **second last name (segundoApellido)** is defined as an optional attribute in the regulatory documentation (Diario Oficial de la Federación).

---

## 🔍 Client Impact  
- **Impact:** Users could not generate **electronic degrees** for students who do not have a second surname because the system was incorrectly requiring it as mandatory.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **Second LastName** field's properties were updated to remove the **required** setting, allowing it to be processed as **optional**, as per regulatory requirements.

🚀 **Status:** **Resolved**
