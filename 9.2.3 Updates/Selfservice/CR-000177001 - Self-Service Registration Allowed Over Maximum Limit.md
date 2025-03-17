# CR-000177001 - Self-Service Registration Allowed Over Maximum Limit

## Issue Summary
**Issue:** Self-Service registration allowed students to register for a class over the maximum limit. When students registered at nearly the same time, both appeared on the **Section Added** list, despite exceeding the limit.

**Alternative Behavior:**  
- When two students clicked **Register** simultaneously (milliseconds apart), both received the message:  
  **"Congratulations! You have completed your Registration"**  
  However, only **one student** was actually registered for the section, leading to confusion when the course disappeared for the other student.

**Severity:** 2 - High  
**Product Line:** PowerCampus - Self-Service  
**Found in Version:** 9.1.2  
**Resolution Date:** 2023-12-15  

## Replication Steps
1. Open **Self-Service Registration**.
2. Have two students register for a course at almost the same time.
3. Observe that:
   - Both appear on the **Section Added** list.
   - The system allows over-registration.
   - One student ultimately does **not** get registered despite receiving a success message.

## Expected Result
- If a section is at capacity, the **second student** should receive a **clear notification** that the section is full.
- The registration status should **immediately reflect the actual outcome**.

## Actual Result
- The system **allowed** students to register past the limit.
- Confusing success messages were displayed even when a registration **failed**.
- The second student was **not actually registered**, and the course **disappeared** from their list.

## Workaround
- No direct workaround; students had to **manually verify** their registration status.

## Client Impact
- The message displayed after registration did not match the **final registration status**.
- Students were misled into thinking they were successfully registered for a course when they were **not**.
- Advisors and students **could not easily verify** if registration was successful.

## Resolution
- **Updated Alert Messages:**  
  - After students complete registration, the system now provides a **clear alert** indicating whether registration was successful or not.
  - Students can **view** the **final status** of their courses in the **Registration Summary** window.
  
- **Advisor Approvals Updated:**  
  - When an **advisor approves or denies** a student’s schedule request, the alert message now **accurately reflects** the action taken.
  - The **registration summary** is logged.

- **New Logging and Visibility:**  
  - Students can **check their registration summary** under **Profile**.
  - **Advisors** can view students’ **registration summaries** in the **Student Profile** section.
