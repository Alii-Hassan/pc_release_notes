# CR-000182917 - Handle Applications Process Does Not Accept "Campus" Value From "Accept Application" WebAPI

## Issue Summary
**Issue:**  
- When an **application is submitted** via the **PowerCampus Web API**, the API **correctly populates** the **dbo.Application** and **dbo.ApplicationCampus** tables.
- However, in the **Handle Applications** window:
  - The **Campus tab correctly displays** the campus value.
  - **After clicking Approve**, the **Campus field is saved** as the **default campus** from **Admissions > Tools > Setup > Applicants**, instead of the **value submitted in the application**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Submit an application** via the **PowerCampus Web API**.
2. **Verify** that the **dbo.Application** and **dbo.ApplicationCampus** tables **contain the correct campus value**.
3. **Open** the application in the **Handle Applications** window.
4. **Verify** that the **Campus tab displays the correct campus**.
5. **Click Approve** to process the application.
6. **Observe** that the **Campus value is saved incorrectly** as the **default campus**.

---

## Expected Result
- The **approved application** should **retain the campus value submitted** in the original application.

## Actual Result
- The **Campus field is always set** to the **default value** from **Admissions > Tools > Setup > Applicants**, instead of the **submitted value**.

---

## Workaround
- **No direct workaround** available.

---

## Client Impact
- **Approved applications always display the default campus**, leading to **incorrect campus assignments**.
- **Manual corrections** are required to update the correct campus.

---

## Resolution
- The **stored procedure** was **not correctly copying** the campus value.
- The **campus value** is now **correctly included** in the stored procedure, ensuring that **submitted campus values** are properly retained.
