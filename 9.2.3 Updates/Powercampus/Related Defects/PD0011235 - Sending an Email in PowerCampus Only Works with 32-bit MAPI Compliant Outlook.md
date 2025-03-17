# PD0011235 - Sending an Email in PowerCampus Only Works with 32-bit MAPI Compliant Outlook

## Issue Summary
**Issue:** Sending an **email in PowerCampus** only works with **32-bit MAPI compliant Outlook**. The **64-bit version does not function correctly**.

**Severity:** 4 - Low  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Install 64-bit Outlook**.
2. **Attempt to send an email** in PowerCampus.
3. **Observe the error message:**
   - "There is no email program associated to perform the requested action."
4. **Install 32-bit Outlook**.
5. **Attempt to send an email** in PowerCampus again.
6. **Email is successfully sent.**

---

## Expected Result
- **PowerCampus compatibility guide** should clearly **indicate the requirement for a 32-bit Outlook client**.

## Actual Result
- **No documentation specifies** that PowerCampus requires **a 32-bit MAPI compliant email system**.
- **Users may install 64-bit Outlook**, leading to compatibility issues.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- **Use 32-bit Outlook** instead of the **64-bit version**.

---

## Additional Information
**Client Impact:**
- **Documentation about Outlook requirements is misleading**.
- Users may **encounter email errors** if they install **64-bit Outlook**.

---

## Resolution
- **Updated online help documentation** to indicate that the **mail feature works with any 32-bit MAPI compliant mail system**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0011235  
**Patch Number:** (If applicable)  
**Created Date:** 2023-11-16  
**Object/Process:** Outlook Compatibility for Emailing in PowerCampus  
**Knowledge Article ID:** (If applicable)

