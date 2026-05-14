@echo off
:: Start APIforSubject
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\APIforSubject && title APIforSubject && dotnet run"

:: Start AssessmentAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\AssessmentAPI && title AssessmentAPI && dotnet run"

:: Start AssessmentIntelligenceAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\AssessmentIntelligenceAPI && title AssessmentIntelligenceAPI && dotnet run"

:: Start CandidateAnswerAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\CandidateAnswerAPI && title CandidateAnswerAPI && dotnet run"

:: Start EvaluationCriteriaAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\EvaluationCriteriaAPI && title EvaluationCriteriaAPI && dotnet run"

:: Start InterviewAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\InterviewAPI && title InterviewAPI && dotnet run"

:: Start QuestionBankAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\QuestionBankAPI && title QuestionBankAPI && dotnet run"

:: Start ResultAPI
start cmd /k "cd /d D:\TFLAssessment\Solution\WebSolution\AssessmentPortal\Microservices\ResultAPI && title ResultAPI && dotnet run"
