# CR-000155370 - Unable to Grant Edit or Delete Access Due to EmailAddress Table

## Issue Summary
**Issue:** Users encounter errors when attempting to grant **Edit** or **Delete** access to a **Vista View** that includes the **EmailAddress** table, despite granting access through the **System Admin module**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 8.8.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Attempt to **grant Edit or Delete access** to a **Vista View** that includes the **EmailAddress** table.
2. Verify that access has been assigned via the **System Admin module**.
3. Observe that errors occur, preventing access modification.

---

## Expected Result
- Users should be able to **grant Edit or Delete permissions** for **Vista Views** containing the **EmailAddress** table.

## Actual Result
- Errors occur when attempting to grant **Edit or Delete access**.
- The issue persists regardless of the method used.

## Screenshot
(Attach screenshot if available)

---

## Workaround
Run the following **SQL script** to convert table names to **uppercase** in **ABT_TABLES** and **ABT_TABLESECURITY**:
```sql
UPDATE ABT_TABLES SET TABLE_NAME = UPPER(table_name);
UPDATE ABT_TABLESECURITY SET TABLE_NAME = UPPER(table_name);
```

---

## Additional Information
**Client Impact:**
- Users **cannot modify access** to views that include the **EmailAddress** table.
- Editing and deleting data in **Vista Views** is restricted, causing workflow limitations.

---

## Resolution
- Table names are now **automatically converted to uppercase** in the **PowerBuilder code**, resolving the access issue.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Wide  
**Identifier:** CR-000155370  
**Patch Number:** (If applicable)  
**Created Date:** 2018-03-28  
**Object/Process:** Vista View Access & EmailAddress Table  
**Knowledge Article ID:** (If applicable)

