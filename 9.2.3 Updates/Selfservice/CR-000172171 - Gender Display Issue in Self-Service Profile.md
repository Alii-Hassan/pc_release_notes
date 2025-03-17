# CR-000172171 - Gender Display Issue in Self-Service Profile

## Issue Summary
**Issue:** Gender that is set to **Unknown** is displaying as **Female** in the **Self-Service Profile > Demographic tab**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.0.2  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. Set a user's gender to **Unknown** in **PowerCampus**.
2. Navigate to **Self-Service Profile > Demographic tab**.
3. Observe that **gender is incorrectly displayed as Female**.
4. If Spanish language is enabled, changes are **not allowed for Male or Unknown** selections.
5. If the **Gender field is set as Not Visible** in **Profile > Demographic update**:
   - Updating any **other demographic information** will **reset gender to Female**.

---

## Expected Result
- Gender should **remain as set** (Unknown, Male, Female) and should **not change unexpectedly**.
- Updates to other **demographic fields** should **not alter gender settings**.

## Actual Result
- Gender **defaults to Female** when it is set to **Unknown**.
- If **Gender is not visible**, updating **any demographic data** causes gender to **reset to Female**.
- In **Spanish language mode**, gender cannot be updated for **Male or Unknown** selections.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- **Set the Gender field as Visible** in **Profile > Demographic update** to prevent the unintended gender change.

---

## Additional Information
**Client Impact:**
- **Gender displays incorrectly** for Self-Service users.
- **Demographic updates do not retain correct gender settings**.

---

## Resolution
- **Updated logic** in the **stored procedure** to **prevent gender from being reset when the value is 'Unknown'**.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000172171  
**Patch Number:** (If applicable)  
**Created Date:** 2020-02-26  
**Object/Process:** Self-Service Profile Demographic Update Issue  
**Knowledge Article ID:** (If applicable)

