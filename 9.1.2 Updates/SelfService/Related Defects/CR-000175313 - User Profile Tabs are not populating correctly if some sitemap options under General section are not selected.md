# CR-000175313 - User Profile Tabs are not populating correctly if some sitemap options under "General" section are not selected

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** User Profile  

---

## ⚠️ Issue Summary  
- **Severity:** 🟡 2 - High  
- **Date Resolved:** 🗓️ 2020-11-30  
- **Created Date:** 🗓️ 2020-08-28 21:06:10  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- **Profile Tab Population Issue:**  
  If not all claims are selected under the **General section** (e.g., Profile, Profile.Account, Profile.Addresses, Profile.Agreements, Profile.Demographic, Profile.PhoneNumbers, Profile.PreferredName), when assigning the sitemap options for a specific role in the **UserManagement** application, the **User Profile** tab does not display the correct information associated with the tab.
  
  - **403 Forbidden Error:** When users are given a role that has permission for **General > Profile.PreferredName**, they are unable to access **Preferred Name** and receive a **403 - Forbidden** error.

---

## 🔍 Client Impact  
- **Impact:** Users encountered incorrect or missing content in their **Profile pages** and **tab names**. In some cases, users could not access their profile information due to error messages.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The **claims** used for the **Preferred Name** tab on the **profile** and the **Preferred Name** tab on the **Administration/Requests page** were not functioning correctly. Now, each functionality uses its own claims to set the correct position of each tab on the profile page.

🚀 **Status:** **Resolved**
