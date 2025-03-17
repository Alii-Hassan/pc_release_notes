# CR-000144459 - Unable to View Violation Details  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 8.6.1  
- **Identifier:** `fe7113fc1b04451024818732604bcb7c`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2016-11-30 03:01:39  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When violations are set up in Self-Service (via Administration/PowerCampus Setup/Advisor Warnings) and Period Filters are selected, a warning symbol appears next to the Advisee's name indicating a violation (e.g., Violation Committed). However, the warning doesn't provide any details about which class, year/term, or what specific violation was committed.

---

## 🔍 Client Impact  
- **Impact:** Advisors are unable to view relevant details about student violations such as the course, year/term, or the specific violation. This limits the ability to address the issues or provide guidance.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A new **Alert Report** was added for advisors, allowing them to view the alerts related to a student, broken down by course and term. The alert report is also available for the student to see.

🚀 **Status:** **Resolved**
