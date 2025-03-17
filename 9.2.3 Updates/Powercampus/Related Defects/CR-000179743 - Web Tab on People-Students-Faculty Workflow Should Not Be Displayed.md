# CR-000179743 - Web Tab on People/Students/Faculty Workflow Should Not Be Displayed

## Issue Summary

**Issue:** The **Web Tab** is available in certain workflows (**People, Students, Faculty**), but it no longer has any impact on any process in **PowerCampus** and should not be accessible.

**Severity:** 4 - Low\
**Product Line:** PowerCampus\
**Found in Version:** 9.1.3\
**Resolution Date:** 2023-12-15

---

## Replication Steps

1. Navigate to **Academic Records**.
2. Access the **Faculty, Students, or People** workflow.
3. Observe that the **Web Tab** is still present despite having **no functional impact**.

---

## Expected Result

- The **Web Tab** should **not be displayed** since it has no effect on any process.

## Actual Result

- Users can still **access the Web Tab**, even though it serves no purpose.

## Screenshot

(Attach screenshot if available)

---

## Workaround

- **Remove the permissions** for the Web Tab by updating **granted rights**:
  - **Setflow:** Academic Records
  - **Workflow:** Faculty/Students/People
  - **Child Window:** Faculty/Students/People
  - **Option:** Web (Read/Save/Delete)

---

## Additional Information

**Client Impact:**

- **PowerCampus users are able to access a deprecated tab**, which may cause confusion.

---

## Resolution

- The **`d_ff_people_web_access`** datawindow was **deleted**, along with any reference to the object.
- **All references to the Web Tab** from all **ABT tables** were **removed**.

---

## Related Information

**Product Line/Product:** PowerCampus - General - Academic Records\
**Identifier:** CR-000179743\
**Patch Number:** (If applicable)\
**Created Date:** 2021-05-26\
**Object/Process:** Web Tab Removal from Workflows\
**Knowledge Article ID:** (If applicable)

