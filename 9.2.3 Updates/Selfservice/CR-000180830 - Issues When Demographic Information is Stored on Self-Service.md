# CR-000180830 - Issues When Demographic Information is Stored on Self-Service

## Issue Summary
**Issue:**  
- When a user **updates their Visa/Citizenship status** in **Self-Service**, the information is stored **without** an associated **Academic Year (Y) / Academic Term (T) / Academic Session (S)**.
- If any other **Demographic field** is updated, the **last value** for **Visa/Citizenship** is **overwritten** on the **demographic record** with **no Y/T/S association**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Update** the **Visa/Citizenship status** in **Self-Service**.
2. **Check** the database entry for the **Visa/Citizenship fields**.
3. **Observe** that the update is **saved without Y/T/S**.
4. **Modify** any other **Demographic field**.
5. **Check** the **demographic record** again and see that **Visa/Citizenship fields are overwritten**.

---

## Expected Result
- Updates to **Visa/Citizenship** should be **properly stored** in the **database**.
- Changes to **other demographic fields** should **not affect Visa/Citizenship values**.

## Actual Result
- **Visa/Citizenship data is overwritten** when other **Demographic fields** are updated.
- **No Academic Year (Y), Term (T), or Session (S) is linked** to the record.

---

## Workaround
- **No direct workaround available**. Admins must **manually review and update records**.

---

## Client Impact
- **Incorrect demographic data** stored for students.
- **Loss of Visa/Citizenship information** when updating demographics.
- **Potential compliance issues** due to missing **academic term/session** associations.

---

## Resolution
- **Visa and Citizenship fields** are now **excluded** from **Y/T/S record updates** to prevent **overwriting issues**.
