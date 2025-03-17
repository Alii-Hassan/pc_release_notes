# CR-000183549 - Dashboard Messages Not Displayed in Some Browser Resolutions  

## **Issue Summary**  
**Issue:**  
- Some **dashboard messages** are not displayed properly on **certain browser resolutions**, particularly on **mobile devices**.  

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Resolution Date:** 2023-01-27  

---

## **Replication Steps**  
1. Open **PowerCampus Self-Service Dashboard**.  
2. Use a **mobile device** or resize the browser window to a **smaller resolution**.  
3. Scroll through the **dashboard messages**.  
4. **Expected Result:** All messages should be displayed properly, with navigation arrows visible if needed.  
5. **Actual Result:** Some messages **do not appear** at all, and **navigation may not work correctly**.  

---

## **Workaround**  
- **Use a larger screen resolution** or **switch to a desktop browser** to view all messages.  
- **Manually refresh the page** to attempt loading messages.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|---------------------|------------------|
| All dashboard messages should be displayed and navigable regardless of screen resolution. | Some messages are not shown on smaller screens or certain browser resolutions. |

---

## **Client Impact**  
- **Users on mobile devices cannot see all dashboard messages.**  
- **Critical information may be missed**, leading to confusion or missed notifications.  

---

## **Resolution**  
- **Added `isScrolling` property** to the carousel component.  
- Initialized `isScrolling = true` to **enable smooth message transitions**.  
- **Once scrolling ends, `isScrolling` is set to false**, preventing further issues.  
- If **no more messages are available**, the **right navigation arrow is hidden** to improve usability.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** CR-000183549  
**Patch Number:** (If applicable)  
**Created Date:** 2022-02-11  
**Object/Process:** Dashboard Messages Display  
**Knowledge Article ID:** (If applicable)  
