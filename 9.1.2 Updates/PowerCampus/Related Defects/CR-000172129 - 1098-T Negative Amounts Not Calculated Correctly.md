# CR-000172129 - 1098-T Negative Amounts Not Calculated Correctly

---

## 📌 Product Information  
- **Product Line:** PowerCampus - General  
- **Found in Version:** 8.8.5  
- **Identifier:** `e37253b01b44451024818732604bcb53`  
- **Object/Process:** 1098-T Processing  

---

## ⚠️ Issue Summary  
- **Severity:** 🟢 2 - High  
- **Date Resolved:** 🗓️ 2020-11-23  
- **Created Date:** 🗓️ 2020-02-22 02:42:38  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- During 2019 **1098-T** processing, negative amounts were not calculated correctly for **Box 1** or **Box 4** (adjustment) when the term started on **January 1st**, because the system incorrectly checked if the term start date was greater than January 1st instead of checking if it was **equal to or greater** than January 1st.
- This issue caused terms starting on **January 1, 2019** to be excluded from the calculation.

---

## 🔍 Client Impact  
- **Impact:** Negative amounts were not correctly reported in **Box 1** of the **1098-T** report when charges were applied on the first day of the academic period used for the report's calculations, affecting the accuracy of the form.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The condition that checked if the term started after **January 1st** was corrected to check if the term started **on January 1st or later** to ensure accurate calculation of negative amounts in the **1098-T** report.

🚀 **Status:** **Resolved**
