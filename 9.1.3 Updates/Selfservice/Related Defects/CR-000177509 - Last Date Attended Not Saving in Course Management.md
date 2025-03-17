# CR-000177509 - "Last Date Attended" Not Saving in Course Management  

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5792d7b01b44451024818732604bcbd9`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2021-01-14 22:50:52  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In **Self-Service > Classes > Course Management**, the "Last Date Attended" field is **not saving or updating** if:  
  - **A) No value is selected** from the "Overall Attendance" dropdown list.  
  - **B) A previous value was entered** for "Overall Attendance" but remains unchanged.  
- Even though the **"Changes Saved"** message appears, the information **is not stored**.  

📌 **Steps to Reproduce:**  
1️⃣ Navigate to **Self-Service > Classes > Course Management**.  
2️⃣ Go to the **Overall Attendance** section for a specific course.  
3️⃣ Try updating the **"Last Date Attended"** field **without changing** the **Overall Attendance** dropdown.  
4️⃣ Click **Save** – the system **shows "Changes Saved"**, but the data **does not update**.  

---

## 🔍 Client Impact  
- **Students' attendance records may be incomplete** due to missing last attendance dates.  
- Faculty cannot track students' **last attendance accurately** without modifying the "Overall Attendance" field.  
- Schools relying on attendance records for **academic tracking or financial aid** may face **data inconsistencies**.  

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- **Modified the saving criteria** to allow updates to the "Last Date Attended" field, even when the "Overall Attendance" dropdown is not changed.  

🚀 **Status:** **Resolved**
