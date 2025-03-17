# PD0001777 - Using Browser "Back" Button From Advisee Profile Hangs User Session  

## **Issue Summary**  
**Issue:**  
- When an **advisor** is on a list of advisees and **opens an advisee's profile**, then clicks the **web browser's "Back" button**, the session **hangs**.  
- No error message is displayed, but the screen **freezes** with a **spinning circle** icon.  
- This issue occurs in **Chrome, Firefox, and Safari** but **does not occur in Edge**.  

**Severity:** 4 - Low  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-08-02  

---

## **Replication Steps**  
1. **Login** as an **advisor** in PowerCampus Self-Service.  
2. Navigate to **Manage Advisees** and open the list of **advisees**.  
3. Click on an **advisee's profile** to view details.  
4. Click the **browser's "Back" button** to return to the advisee list.  
5. **Expected Result:** The page should return to the advisee list normally.  
6. **Actual Result:** The **session hangs**, displaying a **spinning circle** with no response.  

---

## **Workaround**  
- **Do not use** the browser's "Back" button.  
- Instead, use the **breadcrumb link** provided on the **Profile page** to return to the **list of advisees**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| The advisor is redirected back to the list of advisees. | The session hangs with a spinning circle, requiring a page refresh. |

---

## **Client Impact**  
- **Advisors experience session freezes**, disrupting workflow.  
- Requires **manual page refresh**, causing inconvenience and possible data loss.  

---

## **Resolution**  
- **Removed deprecated functionality** that caused the session to hang when using the browser's "Back" button.  
- Now, advisors can navigate smoothly without experiencing session freezes.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0001777  
**Patch Number:** (If applicable)  
**Created Date:** 2022-07-08  
**Object/Process:** Advisee Profile Navigation  
**Knowledge Article ID:** (If applicable)  
