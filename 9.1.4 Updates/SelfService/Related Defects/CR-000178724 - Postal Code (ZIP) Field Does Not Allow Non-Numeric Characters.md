# CR-000178724 - Postal Code (ZIP) Field Does Not Allow Non-Numeric Characters

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-03-25 18:13:10  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- When entering an **application or transcript request**, the **Postal Code (ZIP) field** only accepted **numeric values**, preventing users from entering **alpha characters**.  
- This caused issues for **institutions in countries where postal codes contain letters** (e.g., Canada, UK).  

---

## 🔍 Client Impact
- Users from certain countries **could not enter their correct postal codes** when applying or requesting transcripts.  
- The system **incorrectly restricted** valid postal code formats, affecting international users.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **numeric-only mask** applied to the **Postal Code (ZIP) field** was **removed**.  
- The system now **accepts both letters and numbers**, allowing correct postal code entry for all users.  

---

🚀 **Status:** **Resolved**
