# CR-000168811 - SetFlows Icons Not Displaying Correctly When Modules Are Inactive

---

## 📌 Product Information
- **Product Line:** PowerCampus - General  
- **Found in Version:** 8.8.3  
- **Identifier:** `8d2213701b44451024818732604bcbd4`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2019-08-24 02:25:54  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When a **module is deactivated** in PowerCampus, the **corresponding SetFlows icon** on the **main dashboard** is **not displayed correctly**.  
- This led to **misaligned or missing icons**, making it **difficult for users to identify modules**.  

---

## 🔍 Client Impact
- Users experienced **confusion** when selecting a module, as **incorrect icons** were displayed.  
- The **PowerCampus dashboard did not update correctly**, impacting **user navigation**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The issue was caused by an **array storing icons in a fixed position**.  
- Instead of adding **active SetFlows dynamically**, the **icons were now properly assigned** within the array to ensure correct **positioning**.  
- This ensures that **icons remain correctly aligned** regardless of module activation status.  

---

🚀 **Status:** **Resolved**
