# PD0012225 - Student or Faculty Names Do Not Display in Printed Reports or Downloaded Files

## **Issue Summary**
**Issue:**  
- When generating **printed reports** or **downloading files** (e.g., Class List), the **student name does not display**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.2.3  
**Resolution Date:** 2023-12-15  

---

## **Replication Steps**
1. As a **Faculty**, navigate to **Course Management**.
2. Select a **course**, go to **Class List**.
3. Click **Download**, choose **Word format**.
4. Click **Print**, then **open the generated file**.

#### **Expected Result:**
- The **Class List** should display:
  - **Student Name**
  - **Student ID**
  - **Other relevant details**

#### **Actual Result:**
- **Student names do not display** in the **printed report** or **downloaded file**.

---

## **Client Impact**
- **Faculty members cannot see student names** in **printed reports** or **downloaded files**.
- **Administrative inconvenience** when handling class lists.

---

## **Resolution**
- **Added the missing page value** required to retrieve the **correct name format** in reports.
- **Applied fix to all file download requests** to ensure names appear properly.

---

## **Related Information**
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0012225  
**Patch Number:** (If applicable)  
**Created Date:** 2024-01-11  
**Object/Process:** Course Management, Class List  
**Knowledge Article ID:** (If applicable)  
