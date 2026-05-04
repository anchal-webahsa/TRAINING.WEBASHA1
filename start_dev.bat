@echo off
echo ==================================================
echo   Starting WebAsha Development Servers...
echo ==================================================

echo [1/2] Starting Django Backend on Port 8000...
start "Django Backend" cmd /k "cd webashaProject && python manage.py runserver"

echo [2/2] Starting React Frontend on Port 5173...
start "React Frontend" cmd /k "cd webasha-react && npm run dev"

echo.
echo Both servers are starting in separate windows!
echo You can close this window.
