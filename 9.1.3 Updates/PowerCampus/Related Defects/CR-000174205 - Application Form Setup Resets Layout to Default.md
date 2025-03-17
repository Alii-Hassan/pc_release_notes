# CR-000174205 - Application Form Setup Resets Layout to Default

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Admissions  
- **Found in Version:** 9.0.2  
- **Identifier:** `9f52db701b44451024818732604bcbad`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-06-18 01:16:46  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When editing an **Application Form Setup** **without first selecting a specific application form** from the **dropdown list**, the **Layout tab automatically resets** to the **default application form**.  
- If an alternative layout was selected, **saving the application setup replaces it with the default layout**.  

🛠 **Workaround Before Fix:**  
- Before saving, users had to **manually verify and reselect the correct layout** on the **Layout tab**.  

---

## 🔍 Client Impact
- Users **accidentally lost custom application layouts**, requiring **manual corrections**.  
- The **default application form was incorrectly applied**, causing **inconsistencies in application form setups**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **Power Builder code** was updated to ensure the **application form retains the selected layout** when saving.  
- Now, **custom layouts remain intact** even if the user does not manually select the application form from the dropdown.  

---

🚀 **Status:** **Resolved**
