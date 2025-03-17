# PD0012223 - Denied Checkbox Issues in Coned, My Schedule, and Dossier

## Issue Summary
**Issue:**  
1. **Denied courses checkbox** does not display denied courses in **Coned Registration**.  
2. **My Schedule and Dossier** do not show the **year/term** if the only course in the period has a **denied** status.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.3  
**Resolution Date:** 2023-12-15  

---

## **Replication Steps**
### **Issue 1: Denied Courses Not Displayed in Coned Registration**
1. Have a **Coned course** with a **permission prerequisite**.
2. As a **Coned student**, request permission.
3. As a **faculty**, **deny** the permission request.
4. As a **student**, in **Coned Registration → Cart area**, **select the Denied courses checkbox**.

#### **Expected Result:**
- The **denied course** should be displayed.

#### **Actual Result:**
- The **denied course does not display**.

---

### **Issue 2: My Schedule and Dossier Do Not Show Year/Term for Denied Courses**
1. **Enable Advisor approval** for Course Registration and **deny** the course as an **advisor**  
   - OR have a **course with a permission prerequisite** and **deny** the permission as a faculty.
2. As a **student**, go to **My Schedule** to view the **denied course**.

#### **Expected Result:**
- The **period** where the student attempted registration should be **selectable**.
- By default, the **denied course should not display**.
- Selecting the **Denied courses checkbox** should **display the denied course** in **calendar and list view**.

#### **Actual Result:**
- In **My Schedule**, the **period does not display**.
- The **user is unable to view the denied course**.

---

## **Client Impact**
- **Users cannot view denied courses** in **Coned Registration** and **My Schedule**.

---

## **Resolution**
- **Updated stored procedure `dbo.spRetrieveTraditionalPeriods`** to consider **periods that contain only denied courses**.
- **Fixed condition in Coned cart** to ensure denied courses are displayed.

---

## **Related Information**
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0012223  
**Patch Number:** (If applicable)  
**Created Date:** 2024-01-11  
**Object/Process:** Coned Registration, My Schedule, Dossier  
**Knowledge Article ID:** (If applicable)  
