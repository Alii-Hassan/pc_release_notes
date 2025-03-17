# PD0002434 - Faculty Receive an Error Message in Self-Service When Viewing Class Lists  

## **Issue Summary**  
**Issue:**  
- When **Faculty** navigate to **Classes > Course Management > Class List**, they encounter the error message:  
  _"There was an error in PowerCampus Self-Service. Try again."_  
- Error retrieved from **Allevents.log**:  
  `"Error","Message":"Unable to execute dbo.spSelClassListForWeb","TimeStamp":"2022-08-08T12:44:41.7484569-04:00","$type":"LogDetail"}`  
- The issue occurs due to an **incorrect pronoun field length** in **CODE_PRONOUN > MEDIUM_DESC**, where the stored procedure **spSelClassListForWeb** expects **nvarchar(10)** but received **11 characters** (e.g., `They/Them`).  

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-16  

---

## **Replication Steps**  
1. **Login** as Faculty in **PowerCampus Self-Service**.  
2. Navigate to **Classes > Course Management**.  
3. Select a **course** and click **Class List**.  
4. **Expected Result:** The **Class List** should display properly.  
5. **Actual Result:** An error message appears, preventing the Faculty from viewing the list.  

---

## **Workaround**  
- **Manually update** the **CODE_PRONOUN > MEDIUM_DESC** field to **10 characters or fewer** to prevent the error.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Faculty can view Class Lists without errors. | Error message appears due to a pronoun length issue in the stored procedure. |

---

## **Client Impact**  
- **Faculty users cannot view certain class lists**, causing **disruptions in course management**.  

---

## **Resolution**  
- **Fixed the stored procedure `spSelClassListForWeb`** to accommodate **longer pronoun lengths**, resolving the truncation issue.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0002434  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-09  
**Object/Process:** Course Management > Class List  
**Knowledge Article ID:** (If applicable)  
