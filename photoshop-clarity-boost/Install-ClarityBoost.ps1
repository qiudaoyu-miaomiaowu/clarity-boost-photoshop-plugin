$ErrorActionPreference = "Stop"

$source = Split-Path -Parent $MyInvocation.MyCommand.Path
$extensionRoot = Join-Path $env:APPDATA "Adobe\CEP\extensions\com.codex.clarityboost"

if (Test-Path $extensionRoot) {
  Remove-Item -LiteralPath $extensionRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $extensionRoot | Out-Null
Copy-Item -Path (Join-Path $source "*") -Destination $extensionRoot -Recurse -Force

Write-Host "Installed Clarity Boost to:"
Write-Host $extensionRoot
Write-Host ""
Write-Host "If Photoshop does not show the panel, import enable-debug-mode-ps2020.reg and restart Photoshop."
