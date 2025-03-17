# PD0009293 - Copy Sections in Term Processing Workflow Does Not Copy Schedule Meeting Information

## Issue Summary
**Issue:** In **Term Processing > Copy Sections**, the **schedule meeting information** is **not copied**. Additionally, **changes made on the Schedule tab do not update the section meetings**.

**Severity:** 2 - High  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.1  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Create sections** by copying from **2023/Summer to 2023/Fall**.
2. **Select** the radio button to **copy schedule information from the Sections table**.
3. **Process the request**.
4. Observe that:
   - The new sections in **2023/Fall** have **schedule information** on the **Schedule tab**.
   - The **section meetings are not created**.
   - One record exists on the **Section Meeting tab**, but it has **blank day and time**, with only **campus, building, and room** populated.
5. **Repeat the process**, selecting the radio button to **copy schedule information from the Catalog table**.
6. Observe that:
   - **Schedule information is not copied from the catalog**.
   - Course sections are created **without schedule information**.
7. **Modify the Schedule tab** (e.g., update room number).
8. Observe that:
   - **Section meetings are not updated**.

---

## Expected Result
- When copying schedules from the **Sections table**, the sections copied from **2023/Summer to 2023/Fall** should include **schedule and section meetings**.
- When copying schedules from the **Catalog table**, the **schedule and section meetings** should be created based on the catalog.
- Updating information on the **Schedule tab** should also update the **Section Meetings tab**.

## Actual Result
- **Section meetings are not copied**.
- **Updating the schedule does not update section meetings**.

## Screenshot
(Attach screenshot if available)

---

## Workaround
- **Manually insert the schedule** on the **Schedule tab** to create the **section meetings**.

---

## Additional Information
**Client Impact:**
- The **Copy Sections process** does **not copy section meetings**.
- **Updating schedule details does not update section meetings**, causing inconsistencies in **course scheduling**.

---

## Resolution
- **Created calendar meetings** for schedules **without a building and/or room**.
- **Fixed an issue** where building and room information was **not updating** when **null values** were present in the database.

---

## Related Information
**Product Line/Product:** PowerCampus - General - Academic Records  
**Identifier:** PD0009293  
**Patch Number:** (If applicable)  
**Created Date:** 2023-08-09  
**Object/Process:** Term Processing - Copy Sections  
**Knowledge Article ID:** (If applicable)

