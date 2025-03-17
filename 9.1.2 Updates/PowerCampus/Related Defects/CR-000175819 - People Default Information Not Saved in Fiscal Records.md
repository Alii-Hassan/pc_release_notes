# CR-000175819 - People Default Information Not Saved in Fiscal Records

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Cash Receipts  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 2 - High  
- **Date Resolved:** 🗓️ 2020-10-02  
- **Created Date:** 🗓️ 2020-09-24 23:40:17  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Problem:** The **People Default information** (such as **TaxPayer ID**, **Name/Corporate Name**, **Email**, and **CFDI use**) was not being saved on the **PowerCampus Web Administration Fiscal Records** page. Despite the message **"Save was successful"**, no data was being stored in the **InvoicePreferredTaxPayer** table.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to save the **default fiscal information** in the **Fiscal Records** section, causing discrepancies in saved data.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a conflict in **endpoint route names** in the **UI** and **services**, which prevented data from being saved correctly. This was resolved by updating the **endpoint configuration** to ensure data was saved in the **InvoicePreferredTaxPayer** table.

🚀 **Status:** **Resolved**
