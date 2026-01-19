// main.js

// 1. 引入 Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 2. 引入 Swiper 核心與模組
import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 3. 引入 Feather Icons
import feather from "feather-icons";

// 4. 引入 CSS
import "./style.css";
import "./store-detail.css";

// 5. 初始化 Swiper
const swiper = new Swiper(".mySwiper", {
  modules: [Pagination, Navigation, Autoplay],

  // 🔥 手機版核心設定
  centeredSlides: true, // 讓 active 的那張置中
  slidesPerView: 2, // 畫面一次顯示 1.2 張 (兩邊露出一點點)
  spaceBetween: 24, // 卡片間距
  loop: true, // 無限循環
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 左右箭頭 (桌機版需要) - 記得在 HTML 補上這兩個 div
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // RWD 設定：電腦版
  breakpoints: {
    768: {
      centeredSlides: false, // 關閉置中！讓卡片從左邊整齊開始排
      slidesPerView: 3, // 電腦版一次看 3 張
      spaceBetween: 20,
    },
    1400: {
      centeredSlides: false, // 關閉置中！讓卡片從左邊整齊開始排
      slidesPerView: 4, // 電腦版一次看 3 張
      spaceBetween: 24,
    },
  },

  // 🔥 關鍵：Swiper 初始化或切換時，要重新畫 Icon
  // 這樣 Swiper 複製出來的 Slide 才有圖示
  on: {
    init: function () {
      feather.replace();
    },
    slideChange: function () {
      feather.replace();
    },
  },
});

// 6. 補底：針對頁面其他非 Swiper 的部分 (如 header) 再執行一次
feather.replace();
