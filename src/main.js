// main.js

// 1. 引入 Bootstrap 的 CSS (樣式)
// 注意：這一行一定要在 style.css 之前，這樣你的樣式才能覆蓋它
import "bootstrap/dist/css/bootstrap.min.css";
// 2. 引入 Bootstrap 的 JS (互動功能，如下拉選單)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// 人工補充 feather icon
import feather from "feather-icons";

// 3. 引入你自己的 CSS (客製化樣式)

import "./style.css";

feather.replace();
