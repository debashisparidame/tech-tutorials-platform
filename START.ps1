# 🚀 Start Tech Tutorials Platform
# This script will start both backend and frontend servers

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  TECH TUTORIALS PLATFORM - STARTUP" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking MongoDB..." -ForegroundColor Yellow
$mongoRunning = Get-Process mongod -ErrorAction SilentlyContinue
if (!$mongoRunning) {
    Write-Host "⚠️  MongoDB is not running!" -ForegroundColor Red
    Write-Host "Please start MongoDB first with: mongod" -ForegroundColor Yellow
    Write-Host ""
    $response = Read-Host "Continue anyway? (y/n)"
    if ($response -ne 'y') {
        exit
    }
} else {
    Write-Host "✅ MongoDB is running" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Starting servers..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Start Backend Server
Write-Host "🔧 Starting Backend Server (Port 5000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm start"
Start-Sleep -Seconds 3

# Start Frontend Server  
Write-Host "🎨 Starting Frontend Server (Port 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  ✨ SERVERS STARTED SUCCESSFULLY! ✨" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Access Points:" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "   Backend:  http://localhost:5000" -ForegroundColor White
Write-Host ""
Write-Host "🔐 Admin Panel:" -ForegroundColor Cyan
Write-Host "   Register: http://localhost:5173/admin/register" -ForegroundColor White
Write-Host "   Login:    http://localhost:5173/admin/login" -ForegroundColor White
Write-Host "   Dashboard: http://localhost:5173/admin/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "📝 Public Blog:" -ForegroundColor Cyan
Write-Host "   Blog List: http://localhost:5173/blogs" -ForegroundColor White
Write-Host ""
Write-Host "💡 Tip: Check COMPLETE_SETUP_GUIDE.md for full documentation" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
