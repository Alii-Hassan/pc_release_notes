# CR-000175952 - eTranscript PDF Order Fails for Some Country Codes

## Issue Summary
**Issue:** When a student places an **eTranscript order** through the **NSC ordering site** and enters **"Curacao"** or another **unsupported country code** on the **Contact Information** page, the order **fails** and shows an **"ERR/ERP"** error in the **Ellucian Cloud**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.0  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. A student places an **eTranscript order** for a **PDF transcript** through the **NSC ordering site**.
2. On the **Contact Information** page, the student enters **"Curacao"** (or another unsupported country code) in the **Country field**.
3. The order submission **fails**, and the system displays an **"ERR/ERP"** error in the **Ellucian Cloud**.

---

## Expected Result
- The **eTranscript order** should process successfully, regardless of the country entered.

## Actual Result
- Orders with **unsupported country codes** cause the system to **fail** with an **"ERR/ERP"** error.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Institutions can **print the transcript manually** and **mail** it to the recipient as a hardcopy.

---

## Additional Information
**Client Impact:**
- Students **cannot successfully order** an **eTranscript** if their country is not supported.
- Institutions must resort to **manual transcript printing and mailing**, causing delays in processing.

---

## Resolution
- **Missing countries** were added in both the **Request and Response files** in `hedtech.powercampus.core.dto`, ensuring that previously unsupported country codes no longer cause the order to fail.

---

## Related Information
**Product Line/Product:** PowerCampus - General - eTranscripts  
**Identifier:** CR-000175952  
**Patch Number:** (If applicable)  
**Created Date:** 2020-10-03  
**Object/Process:** NSC eTranscript Country Code Handling  
**Knowledge Article ID:** (If applicable)

