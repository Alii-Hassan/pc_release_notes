# CR-000176946 - Datepicker Control Not Selectable in Application Form Layout Setup

---

## 📌 Product Information
- **Product Line:** PowerCampus - Self-Service  
- **Found in Version:** 9.1.1  
- **Identifier:** `d792d7b01b44451024818732604bcbcf`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-03-31  
- **Created Date:** 🗓️ 2020-12-02 20:31:18  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- In **Application Form Layout Setup**, the **Datepicker control** could **not be selected** as an option for **user-defined date fields**.  
- As a result:  
  - **Applicants entered dates as text**, leading to **invalid formats**.  
  - The **date input was not validated**, allowing **invalid entries**.  
  - In **PowerCampus Client > Admissions Setflow > Handle Applications Workflow**, attempting to **approve an application with an invalid date** caused an **SQL error**:  
    ```plaintext
    "Your changes have not been made. SQLSTATE = 22007.
    Microsoft SQL Server Native Client 11.0.
    Conversion failed when converting date and/or time from character string."
    ```
- **Workaround Before Fix:**  
  - Manually update the **JsonDetail column** in the **FormLayout table** to set the field type as `"DatePicker"` instead of `"textbox"`.  
  - **However**, this **did not prevent users from entering invalid text**, still causing **internal server errors (500)**.  

---

## 🔍 Client Impact
- **Applicants entered dates in an incorrect format**, leading to **submission issues**.  
- **Admission staff could not approve applications** containing invalid date values.  
- **Manual intervention was required** to correct invalid date entries.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- The **Datepicker control was added** as a selectable **field type** in the **Application Form Layout Setup**.  
- Now:  
  - **Applicants can enter dates using a calendar picker**.  
  - **Invalid text entries are prevented**.  
  - **Dates are stored correctly in the application**, ensuring **data integrity**.  

---

🚀 **Status:** **Resolved**
