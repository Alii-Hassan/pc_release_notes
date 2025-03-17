# CR-000180478 - Incorrect Message When Using Advisor Authorization for Registration

## Issue Summary
**Issue:** 
1. When a student is **on a waitlist** and a **seat opens**, they receive an **email** stating:  
   *"You may register online for the course listed above before the expiration time."*  
   - The student clicks **Register** in Self-Service and receives a **"Congratulations!"** message.  
   - However, the **course remains in the cart** and **is not actually registered**.  
   - This occurs when a student is **authorized to register for one session** within a term but the **waitlisted course belongs to another session** in the same term.  

2. Similar issue occurs when a student **adds an open course** (not waitlisted) to the cart:  
   - If the student belongs to a **registration group** that allows registration for **one session** but **not another session**,  
   - They receive a **"Congratulations!"** message after clicking **Register**,  
   - But the **course remains in the cart** and is **not actually registered**.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.3  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Scenario 1 (Waitlisted Course)**
   - Student is **waitlisted** for a course.
   - A seat **opens**, and they **receive an email** confirming eligibility to register.
   - Student **clicks Register** in Self-Service.
   - **Message displayed:** *"Congratulations! You have completed your registration."*
   - **Actual outcome:** Course **remains in the cart**, **not registered**.

2. **Scenario 2 (Open Course in Unavailable Session)**
   - Student **adds an open course** to their cart.
   - Course belongs to a **session they are not authorized** to register for.
   - Student clicks **Register**.
   - **Message displayed:** *"Congratulations! You have completed your registration."*
   - **Actual outcome:** Course **remains in the cart**, **not registered**.

---

## Expected Result
- Students should **only receive confirmation messages** if they are **successfully registered**.  
- If they are **not eligible**, the system should display an **error message** instead of a misleading **"Congratulations!"**.

## Actual Result
- Students **receive misleading confirmation messages** even when the **course is not registered**.  
- Courses **remain in the cart**, causing **confusion**.

---

## Workaround
- **No direct workaround available**; students must manually verify their registration in Self-Service.

---

## Client Impact
- **Students believe they are registered** when they are **not**.
- **No error message appears** when registration fails.
- **Advisors do not receive proper alerts** about failed registrations.

---

## Resolution
- After students **complete registration**, a **new alert message** now displays:  
  - **Confirms whether registration was successful or failed**.
  - **Students can view registration details** in the **Registration Summary** window.
  - **Advisors can review registration attempts** under the **Student Profile**.
  - If an advisor **approves or denies a registration request**, the alert message updates accordingly.
  - Registration **status is logged**, and students can **track their registration history** under **Profile**.
