# CR-000173560 - Account from ConEd Registration or Saving Application can't be created

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2020-05-13 23:04:30  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When using a fresh database installed on **9.0.2** or after an upgrade from **8.8.x** to **9.1**, records are missing from the **auth.IdentityApplicationConfig** table.  
- When an account for an anonymous user is created, the following error message is shown:  
  "There is an account already associated with this email. Sign in or try with a different email."

---

## 🔍 Client Impact  
- **Impact:** Users are unable to create new accounts in **Continuing Education** or the **Application** pages due to the error.

---

## 🔄 Workaround  
- **Temporary Workaround:**  
  - Manually add the record to the **Identity DB** table **IdentityApplicationConfig** with `IdentityApplicationID=2` and `/PowerCAMPUS`.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **installer** was modified to ensure that a record is created in the **IdentityApplicationConfig** table for all application records in the **IdentityApplication** table.

🚀 **Status:** **Resolved**

