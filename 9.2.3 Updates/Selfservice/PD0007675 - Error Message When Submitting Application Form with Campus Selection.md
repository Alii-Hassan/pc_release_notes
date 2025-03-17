# PD0007675 - Error Message When Submitting Application Form with Campus Selection

## Issue Summary
**Issue:** In a **Self Service Application Form** that includes a **Campus section**, selecting a campus from the dropdown list results in the error message **"There was an error in PowerCampus Self-Service. Try again."** when clicking the **Submit** button.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.1  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Ensure that **Campus information** is included in the **Application Form setup**.
2. In **Self-Service**, navigate to **Admissions > Apply** and select the **Application Form**.
3. Fill in the required information, including selecting a **Campus** from the dropdown list.
4. **Accept the School Policy**.
5. Click the **Submit** button.
6. **Error message is displayed:**  
   _"There was an error in PowerCampus Self-Service. Try again."_

---

## Expected Result
- The application form should be **submitted successfully** without errors.

## Actual Result
- **Error message is displayed**, and the form **is not submitted**.
- **Log error recorded in Allevents.log:** JsonResult has bad structure


---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Applicants **cannot submit their application** when a **campus value is selected**.

---

## Resolution
- The server now correctly **processes selected campus values as an array**, preventing the error.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0007675  
**Patch Number:** (If applicable)  
**Created Date:** 2023-05-12  
**Object/Process:** Application Form Submission - Campus Selection  
**Knowledge Article ID:** (If applicable)
