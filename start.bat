@echo off
rem Starts BasketMate on this computer for testing.
rem The database address and keys are read from the .env file in this folder.
rem .env is never uploaded to GitHub (it is listed in .gitignore).
set PORT=3001
node --env-file=.env server.js
pause
