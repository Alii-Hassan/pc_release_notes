# 1-17LNIKM - Issue with Merging Records in PowerCampus

---

## 📌 Product Information  
- **Product Line:** PowerCampus - System Administrator  
- **Found in Version:** 8.2  
- **Identifier:** `9d17d7bc1b44451024818732604bcb71`  
- **Object/Process:** Record Maintenance  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 2 - High  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2012-07-20 19:05:05  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Error When Merging Records:**  
  When attempting to merge two random records (a functionality available in prior releases), users encountered the following error:  
  > "Process received errors during update. No data has been updated. Error: (bot nothing given)"  
  Some records went through successfully, while others did not, potentially indicating a data-specific issue, though the error message did not provide sufficient details.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to merge records, as the process failed due to an unspecified error. This prevented proper record management.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A **condition** was added to the merge process to handle edge cases and fix the issue, allowing users to successfully merge records.

🚀 **Status:** **Resolved**
