# Di Wen Personal Academic Website

这是 `diwen.ai` / `Kratos-Wen.github.io` 的静态个人学术主页骨架。

## 你主要需要改哪里

- `index.html`：主页内容，包含个人简介、News、精选论文、项目/数据集、联系方式。
- `publications.html`：完整论文列表。
- `assets/css/styles.css`：网站样式。
- `assets/images/headshot.jpg`：你的头像。
- `assets/papers/`：论文缩略图。
- `content/CONTENT_TO_FILL.md`：填写资料的清单。

注意：CV 目前放在 `_private/CV/`，并已加入 `.gitignore`。它只作为本地资料参考，不会作为公开下载文件发布。

## 本地预览

直接双击 `index.html` 可以预览大部分内容。更推荐在这个目录运行一个本地服务器：

```powershell
python -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

如果电脑没有 Python，也可以直接用 VS Code 的 Live Server 插件。

## 关联到 GitHub

等你填完内容后，在这个目录执行：

```powershell
git init
git add .
git commit -m "Build personal academic website"
git branch -M main
git remote add origin https://github.com/Kratos-Wen/Kratos-Wen.github.io.git
git push -u origin main
```

如果远程仓库已经有内容，先告诉我，我可以帮你安全合并，避免覆盖已有文件。
