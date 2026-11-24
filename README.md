# 三星日常 Sanxing Daily

以 Next.js App Router、TypeScript、Tailwind CSS 與 Framer Motion 建置的繁體中文三星蔥 D2C 電商展示站。購物袋、免運門檻、商品規格、保存計算、風雨預購切換與三步結帳目前使用前端示範狀態；金流、冷鏈物流、LINE 與 Supabase 的串接位置整理於 `src/lib/services.ts`。

## 本機執行

需要 Node.js 20 或更新版本與 npm。

```bash
npm install
npm run dev
```

開啟 http://localhost:3000。產生靜態網站並檢查 TypeScript：

```bash
npm run typecheck
npm run build
```

靜態輸出會生成於 `out/`。

## 推送到 GitHub

先在 GitHub 建立名為 `sanxing-scallion-web` 的空白 repository，然後在專案目錄執行：

```bash
git init
git add .
git commit -m "Build Sanxing Daily storefront"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/sanxing-scallion-web.git
git push -u origin main
```

## 部署到 Render Static Site

1. 在 Render 選擇 **New + → Static Site**，連接 `sanxing-scallion-web` repository。
2. 設定 **Build Command** 為 `npm install && npm run build`。
3. 設定 **Publish Directory** 為 `out`，再建立網站。

專案已設定 `output: 'export'`、`images.unoptimized: true` 與 `trailingSlash: true`，以產生可供靜態主機部署的路徑。

## 後續串接

- 金流：將 `paymentService` 接上 ECPay / LINE Pay，並改為由受信任後端建立交易。
- 冷鏈：將 `logisticsService` 接上黑貓配送報價與追蹤 API。
- LINE：將 `messagingService` 接上 LINE Login / Messaging API。
- 資料：將 Supabase schema、環境變數與訂單流程加入正式服務層。金鑰不要放在前端公開環境變數。
