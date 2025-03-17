# CR-000179542 - Issue with Control Folio Setup in Electronic Degree

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Configuration  

---

## ⚠️ Issue Summary  
- **Severity:** 🔶 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-15  
- **Created Date:** 🗓️ 2021-05-12 22:13:05  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- The **Control Folio setup** in **Electronic Degree** was missing institution and major tokens in the folio setup:
  - **Carrera.Institución #ElectronicDegreeMajor.Name#** (for selecting the major name)
  - **Código.Institución #ElectronicDegreeMajor.Code#** (for selecting the major code)
  
The documentation incorrectly referenced these tokens.

---

## 🔍 Client Impact  
- **Impact:** Incorrect information was displayed in the **Control Folio** when generating the **Electronic Degree**.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A **hotfix** named **PowerCampusWebAdministration_9.1.2_ElectronicDegree_CRS_HotFix01** was applied to include the missing institution and major tokens in the **Control Folio** setup.

🚀 **Status:** **Resolved**
