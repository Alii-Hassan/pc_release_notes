# CR-000173199 - Student schedule does not display Saturday and Sunday for "In Cart" items on my advisee page

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟢 4 - Low  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2020-04-23 20:25:32  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- In **Advising > Manage Advisees > My Advisees**, when viewing a student's schedule, **courses in the student's cart** do not display for **Saturday and Sunday**.  
- This issue occurs when the **"courses in cart"** checkbox is selected, and only **Monday through Friday** are shown.

---

## 🔍 Client Impact  
- **Impact:** Students and advisors cannot view weekend classes (Saturday and Sunday) in the **calendar view** of the student schedule.

---

## 🔄 Workaround  
- **Temporary Workaround:**  
  - Use the **List View** for the student schedule.  
  - Switch to **Calendar View** after selecting the list view, and the calendar will display **Sunday through Saturday**.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **calendar component** was refreshed to ensure it accurately considers **Saturday and Sunday** when courses are added or removed.

🚀 **Status:** **Resolved**

