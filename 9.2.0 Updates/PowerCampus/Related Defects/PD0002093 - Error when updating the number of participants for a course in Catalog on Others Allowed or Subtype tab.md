# PD0002093 - Error when updating the number of participants for a course in Catalog on Others Allowed or Subtype tab  

## **Issue Summary**  
**Issue:**  
- When modifying the **number of participants** multiple times in **Others Allowed** or **Subtype** tabs in **Academic Records > Catalog**, an error occurs.  
- The error appears to be related to an **insert operation failing** due to a missing `EVENT_ID` in the `EVENTCREDITALLOW` table.  

**Error Message:**  
``` Cannot insert the value NULL into column 'EVENT_ID', table 'campus6.dbo.EVENTCREDITALLOW'; column does not allow nulls. INSERT fails.```


**Severity:** Moderate  
**Product Line:** PowerCampus - General - Academic Records  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Navigate to **Academic Records > Catalog**.  
2. Select a **course**.  
3. Go to the **Others Allowed** tab or **Subtype** tab.  
4. Change the **number of participants** and **save**.  
5. Repeat the process multiple times.  
6. After a few changes, the system **throws an error** and does not allow saving.  

---

## **Workaround**  
- Avoid changing the **number of participants repeatedly** in a short period.  
- **Refresh the page** after each modification before making another change.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| The number of participants should update successfully. | The system throws an error when changing the number multiple times. |

---

## **Client Impact**  
- Users **cannot modify the number of participants smoothly**.  
- The system **fails intermittently**, leading to **frustration and data inconsistencies**.  
- Manual intervention is required to **reset the entry** when the error occurs.  

---

## **Resolution**  
- **Fixed in PowerCampus version 9.2.0.**  
- The `EVENT_ID` field is now properly handled in the `EVENTCREDITALLOW` table, preventing `NULL` insertions.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0002093  
**Patch Number:** (If applicable)  
**Created Date:** 2022-07-25  
**Object/Process:** EVENTCREDITALLOW table insert operation  
**Knowledge Article ID:** (If applicable)  
