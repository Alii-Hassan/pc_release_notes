# CR-000179428 - Course Management Period Filter Labels Are Inverted

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.3  
- **Identifier:** `c5c2dfb01b44451024818732604bcb24`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟢 4 - Low  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-05 23:44:10  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **Course Management**, the **period filter header labels** for **Enabled/Disabled** were **inverted** compared to the **toggle selection**.  
- When the **toggle was blue (enabled)**, the **label displayed "Disabled"**, causing confusion.  

📌 **Expected Behavior:**  
- The **labels should match** the **toggle's actual state**.  

📌 **Actual Behavior:**  
- The labels were **reversed**, making it unclear whether a filter was active.  

---

## 🔍 Client Impact
- Users were **confused** when managing course periods.  
- The **Enabled/Disabled labels** did not accurately reflect the **filter's current state**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **column title** was changed from **"Enabled/Disabled"** to **"Enable"** to avoid confusion.  
- Now, the **toggle state correctly reflects** the **actual selection**.  

---

🚀 **Status:** **Resolved**
