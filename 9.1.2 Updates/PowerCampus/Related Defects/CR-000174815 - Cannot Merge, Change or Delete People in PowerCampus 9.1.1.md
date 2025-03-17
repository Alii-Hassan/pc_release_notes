# CR-000174815 - Cannot Merge, Change or Delete People in PowerCampus 9.1.1

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
- **Created Date:** 🗓️ 2020-07-28 21:51:47  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Merge Issue:** When attempting to merge **People IDs**, the error "Process received errors during update. No data has been updated" occurs, and the IDs do not merge.  
- **Stored Procedure Error:** When running the `sp_merge_people` stored procedure, the error `Invalid object name 'PFINTEGRATION'` is returned.  
- **Delete Issue:** When trying to delete a people record, the error `An error was encountered attempting to delete records for this person` is displayed.  
- **Change Issue:** When changing a people ID through **Backoffice**, the change is not reflected, though the message "ID was changed successfully" is shown. Running `sp_change_people_id` directly also returns an error: `Invalid object name 'PFINTEGRATION'`.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to merge, change, or delete **People** records, leading to issues with data integrity and management.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The problem stemmed from missing references to the **PowerFAIDS** tables in the stored procedures.  
- The stored procedures for merging and changing **People IDs** were updated to include the necessary references to the missing tables.

🚀 **Status:** **Resolved**
