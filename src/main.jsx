// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

// 1. 引入 Bootstrap (CSS 與 JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 2. 引入全域 CSS (Swiper 的 CSS 也可以放這，或是放去該元件都行)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // 記得補上 navigation 的 css
import "./style.css";
import "./store-detail.css";
// import "./store-detail.css"; // 建議這個之後搬去 StoreDetail 元件裡 import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
