# CR-000177045 - Payment Success Message Not Displayed for Unauthenticated Users  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `91f9a36b977f81105154d004a253affa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-12-09 03:38:33  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Unauthenticated applicants** who **submit an application and make a payment** in Self-Service **do not receive a success message** confirming their payment.  

📌 **Steps to Reproduce:**  
1️⃣ Access **Self-Service** as an **unauthenticated user**.  
2️⃣ Fill out an **application form**.  
3️⃣ Proceed to **make a payment**.  
4️⃣ After successful payment, **no confirmation message appears**.  

---

## 🔍 Client Impact  
- Applicants may **think their payment failed** when it was actually successful.  
- **Unclear user experience** for unauthenticated users.  
- Increased **support inquiries** regarding payment status.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue occurred because **Self-Service expected a `personId`**, but unauthenticated users **did not have one assigned**.  
- **Fix:** When `personId` is `null`, the system **now assigns `personId = 0`**, ensuring the **payment confirmation message displays correctly**.  

---

🚀 **Status:** **Resolved**
