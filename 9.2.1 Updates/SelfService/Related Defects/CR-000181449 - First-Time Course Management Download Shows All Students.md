# CR-000181449 - First-Time Course Management Download Shows All Students  

## **Issue Summary**  
**Issue:**  
- When **downloading the class list** in **Course Management**, if the **selected and displayed status is "Add"**, the **Excel file includes students with a status of "Drop"**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service** > **Course Management**.  
2. Select a course and **filter the class list by "Add" status**.  
3. Click **Download** to generate the **Excel file**.  
4. **Expected Result:** The downloaded file should only include **students with "Add" status**.  
5. **Actual Result:** The file incorrectly **includes students with "Drop" status**.  

---

## **Workaround**  
- **Change the status filter** to another option (e.g., "All") and then **switch back to "Add"** before downloading again.  
- This forces the **correct filtering of students in the downloaded file**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| The downloaded class list should only include students with "Add" status. | The file includes students with "Drop" status as well. |

---

## **Client Impact**  
- **Faculty cannot download an accurate class list** filtered by "Add" status.  
- **Instructors may have incorrect records** when tracking students added to a course.  

---

## **Resolution**  
- **Created an enumerator for each status in the class list**.  
- **Initialized the dropdown using the enumerator** to ensure the correct status is passed to the download control.  
- Now, the **Excel file correctly displays only the students with the selected status**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000181449  
**Patch Number:** (If applicable)  
**Created Date:** 2021-09-09  
**Object/Process:** Course Management - Class List Download  
**Knowledge Article ID:** (If applicable)  
