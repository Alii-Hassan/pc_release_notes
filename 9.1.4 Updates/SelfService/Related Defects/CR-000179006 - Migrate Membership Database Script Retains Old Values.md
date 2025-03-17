# CR-000179006 - Migrate Membership Database Script Retains Old Values

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - System Administrator Module  
- **Found in Version:** 9.1.3  
- **Identifier:** `c5c2dfb01b44451024818732604bcb24`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-04-13 19:40:43  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- When running the **Migratemembershipdatabase.bat** script, the values entered for the **database server and database name** do not update correctly.  
- If the script **fails on the first attempt**, it **retains old values** when rerun, causing repeated execution failures.  

🛠 **Workaround Before Fix:**  
- Navigate to **SSMS** and locate the server(s) where the target databases exist.  
- In **"Server Objects" > "Linked Servers"**, manually **drop the two linked server objects** related to the migration.  
- **Rerun the script** with the correct values.  

---

## 🔍 Client Impact
- Customers **could not successfully migrate** the **membership database** due to **persistent incorrect values**.  
- Manual intervention was required to **delete incorrect linked server references** before rerunning the script.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The script now **automatically deletes any existing linked server** before recreating it with the **correct database information**.  
- This ensures the migration **always uses the most recent values entered by the user**.  

---

🚀 **Status:** **Resolved**
