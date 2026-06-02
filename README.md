# Clarity Boost - Photoshop 清晰度增强插件

一个适用于 Adobe Photoshop 2020 的第三方清晰度增强 CEP 面板插件。它可以一键增强图片边缘、纹理和细节，适合人像、产品图、风景图和日常修图。

> 说明：这是第三方插件，不是 Adobe 官方软件，也不包含 Photoshop 安装程序。

## 快速安装

1. 点击右上角绿色 `Code` 按钮。
2. 选择 `Download ZIP` 下载项目。
3. 解压 ZIP 文件。
4. 进入解压后的 `photoshop-clarity-boost` 文件夹。
5. 在 PowerShell 中运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\Install-ClarityBoost.ps1
```

6. 如果 Photoshop 里没有显示插件，双击运行：

```text
enable-debug-mode-ps2020.reg
```

7. 重启 Photoshop 2020。
8. 在 Photoshop 中打开：

```text
窗口 > 扩展功能 > Clarity Boost
```

## 快速使用

1. 在 Photoshop 中打开一张图片。
2. 选中要增强清晰度的图层。
3. 打开 `Clarity Boost` 面板。
4. 选择增强模式：
   - `自然增强`：适合大多数图片。
   - `细节锐化`：适合纹理、建筑、风景。
   - `强力清晰`：适合轻微虚焦或需要明显边缘的图片。
5. 调整 `强度` 和 `边缘半径`。
6. 点击 `应用清晰度增强`。

处理后会生成一个可编辑的增强图层，你可以继续调整图层透明度，或者删除该图层恢复原图。

## 文件位置

插件主文件夹：

```text
photoshop-clarity-boost/
```

详细中文手册：

[使用手册.md](./使用手册.md)

插件内部说明：

[photoshop-clarity-boost/README.md](./photoshop-clarity-boost/README.md)

## 兼容性

- Windows
- Adobe Photoshop 2020
- Photoshop 21.x
- CEP / CSXS 9

## 常见问题

### Photoshop 里找不到插件怎么办？

先关闭 Photoshop，双击 `photoshop-clarity-boost/enable-debug-mode-ps2020.reg`，确认导入注册表后重新打开 Photoshop。

### 安装脚本做了什么？

安装脚本会把插件复制到 Photoshop CEP 扩展目录：

```text
%APPDATA%\Adobe\CEP\extensions\com.codex.clarityboost
```

### 这个项目可以公开分享吗？

可以。项目名称使用第三方插件名称，说明文字只用来表达“兼容 Adobe Photoshop 2020”。请不要把它描述成 Adobe 官方插件，也不要使用 Adobe 或 Photoshop 官方图标作为项目图标。

