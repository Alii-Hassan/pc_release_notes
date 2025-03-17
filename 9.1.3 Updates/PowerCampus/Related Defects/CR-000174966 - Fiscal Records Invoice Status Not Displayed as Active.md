# CR-000174966 - Fiscal Records Invoice Status Not Displayed as Active

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - System Administrator Module  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-07 03:27:05  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Fiscal Record Invoice status** was **not displayed as Active**, even though all required information was **created correctly via WebServices**.  
- The **InvoiceRequest table** did not update correctly, leading to a mismatch where:  
  - `InvoiceHeader.InvoiceStatus = 1` (Active),  
  - But the invoice **did not appear as Active** in the **WebAdministration application**.  

🛠 **Workaround Before Fix:**  
- Manually **add parameter `1`** in the **ElectronicFiscalRecordWebServiceSF.ps1** script when invoking the **SetInvoiceRequestStatus operation**.  
- This would correctly **update the invoice status** and **delete the record** from the **InvoiceRequest table**.  

---

## 🔍 Client Impact
- **Invoices did not reflect Active status**, even when the data was correct.  
- **Users had to manually modify PowerShell scripts** to ensure proper invoice status updates.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **SetInvoiceRequestStatus operation** in the **ElectronicFiscalRecordWebServiceSF.ps1** script was **updated to include parameter `1`** by default.  
- This ensures that:  
  - The **invoice status updates correctly**,  
  - The **InvoiceRequest table is cleared properly**,  
  - The **invoice appears as Active in WebAdministration**.  

---

🚀 **Status:** **Resolved**
