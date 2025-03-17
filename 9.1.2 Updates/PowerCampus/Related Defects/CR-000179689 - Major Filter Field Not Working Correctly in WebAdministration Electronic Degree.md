# CR-000179689 - Major Filter Field Not Working Correctly in WebAdministration Electronic Degree

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** WebAdministration > Electronic Degree  

---

## ⚠️ Issue Summary  
- **Severity:** 🔶 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-15  
- **Created Date:** 🗓️ 2021-05-21 22:25:03  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- The **Major Filter** field in the **Generate Electronic Degree** and **Electronic Degree Operations** sections was not functioning correctly. 
  - When selecting a major from the dropdown, the filter included a wildcard `%`, causing results to retrieve all majors that contained a similar name instead of filtering by the exact major selected. 
  - Example: Selecting **"LICENCIATURA EN CIENCIA DE DATOS"** would retrieve all majors with names that contain the string, such as **"LICENCIATURA EN CIENCIA DE DATOS AVANZADOS"** and **"LICENCIATURA EN CIENCIA DE DATOS 1"**.

---

## 🔍 Client Impact  
- **Impact:** The **Major Filter** returned inaccurate results by matching all majors that contained the name string, rather than filtering by the exact selected major. This led to broader results than expected.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A **hotfix** named **PowerCampusWebAdministration_9.1.2_ElectronicDegree_CRS_Hotfix01** was applied to resolve this issue by correcting the **Major Filter** functionality to filter accurately based on the exact major name selected.

🚀 **Status:** **Resolved**
