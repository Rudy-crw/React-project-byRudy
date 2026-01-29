// import { defineConfig } from "vite";

// import { resolve } from "path"; // 1. 引入 path 模組來處理路徑

// export default defineConfig({
//   // 👇 這裡填入 '/你的 GitHub 儲存庫名稱/' (前後都要有斜線)
//   // 例如你的 repo 叫 pet-rare-guide，就填 '/pet-rare-guide/'
//   base: "/React-project-byRudy/",
//   build: {
//     rollupOptions: {
//       input: {
//         // 2. 設定你的入口檔案
//         main: resolve(__dirname, "index.html"), // 首頁
//         store: resolve(__dirname, "store-detail.html"), // 你的第二頁 (名稱 store 可以自己取)
//       },
//     },
//   },
// });
// ===============改為 React SPA 的方式=============
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // 1. 引入剛剛安裝的 React 插件

// https://vitejs.dev/config/
export default defineConfig({
  // 保留你原本的設定 (GitHub Pages 路徑)
  base: "/React-project-byRudy/",

  // 2. 啟用 React 插件 (這就是讓你不用每頁 import React 的關鍵)
  plugins: [react()],

  // 3. 原本的 build.rollupOptions 不需要了
  // 因為 React SPA 只有一個入口 (index.html)，Vite 預設就會自己抓到它
});
