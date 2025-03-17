# CR-000154256 - eTranscript Status Incorrect When Student Withdraws

## Issue Summary
**Issue:** When a student **drops all classes and is withdrawn**, the **eTranscript order status** incorrectly returns as **"Transit Failed"**, and the **"Cancel Order"** option is grayed out, preventing cancellation. The expected status should be **"Needs Research"**, allowing staff to cancel the order as needed.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 8.7.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student **drops all classes** and is **withdrawn** from the system.
2. Submit an **eTranscript order**.
3. Observe that the **eTranscript order status** returns as **"Transit Failed"**.
4. The **"Cancel Order"** option is **grayed out**, preventing staff from canceling the order.

---

## Expected Result
- The **eTranscript order status** should return as **"Needs Research"**, allowing staff to review and cancel the order if necessary.

## Actual Result
- The **eTranscript order status** incorrectly shows **"Transit Failed"**.
- The **"Cancel Order"** button is **disabled**, preventing manual cancellation.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users **cannot cancel the order** when the **"Transit Failed"** status appears.
- The system must return **"Needs Research"** to **enable cancellation options** for staff.

---

## Resolution
- Changes were applied to the **`dbo.ProcessETranscriptOrderStatus`** stored procedure.
- The fix ensures that the **"Needs Research"** status is correctly returned, allowing the order to be canceled when necessary.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** CR-000154256  
**Patch Number:** (If applicable)  
**Created Date:** 2018-02-14  
**Object/Process:** eTranscript Order Processing  
**Knowledge Article ID:** (If applicable)

