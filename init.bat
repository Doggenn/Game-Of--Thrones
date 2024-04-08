@echo off
cd /d %~dp0

rem Instalar dependencias con npm
npm run dev

rem Ejecutar comando npm run dev después de que finalice el servidor JSON
npm i

pause