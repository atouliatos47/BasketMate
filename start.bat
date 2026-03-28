@echo off
cd /d "C:\Projects\BasketMate-main\BasketMate-main"
set "DATABASE_URL=postgresql://neondb_owner:npg_3WhfSocVzF1M@ep-rapid-fire-a4altv5d-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
set PORT=3001

echo Starting BasketMate locally...
echo Open http://localhost:3001 in your browser
echo Press Ctrl+C to stop
echo.

node server.js
pause
