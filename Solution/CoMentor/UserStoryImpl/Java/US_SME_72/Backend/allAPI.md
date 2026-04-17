# 📌 USER STORY US_SME_72 API (with Postman Data)

---

## 🔹 Create Question

POST http://192.168.1.100:8080/api/questions

### Body (raw → JSON)
{
  "description": "What is Java?",  
  "questionType": "MCQ",  
  "difficultyLevel": "Easy",  
  "status": "DRAFT",  
  "optionA": "Programming Language",  
  "optionB": "Database",  
  "optionC": "Operating System",  
  "optionD": "Browser",  
  "correctAnswer": "A"  
}

---

## 🔹 Update Question

PUT http://192.168.1.100:8080/api/questions/{id}

### Body (raw → JSON)
{
  "description": "What is Java Programming?",  
  "questionType": "MCQ",  
  "difficultyLevel": "Medium",  
  "status": "DRAFT",  
  "optionA": "Language",  
  "optionB": "Tool",  
  "optionC": "Framework",  
  "optionD": "Library",  
  "correctAnswer": "A"  
}

---

## 🔹 Get All Questions

GET http://192.168.1.100:8080/api/questions

---

## 🔹 Get Question Details

GET http://192.168.1.100:8080/api/questions/{id}

---

## 🔹 Get Draft Questions

GET http://192.168.1.100:8080/api/questions/drafts

---

## 🔹 Get Recent Questions

GET http://192.168.1.100:8080/api/questions/recent

---

## 🔹 Approve Question

PUT http://192.168.1.100:8080/api/questions/{id}/approve

(No body required)

---

## 🔹 Reject Question

PUT http://192.168.1.100:8080/api/questions/{id}/reject

(No body required)

---

## 🔹 Approve All Questions

PUT http://192.168.1.100:8080/api/questions/{id}/approve-all

(No body required)

---

## 🔹 Reject All Questions

PUT http://192.168.1.100:8080/api/questions/reject-all

(No body required)

---

## 🔹 Get Draft List (DTO)

GET http://192.168.1.100:8080/api/questions/drafts/list

---

## 🔹 Get Recent List (DTO)

GET http://192.168.1.100:8080/api/questions/recent/list

---

# ⚙️ Postman Setup

### Method
- POST / PUT

### Headers
Content-Type: application/json



---

# ✅ Example

PUT http://192.168.1.100:8080/api/questions/1

{
  "description": "Updated Question",  
  "questionType": "MCQ",  
  "difficultyLevel": "Hard",  
  "status": "DRAFT",  
  "optionA": "A",  
  "optionB": "B",  
  "optionC": "C",  
  "optionD": "D",  
  "correctAnswer": "A"  
}