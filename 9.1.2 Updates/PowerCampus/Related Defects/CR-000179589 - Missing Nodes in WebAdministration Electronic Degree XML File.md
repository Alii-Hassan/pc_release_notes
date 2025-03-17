# CR-000179589 - Missing Nodes in WebAdministration Electronic Degree XML File

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** WebAdministration > Electronic Degree  

---

## ⚠️ Issue Summary  
- **Severity:** 🔶 2 - High  
- **Date Resolved:** 🗓️ 2021-06-15  
- **Created Date:** 🗓️ 2021-05-15 04:04:50  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- Missing nodes for **Social Service** and **Expedition** in the generated XML file for **Electronic Degree**. Specifically:
  - **Social Service Node:** 
    - `IDFundamentoLegalServicioSocial`
    - `FundamentoLegalServicioSocial`
  - **Expedition Node:** 
    - `IDModalidadTitulación`
    - `ModalidadTitulación`
    
These fields were required for proper XML file generation but were missing in the **webadmin.ElectronicDegreeRequest** table.

---

## 🔍 Client Impact  
- **Impact:** The missing fields prevented the proper generation of the **Electronic Degree XML file**, affecting data completeness for **Social Service** and **Expedition** information.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A **hotfix** named **PowerCampusWebAdministration_9.1.2_ElectronicDegree_CRS_HotFix01** was applied to include the missing nodes in the XML file.

🚀 **Status:** **Resolved**
