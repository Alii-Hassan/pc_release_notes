# CR-000180776 - eTranscript Orders Fail to TF Status When Transcript Sequence Has No Graded Courses

## Issue Summary
**Issue:** When an **eTranscript order** is created and the request from **NSC** includes a **transcript sequence** with no **graded courses** (i.e., all courses are **dropped**), the request enters **TF (Transcript Failed) status**, and the status **cannot be changed or updated**.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. An **eTranscript order** is created and processed through **NSC**.
2. The **transcript sequence** contains **only dropped courses** (i.e., no graded courses).
3. The request enters **TF (Transcript Failed) status**.
4. The **TF status cannot be changed or updated**, preventing further processing.

---

## Expected Result
- **eTranscript orders** should be processed **only for registered courses**.
- Orders with **only dropped courses** should not **fail permanently** or enter **TF status**.
- The request status should remain **modifiable**.

## Actual Result
- Orders containing **only dropped courses** enter **TF (Transcript Failed) status**.
- The **TF status cannot be changed or updated**.
- The request remains **stuck in the system** without a resolution.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users **cannot change or update** the status of an **eTranscript request** when it enters **TF status**.
- Orders containing **only dropped courses** are **processed incorrectly**, causing system issues.
- Manual intervention is required to **clear stuck requests**.

---

## Resolution
- A **filter was added** to process **only registered courses** in **`TRANSCRIPTDETAIL`**, preventing orders with **only dropped courses** from entering **TF status**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - eTranscripts  
**Identifier:** CR-000180776  
**Patch Number:** (If applicable)  
**Created Date:** 2021-07-30  
**Object/Process:** eTranscript Order Processing  
**Knowledge Article ID:** (If applicable)

