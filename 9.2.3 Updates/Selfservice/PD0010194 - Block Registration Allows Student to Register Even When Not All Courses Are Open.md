# PD0010194 - Block Registration Allows Student to Register Even When Not All Courses Are Open

## Issue Summary
**Issue:** When a student **registers for a block of courses**, but **one or more courses in the block are closed**, only the **open courses are registered**.  
There is **no warning message** to inform the student that **not all courses were added**.

**Severity:** 3 - Moderate  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.4  
**Resolution Date:** 2023-12-15  

---

## Replication Steps
1. **Enable Block Registration** for a particular group of students.
2. Create a **block of course sections**.
3. **Close one or more courses** within the block.
4. The student **registers for the block**.
5. **Result:** 
   - **Only the open courses** are registered.
   - The **closed course is not added** to the cart or registered.
   - The student receives a **"Congratulations! You have completed your registration"** message.
   - **No message appears** indicating that **some courses were not registered**.

---

## Expected Result
- The student **should receive a message** notifying them that **not all courses in the block were available to register**.
- The registration summary should **clearly show which courses were successfully registered** and which were **not added** due to being closed.

## Actual Result
- The student **is not informed** that some courses in the block **were not registered**.
- The **confirmation message is misleading**, making the student believe all courses were added.

---

## Client Impact
- **Students may assume** they are registered for all courses in the block **when they are not**.
- **Advisors and administrators** may receive **increased support inquiries** from students unaware of missing courses.
- **Potential scheduling conflicts** if students are unaware of missing courses.

---

## Resolution
- **After block registration**, an **alert message now appears** indicating that **some courses were not registered**.
- Students can **view the final registration status** in the **Registration Summary window**.
- **Registration summary is logged**, and:
  - **Students can check it** under their **Profile**.
  - **Advisors can review it** in the student profile to assist with missing courses.

---

## Related Information
**Product Line/Product:** PowerCampus - Self-Service  
**Identifier:** PD0010194  
**Patch Number:** (If applicable)  
**Created Date:** 2023-09-25  
**Object/Process:** Block Registration  
**Knowledge Article ID:** (If applicable)
