# PD0002478 - Student Schedule Report Displays Country Code Instead of Short or Medium Description

## Issue Summary
**Issue:** In the **Student Schedule Report**, the **country code** is displayed instead of the **short or medium description** for addresses.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Generate the **Student Schedule Report**.
2. Observe that the **country code** is displayed instead of the **short or medium description**.

---

## Expected Result
- The **report should display** the **short or medium description** of the country instead of the **country code**.

## Actual Result
- The **country code** is displayed incorrectly instead of the **short or medium description**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- The **country information** in the **Student Schedule Report** is **printed incorrectly**, causing confusion.

---

## Resolution
- The report was **updated** to display **`CODE_COUNTRY.MEDIUM_DESC`** instead of the country code.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0002478  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-11  
**Object/Process:** Student Schedule Report Address Formatting  
**Knowledge Article ID:** (If applicable)

