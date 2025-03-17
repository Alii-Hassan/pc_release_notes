# CR-000184095 - Registration Message Incorrect or Incomplete

## Issue Summary
**Issue:**  
- When a **student adds courses to cart**, and **one or more courses close before submission**, the **registration message** states:  
  **"Congratulations, you have completed your registration."**
- However, **closed courses are removed from the cart** without any notification.
- The student is **not informed** about which courses were registered and which were removed due to closure.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Student adds two courses** to the cart.
2. **One course closes** while still in the cart.
3. **Student submits the cart** for registration.
4. **Registration message appears:**  
   - **"Congratulations, you have completed your registration."**
5. **One course is registered**, but the **closed course is silently removed** from the cart.

---

## Expected Result
- The **registration message should indicate** why some courses were not registered.
- The **student should receive** a **clear explanation** of courses that were removed from the cart due to closure.

## Actual Result
- **No message** is displayed about **courses removed from the cart**.
- **Students are confused** about why some courses are missing from their registration.

---

## Workaround
- **No direct workaround** available.

---

## Client Impact
- **Students do not receive accurate feedback** about their registration status.
- **Advisors may need to manually explain** why some courses were not registered.

---

## Resolution
- Now, after students complete registration, **an alert message** appears:
  - **Indicating the final status** of each course.
  - **Listing courses that were removed** due to closure.
- The **Registration Summary window** now provides **detailed status updates** for each course.
- **Advisors and students** can view the **registration summary** under the **Profile section**.
