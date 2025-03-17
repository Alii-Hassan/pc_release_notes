# CR-000174530 - Error when viewing invoice detail on Fiscal Records module

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General - Fiscal Records  
- **Found in Version:** 9.1.0  
- **Identifier:** `0b12df301b44451024818732604bcba0`  
- **Object/Process:** Web Administrator > Fiscal Records  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-07-28  
- **Created Date:** 🗓️ 2020-07-08 23:19:30  
- **Affected Language(s):** 🌐 Spanish  

🔹 **Issue:**  
- When selecting the **View** option for any invoice in the **Fiscal Records module**, an error message appears:  
  - **"Ocurrió un error al procesar su solicitud"** (An error occurred while processing your request).

---

## 🔍 Client Impact  
- **Impact:** Users were unable to view the details of an invoice in the **Fiscal Records** module.
---

## 🔄 Workaround  
- **Workaround:** Replace `user id=sa` instead of `webadmin` in the **Web.config** file located at `C:\inetpub\wwwroot\PowerCampusWebAdministrationServices`.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a conflict where the **endpoint route name in the UI** was the same as in the **services**, preventing the endpoints from working properly.
- The **endpoints** were updated to resolve this issue.

🚀 **Status:** **Resolved**  
- **Patch:** **PC_WEBADMINISTRATION_9.1.0_HOTFIX_01** was released to address the problem.

