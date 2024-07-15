# Define the path to the project directory
$projectDir = "C:\repos\angular-material-admin"

# Function to read and display the current build state
function Get-BuildState {
    param (
        [string]$dir
    )

    # Read package.json for dependencies
    $packageJsonPath = Join-Path -Path $dir -ChildPath "package.json"
    if (Test-Path -Path $packageJsonPath) {
        $packageJson = Get-Content -Path $packageJsonPath -Raw | ConvertFrom-Json
        Write-Host "Dependencies:" -ForegroundColor Green
        $packageJson.dependencies.PSObject.Properties.Name | ForEach-Object { 
            Write-Host "$($_): $($packageJson.dependencies.$_)" 
        }
    } else {
        Write-Error "package.json not found at $packageJsonPath"
        exit
    }

    # Read angular.json for default project configuration
    $angularJsonPath = Join-Path -Path $dir -ChildPath "angular.json"
    if (Test-Path -Path $angularJsonPath) {
        $angularJson = Get-Content -Path $angularJsonPath -Raw | ConvertFrom-Json
        Write-Host "Default Project:" -ForegroundColor Green
        $angularJson.defaultProject
    } else {
        Write-Error "angular.json not found at $angularJsonPath"
        exit
    }

    # Display a message about the current build state
    Write-Host "Current build state information retrieved." -ForegroundColor Cyan
}

# Function to update SCSS import paths
function Update-ImportPaths {
    param (
        [string]$dir
    )
    
    Get-ChildItem -Path $dir -Recurse -Filter *.scss | ForEach-Object {
        $filePath = $_.FullName
        $fileContent = Get-Content -Path $filePath -Raw
        $updatedContent = $fileContent -replace "@import '~@angular/material/theming';", "@import '@angular/material/theming';"
        Set-Content -Path $filePath -Value $updatedContent
        Write-Host "Updated: $filePath"
    }
}

# Function to fix missing NgChartsModule import
function Fix-NgChartsModule {
    param (
        [string]$dir
    )

    $filePath = Join-Path -Path $dir -ChildPath "src/app/admin/charts/charts.module.ts"
    if (Test-Path -Path $filePath) {
        $fileContent = Get-Content -Path $filePath -Raw
        $updatedContent = $fileContent -replace "import { NgChartsModule } from 'ng2-charts';", "import { NgChartsConfiguration, provideCharts, withDefaultRegisterables } from 'ng2-charts';"
        Set-Content -Path $filePath -Value $updatedContent
        Write-Host "Fixed NgChartsModule import in: $filePath"
    } else {
        Write-Error "charts.module.ts not found at $filePath"
        exit
    }
}

# Function to add missing Angular Material modules
function Add-MissingMaterialModules {
    param (
        [string]$dir
    )

    $modules = @(
        "MatCardModule",
        "MatCardHeader",
        "MatCardTitle",
        "MatCardContent"
    )

    $moduleFilePath = Join-Path -Path $dir -ChildPath "src/app/app.module.ts"
    if (Test-Path -Path $moduleFilePath) {
        $moduleFileContent = Get-Content -Path $moduleFilePath -Raw
        foreach ($module in $modules) {
            if ($moduleFileContent -notmatch $module) {
                $moduleFileContent = $moduleFileContent -replace "(import {.*}) from '@angular/material';", "`$1, $module from '@angular/material';"
                $moduleFileContent = $moduleFileContent -replace "(imports: \[.*)\],", "`$1, $module],"
            }
        }
        Set-Content -Path $moduleFilePath -Value $moduleFileContent
        Write-Host "Added missing Angular Material modules in: $moduleFilePath"
    } else {
        Write-Error "app.module.ts not found at $moduleFilePath"
        exit
    }
}

# Get the current build state
Write-Host "Getting current build state..." -ForegroundColor Cyan
Get-BuildState -dir $projectDir

# Update SCSS import paths
Write-Host "Updating SCSS import paths..." -ForegroundColor Cyan
Update-ImportPaths -dir (Join-Path -Path $projectDir -ChildPath "src")

# Fix NgChartsModule import
Write-Host "Fixing NgChartsModule import..." -ForegroundColor Cyan
Fix-NgChartsModule -dir $projectDir

# Add missing Angular Material modules
Write-Host "Adding missing Angular Material modules..." -ForegroundColor Cyan
Add-MissingMaterialModules -dir $projectDir

# Display final message
Write-Host "Fixes applied. You can now attempt to build the project again." -ForegroundColor Green
