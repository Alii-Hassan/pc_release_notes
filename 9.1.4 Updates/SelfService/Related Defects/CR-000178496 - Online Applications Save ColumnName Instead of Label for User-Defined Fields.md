# CR-000178496 - Online Applications Save ColumnName Instead of Label for User-Defined Fields

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-03-11 23:26:14  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **Self-Service 9.1.2**, the **ColumnName** and **ColumnLabel** fields in the **ApplicationUserDefined table** both contained **ColumnName data** instead of their respective values.  
- In **PowerCampus 8.X versions**, the **ColumnName** stored `"NonUploadingxxxxx"`, while the **ColumnLabel** stored the **actual question being asked**.  
- This issue **incorrectly stored user-defined field information**, affecting **online application data integrity**.  

---

## 🔍 Client Impact
- User-defined field data was **not saved correctly** in the database.  
- **Online applications** that relied on user-defined fields contained **incorrect information**, leading to potential processing errors.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **property names were corrected** to ensure that the **ColumnLabel** field correctly stores the **user-defined question text**.  
- The database now correctly **distinguishes between ColumnName and ColumnLabel** values.  

---

🚀 **Status:** **Resolved**
