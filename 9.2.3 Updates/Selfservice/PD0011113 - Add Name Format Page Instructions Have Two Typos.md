# PD0011113 - Add Name Format Page Instructions Have Two Typos

## Issue Summary
**Issue:** The **instructions** displayed on the **Add Name Format** page contain **two typos**.

**Severity:** 4 - Low  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
### **Steps to Reproduce**
1. Navigate to **Administration → Website Setup → Name Formats**.
2. Click on **Add Name Format (+)**.
3. Observe the **instructions** displayed on the page.

---

## Expected Result
- The instructions should display correct spellings:
  - **"unoffcial"** → **"unofficial"**  
  - **"drad"** → **"drag"**

## Actual Result
- The page **incorrectly** displays:
  - **"unoffcial"** instead of **"unofficial"**  
  - **"drad"** instead of **"drag"**

---

## Client Impact
- Minor issue affecting **text clarity** and **professionalism** in the Name Formats setup instructions.

---

## Workaround
- The typos can be manually corrected in the **resource file**:
  1. Locate the file:  
     `C:\inetpub\wwwroot\PowerCampusSelfService9\Resources\Administration\NameFormats.en.json`
  2. Open the file and find **line 41**:
  3. Update `"lblDescription"` to replace incorrect words with **correct spellings**.
  4. Save the file.

---

## Resolution
- The **typos** have been **corrected** in the system.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0011113  
**Patch Number:** (If applicable)  
**Created Date:** 2023-11-10  
**Object/Process:** Name Formats - Page Instructions  
**Knowledge Article ID:** (If applicable)
