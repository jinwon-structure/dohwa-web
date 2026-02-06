# deploy.ps1 - Dohwa Tech Homepage Deploy Script
# Usage: .\deploy.ps1 "commit message"
# Example: .\deploy.ps1 "feat: Add new post"

param(
    [string]$msg = "update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host ""
Write-Host "=============================================" -ForegroundColor Magenta
Write-Host "   [DEPLOY] Dohwa Tech Homepage" -ForegroundColor White
Write-Host "=============================================" -ForegroundColor Magenta
Write-Host ""

# 1. Check changes
Write-Host "-> Checking changes..." -ForegroundColor Cyan
$status = git status --porcelain

if (-not $status) {
    Write-Host "[!] No changes to deploy." -ForegroundColor Yellow
    Write-Host ""
    exit 0
}

Write-Host "Changed files:" -ForegroundColor Gray
git status --short
Write-Host ""

# 2. Git Add
Write-Host "-> Adding files..." -ForegroundColor Cyan
git add .

# 3. Git Commit
Write-Host "-> Committing... [$msg]" -ForegroundColor Cyan
git commit -m $msg

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Commit failed!" -ForegroundColor Red
    exit 1
}

# 4. Git Push
Write-Host "-> Pushing to Vercel..." -ForegroundColor Cyan
git push

if ($LASTEXITCODE -ne 0) {
    Write-Host "[X] Push failed!" -ForegroundColor Red
    exit 1
}

# Done
Write-Host ""
Write-Host "=============================================" -ForegroundColor Green
Write-Host "[OK] Deploy completed!" -ForegroundColor Green
Write-Host "   https://dohwa.pro" -ForegroundColor Cyan
Write-Host "   (Takes 1-2 min to reflect)" -ForegroundColor Gray
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""
