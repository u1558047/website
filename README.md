# 苗栗食旅誌｜Miaoli Food Journal

一個以苗栗在地美食為主題的響應式網站，可部署於 GitHub Pages 或 Vercel。

## 功能
- 手機、平板、桌機 RWD 響應式版面
- 美食關鍵字搜尋
- 料理分類篩選
- 依苗栗鄉鎮篩選
- 店家介紹彈出視窗與 Google 地圖搜尋連結
- 收藏店家（使用瀏覽器 localStorage）
- 手機版導覽選單

## 專案檔案
- `index.html`：網站內容
- `styles.css`：版面與響應式樣式
- `script.js`：店家資料與互動功能

## 本機預覽
直接用瀏覽器開啟 `index.html` 即可；建議使用 VS Code 的 Live Server。

## 部署 Vercel
1. 將本資料夾內容上傳到 GitHub repository。
2. 登入 Vercel，選擇 **Add New → Project**。
3. Import 你的 GitHub repository。
4. Framework Preset 選 **Other**，Build Command 與 Output Directory 留空（或依 Vercel 靜態網站設定）。
5. 按 Deploy，完成後即可取得公開網址。

## 更新店家資料前請注意
目前資料為網站展示用的初始清單。店家地址、營業時間、推薦品項與圖片都可能變動；正式公開前請逐筆核對店家官方資訊。部分地址刻意標示為需確認，避免將不完整資料當成確定資訊。

## 參考資料
- [食尚玩家：苗栗客家美食地圖](https://supertaste.tvbs.com.tw/food/359483)
- [食尚玩家：苗栗美食 22 間推薦](https://supertaste.tvbs.com.tw/food/359027)
- [苗栗縣政府文化觀光局](https://www.mlc.gov.tw/)
- [苗栗觀光自助手冊](https://new-inhabitants.miaoli.gov.tw/_miaoliFClick/_upload/Announce/8300/file/1002%E5%AE%9A%E7%A8%BF%E7%89%88-%E8%8B%97%E6%A0%97%E8%A7%80%E5%85%89%E8%87%AA%E5%8A%A9%E6%89%8B%E5%86%8A_compressed.pdf)

圖片使用 Unsplash 來源連結，正式商用前請確認各圖片授權與使用條款。
