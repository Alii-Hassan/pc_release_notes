# CR-000178402 - Custom Script Field Not Working for User-Defined Fields in Application Form

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-03-06 04:04:21  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- The **Self-Service Application documentation** states that users can **add a Custom Script** to **user-defined fields** for specific behaviors (e.g., initializing values or adding functionality).  
- However, this **feature was not working** for any user-defined field in the **Application Form**, **except for Checkbox fields**.  

📌 **Expected Behavior:**  
- Custom scripts should function for all user-defined fields.  

📌 **Actual Behavior:**  
- Custom scripts **only worked for Checkbox fields**, while other fields did not support the feature.  

---

## 🔍 Client Impact
- Users were **misled** by the documentation, believing they could apply scripts to all user-defined fields.  
- Customization for application forms was **limited**, affecting user experience and flexibility.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- A **condition was added** in the **Form Builder** to explicitly **allow custom scripts only for Checkbox fields**.  
- The documentation and behavior are now **consistent**, preventing confusion.  

---

🚀 **Status:** **Resolved**
