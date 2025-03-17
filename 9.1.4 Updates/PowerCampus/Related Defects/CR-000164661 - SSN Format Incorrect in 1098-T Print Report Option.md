# CR-000164661 - SSN Format Incorrect in 1098-T Print Report Option

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Billing  
- **Found in Version:** 8.8.4  
- **Identifier:** `4b3257701b44451024818732604bcbae`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2019-01-11 21:33:05  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When running the **1098-T process** in **PowerCampus 8.8.4**, the **SSN format** was set to display **only the last four digits** with **X masking** (e.g., `XXXXX1234`).  
- However, in the **Print Report option**, the report **incorrectly displayed the full SSN** instead of the masked format.  
- The **actual 1098-T form** displayed the **correct masked format**, but the **preview report did not apply the mask**.  

---

## 🔍 Client Impact
- The **full SSN was exposed** in the **Print Report option**, raising **data privacy concerns**.  
- Users expected the **masked format** but saw the **entire SSN** instead.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **SSN masking rule** was properly **applied to the 1098-T Print Report**.  
- Now, the report **correctly displays** only the **last four digits** of the SSN, ensuring **data privacy**.  

---

🚀 **Status:** **Resolved**
