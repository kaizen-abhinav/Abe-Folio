# Deployment script for Vercel (PowerShell)
Write-Host "🚀 Deploying Abhinav Varghese Portfolio..." -ForegroundColor Cyan

# Check if vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm i -g vercel
}

# Run build test
Write-Host "🔨 Testing build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Choose deployment option:" -ForegroundColor Cyan
    Write-Host "1) Deploy to preview"
    Write-Host "2) Deploy to production"
    
    $choice = Read-Host "Enter your choice (1 or 2)"

    switch ($choice) {
        "1" {
            Write-Host "📤 Deploying to preview..." -ForegroundColor Yellow
            vercel
        }
        "2" {
            Write-Host "📤 Deploying to production..." -ForegroundColor Yellow
            vercel --prod
        }
        default {
            Write-Host "❌ Invalid choice" -ForegroundColor Red
            exit 1
        }
    }
} else {
    Write-Host "❌ Build failed. Please fix errors before deploying." -ForegroundColor Red
    exit 1
}
