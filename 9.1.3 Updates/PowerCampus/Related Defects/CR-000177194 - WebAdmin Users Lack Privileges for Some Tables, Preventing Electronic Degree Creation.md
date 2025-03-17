# CR-000177194 - WebAdmin Users Lack Privileges for Some Tables, Preventing Electronic Degree Creation

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Cash Receipts  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Web Administration  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-12-17 03:49:12  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- After **upgrading from PowerCampus 9.1.1 to 9.1.2**, installing the **WebAdministration module** for the first time resulted in **errors** due to missing WebAdmin user **privileges for certain tables**.  
- **Errors were logged**, indicating that WebAdmin users did **not have the necessary access rights** to critical tables.  

🛠 **Workaround Before Fix:**  
- Users had to **manually edit the web.config file**, replacing the **WebAdmin username** with `sa` (System Administrator).  

---

## 🔍 Client Impact
- **Users could not generate electronic degrees** because several required pages **lacked authorization**, including:  
  - **Student**  
  - **Institution & Major**  
  - **Issuing Degree**  
  - **Background Studies**  
  - **Preview**  

- **Institutions had to manually override database access**, which was a **security risk** and **not an ideal long-term solution**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Permissions were granted** to the **WebAdmin user** on the necessary tables.  
- Now, WebAdmin users **can generate electronic degrees** without requiring **manual configuration changes**.  

---

🚀 **Status:** **Resolved**
