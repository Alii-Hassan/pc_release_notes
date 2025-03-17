# CR-000179049 - Cannot Add a Payment When No Charges Exist

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-06-29  
- **Created Date:** 🗓️ 2021-04-15 22:22:25  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
- In **Self-Service 9.x**, if a student's account **has no charges or credits**, they **cannot make a payment** to create a **credit balance**.  
- In **Self-Service 8.8.x**, this was **previously allowed**, meaning students could **prepay** even without outstanding charges.  

📌 **Expected Behavior:**  
- Students should be able to **make a payment** even if they **do not have existing charges**.  

📌 **Actual Behavior:**  
- Payment attempts were **blocked** when no charges were present.  

---

## 🔍 Client Impact
- **Students were unable to prepay** tuition or fees when no active charges existed.  
- This led to **inconveniences in financial planning** for students and administrators.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **UI conditions were modified** to **always display the payment card**, even if there are **no charges for the student**.  
- This restores the **functionality from Self-Service 8.8.x**, allowing **prepayments** again.  

---

🚀 **Status:** **Resolved**
