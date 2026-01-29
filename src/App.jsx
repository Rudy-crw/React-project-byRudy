// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // 假設你建立了這個檔案
import StoreDetail from "./pages/StoreDetail"; // 假設你建立了這個檔案

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storedetail" element={<StoreDetail />} />
        {/* 這裡可以繼續加其他的 Route */}
      </Routes>
    </HashRouter>
  );
}

export default App;
