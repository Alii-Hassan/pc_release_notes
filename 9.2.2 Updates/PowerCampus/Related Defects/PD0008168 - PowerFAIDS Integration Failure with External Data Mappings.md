# PD0008168 - PowerFAIDS Integration Failure with External Data Mappings

## **Issue Summary**
**Issue:**  
- **PowerFAIDS Integration fails** when mappings require data to be moved to the **external_data_extended** table.

**Severity:** 2 - High  
**Product Line:** PowerCampus - General - PowerFAIDS Integration (PFI)  
**Resolution Date:** 2023-06-30  

---

## **Replication Steps**
1. **Execute the PowerFAIDS Integration process**.
2. The integration **attempts to map data** to the **external_data_extended** table.
3. **Failure occurs**, preventing correct data updates.

---

## **Expected vs. Actual Result**
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Data should be **successfully mapped and moved** to the **external_data_extended** table. | The integration **fails**, and the table is **not updated correctly**. |

---

## **Client Impact**
- **PowerFAIDS data is not transferred correctly**, affecting **financial aid processing**.
- Users **cannot execute the integration successfully**.

---

## **Resolution**
- **Fixed integration logic** to ensure correct mapping and data transfer to the **external_data_extended** table.

---

## **Related Information**
**Product Line/Product:** PowerCampus - General - PowerFAIDS Integration (PFI)  
**Identifier:** PD0008168  
**Patch Number:** (If applicable)  
**Created Date:** 2023-06-07  
**Object/Process:** PowerFAIDS Integration  
**Knowledge Article ID:** (If applicable)  
