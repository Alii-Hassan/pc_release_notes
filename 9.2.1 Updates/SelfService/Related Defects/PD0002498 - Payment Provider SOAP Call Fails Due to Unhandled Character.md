# PD0002498 - Payment Provider SOAP Call Fails Due to Unhandled Character  

## **Issue Summary**  
**Issue:**  
- The **payment provider request string** includes transaction amounts with **comma (",") separators** for the thousands (e.g., 1,000.00).  
- This differs from **earlier versions (8.8.x)**, where transaction amounts did **not** include separators.  
- Some **third-party payment providers** do **not handle** the **comma separator**, causing **failed transactions**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. **Login** to PowerCampus Self-Service.  
2. Navigate to **Payments** and initiate a transaction with an amount in the **thousands (e.g., 1,000.00).**  
3. Submit the **payment request** to a third-party provider.  
4. **Expected Result:** The transaction processes successfully.  
5. **Actual Result:** The **transaction fails** due to the **comma separator** in the amount field.  

---

## **Workaround**  
- **Manually enter transaction amounts without commas** (e.g., **1000.00 instead of 1,000.00**).  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| Payment provider processes transactions correctly. | Transactions fail due to the unhandled comma separator. |

---

## **Client Impact**  
- **Users cannot complete transactions** when the amount includes a **thousands separator (",")**.  
- **Payment failures** impact financial workflows and user experience.  

---

## **Resolution**  
- **Removed the comma separator (",")** from the transaction amount format to **ensure compatibility** with third-party payment providers.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0002498  
**Patch Number:** (If applicable)  
**Created Date:** 2022-08-12  
**Object/Process:** Payment Processing  
**Knowledge Article ID:** (If applicable)  
