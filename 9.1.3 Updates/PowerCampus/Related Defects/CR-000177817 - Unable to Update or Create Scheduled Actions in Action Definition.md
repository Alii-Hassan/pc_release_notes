# CR-000177817 - Unable to Update or Create Scheduled Actions in Action Definition

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Academic Records  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-02-01 23:38:55  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- Users were **unable to update or create scheduled actions** in the **Action Definition module**.  
- **Two Major Problems Identified:**  
  1. **Mail Merge Tab Issue**  
     - Users could **select the correct Vista View and form document**.  
     - However, after saving and exiting, the **Mail Merge tab reset to blank** upon re-entry.  
  2. **Error When Creating a New Scheduled Action**  
     - Attempting to **create a new scheduled action** resulted in the following error:  
       ```plaintext
       Your Changes have NOT been made.
       Error Code 515
       Error Message: SQLSTATE = 23000
       Microsoft SQL Server Native Client 11.0
       Cannot insert the value NULL into column ‘MAILING_LIST’,
       Table ‘campus6.dbo.ACTION’; column does not allow nulls.
       Insert fails.
       No changes made to database.
       INSERT INTO ACTION…
       ```

---

## 🔍 Client Impact
- **Users could not update the Mail Merge tab**, causing delays in scheduled actions.  
- **New scheduled actions could not be created**, affecting workflow automation.  
- **Institutions relying on scheduled actions** had to find **manual workarounds**, increasing administrative workload.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Corrected data window retrieval** to ensure **Mail Merge selections persist** after saving.  
- **Modified database logic** to prevent NULL values from causing insert failures.  
- Users **can now create and update scheduled actions** without encountering errors.  

---

🚀 **Status:** **Resolved**
