# CR-000175462 - Electronic Degree is Not Considering MIDDLE_NAME Field for Student Name

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Academic Records  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2020-09-08 03:22:49  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Problem:** When generating the **Electronic Degree**, the system was not including the **MIDDLE_NAME** field in the student's name, even though this was required by SEP websites.
  
---

## 🔍 Client Impact  
- **Impact:** Users were unable to generate **electronic degrees** with the student's middle name included.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **MIDDLE_NAME** field was added to the **name** field in the **WebAdmin.spSelStudentInformation** stored procedure, ensuring it is included when generating the **Electronic Degree**.

🚀 **Status:** **Resolved**
