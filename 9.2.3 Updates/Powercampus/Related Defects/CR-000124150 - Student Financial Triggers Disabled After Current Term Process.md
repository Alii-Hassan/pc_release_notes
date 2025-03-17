# CR-000124150 - Student Financial Triggers Disabled After Current Term Process

## Issue Summary
**Issue:** After the **Current Term Process** runs, the **Student Financial triggers** are disabled, but no warning is provided to the client. Previously, the process reported when the triggers were dropped, and if they could not be re-created, a message was returned. However, SQL now only disables triggers when they **cannot be enabled**, and nothing is reported after **Term Processing** finishes.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Run the **Current Term Process** in PowerCampus.
2. Observe that **Student Financial triggers** are disabled **without any warning**.
3. Continue daily processing (e.g., student course registration and charge assessment).
4. Notice that student financial roll-up records **do not contain billing credits**, and **assessment rules do not apply**.
5. The issue is only detected when manual checks or correction scripts are used.

---

## Expected Result
- A **warning message** should be provided when **triggers are disabled**, prompting the user to manually enable them if necessary.
- Triggers should be **automatically re-enabled** if possible.

## Actual Result
- **No warning** is provided when **triggers are disabled**.
- Clients proceed with daily processing, unaware that triggers are inactive.
- Student **financial roll-up records** do not contain billing credits.
- **Assessment rules fail to apply**, leading to incorrect charge calculations.
- Manual intervention is required to re-enable triggers.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- Clients must manually verify and **enable triggers** in the database after **Current Term Processing**.
- Pre-existing correction scripts can be used to fix financial records.

---

## Additional Information
**Client Impact:**
- Clients are unaware when triggers are disabled.
- Students register for courses and have charges assessed, but **financial roll-up records** are not updated.
- **Assessment rules fail**, leading to incorrect financial data.

---

## Resolution
- A **warning message** was added at the end of the **Current Term Processing** to remind users to **verify triggers in the database**.
- If triggers are **not enabled**, users are instructed to **enable them manually**.
- A **note was added to the online help** to provide guidance on this issue.

---

## Related Information
**Product Line/Product:** PowerCampus - Academic Records  
**Identifier:** CR-000124150  
**Patch Number:** (If applicable)  
**Created Date:** 2015-01-06  
**Object/Process:** Current Term Processing & Financial Triggers  
**Knowledge Article ID:** (If applicable)

