# Clarity Boost for Photoshop 2020

Clarity Boost 是一个面向 Adobe Photoshop 2020 的 CEP 面板插件，用来提高图片清晰度。它通过高反差保留、图层混合模式、透明度控制和可选细节锐化来增强边缘与纹理。

## 功能

- 自然增强：适合人像、产品图、日常修图。
- 细节锐化：适合纹理、建筑、风景局部。
- 强力清晰：适合轻微虚焦或需要更明显边缘的图片。
- 减少彩色边缘：对增强图层去色，降低彩色光晕。
- 保留可编辑增强图层：处理后可继续调节图层透明度或删除增强层。

## Photoshop 兼容性

此项目按 Photoshop 2020 设计，manifest 中限制为 Photoshop 21.x：

- Photoshop host：PHSP / PHXS
- Host version：21.0 到 21.9
- CEP runtime：CSXS 9.0

## 安装

1. 关闭 Photoshop。
2. 在 PowerShell 中进入本目录。
3. 运行：

```powershell
.\Install-ClarityBoost.ps1
```

4. 如果插件没有出现在 Photoshop 菜单中，双击导入：

```text
enable-debug-mode-ps2020.reg
```

5. 重启 Photoshop。
6. 在 Photoshop 中打开：`窗口 > 扩展功能 > Clarity Boost`。

## 使用

1. 打开一张图片。
2. 选中要增强的图层。
3. 选择增强模式。
4. 调整强度和边缘半径。
5. 点击“应用清晰度增强”。

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

## 注意

这是未签名 CEP 插件。正式分发时建议使用 Adobe CEP signing 工具签名，或在内部使用时开启 PlayerDebugMode。
