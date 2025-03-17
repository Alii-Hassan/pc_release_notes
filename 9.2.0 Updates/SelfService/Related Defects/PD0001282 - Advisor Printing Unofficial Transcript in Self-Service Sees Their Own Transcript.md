# PD0001282 - Advisor Printing Unofficial Transcript in Self-Service Sees Their Own Transcript

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.2.0  
- **Identifier:** `3ec213f01b44451024818732604bcb66`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2022-06-17  
- **Created Date:** 🗓️ 2022-06-15 01:00:24  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
When an **advisor** in Self-Service goes to **Manage Advisees**, selects a **student’s profile**, and clicks the **Unofficial Transcript** button, they initially see the **correct student transcript**.  

However, when clicking the **Print** button:  
- The **generated PDF** shows the **advisor's own transcript** instead of the student's.  
- If the advisor has **no academic record**, the **PDF appears blank**.  

---

## 🔍 Client Impact
- Advisors were **unable to print** the correct student transcript.  
- This caused **confusion and incorrect record retrieval**.  
- Potential **data integrity issues** in academic documentation.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **transcript retrieval logic** was corrected.  
- The system now **ensures** the **printed PDF matches the selected student’s transcript**.  
- Proper **role validation** was enforced to prevent unintended record substitution.  

---

🚀 **Status:** **Resolved**
