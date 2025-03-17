# CR-000184698 - Download Daily Attendance Report Truncates Student PeopleID  

## **Issue Summary**  
**Issue:**  
- When downloading the **Daily Attendance Report**, the **last digit** of the **Student PeopleID** is **missing**.  

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. **Login as Faculty** in **PowerCampus Self-Service**.  
2. Navigate to **Daily Attendance**.  
3. Select **Download Attendance Report**.  
4. Open the downloaded report and check the **Student PeopleID**.  
5. **Expected Result:** The **full** Student PeopleID should be displayed.  
6. **Actual Result:** The **last digit is missing** from the Student PeopleID.  
   - Example: Instead of **201900407**, the report displays **P20190040**.  

---

## **Workaround**  
- **Manually correct** the **truncated IDs** in the downloaded report.  
- Faculty can view **correct IDs** in **Daily Attendance** within PowerCampus before downloading.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Full Student PeopleID is displayed in the report. | The last digit of the Student PeopleID is missing in the report. |

---

## **Client Impact**  
- **Faculty cannot retrieve correct student IDs** from the downloaded **Daily Attendance Report**.  
- **Potential administrative errors** when processing attendance records.  

---

## **Resolution**  
- **Removed an additional character** in the code that was causing the **truncation**.  
- Now, **Student PeopleIDs** are **displayed correctly** in all report formats.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000184698  
**Patch Number:** (If applicable)  
**Created Date:** 2022-05-11  
**Object/Process:** Daily Attendance Report / Student PeopleID  
**Knowledge Article ID:** (If applicable)  
