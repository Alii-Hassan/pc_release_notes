# CR-000171137 - Comma Displayed on Campus Address Line in Unofficial Transcript

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
- **Created Date:** 🗓️ 2019-12-21 02:46:06  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- The **comma (",")** was incorrectly displayed on the campus address line of the **Unofficial Transcript**, even if no address information was entered for the institution.  
- When the city and state address was not provided, an extra comma would appear after the school name, affecting the appearance of the transcript.

---

## 🔍 Client Impact  
- **Impact:** The extra comma in the address field of the Unofficial Transcript led to an undesirable appearance, even when no address information was available.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The comma was removed when the **City** field in the institution address was empty.

🚀 **Status:** **Resolved**
