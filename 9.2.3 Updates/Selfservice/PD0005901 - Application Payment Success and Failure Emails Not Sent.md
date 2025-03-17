# PD0005901 - Application Payment Success and Failure Emails Not Sent

## Issue Summary
**Issue:** Application payment success and failure emails are not sent, even when notifications are enabled.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Navigate to **Self-Service > Administration > Notifications > Application Self-Service > Admissions**.
2. Ensure that **Application Payment Failure** and **Application Payment Successful** notifications are both **enabled**.
3. Set up an application that **requires payment**.
4. **Submit an application** with a **successful payment**.
5. **Submit another application** where the **payment fails**.

---

## Expected Result
- For an **application with a successful payment**, the **Application Payment Successful** notification should be sent.
- For an **application with a failed payment**, the **Application Payment Failure** notification should be sent.

## Actual Result
- **No notifications** are sent for **successful or failed payments**.

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- Applicants **do not receive any confirmation or failure notification** about their application payment status.

---

## Resolution
- **Additional conditions** were added to ensure that the **payment success and failure notifications are correctly triggered**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0005901  
**Patch Number:** (If applicable)  
**Created Date:** 2023-02-14  
**Object/Process:** Application Payment Notifications  
**Knowledge Article ID:** (If applicable)
