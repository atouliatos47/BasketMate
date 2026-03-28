@echo off
set "DATABASE_URL=postgresql://neondb_owner:npg_3WhfSocVzF1M@ep-rapid-fire-a4altv5d-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
set PORT=3001
set VAPID_EMAIL=
set VAPID_PUBLIC_KEY=
set VAPID_PRIVATE_KEY=

echo Starting BasketMate locally...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop
echo.

node server.js
pause
