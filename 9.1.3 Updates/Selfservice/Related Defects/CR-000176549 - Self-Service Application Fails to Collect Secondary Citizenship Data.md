# CR-000176549 - Self-Service Application Fails to Collect Secondary Citizenship Data  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-11-03 20:56:58  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- The **Self-Service Application Form** allowed applicants to **enter Secondary Citizenship data**, but this information **was not saved** in PowerCampus.  
- Instead, the field remained **blank** in the system.  

📌 **Steps to Reproduce:**  
1️⃣ Configure an **application form layout** in **Self-Service** to collect "Secondary Citizenship" data.  
2️⃣ Have an applicant **fill out the form** and submit it.  
3️⃣ Check PowerCampus—**Secondary Citizenship field is blank**.  

---

## 🔍 Client Impact  
- **Institutions were unable to track an applicant’s Secondary Citizenship.**  
- **Incomplete records** affected student profile data accuracy.  
- **Mismatch between collected form data and stored records.**  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **service responsible for creating applications** was updated.  
- The system was **incorrectly mapping Secondary Language** to the **Secondary Citizenship field**.  
- **Now, the correct Secondary Citizenship value is stored.**  

---

🚀 **Status:** **Resolved**
