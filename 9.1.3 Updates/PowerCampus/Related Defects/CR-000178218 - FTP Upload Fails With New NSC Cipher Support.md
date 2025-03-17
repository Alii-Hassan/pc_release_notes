# CR-000178218 - FTP Upload Fails With New NSC Cipher Support

---

## 📌 Product Information
- **Product Line:** PowerCampus - General - eTranscripts  
- **Found in Version:** 9.1.2  
- **Identifier:** `5392d7b01b44451024818732604bcbd6`  
- **Object/Process:** Knowledge Article  

---

## ⚠️ Issue Summary
- **Severity:** 🔴 2 - High  
- **Date Resolved:** 🗓️ 2021-05-18  
- **Created Date:** 🗓️ 2021-02-24 00:41:57  
- **Affected Language(s):** 🌐 All  

🔹 **Issue:**  
- PowerCampus **eTranscript processing failed** after **NSC (National Student Clearinghouse)** updated its **cipher support/de-support policies**.  
- The **FTP connection could not complete**, preventing the system from **uploading PDF files** to the **NSC FTP server**.  

---

## 🔍 Client Impact
- **Institutions could not upload transcripts** via FTP to **NSC**, delaying **eTranscript processing**.  
- **Failed connections required manual intervention**, increasing administrative workload.  

---

## ✅ Resolution
🔧 **Fix Implemented:**  
- **Hotfix Applied:** ✅ `PowerCampus_Hotfix_9.0.0_CR-000178218`  
- **Updated FTP protocol support** to comply with **NSC's new cipher requirements**.  
- **FTP uploads now complete successfully**, ensuring uninterrupted eTranscript processing.  

---

🚀 **Status:** **Resolved**
