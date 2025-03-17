# CR-000174730 - STUNAMEUPD Message Source Not Functioning in Billing Setflow

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - System Administrator Module  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-07-22 21:00:03  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- The **STUNAMEUPD message source** is supposed to **send a notification** whenever a **person's name is changed** in **any setflow except Academic Records**.  
- This feature **works correctly in all areas except the Billing Setflow**.  
- If a name is changed in **Billing Setflow**, and **STUNAMEUPD is active**, no message is **created or sent**.  

📌 **No Workaround Available Prior to Fix.**  

---

## 🔍 Client Impact
- **Email notifications were not triggered** when a name change occurred in **Billing Setflow**.  
- **Institutions relying on these notifications** for name change tracking **missed critical updates**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **Billing Setflow code** was updated to **trigger STUNAMEUPD notifications** whenever a **person’s name is changed**.  
- Now, the system **sends the appropriate message** when **STUNAMEUPD is active**, ensuring **consistent behavior across all setflows**.  

---

🚀 **Status:** **Resolved**
