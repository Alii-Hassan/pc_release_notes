# CR-000183548 - 500 Internal Server Error on Grade Report  

## **Issue Summary**  
**Issue:**  
- When generating a **Grade Report**, a **500 - Internal Server Error** occurs if the selected period contains only courses added directly to the **Transcript ADD tab** (without any corresponding section).  

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service > Grade Report**.  
2. Select a **period** that only includes courses **manually added** to the **Transcript ADD tab** (without an associated section).  
3. Attempt to **generate the Grade Report**.  
4. **Expected Result:** The Grade Report should display without errors.  
5. **Actual Result:** A **500 - Internal Server Error** appears, preventing report generation.  

---

## **Workaround**  
- There is no direct workaround.  
- Users must manually check transcript records and **ensure courses are linked to sections** before generating the report.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Grade Report should generate successfully, even for courses without a section. | A 500 Internal Server Error occurs, preventing report generation. |

---

## **Client Impact**  
- **Users cannot generate Grade Reports** for periods where all courses were manually added to the transcript.  
- **Limited visibility** of student academic records when courses lack assigned sections.  

---

## **Resolution**  
- Updated logic to **display grades even if a course has no assigned section**.  
- **Removed the button** in section details when a course does not have an associated section to prevent errors.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000183548  
**Patch Number:** (If applicable)  
**Created Date:** 2022-02-11  
**Object/Process:** Grade Report - Transcript ADD tab  
**Knowledge Article ID:** (If applicable)  
