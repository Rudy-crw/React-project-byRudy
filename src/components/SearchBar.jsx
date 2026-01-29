import React, { useState, useEffect } from "react";
import { Search, ChevronDown } from "react-feather";

const SearchBar = () => {
  const [location, setLocation] = useState("台北");
  const [pet, setPet] = useState("柯爾鴨");
  const [type, setType] = useState("旅館");

  const locations = [
    "台北",
    "新北",
    "桃園",
    "新竹",
    "台中",
    "彰化",
    "嘉義",
    "台南",
    "高雄",
    "屏東",
  ];
  const pets = ["刺蝟", "守宮", "倉鼠", "鸚鵡", "烏龜", "柯爾鴨"];
  const types = ["診所", "旅館", "賣家"];

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="search-pill bg-white shadow-sm d-grid d-md-flex align-items-center border"
      style={{
        borderRadius: "40px",
        position: "relative",
        zIndex: 100,
        maxWidth: isDesktop ? "656px" : "100%",
        height: isDesktop ? "69px" : "auto",
        padding: isDesktop ? "0 10px 0 20px" : "15px",
        marginLeft: isDesktop ? "0" : "auto",
        marginRight: "auto",
        overflow: "visible",
      }}
    >
      {/* --- 第 1 & 2 個區塊：使用 dropdown-menu-start (對齊左邊) --- */}
      <div className="dropdown flex-fill border-bottom border-md-bottom-0 border-md-end px-3">
        <button
          className="btn border-0 p-0 w-100 d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-display="static"
        >
          <div className="text-start">
            <div className="text-muted" style={{ fontSize: "12px" }}>
              地區
            </div>
            <div className="fw-bold text-dark">{location}</div>
          </div>
          <ChevronDown size={18} className="text-muted ms-2" />
        </button>
        {/* 🔥 使用 dropdown-menu-start 確保對齊按鈕左側 */}
        <ul className="dropdown-menu dropdown-menu-start border-0 shadow-lg mt-2 p-2 rounded-4">
          {locations.map((item) => (
            <li key={item}>
              <button
                className={`dropdown-item p-2 mb-1 ${location === item ? "active" : ""}`}
                onClick={() => setLocation(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown flex-fill border-bottom border-md-bottom-0 border-md-end px-3">
        <button
          className="btn border-0 p-0 w-100 d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-display="static"
        >
          <div className="text-start">
            <div className="text-muted" style={{ fontSize: "12px" }}>
              寵物類別
            </div>
            <div className="fw-bold text-dark">{pet}</div>
          </div>
          <ChevronDown size={18} className="text-muted ms-2" />
        </button>
        <ul className="dropdown-menu dropdown-menu-start border-0 shadow-lg mt-2 p-2 rounded-4">
          {pets.map((item) => (
            <li key={item}>
              <button
                className={`dropdown-item p-2 mb-1 ${pet === item ? "active" : ""}`}
                onClick={() => setPet(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* --- 第 3 個區塊：使用 dropdown-menu-end (對齊右邊) --- */}
      <div className="dropdown flex-fill px-3">
        <button
          className="btn border-0 p-0 w-100 d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-display="static"
        >
          <div className="text-start">
            <div className="text-muted" style={{ fontSize: "12px" }}>
              全部
            </div>
            <div className="fw-bold text-dark">{type}</div>
          </div>
          <ChevronDown size={18} className="text-muted ms-2" />
        </button>
        {/* 🔥 最後一個區塊建議靠右對齊，避免選單超出螢幕 */}
        <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-2 p-2 rounded-4">
          {types.map((item) => (
            <li key={item}>
              <button
                className={`dropdown-item p-2 mb-1 ${type === item ? "active" : ""}`}
                onClick={() => setType(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="btn btn-warning d-flex align-items-center justify-content-center fw-bold text-nowrap mt-2 mt-md-0"
        style={{
          backgroundColor: "#fec631",
          border: "none",
          borderRadius: "35px",
          height: isDesktop ? "50px" : "45px",
          width: isDesktop ? "170px" : "100%",
          padding: "0 20px",
        }}
      >
        立即搜尋 <Search size={20} className="ms-2" />
      </button>
    </div>
  );
};

export default SearchBar;
