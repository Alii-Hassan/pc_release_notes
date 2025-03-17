# 1-1TW7CV - Merge People ID Process Creating Records for Merged Record

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 6.3  
- **Identifier:** `27851bb81b44451024818732604bcb15`  
- **Object/Process:** Merge People ID  

---

## ⚠️ Issue Summary  
- **Severity:** 🟢 4 - Low  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2007-03-16 18:57:52  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When the **Merge People ID** process is executed, it inadvertently creates records in the **STOPLIST** and **STUDENT** tables for the merged (and deleted) people ID record.  
- The record in the **STOPLIST** table appeared tied to the "Stop List Reason for Expired Address Types" setup from the **Date Driven Address** configuration.  
- The **STUDENT** table record was generated even if neither of the merged records had a student record type.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to run the **Merge People ID** process without encountering issues with tables like **STOPLIST** and **STUDENT**, causing errors during the merge process.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A condition was added to the **delete trigger** in the **Address** table to prevent the **Date Driven Address** setup from being executed when a record is deleted during the merge process.  

🚀 **Status:** **Resolved**
