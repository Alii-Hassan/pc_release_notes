# CR-000174775 - Self-Service 9.1.1 Does Not Display When Using ADFS Authentication

---

## 📌 Product Information  
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `1f92d7b01b44451024818732604bcbd2`  
- **Object/Process:** Self-Service  

---

## ⚠️ Issue Summary  
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2020-07-31  
- **Created Date:** 🗓️ 2020-07-24 23:10:40  
- **Affected Language(s):** 🌐 English  

🔹 **Issue:**  
- When **Self-Service 9.1.1** is configured to use **ADFS authentication**, and a user with an ADFS `userstoreid` attempts to log in, they are redirected to the **ADFS login page**. After entering the correct credentials, the user is redirected back to **Self-Service** but lands on the **Self-Service login page** again, instead of being taken directly to the authenticated page with menu items.

---

## 🔍 Client Impact  
- **Impact:** Users are unable to log in when Self-Service is set up to use **ADFS authentication**.

---

## 🔄 Workaround  
- **No workaround** was provided. The issue was addressed in the hotfix.

---

## ✅ Resolution  
🔧 **Fix Implemented:**  
- The issue was caused by a **CookieName** attribute in the **AD FS startup configuration** that conflicted with the system. This conflicting code was removed, resolving the issue.

🚀 **Status:** **Resolved**  
- **Patch:** **SELFSERVICE_HOTFIX_9.1.1_CR-000174775.zip** was released to address the problem.
