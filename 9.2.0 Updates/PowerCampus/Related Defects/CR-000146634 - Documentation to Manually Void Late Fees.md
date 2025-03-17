# CR-000146634 - Documentation to Manually Void Late Fees  

## **Issue Summary**  
**Issue:**  
- When a **cash receipt is voided**, any **associated late fees are not voided automatically**.  
- Users were unaware that **late fees must be manually voided** from the **student's balance**.  
- The **documentation did not specify this requirement**, leading to confusion.  

**Severity:** Low  
**Product Line:** PowerCampus - General - Billing  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. **Void a cash receipt** that has late fees associated with it.  
2. Check the **student’s balance**.  
3. Observe that **the late fees are still present** and have not been automatically voided.  

---

## **Workaround**  
- **Manually void the late fees** from the student's balance after voiding the cash receipt.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| Late fees should be voided automatically when the related cash receipt is voided. | Late fees remain in the student's balance and must be manually voided. |

---

## **Client Impact**  
- **Users assumed late fees would be voided automatically**, leading to incorrect balances.  
- **Additional manual steps** were required to adjust student accounts.  

---

## **Resolution**  
- **Updated the online help documentation** to explicitly state that **late fees must be manually voided** when a cash receipt is voided.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - General - Billing  
**Identifier:** CR-000146634  
**Patch Number:** (If applicable)  
**Created Date:** 2017-03-11  
**Object/Process:** Billing - Late Fees  
**Knowledge Article ID:** (If applicable)  
