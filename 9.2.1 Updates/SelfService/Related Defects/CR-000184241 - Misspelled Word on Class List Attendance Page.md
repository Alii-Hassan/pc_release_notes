# CR-000184241 - Misspelled Word on Class List Attendance Page  

## **Issue Summary**  
**Issue:**  
- On the **Class List Overall Attendance page**, the **column header** is misspelled:  
  - **Incorrect:** "Last day attendend"  
  - **Correct:** "Last day attended"  

**Severity:** 4 - Low  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service > Classes > Overall Attendance**.  
2. Look at the **column headers** on the page.  
3. **Expected Result:** The column should be labeled **"Last day attended"**.  
4. **Actual Result:** The column is labeled **"Last day attendend"**, which is a spelling mistake.  

---

## **Workaround**  
- The issue can be manually corrected by updating the **resource file**:  
  - **File Path:** `SelfService\Resources\Classes\Attendance.en.json`  
  - **Locate:** `"lblLasDateAttended"`  
  - **Change to:** `"Last date attended"`  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Column should display **"Last day attended"**. | Column incorrectly displays **"Last day attendend"**. |

---

## **Client Impact**  
- **Minor user interface issue** affecting readability.  
- **May cause confusion** for faculty and staff reviewing attendance data.  

---

## **Resolution**  
- **Updated the wording** for the **"Last day attended"** column.  
- Ensured proper **spelling corrections** in the **resource file**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000184241  
**Patch Number:** (If applicable)  
**Created Date:** 2022-04-05  
**Object/Process:** Class List / Overall Attendance  
**Knowledge Article ID:** (If applicable)  
