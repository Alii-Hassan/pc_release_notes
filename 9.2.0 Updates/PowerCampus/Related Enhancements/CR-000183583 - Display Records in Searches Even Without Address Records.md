# CR-000183583 - Display Records in Searches Even Without Address Records  

## **Issue Summary**  
**Issue:**  
- In some **"people-related" workflows**, records do **not** appear in **search results** unless they have an **active address record**.  
- This issue has existed for a while but **became more problematic** when phone numbers and email addresses were **removed from address records**.  
- Users may mistakenly think that a record was **deleted** when it simply does **not have an address**.  
- Affected workflows:  
  - **People**  
  - **Inquiry**  
  - **Applicants**  
  - Possibly **Alumni**  
- Inconsistent behavior with **other workflows** (e.g., **Student, Billing, Organization**) that **do not require an address record**.  

**Business Purpose:**  
- Reduces **user confusion** when records do **not appear** in search results.  
- Prevents **duplicate records** from being created when users think the original record was deleted.  

**Severity:** N/A  
**Product Line:** PowerCampus - General  
**Resolution Date:** 2022-02-15  

---

## **Replication Steps**  
1. **Search** for a record in a **people-related workflow** (e.g., **Applicants, Inquiry**).  
2. If the **person does not have an address**, the record **does not appear** in search results.  
3. **Expected Result:** The record **should be displayed** even without an address.  
4. **Actual Result:** The **record is missing**, leading users to believe it has been deleted.  

---

## **Workaround**  
- Users had to **manually check** the **People database** to find missing records.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| All records display in searches, regardless of address status. | Only records with an active address appear in search results. |

---

## **Client Impact**  
- Users **cannot find records** if they **lack an address**.  
- Causes **confusion** and **duplicate records** when users think a record is missing.  

---

## **Resolution**  
- **Modified the query** on affected workflows (**People, Inquiry, Applicants, Alumni**) to **display records even if they have no active address**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General  
**Identifier:** CR-000183583  
**Patch Number:** (If applicable)  
**Created Date:** 2022-02-15  
**Object/Process:** People Search  
**Knowledge Article ID:** (If applicable)  
