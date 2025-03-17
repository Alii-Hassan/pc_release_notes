# CR-000160557 - Test Scores Values Are Rounded on Application Forms from Self-Service

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 8.8.3  
- **Identifier:** `70129f301b44451024818732604bcb15`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2022-03-31  
- **Created Date:** 🗓️ 2018-08-22 03:01:55  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
Test scores entered in the Application form via Self-Service were incorrectly rounded to whole numbers instead of retaining their decimal places.

---

## 🔍 Client Impact
- Test scores with decimal values were **rounded up** after submitting an application.
- This affected accuracy in test score records.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- Modified the **service and data access** layers.  
- Test score values are now **read as strings** to accommodate both numeric and alphanumeric inputs.  
- The code **validates test score types** before storing the values, ensuring decimals are preserved and no rounding occurs.

---

🚀 **Status:** **Resolved**
