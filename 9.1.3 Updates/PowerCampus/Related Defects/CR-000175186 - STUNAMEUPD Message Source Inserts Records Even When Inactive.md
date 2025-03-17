# CR-000175186 - STUNAMEUPD Message Source Inserts Records Even When Inactive

---

## 📌 Product Information
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-22 01:39:19  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- The **STUNAMEUPD message source** was **set to inactive**, yet records were **still being inserted** into the **MessageQueue table**.  
- This resulted in **email notifications being sent**, even when the **message source was disabled**.  

---

## 🔍 Client Impact
- **Unwanted notifications were being sent**, causing **confusion and potential privacy issues**.  
- Users **could not fully disable** STUNAMEUPD notifications as expected.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The code was updated to **only insert records into the MessageQueue table** when **STUNAMEUPD is active**.  
- Now, when the **message source is disabled**, **no records are inserted**, preventing unwanted notifications.  

---

🚀 **Status:** **Resolved**
