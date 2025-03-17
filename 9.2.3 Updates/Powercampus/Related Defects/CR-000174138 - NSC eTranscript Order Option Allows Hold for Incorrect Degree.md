# CR-000174138 - NSC eTranscript Order Option Allows Hold for Incorrect Degree

## Issue Summary
**Issue:** When a student requests an **eTranscript** through the **National Student Clearinghouse (NSC)** and selects the option to **"Hold for Degree,"** the system displays **all active academic degrees** for selection, including:
- **Inquiry-only records**
- **Applications in the system**

These **should not be selectable**, as they are not actual awarded degrees.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 8.8.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student requests an **eTranscript** through the **NSC page**.
2. Selects the option to **"Hold for Degree."**
3. The system displays **all active academic degrees**, including:
   - **Inquiry-only records**
   - **Applications in the system**
4. The student is able to **incorrectly select** an **inquiry-only** or **application record**.

---

## Expected Result
- Only **valid, awarded degrees** should be displayed when selecting **"Hold for Degree."**
- **Inquiry-only** and **application records** should **not be options**.

## Actual Result
- The system allows students to **select incorrect records** (e.g., **inquiries and applications**) for the **"Hold for Degree"** option.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Students can **accidentally select an invalid record** for the **"Hold for Degree"** option.
- This could cause confusion and processing errors in **eTranscript requests**.

---

## Resolution
- The following stored procedures were updated to **exclude inquiry-only and application records**:
  - **`dbo.spProcessETranscriptOrderStatus`**
  - **`dbo.spSelTranscriptPrograms`**

These changes ensure that only **valid, awarded degrees** are available for selection when processing **eTranscript requests**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** CR-000174138  
**Patch Number:** (If applicable)  
**Created Date:** 2020-06-15  
**Object/Process:** NSC eTranscript Order Processing  
**Knowledge Article ID:** (If applicable)

