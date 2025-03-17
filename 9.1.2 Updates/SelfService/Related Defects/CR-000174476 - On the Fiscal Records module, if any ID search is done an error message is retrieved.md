# CR-000174476 - On the Fiscal Records module, if any ID search is done an error message is retrieved

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General - Cash Receipts  
- **Found in Version:** 9.1.0  
- **Identifier:** `0b12df301b44451024818732604bcba0`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2020-07-28  
- **Created Date:** 🗓️ 2020-07-03 02:51:57  
- **Affected Language(s):** 🌐 Spanish  

🔹 **Issue:**  
- In the **Fiscal Records module**, performing a people search (either general or advanced) results in an error message:  
  - **"Ocurrió un error al procesar su solicitud"** (An error occurred while processing your request).

---

## 🔍 Client Impact  
- **Impact:** Users were unable to search for people in the **Fiscal Records** module, either through the search box or advanced search.
---

## 🔄 Workaround  
- **No workaround required**, as the issue has been resolved with the hotfix.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a conflict where the **endpoint route name in the UI** was the same as in the **services**. This prevented the endpoints from working correctly.  
- The **endpoints** in the services were updated to resolve the conflict.

🚀 **Status:** **Resolved**  
- **Patch:** **PC_WEBADMINISTRATION_9.1.0_HOTFIX_01** was released to fix the issue.

