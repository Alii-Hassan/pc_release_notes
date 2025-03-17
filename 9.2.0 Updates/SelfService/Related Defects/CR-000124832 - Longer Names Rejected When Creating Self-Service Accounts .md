# CR-000124832 - Longer Names Rejected When Creating Self-Service Accounts  

## **Issue Summary**  
**Issue:**  
- When creating a **Self-Service account**, if the **username exceeds 20 characters**, the **Active Directory (AD) rejects** the account creation.  
- The error message displayed is:  
```The following error(s) occurred while processing your request: An invalid User Name has been provided for the account.```
- Users are **not informed that the issue is due to Active Directory's 20-character limit**.  

**Severity:** Low  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Navigate to **PowerCampus Self-Service**.  
2. Go to **User Management > Create New User**.  
3. Enter a **username longer than 20 characters**.  
4. Attempt to **create the account**.  
5. The system **rejects the username**, displaying an **unclear error message**.  

---

## **Workaround**  
- **Manually shorten** usernames to **20 characters or less** before attempting to create the account.  
- **If necessary**, modify your **Active Directory settings** to allow longer usernames (if supported by your institution's IT policies).  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| The system should clearly notify the administrator about the username length restriction. | Users receive a **generic error message** with no indication that the issue is due to the **20-character limit**. |

---

## **Client Impact**  
- **Administrators struggle to understand why an account is not being created**.  
- **Users are confused** by the **vague error message**, leading to delays in account creation.  

---

## **Resolution**  
- **Validation was added** to check if the username exceeds **20 characters** **before** attempting to create the account.  
- If the **username is too long**, the system now **displays a clear message** notifying the administrator that **the account creation might fail due to the user name length**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000124832  
**Patch Number:** (If applicable)  
**Created Date:** 2015-01-22  
**Object/Process:** User Account Creation / Active Directory  
**Knowledge Article ID:** (If applicable)  
