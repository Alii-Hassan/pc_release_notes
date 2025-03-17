# PD0009730 - System Does Not Log Views of Health Data When Switching Between Records

## Issue Summary
**Issue:** PowerCampus is configured to **log health data**. However, when switching between records without closing the previously open record, **views of health data (e.g., Disability, Immunization tabs)** are **not logged**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Create and save a new health record** (e.g., **Disability**) for a person.
2. The system **creates a log entry** in the **LogEvent table**.
3. **Close the person’s detail record**, then **reopen it** and view the **Disability tab**.
4. The system **logs the view**.
5. **Switch to another person’s record without closing the previous record**.
6. Observe that:
   - **Viewing the Disability data is not logged**.
   - **The same issue occurs for the Immunization tab and other health data tabs**.

---

## Expected Result
- **All views of health data should be logged**, even when switching between records **without closing the previous detail record**.

## Actual Result
- **Health data views are not logged** when switching to a new record **without closing the previously open record**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- The **system does not log all events** related to **accessing health data**.
- This may cause **gaps in audit tracking and compliance issues**.

---

## Resolution
- **Moved logging of health information views** to the **RetrieveEnd event of the data window**.
- **Fixed issue** where logging **wasn't saved from the Alumni workflow**.
- **Fixed issue** where the **insert action was not logged correctly** when an **empty row already existed in the data window**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0009730  
**Patch Number:** (If applicable)  
**Created Date:** 2023-09-01  
**Object/Process:** Health Data Logging  
**Knowledge Article ID:** (If applicable)

