# CR-000177044 - Duplicated Issuing Address and Serial Values When Creating PPD Without Default Taxpayer ID

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Cash Receipts  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-12-09 03:24:49  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When creating a **new PPD (Prepaid Payment Document)**, if a **default issuer taxpayer ID** is **not selected**, and there are **more than two issuing addresses and/or series**, the **values for issuing address and serial** fields are **duplicated**.  

---

## 🔍 Client Impact
- **Issuing address and serial values were incorrectly duplicated**, leading to **data discrepancies** when creating a PPD.  
- Users had to manually correct these duplicates, leading to inefficiencies.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **JavaScript code** was **modified** to correctly **refresh the status** of the issuing address and serial fields, ensuring that values are not duplicated.  

---

🚀 **Status:** **Resolved**
