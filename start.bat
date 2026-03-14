@echo off
set DATABASE_URL=postgresql://neondb_owner:npg_3WhfSocVzF1M@ep-rapid-fire-a4altv5d-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
set PORT=3001
node server.js
pause