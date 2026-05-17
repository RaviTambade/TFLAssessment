@echo off
:: Start AssessmentAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\AssessmentAPI && title AssessmentAPI && dotnet run"

:: Start CandidateAnswerAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\CandidateAnswerAPI && title CandidateAnswerAPI && dotnet run"

:: Start QuestionBankAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\QuestionBankAPI && title QuestionBankAPI && dotnet run"

:: Start ResultAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\ResultAPI && title ResultAPI && dotnet run"
