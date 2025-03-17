# CR-000176172 - Low Attendance Warning Displays Incorrectly  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-10-15 23:27:46  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- **Low Attendance warnings were displayed incorrectly** even when no values were entered in:  
  - `Administration > Instructor > Advisor Warnings > Attendance Warning Settings > Excused/Unexcused Absences, Excused/Unexcused Tardiness`.  
- Even after **disabling** attendance warnings, students still received warnings if a number was previously set.  

📌 **Steps to Reproduce:**  
1️⃣ Go to **Advising > Manage Advisee**  
2️⃣ Select a student and check **Attendance**  
3️⃣ Low Attendance message appears **even when the feature is disabled.**  

---

## 🔍 Client Impact  
- **Advisors and students received misleading attendance warnings.**  
- **Confusion for institutions that do not use attendance warnings.**  
- **Workaround:** Users had to manually **set a high threshold** (e.g., `21` for a `20`-meeting course) to prevent warnings.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **lowAttendance variable was updated** to properly validate the **Attendance Warning setting.**  
- Now, warnings **only appear if the feature is enabled and properly configured.**  

---

🚀 **Status:** **Resolved**
