# CR-000179756 - People ID Not Displayed Correctly and Information Not Saved in Web Administration > Fiscal Records > Default Values

---

## 📌 Product Information
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.3  
- **Identifier:** `81c2dfb01b44451024818732604bcb21`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-05-27 03:41:58  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When the **Format ID** was set to **X########**, the **People ID** was incorrectly displayed in **Fiscal Records > Default Values**.  
- The **last digit was truncated**, and an **extra 'a' character** appeared at the beginning of the ID.  

📌 **Example:**  
- Correct People ID: `PA00000015`  
- Displayed People ID: `Aa0000001`  
- Additionally, **information entered in Default Values was not saved correctly**.  

📌 **Note:**  
- This issue **did not occur** when the **Format ID** was set to `#########` (numbers only).  

---

## 🔍 Client Impact
- **People IDs were displayed incorrectly**, causing **confusion and data mismatches**.  
- **Default Values information was not saved**, leading to **incomplete fiscal records**.  
- **Institutions relying on People ID masks experienced inaccuracies in the system**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **mask was incorrectly applied** when **alpha characters were previously added** in PowerCampus back office.  
- The **masking logic was corrected**, ensuring **People IDs display properly** and **Default Values information saves correctly**.  

---

🚀 **Status:** **Resolved**
