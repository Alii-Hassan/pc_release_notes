# PD0008418 - Electronic Degree Fails to Generate Without Professional Examination Date

## Issue Summary
**Issue:** Regulatory documentation marks the **Professional Examination Date** attribute as **optional**. However, in **Regional Services application**, when a **new Electronic Degree** is created, if the **Professional Examination Date** field is left **blank**, an **error message is retrieved**, and the **Electronic Degree is not generated**.

**Error Message:**
> **"An error occurred while processing your request to generate an electronic degree. Please, review the log files for more details."**

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Enter all required information for an **Electronic Degree**.
2. In **Step 3 (Issue Degree)**, fill in all required fields **except** for **Professional Examination Date**.
3. Click on **Generate**.
4. Observe that the **Electronic Degree fails to generate**, and an **error message is retrieved**.

---

## Expected Result
- The **Electronic Degree should generate correctly** even if the **Professional Examination Date** field is left blank.

## Actual Result
- An **error occurs**, and the **Electronic Degree does not generate**.
- Error logs indicate a **String reference not set to an instance of a String**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Manually enter a **value** in the **Professional Examination Date** field to avoid the issue.

---

## Additional Information
**Client Impact:**
- Users **cannot generate an Electronic Degree** when the **exemption and professional examination date** fields are not provided.
- This **prevents proper degree processing** and **affects compliance with regulations**.

---

## Resolution
- A **new validation was added** to ensure that:
  - The **exemption date** field is **required**.
  - The **Professional Examination Date** field is **required** before submission.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0008418  
**Patch Number:** (If applicable)  
**Created Date:** 2023-06-22  
**Object/Process:** Electronic Degree Processing  
**Knowledge Article ID:** (If applicable)

