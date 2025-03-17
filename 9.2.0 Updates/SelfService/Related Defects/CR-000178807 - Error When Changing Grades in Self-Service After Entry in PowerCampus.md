# CR-000178807 - Error When Changing Grades in Self-Service After Entry in PowerCampus

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2022-03-31  
- **Created Date:** 🗓️ 2021-03-30 21:20:56  
- **Affected Language(s):** 🇺🇸 English (US)  

🔹 **Issue:**  
When a faculty member attempts to change a **final grade** in the **Overall Grades** section of Self-Service after it has been entered in PowerCampus, an error message is retrieved:  

❌ **Error Message:**  
*"There was an error in PowerCampus Self-Service. Try again."*

🔍 **Error Log Reference:**  
`Exception of type 'SctPC.Framework.Data.RecordNotFoundException' was thrown. Layer: SelfServiceUnifier.Services.GradesService`

---

## 🔄 Steps to Reproduce

### **Prerequisites**
- A **final grade** has been entered in PowerCampus for a specific course.

### **Steps**
1. In **Self-Service**, log in as **Faculty** for the selected course.  
2. Navigate to **Classes > Course Management**, then select the **period and course**.  
3. Go to **Overall Grades**, select the student's **approved final grade**, and attempt to modify it.  
4. **Result:** The error message is retrieved, preventing the grade change.

---

## 🔍 Client Impact
- Faculty members were **unable to modify submitted grades** in Self-Service.  
- This issue disrupted academic record adjustments and grade corrections.

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **logic and stored procedures** were modified to handle grade updates properly.  
- If a student grade **already exists**, the system **updates** the record.  
- If no record exists, the system **creates a new entry** instead of failing.

---

🚀 **Status:** **Resolved**
