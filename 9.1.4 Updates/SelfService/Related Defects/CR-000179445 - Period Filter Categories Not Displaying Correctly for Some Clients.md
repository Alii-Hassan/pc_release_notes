# CR-000179445 - Period Filter Categories Not Displaying Correctly for Some Clients

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `81c2dfb01b44451024818732604bcb21`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-06 20:39:45  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **Self-Service**, navigating to **Administration > General > Period Filters** displayed only **Student and General categories**.  
- The **Course Management category** was missing, preventing users from applying filters correctly.  

📌 **Expected Behavior:**  
- The **Course Management filter category** should be available for selection.  

📌 **Actual Behavior:**  
- Users **could not access Course Management period filters**, limiting their ability to manage courses effectively.  

---

## 🔍 Client Impact
- Users **could not apply period filters** to **Course Management areas**.  
- Institutions relying on **filtered course views** were **unable to customize their settings properly**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **database installer** was modified to **update the period filter categories** correctly.  
- The fix applies **whether it is a fresh install or an upgrade**, ensuring the **Course Management category is always available**.  

---

🚀 **Status:** **Resolved**
