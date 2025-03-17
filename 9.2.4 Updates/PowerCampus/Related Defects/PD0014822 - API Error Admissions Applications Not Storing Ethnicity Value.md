# PD0014822 - API Error: Admissions Applications Not Storing Ethnicity Value

## Issue Summary
**Issue:** Entering information on `webAPI POST /api/applications`, despite providing the Ethnicity field, does not store the value in the Application information of PowerCampus.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus  
**Found in Version:** 9.2.3  
**Resolution Date:** 2024-06-28  

---

## Replication Steps
1. Submit a request to `POST /api/applications` with the following data:

```json
"Ethnicity": 4,
...
"Email": "firstname.lastname@gmail.com",
"PhoneNumbers": [{"Country": "USA", "Number": "9731231234", "Type": 1}],
"CitizenshipStatus": "USA",
"PrimaryCitizenship": null,
"SecondaryCitizenship": null,
"Visa": null,
"Ethnicity": 4
...
```

2. Approve the application in the **Handling Application workflow**.
3. Check the **Application table** and the **IPEDS Ethnicity tab** in the Applicants workflow.

---

## Expected Result
- The **Ethnicity** information should be displayed in the Handle Application workflow and stored in the Application table.

## Actual Result
- The **Ethnicity** information is not displayed in the Handle Application workflow.
- The **Ethnicity** value is not stored in the Application table or the **IPEDS Ethnicity tab**.
- However, a record **is** created in the `[dbo].[RecruiterApplication]` table.

## Screenshot
(Attach screenshot if available)

---

## Workaround
No known workaround is available.

---

## Additional Information
**Client Impact:**
- The **Ethnicity** value is sent through the API, but it is not stored in the Application table.

---

## Resolution
When mapping the **Ethnicity enumerator** from Recruit to a **PowerCampus code value**, the user now selects a **subrace** from an **IPEDS federal category**. When the value is displayed in **Handle Application** or **Application**, the record now correctly reflects both the **IPEDS Federal category** and the **subrace**.

---

## Related Information
**Product Line/Product:** PowerCampus - General - System Administrator Module  
**Identifier:** PD0014822  
**Patch Number:** (If applicable)  
**Created Date:** 2024-05-17  
**Object/Process:** API Ethnicity Handling  
**Knowledge Article ID:** (If applicable)

