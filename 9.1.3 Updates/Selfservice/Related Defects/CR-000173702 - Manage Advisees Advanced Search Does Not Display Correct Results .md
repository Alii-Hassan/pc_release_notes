# CR-000173702 - Manage Advisees Advanced Search Does Not Display Correct Results  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.0  
- **Identifier:** `4f12df301b44451024818732604bcba3`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-05-22 04:05:16  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When performing an **Advanced Search** under:  
  - **Advising > Manage Advisees > "All Advisees"**,  
- Selecting a specific **advisor** does **not return the expected results**.  
- Instead:  
  - The system **displays advisees for the logged-in user**, **not** the selected advisor.  
  - If the logged-in user **has no advisees**, it incorrectly shows:  
    > "No advisees were found."  

---

## 🔍 Client Impact  
- **Advisors could not retrieve advisees correctly**, making it **difficult to manage students**.  
- **Search criteria were ignored**, causing incorrect search results.  
- **Manual workarounds** were needed, slowing down advisor workflows.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Query condition was corrected**:  
  - The search now **correctly filters** by the **selected advisor’s ID** instead of the logged-in user’s ID.  
- **Search results now display the correct advisees** for the advisor selected.  

---

🚀 **Status:** **Resolved**
