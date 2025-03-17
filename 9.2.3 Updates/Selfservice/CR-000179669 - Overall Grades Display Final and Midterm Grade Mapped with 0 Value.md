# CR-000179669 - Overall Grades Display Final and Midterm Grade Mapped with 0 Value

## Issue Summary
**Issue:** In the **Overall Grades** page, the **Midterm and Final Grade** dropdowns incorrectly display a default value of **‘0’** instead of a blank value when no activities are set up for a course.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Ensure **Grade Mappings** are set up for the course with the corresponding credit type.
2. Configure **Midterm Minimum %** and **Final Minimum %** to **0**.
3. Open the **Overall Grades** page for a course **without** any activities.
4. Observe that:
   - The **Midterm and Final Grade** dropdowns display **‘0’** by default instead of a blank value.
   - In **previous versions**, these fields were preset to a **blank** value.

---

## Expected Result
- The **Midterm and Final Grade** dropdowns should **default to a blank value** when no activities are set up.

## Actual Result
- The dropdowns **default to ‘0’**, causing incorrect grade selection.

---

## Workaround
- **None available**; users must **manually update** the grade field.

---

## Client Impact
- Courses **without grades** were **saving an ‘F’ grade**, as **‘F’** was mapped to **0**.

---

## Resolution
- **Added validation** to **prevent** grade calculations when no assignments exist.
- Ensured that the **Midterm and Final Grade dropdowns** default to a **blank value** when no grade is present.
