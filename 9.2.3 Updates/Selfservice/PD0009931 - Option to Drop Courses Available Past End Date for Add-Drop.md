# PD0009931 - Option to Drop Courses Available Past End Date for Add/Drop

## Issue Summary
**Issue:** If a **term has multiple sessions**, and one session is **closed** for registration while another remains **open**, students **still see the drop option** for courses in the closed session.  
When they attempt to **drop a course past the add/drop deadline**, they receive a **"Course is successfully dropped"** message, but the course **remains in their schedule** because the drop period has ended.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Setup a registration group** where the **end of registration** is determined by the **academic calendar**.
2. **Ensure**:
   - One session in the term has **passed the add/drop deadline**.
   - Another session in the same term is **still open for add/drop**.
3. **Student registers** for a course in the **closed session**.
4. **Student views their cart** and sees the course **with a trash can icon** (indicating they can drop it).
5. **Student attempts to drop the course**.
6. **Message displayed:** *"Course is successfully dropped."*
7. **Actual behavior:** The **course remains** in the student's schedule since it is past the registration deadline.

---

## Expected Result
- **Students should not see the trash can icon** for courses in sessions where **the add/drop period has ended**.
- If they attempt to drop, they should receive an **accurate error message** stating that **it is past the deadline to drop**.

## Actual Result
- The **trash can icon is visible** even for courses that **cannot be dropped**.
- If a student tries to drop the course, **an incorrect success message** appears.
- The course **remains in the student's schedule** despite the drop attempt.

---

## Client Impact
- **Students receive incorrect feedback** when attempting to drop courses past the deadline.
- **Confusion** arises as courses remain in the schedule **despite the success message**.
- **Advisors and support staff** may receive unnecessary inquiries about why courses are not being dropped.

---

## Resolution
- A **new property** has been added to **hide the trash can icon** for courses **after the add/drop deadline**.
- The **incorrect success message** no longer appears for courses that **cannot be dropped**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0009931  
**Patch Number:** (If applicable)  
**Created Date:** 2023-09-12  
**Object/Process:** Course Drop Functionality  
**Knowledge Article ID:** (If applicable)
