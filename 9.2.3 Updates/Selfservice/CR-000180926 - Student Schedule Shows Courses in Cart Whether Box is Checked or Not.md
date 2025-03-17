# CR-000180926 - Student Schedule Shows Courses in Cart Whether Box is Checked or Not

## Issue Summary
**Issue:**  
- Sometimes, **courses in the cart** **still display** on the **student's schedule**, even when the **"Courses in Cart"** check-box is **not checked**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Log into** PowerCampus **Self-Service**.
2. **Add courses** to the cart.
3. **Navigate to** the **Student Schedule** page.
4. **Uncheck** the **"Courses in Cart"** checkbox.
5. **Observe** that the **courses still appear** in the schedule.

---

## Expected Result
- **Courses in the cart** should **only display** when the **"Courses in Cart"** check-box is checked.
- When the **check-box is unchecked**, these courses **should not be visible** in the schedule.

## Actual Result
- **Courses in cart** **sometimes display** in the **student's schedule**, even when the check-box is **unchecked**.

---

## Workaround
- **No direct workaround** available. Users must **manually verify schedule details**.

---

## Client Impact
- **Students, advisors, and relatives** see **cart courses** even when the setting **to hide them is disabled**.
- **Confusion in schedule visibility**, especially for pending registrations.

---

## Resolution
- When a **course is pending advisor authorization**, the **condition to display it** in **"My Schedule"** was updated to show **"Pending"** status.
- **Status now displays correctly** in:
  - **My Schedule**
  - **Printed View**
  - **Cart**
  - **Dossier**
  - **Advisor's Student Schedule View**
  - **Shared Access View (Relatives)**.
