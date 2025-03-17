# CR-000153020 - Cannot Add Multiple Classes on Add Tab in Transcripts Workflow

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - Academic Records  
- **Found in Version:** 8.8.1  
- **Identifier:** `35e157301b44451024818732604bcbfc`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2017-12-08 00:47:19  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In the **Transcripts Workflow**, users should be able to:  
  1. **Enter one course**, then **save**.  
  2. **Click the Add tab again** or use **Alt + A** to enter another course.  
- However, this **functionality stopped working**, and **Alt + A** redirected users to the **Transcript tab** instead.  

🛠 **Workaround Before Fix:**  
- Users had to **switch to another tab** and **return** to the **Add tab** to enter another course.  

📌 **Additional Notes:**  
- The issue was **replicated** in **PowerCampus 8.8.3, 8.8.4, and 9.0.1**.  
- A **new defect** was initially created but later linked to this case after validation.  

---

## 🔍 Client Impact
- Users were **unable to quickly add multiple courses** in the **Transcripts Workflow**.  
- **Alt + A no longer functioned as intended**, disrupting workflow efficiency.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Tab sorting logic** in the code was **corrected**.  
- **Alt + A** now correctly **reopens the Add tab**, allowing multiple courses to be added sequentially.  

---

🚀 **Status:** **Resolved**
