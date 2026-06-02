# Clarity Boost for Photoshop 2020

这是插件的主文件夹。Clarity Boost 是一个适用于 Adobe Photoshop 2020 的第三方 CEP 面板插件，用来提高图片清晰度。

## 一键安装

关闭 Photoshop 后，在当前文件夹打开 PowerShell，运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\Install-ClarityBoost.ps1
```

如果 Photoshop 里没有出现插件，双击导入：

```text
enable-debug-mode-ps2020.reg
```

然后重启 Photoshop，在菜单中打开：

```text
窗口 > 扩展功能 > Clarity Boost
```

## 使用方法

1. 打开图片。
2. 选中要增强的图层。
3. 选择 `自然增强`、`细节锐化` 或 `强力清晰`。
4. 调整 `强度` 和 `边缘半径`。
5. 点击 `应用清晰度增强`。

默认会保留一个增强图层，方便继续调节透明度或删除。

## 功能

- 自然增强：适合人像、产品图、日常照片。
- 细节锐化：适合纹理、建筑、风景。
- 强力清晰：适合轻微虚焦或需要明显边缘的图片。
- 减少彩色边缘：降低彩色光晕。
- 保留可编辑增强图层：方便后期微调。

## 兼容性

- Adobe Photoshop 2020
- Photoshop 21.x
- CEP / CSXS 9
- Windows

## 文件结构

```text
photoshop-clarity-boost/
  CSXS/manifest.xml             CEP 插件清单
  index.html                    插件面板
  css/style.css                 面板样式
  js/CSInterface.js             CEP 调用桥
  js/main.js                    面板交互逻辑
  jsx/clarityBoost.jsx          Photoshop 图像处理逻辑
  Install-ClarityBoost.ps1      Windows 安装脚本
  enable-debug-mode-ps2020.reg  未签名 CEP 插件调试开关
```

## 说明

这是第三方插件，不是 Adobe 官方插件。Adobe 和 Photoshop 是 Adobe 的商标，本项目只用于说明插件兼容 Adobe Photoshop 2020。
