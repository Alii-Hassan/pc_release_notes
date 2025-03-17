# CR-000180791 - Email Sent for Address Change Request When Not Required

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
- **Created Date:** 🗓️ 2021-07-30 21:35:24  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
When users **edit their address** in **Self-Service**, the system **sends an email** stating that the request is **under review**, even when **approval is not required**.  

📩 **Incorrect Email Example:**  
*"We have received your address request change, and it is being reviewed..."*  

🛠 **Workaround Before Fix:**  
- Disable the **Address Change Approval Notification** if approval is not required.

---

## 🔍 Client Impact
- Users received **incorrect notifications** when updating their address.  
- Miscommunication led to confusion about whether an approval process was necessary.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **UI now validates** the **Requires Approval** setting.  
- The **Address Change Request Submitted** notification is **only sent** when approval is required.  

---

🚀 **Status:** **Resolved**
