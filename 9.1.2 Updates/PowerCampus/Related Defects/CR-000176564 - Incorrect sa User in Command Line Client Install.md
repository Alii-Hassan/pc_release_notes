# CR-000176564 - Incorrect "sa" User in Command Line Client Install

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Install  

---

## ⚠️ Issue Summary  
- **Severity:** 🔶 4 - Low  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2020-11-04 17:27:05  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- The **PowerCampus 9.1.1 Installation Guide** incorrectly instructed users to use the "sa" user for the **client install command** on page 88. The correct user should have been **powercampus** instead.

---

## 🔍 Client Impact  
- **Impact:** The installation guide was misleading, directing users to use the wrong database user for the command line install, potentially causing installation issues.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **PowerCampus Installation Guide** was updated to reflect the correct **dbuser** as **powercampus** instead of "sa".

🚀 **Status:** **Resolved**
