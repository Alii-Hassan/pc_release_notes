# CR-000171187 - ETranscript Request Fails for Students with Accent Symbols in Name

## Issue Summary
**Issue:** The **eTranscript Request** does not provide students with the option to select **'Hold for Grades'** or **'Hold for Degree'** when they have **ungraded courses** or **PDC status (not yet graduated)** if their **name contains an accent symbol** (e.g., *Nicolás*).

After submitting the **eTranscript request**, the status appears as **"NR (Needs Research)"** in the **eTranscript workflow**. When attempting to verify the **student ID**, an error message appears:

> **Error – requested transcript details are not available, transcript cannot be generated.**

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 8.8.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student with an **accent symbol** in their name (e.g., *Nicolás*) attempts to request an **eTranscript**.
2. The **options for 'Hold for Grades' and 'Hold for Degree'** are **not available**, even though the student has:
   - **Ungraded courses**.
   - **Pending PDC (not yet graduated).**
3. The student submits the **eTranscript request**.
4. The request is assigned **NR (Needs Research)** status in the **eTranscript workflow**.
5. When attempting to **verify the student ID**, an error appears:
   > **Error – requested transcript details are not available, transcript cannot be generated.**

---

## Expected Result
- Students should be able to select **'Hold for Grades'** or **'Hold for Degree'** if they have ungraded courses or pending PDC status.
- The **eTranscript request** should be processed c