# CR-000180084 - Student Profile Information Not Displayed If Future Applicant Record Exists

## Issue Summary
**Issue:** On the **Student Profile**, the **banner** with the student’s **name and image** displays, but:
- The **degree information** is missing.
- **Credits summary, primary program, and contact advisor** do not display.
- The **profile sections are blank** if the student has a **future Applicant record**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.1  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Log in** to **Self-Service** and navigate to the **Student Profile**.
2. If the student has an **active future Applicant record**, the **profile information** does not display.
3. The **banner with the student’s name and image** appears, but the:
   - **Degree information is missing**.
   - **Credits summary, primary program, and contact advisor sections are blank**.

---

## Expected Result
- **All profile details** (degree, credits summary, primary program, contact advisor) should **display correctly**, even if a **future Applicant record** exists.

## Actual Result
- If a **future Applicant record** exists, the **current academic record is not displayed** in the **Student Profile**.

---

## Workaround
- **No workaround available**; students must **manually verify** their academic details through another method.

---

## Client Impact
- **Students with a future application form** for an upcoming term **cannot view their current academic record** in the **Profile tab**.

---

## Resolution
- The **query retrieving the academic record** in the **Student Profile** was **updated** to always **display the latest academic record where `ACADEMIC_FLAG = 'Y'`**.
