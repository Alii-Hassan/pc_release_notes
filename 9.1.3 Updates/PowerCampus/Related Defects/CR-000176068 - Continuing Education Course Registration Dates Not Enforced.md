# CR-000176068 - Continuing Education Course Registration Dates Not Enforced

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-10-09 22:53:03  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In **Self-Service**, when configuring **Continuing Education (Con Ed) course registration**, users can set:  
  - **Registration Open Date**  
  - **Registration Close Date**  
- However, these dates **did not control registration availability for future terms**.  
- As a result, **students could register for Con Ed courses** outside the defined **registration window**, even when the course **start date was outside the allowed period**.  

---

## 🔍 Client Impact
- **Students could register for courses prematurely** or outside the **intended registration period**.  
- Institutions **lost control over Con Ed registration windows**, leading to **potential scheduling conflicts**.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Start and End Dates are now validated correctly** in Self-Service.  
- **Students can only register for Con Ed courses within the allowed registration period**, as per configuration settings.  

---

🚀 **Status:** **Resolved**
