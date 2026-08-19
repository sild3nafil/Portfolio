作品集網站初版

開啟方式
1. 解壓縮 ZIP。
2. 直接開 index.html 即可預覽。
3. 若 iPhone / iPad 本機開啟遇到限制，建議放到 GitHub Pages、Netlify 或 Cloudflare Pages。

修改作品
- 所有作品資料都在 data.js
- 每件作品包含：
  id / title / category / date / cover / lead / description / images
- 把 assets 裡的示意圖替換成自己的 JPG/PNG/WebP，並在 data.js 改檔名即可。

頁碼
- app.js 裡 PER_PAGE = 6
- 想改成每頁 8 件，就改成 PER_PAGE = 8

網站風格
- 參考 rsdr.online 的黑色 header、留白、灰階紙張感、分類/日期資訊與作品詳情閱讀節奏，
  但版面與程式均重新製作，避免直接複製原站。
