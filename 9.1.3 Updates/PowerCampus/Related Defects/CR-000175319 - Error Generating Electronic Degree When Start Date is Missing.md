# CR-000175319 - Error Generating Electronic Degree When Start Date is Missing

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Academic Records  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-29 02:34:10  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- According to **regulatory documentation**, the **Start Date** field in **Background Studies** is **optional** when generating an **Electronic Degree**.  
- However, in **WebAdministration**, if the **Start Date** field was left blank, an **error message** was triggered, preventing degree generation:  

  `"An error occurred while processing your request to generate an electronic degree. 
  Please, review the log files for more details."`
- Regulatory Reference:
  - The Diario Oficial de la Federación states that if the Start Date is unavailable, it should default to "YYYY-01-01" format.

## 🛠 Workaround Before Fix:

- Users had to manually enter a Start Date in the Education tab for previous studies.
---

## 🔍 Client Impact
- Users were unable to generate Electronic Degrees if the Start Date was missing, despite it being an optional field.
- Manual data entry was required, adding unnecessary complexity.
---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The End Date property was changed to a required value, ensuring compliance while allowing the Start Date field to remain optional.
- Now, users can generate an Electronic Degree without entering a Start Date, as per regulatory guidelines.

---

🚀 **Status:** **Resolved**