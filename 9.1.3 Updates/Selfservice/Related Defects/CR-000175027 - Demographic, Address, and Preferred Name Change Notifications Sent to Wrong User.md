# CR-000175027 - Demographic, Address, and Preferred Name Change Notifications Sent to Wrong User  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.0  
- **Identifier:** `4f12df301b44451024818732604bcba3`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-08-12 01:33:19  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In **Self-Service**, when a request for **Demographic, Address, or Preferred Name changes** was **approved or denied**, the **notification was sent to the person who approved/denied the request**, instead of being sent to the **user who submitted the request**.  
- This caused confusion, as users were **not informed** about the status of their request.  

📌 **Expanded Issue (Identified on Jan 5th):**  
- The **same behavior** was confirmed for **Address and Preferred Name change requests**.  

---

## 🔍 Client Impact  
- **Users were not notified** when their demographic change requests were **approved or denied**.  
- **Administrators received unnecessary notifications**, leading to potential confusion.  
- **Lack of transparency** in the change request process.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Modified the Administration/Requests page code** to retrieve the **correct Person ID** of the **request submitter**.  
- Now, **notifications are correctly sent** to the **user who submitted the request**, rather than the approver.  

---

🚀 **Status:** **Resolved**
