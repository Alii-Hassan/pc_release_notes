# CR-000154561 - Note Field in eTranscript Order Status

## Issue Summary
**Issue:** Users attempting to add notes to the **`etranscriptorder_notes`** field receive an error message stating, **"Update is not allowed at this time."** This prevents users from updating order-related notes.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 8.8.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Attempt to add a note to the **`etranscriptorder_notes`** field in **eTranscript order status**.
2. Receive the error message: **"Update is not allowed at this time."**
3. The note is not saved, preventing documentation of order-related details.

---

## Expected Result
- Users should be able to **update and save** notes in the **`etranscriptorder_notes`** field.

## Actual Result
- Users **cannot update the note field**.
- The error message **"Update is not allowed at this time"** is displayed.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users **cannot document** important notes related to **eTranscript orders**.
- This limits administrative tracking and follow-up for transcript processing.

---

## Resolution
- The **`transcripts.pbl.src`** object was modified to allow updates to the **Notes** field in **eTranscript order status**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** CR-000154561  
**Patch Number:** (If applicable)  
**Created Date:** 2018-02-28  
**Object/Process:** eTranscript Order Notes  
**Knowledge Article ID:** (If applicable)

