# CR-000173114 - Name format ordering by field with NULL values retrieves an error

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2020-04-17 20:48:13  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- If the **Name format** is set up to allow **NULL values**, and the fields are included in the **Order List By** clause, an **Error message** is generated. This error prevents data from being loaded in certain areas, such as:
  - Section > Section Search
  - Registration > Courses

---

## 🔍 Client Impact  
- **Impact:** Users are unable to view results on pages like **Section Search** or **Registration Courses** due to the error when NULL values are included in the order.


---

## 🔄 Workaround  
- **Temporary Workaround:**  
  - Go to **Administration > Name formats**.  
  - Select the corresponding **Name format** and edit it.  
  - Remove **Suffix** from the "Order List by" clause and replace it with **NONE**.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **SuffixDesc** attribute was renamed to **Suffix** to resolve the error.

🚀 **Status:** **Resolved**
