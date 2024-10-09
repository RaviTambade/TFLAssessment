@echo off
:: Start AssessmentAPI
start /B cmd.exe /C "cd Microservices\AssessmentAPI & title AssessmentAPI & dotnet run"

:: Start AssessmentIntelligenceAPI
start /B cmd.exe /C "cd Microservices\AssessmentIntelligenceAPI & title AssessmentIntelligenceAPI & dotnet run"

:: Start CandidateAnswerAPI
start /B cmd.exe /C "cd Microservices\CandidateAnswerAPI & title CandidateAnswerAPI & dotnet run"

:: Start EvaluationCriteriaAPI
start /B cmd.exe /C "cd Microservices\EvaluationCriteriaAPI & title EvaluationCriteriaAPI & dotnet run"

:: Start InterviewAPI
start /B cmd.exe /C "cd Microservices\InterviewAPI & title InterviewAPI & dotnet run"

:: Start QuestionBankAPI
start /B cmd.exe /C "cd Microservices\QuestionBankAPI & title QuestionBankAPI & dotnet run"

:: Start ResultAPI
start /B cmd.exe /C "cd Microservices\ResultAPI & title ResultAPI & dotnet run"
