$ErrorActionPreference = "Stop"

$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$extensionRoot = Join-Path $env:APPDATA "Adobe\CEP\extensions\com.codex.clarityboost"
$debugKey = "HKCU:\Software\Adobe\CSXS.9"

$sourcePath = [System.IO.Path]::GetFullPath($source).TrimEnd("\")
$targetPath = [System.IO.Path]::GetFullPath($extensionRoot).TrimEnd("\")

if ($sourcePath -ieq $targetPath) {
  throw "Please run this installer from the downloaded project folder, not from the installed CEP extension folder."
}

if (Test-Path $extensionRoot) {
  Remove-Item -LiteralPath $extensionRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $extensionRoot | Out-Null
Copy-Item -Path (Join-Path $source "*") -Destination $extensionRoot -Recurse -Force

if (-not (Test-Path $debugKey)) {
  New-Item -Path $debugKey -Force | Out-Null
}

New-ItemProperty -Path $debugKey -Name "PlayerDebugMode" -Value "1" -PropertyType String -Force | Out-Null

Write-Host "Installed Clarity Boost to:"
Write-Host $extensionRoot
Write-Host ""
Write-Host "CEP debug mode has been enabled for Photoshop 2020."
Write-Host "Restart Photoshop, then open: Window > Extensions > Clarity Boost"
