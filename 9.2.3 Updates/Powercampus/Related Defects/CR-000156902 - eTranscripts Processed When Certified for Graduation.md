# CR-000156902 - eTranscripts Processed When Certified for Graduation

## Issue Summary
**Issue:** When a student requests an **electronic transcript** and selects the **Processing Option** "After Degree is Awarded," the **order is incorrectly fulfilled** if the student’s **Graduation Status** is **Certified** (even though the degree has not yet been awarded).

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 8.7.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student requests an **electronic transcript**.
2. The student selects **"After Degree is Awarded"** under **Processing Options**.
3. The student's **Graduation Status** is **Certified** (but the degree has **not yet been awarded**).
4. The system **incorrectly fulfills the order**, even though the student has **not officially graduated**.

---

## Expected Result
- The **eTranscript order** should be **fulfilled only when the student’s Graduation Status is "Graduated"**.

## Actual Result
- The order is **fulfilled prematurely** when the **Graduation Status is "Certified"**, even though the degree has not yet been awarded.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- **Transcripts are released incorrectly** before the degree has been officially awarded.
- This can cause issues with students submitting transcripts to institutions or employers before meeting graduation requirements.

---

## Resolution
- The **`WebServices.spSelTranscriptPrograms`** stored procedure was modified to ensure that orders are fulfilled **only when the student’s Graduation Status is "Graduated"**.

---

## Related Information
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000156902  
**Patch Number:** (If applicable)  
**Created Date:** 2018-05-24  
**Object/Process:** eTranscript Order Processing  
**Knowledge Article ID:** (If applicable)

