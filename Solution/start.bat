@echo off

echo Starting all applications of TFLAssessment...

REM ==============================
REM 1. Start Java Maven Project
REM ==============================
cd /d D:\tap\TFLAssessment\Solution\java\webapi
start cmd /k "mvn spring-boot:run"

REM ==============================
REM 2. Start .NET Project
REM ==============================
cd /d D:\tap\TFLAssessment\Solution\dotnet\webapi
start cmd /k "dotnet run"

REM ==============================
REM 3. Start Node.js Backend
REM ==============================
cd /d D:\tap\TFLAssessment\Solution\nodejs\webapi
start cmd /k "node server.js"

REM ==============================
REM 4. Start React Frontend
REM ==============================
cd /d D:\tap\TFLAssessment\Solution\ui\reactapp
start cmd /k " npm start"

echo All applications are starting in separate windows...
pause