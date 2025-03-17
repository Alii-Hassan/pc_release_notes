# CR-000182537 - Breadcrumb Navigation in Advising Removes Filter Criteria  

## **Issue Summary**  
**Issue:**  
- In **Self-Service Advising > Manage Advisees**, when users apply **filter criteria** to retrieve a list of students, the filter is lost when navigating using breadcrumbs.  
- After selecting a student profile, clicking the **breadcrumb link** (e.g., **"My Advisees" or "All Students"**) **removes all filter criteria**, returning the full list instead.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-16  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service > Advising > Manage Advisees**.  
2. Select **a list** (e.g., "My Advisees" or "All Students").  
3. Apply **additional filter criteria** (e.g., search by a specific student name, program, or status).  
4. Select a **student profile** from the filtered list.  
5. Click the **breadcrumb link** to return to the list.  
6. **Expected Result:** The previously applied filter criteria remain, showing the refined student list.  
7. **Actual Result:** The filter is removed, and the **entire unfiltered list** is loaded instead.  

---

## **Workaround**  
- Users must **reapply the filters manually** after returning to the list using breadcrumbs.  
- Instead of clicking the breadcrumb, **use the browser's "Back" button** to retain filter criteria.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Filtered list remains when returning via breadcrumbs. | Filter is lost, and the entire list is loaded. |

---

## **Client Impact**  
- **Advisors lose their selected search criteria**, making it harder to navigate through students efficiently.  
- **Increased time spent manually reapplying filters** after viewing student profiles.  

---

## **Resolution**  
- Fixed issues in the code to ensure **breadcrumb navigation retains the applied filter criteria**.  
- Users can now return to their filtered list without losing search parameters.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000182537  
**Patch Number:** (If applicable)  
**Created Date:** 2021-11-19  
**Object/Process:** Advising - Manage Advisees  
**Knowledge Article ID:** (If applicable)  
