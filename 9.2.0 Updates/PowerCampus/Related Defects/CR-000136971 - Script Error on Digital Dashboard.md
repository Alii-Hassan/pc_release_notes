# CR-000136971 - Script Error on Digital Dashboard  

## **Issue Summary**  
**Issue:**  
- Some **URL links fail to display** within the **PowerCampus Digital Dashboard**, returning a **script error**.  
- Certain websites are **not designed to be displayed** in the dashboard due to security restrictions or embedded content limitations.  
- Affected areas include:  
  - **Customer Support Center Link**  
  - **Ellucian Website Link**  
  - **News, Global, Careers links on the Ellucian Website**  
  - **PCLaunch.html file links**  

**Severity:** Moderate  
**Product Line:** PowerCampus - System Administrator  
**Resolution Date:** 2022-03-31  

---

## **Replication Steps**  
1. Open **PowerCampus Digital Dashboard**.  
2. Click on **any external link** (e.g., Customer Support Center, Ellucian Website).  
3. Observe the **script error** message.  
4. Attempt to open links like **News, Global, Careers** on the Ellucian website.  
5. Verify if **Online Doc and Commons links work correctly**.  

---

## **Workaround**  
- Open the **affected links directly** in a **separate browser window** instead of the dashboard.  
- Modify **PCLaunch.html file** to exclude links that cause script errors.  

---

## **Expected vs. Actual Result**  
| **Expected Result** | **Actual Result** |
|--------------------|------------------|
| Links should open properly within the Digital Dashboard. | Some links return a **script error** and fail to display. |

---

## **Client Impact**  
- Users **could not access** certain links from the Digital Dashboard.  
- **Errors appeared** when trying to open external websites from within PowerCampus.  
- **Inconsistency** in link behavior across different sections of the dashboard.  

---

## **Resolution**  
- The **dashboard links were updated** to ensure compatibility.  
- **Problematic URLs were reviewed**, and necessary adjustments were made.  
- Users can now **navigate to external links without encountering script errors**.  

---

## **Related Information**  
**Product Line/Product:** PowerCampus - System Administrator  
**Identifier:** CR-000136971  
**Patch Number:** (If applicable)  
**Created Date:** 2016-01-12  
**Object/Process:** Digital Dashboard - URL Links  
**Knowledge Article ID:** (If applicable)  
