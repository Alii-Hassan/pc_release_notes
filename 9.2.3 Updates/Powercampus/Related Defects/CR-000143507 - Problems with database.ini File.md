# CR-000143507 - Problems with database.ini File

## Issue Summary
**Issue:** When clients have multiple databases set up in the **database.ini** file, the system does not correctly remember the last connected database. Instead, it defaults to selecting the **Campus6_Dev** database, even if the user previously connected to **Campus6**.

**Severity:** 4 - Low  
**Product Line:** PowerCampus  
**Found in Version:** 8.6.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Configure multiple databases in the **database.ini** file with the following names:
   - `Campus6_Test`
   - `Campus6_Dev`
   - `Campus6`
2. Log in and select **Campus6** as the database to connect to.
3. Log out and log back in.
4. Notice that **Campus6** is not highlighted as the previously connected database; instead, **Campus6_Dev** is selected by default.

---

## Expected Result
- The **previously connected database** (`Campus6`) should be **highlighted** when the user logs in again.

## Actual Result
- The system defaults to **Campus6_Dev**, even if the user was last connected to **Campus6**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users may **accidentally connect to the wrong database** when multiple databases exist in **database.ini**.
- This could lead to **data inconsistencies** if users unknowingly work in the wrong environment.

---

## Resolution
- The **database selection function** was modified to:
  - Search for the **exact database name match** instead of using a **`LIKE` clause**.
  - Ensure that the **previously connected database** is correctly highlighted upon login.

---

## Related Information
**Product Line/Product:** PowerCampus - System Administrator  
**Identifier:** CR-000143507  
**Patch Number:** (If applicable