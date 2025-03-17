# CR-000169790 - Cannot Modify Theme as Required

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.1  
- **Identifier:** `5b52db701b44451024818732604bcbaa`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🟡 3 - Moderate  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2019-10-14 19:39:14  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- Users were unable to fully **customize the theme** in Self-Service due to several **limitations and inconsistencies**:  
  1. **Primary Color Change Issue:**  
     - Selecting a **Primary Color** other than the default (`#5353D1`) changed the **background behind the logo**, but **turned the menu bar white**.  
  2. **Case Sensitivity in Color Codes:**  
     - Changing the color from `#5353D1` to **lowercase** (`#5353d1`) caused the color to display correctly in **preview mode**, but only affected the **logo background** instead of the menu items.  
  3. **Background Image Gradient Issue:**  
     - When selecting a **custom background image**, the system **automatically applied a grey gradient** (dark-to-light) from **top to bottom**, **distorting the intended appearance**.  
  4. **Forced URL and Alt Text Requirements:**  
     - If modifying **any setting** in the **default theme**, users were required to provide values for **all URL and alternative text settings**.  
     - This prevented users from **changing just the colors** while keeping the **default logos and images**.  

---

## 🔍 Client Impact
- **Users could not apply the desired theme modifications** due to forced settings and visual inconsistencies.  
- **Theme customization was restricted**, making it difficult to **maintain brand identity**.  
- **Background images were unintentionally modified**, reducing design flexibility.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Only primary and secondary colors** are now **mandatory fields**.  
- **All other fields (URLs, Alt Text, Background Images) are now optional**, allowing users to modify only the elements they need.  
- **Gradient overlay on custom backgrounds was removed**, ensuring **proper display of selected images**.  
- **Color case sensitivity issues were resolved**, ensuring **consistency across preview and live modes**.  

---

🚀 **Status:** **Resolved**
