@echo off
setlocal
chcp 65001 >nul

set "SCRIPT=%~dp0photoshop-clarity-boost\Install-ClarityBoost.ps1"

echo.
echo ========================================
echo  Clarity Boost Photoshop Plugin Installer
echo ========================================
echo.

if not exist "%SCRIPT%" (
  echo Cannot find installer:
  echo %SCRIPT%
  echo.
  echo Please unzip the whole project first, then run this file again.
  echo.
  pause
  exit /b 1
)

echo Installing plugin...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT%"

if errorlevel 1 (
  echo.
  echo Install failed. Please check the message above.
  echo.
  pause
  exit /b 1
)

echo.
echo Done.
echo Restart Photoshop 2020, then open:
echo Window ^> Extensions ^> Clarity Boost
echo.
pause
