# CR-000171814 - Application Forms Do Not Validate Government ID Format

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2020-02-07 00:01:17  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- Applicants could enter **dashes or spaces** in the **Government ID** field in **Self-Service application forms**.  
- The **Admissions area** could not detect these extra characters during the **application handling process**.  
- Once the application was pulled into PowerCampus, the **Government ID/SSN field** was **truncated to 9 digits**, resulting in **bad data**.  
- This also allowed **duplicate Government IDs** to be entered into the system.  
- The **bad Government ID data** caused **errors in PowerFAIDS Integration**.  

---

## 🔍 Client Impact
- **Incorrect Government ID entries** in PowerCampus.  
- **Duplicate Government IDs** allowed due to improper validation.  
- **Errors in PowerFAIDS Integration** due to unrecognized data format.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- Added the **mask property** to the **TextField** component.  
- The system now **applies the correct mask** based on the **Government ID format** defined in **System Formats**.  
- Ensured that **only valid characters** are accepted in the **Government ID field**.  

---

🚀 **Status:** **Resolved**
