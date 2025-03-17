# CR-000172254 - Cannot Save Inserted Section Meetings

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.0.2  
- **Identifier:** `9f52db701b44451024818732604bcbad`  
- **Object/Process:** Section Meetings in Academic Records  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2020-02-28 23:28:08  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When reviewing or editing records on the **Section Meetings** tab of the **Sections** workflow, users were unable to save a new section meeting if no existing records were present.  
- If there were existing section meeting records, new inserted records could not be saved using the **Save** button. Instead, users had to use the **Ctrl+S** keyboard shortcut to save them.
- If no records existed, users had to enter a meeting day/time on the **Schedule** tab, save, then delete or edit extra records on the **Section Meetings** tab.  
- Additionally, when adding multiple section meetings, only one meeting could be saved at a time.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to save inserted section meetings using the **Save** button, which hindered their ability to efficiently manage section meeting records.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a **PowerBuilder** conversion of **datetime** datatype to **datetime2**, preventing records from being saved correctly.
- The code was updated to ensure that **Section Meetings** are saved properly using the **Save** button, and that multiple section meetings can be saved at once.

🚀 **Status:** **Resolved**
