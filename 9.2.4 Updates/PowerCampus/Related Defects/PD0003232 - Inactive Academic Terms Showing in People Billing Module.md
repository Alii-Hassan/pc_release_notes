# PD0003232 - Inactive Academic Terms Showing in People Billing Module

## Issue Summary
**Issue:** Inactive academic terms appear in the **People Billing Module**, allowing users to select them mistakenly.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.4  
**Resolution Date:** 2024-06-28  

---

## Replication Steps
1. Navigate to the **People Billing Module**.
2. Attempt to make a **manual entry**.
3. Observe that **inactive terms** are still available for selection.
4. Select an **inactive term** and save the record.
5. Notice that the record no longer appears in the **PowerCampus Application**.
6. The only way to correct the issue is for the IT Department to **manually update the term** via SQL.

---

## Expected Result
- Users should only be able to select **active terms** when making manual entries in **People Billing**.

## Actual Result
- Users can mistakenly select **inactive terms**.
- Saved records using **inactive terms** do not appear in the **PowerCampus Application**.
- IT intervention is required to fix the issue manually through SQL updates.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Users can mistakenly create **charge/credit records** using **inactive terms**, leading to data inconsistencies.

---

## Resolution
The **academic term report query** was retrieving **all terms**, including those flagged as **inactive**. A condition was added to the `WHERE` clause to ensure that only **active codes** are retrieved.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Billing  
**Identifier:** PD0003232  
**Patch Number:** (If applicable)  
**Created Date:** 2022-09-26  
**Object/Process:** Academic Term Filtering in People Billing  
**Knowledge Article ID:** (If applicable)

