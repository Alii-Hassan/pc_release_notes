# PD0005708 - Application Form Submitted Email Sent Even If Payment Fails

## Issue Summary
**Issue:** When an application is set up to require payment and the payment fails, the applicant still receives an email notification stating that the application form was submitted, even though it was not.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Set up an application form that requires payment.
2. Submit an application where the payment fails.
3. Observe that the correct **online message** is displayed:
   - **"Application Submitted"**
   - **"Payment failed. The application will not be processed. Try again or contact the system administrator."**
4. However, an **email notification** stating the application has been submitted is still sent to the applicant.

---

## Expected Result
- The **system should NOT send** an email notification if the application payment fails.

## Actual Result
- The **system incorrectly sends** an email notification that the application has been submitted, even though the payment was unsuccessful.

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- The applicant **receives misleading notifications** about their application status.

---

## Resolution
- **Additional conditions** were added to ensure that the **email notification is only sent if the payment is successful**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0005708  
**Patch Number:** (If applicable)  
**Created Date:** 2023-02-07  
**Object/Process:** Application Payment Processing  
**Knowledge Article ID:** (If applicable)
