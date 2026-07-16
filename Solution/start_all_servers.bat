@echo off

cd /d "%~dp0"

echo Starting .NET Web API...
start ".NET" cmd /k "cd /d "%~dp0Backend\dotnet\webapi" && dotnet build && dotnet run"

echo Starting Java Spring Boot...
start "Java" cmd /k "cd /d "%~dp0Backend\java\webapi" && mvn spring-boot:run"

echo Starting Node.js...
start "NodeJS" cmd /k "cd /d "%~dp0Backend\nodejs\webapi" && npm install && node server.js"

echo Waiting 10 seconds before starting React...
timeout /t 10 /nobreak >nul

echo Starting React...
start "React" cmd /k "cd /d "%~dp0Frontend\reactapp" && npm install && npm start"

pause