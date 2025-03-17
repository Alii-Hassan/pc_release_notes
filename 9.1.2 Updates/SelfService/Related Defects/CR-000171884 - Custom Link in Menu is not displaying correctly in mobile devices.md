# CR-000171884 - Custom Link in Menu is not displaying correctly in mobile devices

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.0.2  
- **Identifier:** `9352db701b44451024818732604bcbb1`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary  
- **Severity:** 🟠 3 - Moderate  
- **Date Resolved:** 🗓️ 2020-12-01  
- **Created Date:** 🗓️ 2020-02-11 20:57:24  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When a **custom link** is created under the **main menu** in **Self-Service** for mobile, the link is displayed incorrectly, being embedded under a menu called **Page Items**.

---

## 🔍 Client Impact  
- **Impact:** Users saw a misleading grouping under **Page Items** in the mobile view, as menus without submenus were incorrectly placed there.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- A note was added in the **Self-Service Administration guide**, detailing how to **rename the Page items tag** for correct display.

🚀 **Status:** **Resolved**

---

## 🔄 Workaround  
- Create the custom link **under the parent menu option** or **main level** without any external link information, then add the **submenu items** with their corresponding external link.

