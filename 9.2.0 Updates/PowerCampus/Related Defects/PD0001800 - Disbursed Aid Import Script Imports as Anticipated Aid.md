# PD0001800 - Disbursed Aid Import Script Imports as Anticipated Aid  

## **Issue Summary**  
**Issue:**  
- When using the **PowerFaids_ImportDisbursedAid.ps1** script, **aid is imported with the anticipated_flag set to "Y"** instead of being marked as **Disbursed Aid**.  
- The issue occurs due to **line 396** in the script, which incorrectly sets `"aidType": "Anticipated"`.  

**Severity:** Moderate  
**Product Line:** PowerCampus - General - System Administrator Module  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Execute the **PowerFaids_ImportDisbursedAid.ps1** script in **PowerCampus**.  
2. Review the **imported aid records**.  
3. Notice that **all imported aid is flagged as "Anticipated"**, even when it should be marked as **Disbursed**.  

---

## **Workaround**  
- **Manually edit line 396** of the **PowerFaids_ImportDisbursedAid.ps1** script:  
  ```powershell
  "aidType": "Disbursement"
This change ensures that the script correctly imports aid as Disbursed instead of Anticipated.

## Expected vs. Actual Result
### Expected Result	
Aid imported via the script should be correctly labeled as Disbursed Aid.	
### Actual Result
Aid is incorrectly flagged as Anticipated Aid due to a script error.
## Client Impact
- Incorrect financial aid processing affects reporting and student records.
- Users cannot generate correct Disbursement calculations when importing aid data.
- Manual intervention is required to correct aid types after import.
## Resolution
- Corrected line 396 in the PowerFaids_ImportDisbursedAid.ps1 script to set "aidType": "Disbursement".
- Ensured that imported aid records now reflect the correct disbursement type.
## Related Information
Product Line/Product: PowerCampus - General - System Administrator Module
Identifier: PD0001800
Patch Number: (If applicable)
Created Date: 2022-07-11
Object/Process: PowerFaids_ImportDisbursedAid.ps1 Script
Knowledge Article ID: (If applicable)