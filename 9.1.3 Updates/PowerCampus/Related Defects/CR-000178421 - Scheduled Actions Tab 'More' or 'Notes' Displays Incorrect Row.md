# CR-000178421 - Scheduled Actions Tab 'More' or 'Notes' Displays Incorrect Row

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
- **Created Date:** 🗓️ 2021-03-09 02:03:23  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- When a person has **multiple scheduled actions** with the **same Action ID**, clicking on:  
  - **"More"** (for additional details)  
  - **"Notes"** (for extra comments)  
- **Incorrect record information was displayed**.  
- **Example Scenario:**  
  - Clicking **row 2** could show **row 1's details instead**.  

---

## 🔍 Client Impact
- **Users could not reliably access correct scheduled action details**, leading to **confusion and mismanagement**.  
- **Data retrieval inconsistencies** caused workflow issues when reviewing scheduled actions.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Corrected data retrieval logic** to ensure the correct row's details are displayed.  
- **Insufficient testing** in a previous release caused the issue, which has now been **fully resolved**.  

---

🚀 **Status:** **Resolved**
