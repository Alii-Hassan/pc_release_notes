# CR-000176737 - WEBAPPAPPR Email Notification Does Not Include Applicant Name

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Admissions  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-11-13 22:46:21  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- The **WEBAPPAPPR email notification** sent to applicants **did not include their name**.  
- The email incorrectly displayed:  
  ```plaintext
  Dear , Your application has been reviewed and you are being considered for admission to our institution.
  ```
- Instead, it should have included the applicant's name, as in:
    ```plaintext
    "Dear John Smith, Your application has been reviewed and you are being considered for admission to our institution."
    ```
---

## 🔍 Client Impact
- Applicants received impersonal notifications, reducing the professionalism and clarity of the admissions process.
- Institutions had to manually verify and correct the issue for communications.
---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The email notification code was modified to properly insert the applicant’s name in the message.
- Now, applicants receive correctly formatted notifications with their name included.

---

🚀 **Status:** **Resolved**


