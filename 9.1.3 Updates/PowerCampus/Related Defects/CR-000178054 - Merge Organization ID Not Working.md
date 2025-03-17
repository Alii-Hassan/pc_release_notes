# CR-000178054 - Merge Organization ID Not Working

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - System Wide  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-02-13 01:49:51  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When attempting to **merge an Organization ID**, users received the **"Merge is Complete"** message.  
- However, the **organizations were not actually merged** in the system.  

---

## 🔍 Client Impact
- **Users were unable to merge organization records**, causing **data duplication issues**.  
- **Organizations remained separate**, despite the system indicating a successful merge.  
- **Administrators had to manually verify records**, increasing workload.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Missing tables were added** to the **merge process**.  
- The **merge logic was updated** to **include objects under the WebAdmin schema**.  
- Now, **organization IDs merge correctly**, and records are properly consolidated.  

---

🚀 **Status:** **Resolved**
