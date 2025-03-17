# CR-000176640 - Error Message When Adding Section Fee in New PowerCampus Database

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Billing  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔵 4 - Low  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-11-07 04:31:34  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In a **new PowerCampus database**, an **error message was displayed** when entering a **new fee** in the **Section Fee tab**:  
  `A problem occurred while attempting to create assessment rule.
  Description: SQLSTATE=42000
  Microsoft SQL Server Native Client 11.0
  Incorrect syntax near '('`

- The issue occurred because a required record was missing from the ABT_SETTINGS table, specifically:
    - `AREA_NAME = 'BILLING'`
    - `SECTION_NAME = 'NEXTKEY'`
    - `LABEL_NAME = 'ASSESSMENTRULE'`

## 🛠 Workaround Before Fix:

- Manually insert the missing record into the ABT_SETTINGS table:
```sql
 INSERT INTO ABT_SETTINGS (AREA_NAME, SECTION_NAME, LABEL_NAME, SETTING, CREATE_DATE, CREATE_TIME, 
CREATE_OPID, CREATE_TERMINAL, REVISION_DATE, REVISION_TIME, REVISION_OPID, REVISION_TERMINAL, 
ABT_JOIN, DECIMAL_COLUMN)
VALUES ('BILLING', 'NEXTKEY', 'ASSESSMENTRULE', '000000', GETDATE(), '2020-11-04 10:41:00.000', 
'SCT', '001', GETDATE(), '2020-11-04 10:41:00.000', 'SCT', '001', '*', 0.000);

```
- Alternatively, create an assessment rule manually.

---

## 🔍 Client Impact
- Users could not create assessment rules in a new PowerCampus database.
- Billing setup was incomplete, requiring manual intervention.
---

## ✅ Resolution
🔧 **Fix Implemented:**  
- A default record was added in ABT_SETTINGS with a default value of `000000`.
- This ensures the next key for assessment rules initializes correctly without requiring manual database edits.

---

🚀 **Status:** **Resolved**