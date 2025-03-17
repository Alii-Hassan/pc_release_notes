# CR-000178448 - Fiscal Record Payment Receipt Supplement Saves Incorrect Information

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Billing  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Fiscal Records  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-11  
- **Created Date:** 🗓️ 2021-03-10 01:01:09  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When **creating a Payment Receipt supplement (PPD)** in **Fiscal Records**, the system:  
  - Pulled **Issuer default setup values** from **Fiscal Records Setup**  
  - **Ignored the manually entered Issuer information** from the UI  

🛠 **Temporary Workaround Before Fix:**  
- Users had to **manually change the Issuer Taxpayer ID** in **Fiscal Records Setup** before creating a **Payment Receipt supplement**.  

---

## 🔍 Client Impact
- **Users could not save correct Issuer details** for payment receipt supplements.  
- **PPD records were generated with incorrect values**, requiring **manual correction**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **JavaScript code was updated** to ensure the **correct information is refreshed and saved**.  
- Now, the **entered Issuer details** are correctly stored instead of pulling default setup values.  

---

🚀 **Status:** **Resolved**
