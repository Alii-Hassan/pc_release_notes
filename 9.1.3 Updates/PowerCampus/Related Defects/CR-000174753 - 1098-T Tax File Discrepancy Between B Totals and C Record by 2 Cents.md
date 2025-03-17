# CR-000174753 - 1098-T Tax File Discrepancy Between B Totals and C Record by 2 Cents

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Billing  
- **Found in Version:** 8.8.5  
- **Identifier:** `e37253b01b44451024818732604bcb53`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-07-23 21:06:06  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In the **1098-T tax file**, the **Box 1 total** in the **B Totals and C Record** occasionally **differed by 2 cents**.  
- Other boxes reconciled correctly, but **Box 1 showed inconsistencies**.  
- The issue arose due to **different decimal place handling in charges and payments**.  

---

## 🔍 Client Impact
- Users encountered **small rounding discrepancies** in **1098-T tax reporting**.  
- The issue **impacted financial accuracy**, causing minor mismatches between **reported amounts in different record types**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- All **monetary values in the 1098-T tax file** are now **truncated to 2 decimal places**.  
- This ensures **consistent calculations** between **B Totals and C Record**, eliminating discrepancies.  

---

🚀 **Status:** **Resolved**
