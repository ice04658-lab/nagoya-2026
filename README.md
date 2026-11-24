# nagoya-2026
Cute Japan Travel Planner | Nagoya &amp; Takayama 2026

2026 年 12 月 7–12 日的名古屋、高山與犬山六日行程。提供每日時間軸、地圖、住宿、交通與行李清單。未確認的班次、費用與營業時間以「待確認」標示。

## 本機預覽

在儲存庫根目錄執行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

開啟 `http://127.0.0.1:8000/`，可用上方分頁或日期卡開啟每日行程。例如在網址末尾加上 `#day-3`，就能直接查看新穗高行程。行李清單的勾選狀態儲存在同一網站的瀏覽器內。

## GitHub Pages 發布

1. 審核並合併 PR 到 `main`。
2. 在 GitHub 儲存庫的 **Settings → Pages → Build and deployment**，將 **Source** 設為 **Deploy from a branch**。
3. 選擇 `main` 和 `/ (root)`，按 **Save**。部署完成後，從 Pages 設定開啟網站。預設網址為 `https://ice04658-lab.github.io/nagoya-2026/`。

網站使用 HTML、CSS 與原生 JavaScript。不要在公開儲存庫加入訂房編號、票券 QR Code 或其他私人行程資料。
