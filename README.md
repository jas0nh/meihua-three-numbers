# 梅花三数起卦

一个中国古典风格的静态网页工具，用于梅花易数三数起卦。

## 功能

- 输入想知道的问题
- 单击「起卦」后随机生成三个中文大写数字
- 第一数定上卦，第二数定下卦，第三数定动爻
- 慢速展示取余、上下卦、本卦、动爻、变卦和体用
- 展示八卦对应数、六十四卦卦序和动爻说明
- 自动拼接完整 AI 解读 prompt
- 提供 ChatGPT、Claude、Gemini、Grok、DeepSeek、Kimi、豆包快捷跳转

## 运行

直接打开 `index.html`，或在当前目录启动一个静态服务：

```bash
python3 -m http.server 8788
```

然后访问 `http://localhost:8788`。

## 部署

本项目是纯静态站，可直接部署到 Cloudflare Pages：

```bash
npx wrangler pages deploy . --project-name meihua-three-numbers
```
