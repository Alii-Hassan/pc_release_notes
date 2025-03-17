# CR-000176538 - eTranscripts Windows Services Stop Unexpectedly  

## **Issue Summary**  
**Issue:**  
- The **Windows services responsible for processing eTranscripts** stop unexpectedly, leading to a **disruption** in processing.  
- This affects the **PowerCampus Publisher Service** and the **PowerShell Subscriber Service**, causing eTranscripts to remain in the queue **without being processed**.  

**Severity:** Moderate  
**Product Line:** PowerCampus - General - eTranscripts  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Initiate eTranscript processing in **PowerCampus**.  
2. Monitor the **PowerCampus Publisher Service** and **PowerShell Subscriber Service** in Windows Services.  
3. Observe that these services **randomly stop** without warning, preventing transcript processing.  

---

## **Workaround**  
- **Manually restart the services** when they stop.  
  1. Open **Windows Services (services.msc)**.  
  2. Locate **PowerCampus Publisher Service** and **PowerShell Subscriber Service**.  
  3. Right-click and select **Restart**.  
- **Set services to restart automatically** in case of failure:  
  1. Open **Services (services.msc)**.  
  2. Right-click the service and select **Properties**.  
  3. Go to the **Recovery** tab.  
  4. Set **First failure**, **Second failure**, and **Subsequent failures** to **Restart the Service**.  
  5. Click **Apply** and **OK**.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| The **PowerCampus Publisher Service** and **PowerShell Subscriber Service** should run continuously without stopping unexpectedly. | The services **randomly stop**, causing transcript processing to fail. |

---

## **Client Impact**  
- **eTranscripts are not processed** in a timely manner.  
- **Manual intervention is required**, increasing administrative workload.  
- **Delays in transcript delivery** could impact students and institutions.  

---

## **Resolution**  
- **Fixed the issue causing the services to stop unexpectedly**.  
- **Improved error handling and service stability** to prevent random service termination.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - eTranscripts  
**Identifier:** CR-000176538  
**Patch Number:** (If applicable)  
**Created Date:** 2020-11-03  
**Object/Process:** eTranscripts - Windows Services  
**Knowledge Article ID:** (If applicable)  
