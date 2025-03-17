# CR-000174149 - "Ñ" Character is not displayed correctly when the XML file is downloaded from Fiscal Records Application

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General - Cash Receipts  
- **Found in Version:** 8.8.3  
- **Identifier:** `8d2213701b44451024818732604bcbd4`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔵 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-07-28  
- **Created Date:** 🗓️ 2020-06-16 04:04:24  
- **Affected Language(s):** 🌐 Spanish  

🔹 **Issue:**  
- In the **Fiscal Records** module, when the electronic fiscal record was returned from the provider and the XML file was downloaded, if the **Receiver** or **Issuer taxpayer** names contained the character "Ñ", it was replaced with "?" in the downloaded XML file.

---

## 🔍 Client Impact  
- **Impact:** Users experienced incorrect encoding of the "Ñ" character when downloading XML files from Fiscal Records in PowerCampus.

---

## 🔄 Workaround  
- **No workaround required**, as the issue has been fixed with the update.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **UTF-8 encoding** was applied to the XML files to ensure correct display of special characters like "Ñ".

🚀 **Status:** **Resolved**
