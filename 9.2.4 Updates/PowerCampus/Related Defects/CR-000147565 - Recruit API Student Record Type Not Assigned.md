# CR-000147565 - Recruit API: Student Record Type Not Assigned

## Issue Summary
**Issue:** When an applicant is inserted into PowerCampus via the **API** with a **Status** and **Decision Code** both set to **Confirmed**, they do not receive the **Student Record Type** assignment. The `ACADEMIC_FLAG` is not being set to `'Y'`, preventing triggers from adding the **'STUD' record type**.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 8.6.0  
**Resolution Date:** 2024-06-28  

---

## Replication Steps
1. Insert an applicant into **PowerCampus** via the **API**.
2. Assign both **Status** and **Decision Code** as **Confirmed**.
3. Observe that the **Student Record Type** is **not assigned**.
4. The `ACADEMIC_FLAG` remains unset (`'N'`), preventing the system from automatically assigning the **'STUD' record type**.

---

## Expected Result
- When an applicant is inserted with **Confirmed Status and Decision Code**, the **Student Record Type** should be assigned automatically.
- The `ACADEMIC_FLAG` should be set to `'Y'`, triggering the addition of **'STUD' record type**.

## Actual Result
- The **Student Record Type** is not assigned.
- The **Applicant Record** is maintained instead of transitioning to **Student Record**.
- The `ACADEMIC_FLAG` is not updated, preventing system triggers from adding the **'STUD' record type**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Accepted applicants have their academic information correctly stored but **retain the record type of Applicant instead of transitioning to Student**.

---

## Resolution
Changes were made in the **services layer** to:
- **Add flags** that check whether a given code value is **Active**.
- Verify that both **ApplicationStatus** and **ApplicationDecision** have **Confirmed/Accepted** status.
- Ensure that the **Student Record Type** is correctly assigned when these conditions are met.

---

## Related Information
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000147565  
**Patch Number:** (If applicable)  
**Created Date:** 2017-04-18  
**Object/Process:** Student Record Type Assignment via API  
**Knowledge Article ID:** (If applicable)

