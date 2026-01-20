import { defineConfig } from "vite";
import { resolve } from "path"; // 1. 引入 path 模組來處理路徑

export default defineConfig({
  // 👇 這裡填入 '/你的 GitHub 儲存庫名稱/' (前後都要有斜線)
  // 例如你的 repo 叫 pet-rare-guide，就填 '/pet-rare-guide/'
  base: "/React-project-byRudy/",
  build: {
    rollupOptions: {
      input: {
        // 2. 設定你的入口檔案
        main: resolve(__dirname, "index.html"), // 首頁
        store: resolve(__dirname, "store-detail.html"), // 你的第二頁 (名稱 store 可以自己取)
      },
    },
  },
});
