# CR-000144551 - Academic Plan Assignment Not Creating Academic Plans Correctly  

## **Issue Summary**  
**Issue:**  
- When creating an **academic plan** using **Academic Plan Assignment** in **Record Maintenance**, the plan is **not created correctly**.  
- When attempting to **open the plan under the Progress tab**, the system displays the error:  
  - **"No academic plan found."**  
- Affects both **individual and batch academic plan assignments**.  

**Severity:** High  
**Product Line:** PowerCampus - General - Academic Records  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Navigate to **Record Maintenance**.  
2. Create an **academic plan** using the **Academic Plan Assignment** feature.  
3. Attempt to **open the academic plan** under the **Progress tab**.  
4. Observe the **error message**:  
   - **"No academic plan found."**  

---

## **Workaround**  
### **For Individual Students:**  
1. Open the student record in the **Academic Plan workflow**.  
2. Navigate to the **Change Plan tab**.  
3. **Manually enter the Matric Session** for the student.  

### **For Batches of Students:**  
1. Use the **Global Change Wizard**.  
2. Create a **filter for students** in the **Student Degree Requirement (STDDEGREQ) table**.  
3. Ensure the batch-created academic plans **include the Matric Session**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| The academic plan should be created correctly and accessible under the Progress tab. | The plan is missing, and an error message is displayed. |

---

## **Client Impact**  
- **Students' academic plans were missing** or not accessible.  
- **Batch-created academic plans required manual intervention** to be usable.  
- **Process inefficiency** due to additional steps needed for correction.  

---

## **Resolution**  
- Added an **option to select the academic session** for **matriculation information**.  
- Used this **new value** to correctly **create the Student Degree Requirement information**.  
- Ensured that **academic plans are correctly created and accessible** after assignment.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** CR-000144551  
**Patch Number:** (If applicable)  
**Created Date:** 2016-12-02  
**Object/Process:** Academic Plan Assignment  
**Knowledge Article ID:** (If applicable)  
