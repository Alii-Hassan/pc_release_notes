# CR-000171429 - Merge People ID Does Not Work if Student Has 1098-T Records

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 8.8.5  
- **Identifier:** `e37253b01b44451024818732604bcb53`  
- **Object/Process:** Merge People ID  

---

## ⚠️ Issue Summary  
- **Severity:** 🟢 2 - High  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2020-01-15 23:20:47  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When attempting to merge a **People ID** that has records in the **Reported1098TInformationDetail** table, the following error occurred:  
  - `"Process received errors during update. No data has been updated."`  
- Running the merge operation using SQL resulted in an error:  
```sql
Msg 547, Level 16, State 0, Procedure sp_merge_people, Line 1869
The DELETE statement conflicted with the REFERENCE constraint "fkReported1098TInformationDetail_People". The conflict occurred in database "Campus8_Conv", table "dbo.Reported1098TInformationDetail", column 'PeopleCodeId'.
```
- The merge only worked correctly when the ID with the **1098-T** records was kept.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to execute the **Merge People ID** process when merging IDs with records in the **1098-T** report, leading to conflicts with the **Reported1098TInformationDetail** table.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **merge people stored procedure** was modified to properly reference the new **1098-T** tables, addressing the conflict that occurred during the merge process.

🚀 **Status:** **Resolved**
