# CR-000175821 - PPD (Partial Payment Fiscal Record) Creation Failure

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Cash Receipts  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 1 - Critical  
- **Date Resolved:** 🗓️ 2020-10-02  
- **Created Date:** 🗓️ 2020-09-25 00:00:56  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Problem:** The **Partial Payment Fiscal Record (PPD)** could not be created in the **PowerCampus Web Administration Fiscal Records**. This issue occurred because no information was displayed in the **Charges** section for a specific person, preventing the creation of the **PPD**.

---

## 🔍 Client Impact  
- **Impact:** Users were unable to create **Partial Payment Fiscal Records** due to missing charge information in the **Fiscal Records** section.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a conflict in **endpoint route names** between the **UI** and **services**, which prevented the correct functionality of **PPD creation**. The **endpoint configuration** was updated to resolve this issue.

🚀 **Status:** **Resolved**
