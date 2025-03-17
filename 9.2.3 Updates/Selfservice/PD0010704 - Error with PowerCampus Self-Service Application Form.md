# PD0010704 - Error with PowerCampus Self-Service Application Form

## Issue Summary
**Issue:** When using the **Relation Information** section in **Application Forms**, all fields **must be populated** even though they are **not required**.  
- If the **Attended Institution** checkbox is **left unchecked**, the application **fails to submit**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.1  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Ensure that an **Application Form** is using **Relationship Information**.
2. Open **PowerCampus Self-Service** and navigate to **Admissions → Apply**.
3. Fill in the form until you reach the **Relation Selection** section:
   - Enter any **First Name**.
   - Enter any **Last Name**.
   - Select any **Relationship** from the dropdown.
   - **Leave** the **Attended Institution** checkbox **unchecked**.
   - Click **Add New** and repeat the process for another relative.
4. Complete the rest of the **mandatory fields**.
5. Click **Submit**.

---

## Expected Result
- The application should be submitted successfully.
- A confirmation message should be displayed.

## Actual Result
- A **red banner** appears at the top with the error:  
  `"There was an error in PowerCampus Self-Service. Try again."`
- The application **does not submit**.

---

## Additional Information
- The **frontend POST request** to `/PowerCampusSelfService/Applications/Create` includes a `"relatives"` key.
- The `"attendedInstitution"` field is **null** instead of **true/false**.
- The backend **fails** because `AttendedInstitution` is **not a nullable value type**.

---

## Client Impact
- **Applicants cannot submit** their applications if the **Attended Institution** checkbox is left **unchecked**.
- **No clear workaround** unless all fields are manually populated.

---

## Resolution
- A **validation** was added to correctly process the **Attended Institution** checkbox.
- The frontend now transmits `"attendedInstitution: false"` when the checkbox is **not selected**, preventing errors.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0010704  
**Patch Number:** (If applicable)  
**Created Date:** 2023-10-18  
**Object/Process:** Application Form - Relationship Information  
**Knowledge Article ID:** (If applicable)
