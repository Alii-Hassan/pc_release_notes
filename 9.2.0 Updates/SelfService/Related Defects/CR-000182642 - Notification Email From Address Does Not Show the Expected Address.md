# CR-000182642 - Notification Email "From" Address Does Not Show the Expected Address

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.4  
- **Identifier:** `5bc213f01b44451024818732604bcba7`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2022-03-31  
- **Created Date:** 🗓️ 2021-12-01 18:26:11  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
When sending **notifications** or using the **email feature** in Self-Service, the **"From" address** does not match the **expected sender address** specified in the **Notification setup** or **email feature settings** (e.g., "Send as Logged-In User").  

📌 **Cause:**  
This issue occurs **only when** the **Notifications config file** is set to:  
```plaintext
UseDefaultCredentials = false
```
## 🔍 Client Impact
- Notification emails were sent with an incorrect sender address.
- Users experienced confusion and misattribution of sent emails.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The notification project configuration file was modified.
- Some settings were removed, while others were renamed.
- The configuration file settings are now only used to establish the SMTP connection.

---

🚀 **Status:** **Resolved**