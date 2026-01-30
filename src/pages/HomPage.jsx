import { Swiper, SwiperSlide } from "swiper/react"; // 引入 Swiper React 元件
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // 引入模組
import { Heart, ArrowLeft, ArrowRight, Search } from "react-feather";
// 這裡不需要 import swiper css 了，因為剛剛 main.jsx 有引過，或者你在這裡引也可以
import SearchBar from "../components/SearchBar";

const HomPage = () => {
  return (
    <>
      {/* <!-- padding、margin 的 space 要再改，先暫時以相近的代替 --> */}
      <header className="container heroSection px-3 py-5 mb-4">
        <div className="row-md hero-img-sign">
          {/* <!-- <div className="w-57"> --> */}
          <div className="pb-5">
            <h1 className="heroTitle mx-3 mx-md-0">
              稀寵搜搜，
              <br className="d-md-none" />
              搜出你的稀有空間
            </h1>
            <p className="mx-3 mx-md-0 heroSlogan">診所、旅館、賣家 一鍵查找</p>
          </div>
          <SearchBar />
        </div>
      </header>

      {/* <!-- 稀寵資訊專區 --> */}
      <div className="infoSection container-md-fluid mb-5">
        <div className="d-flex justify-content-center section-title-outside pb-md-4">
          <h2 className="section-title pb-4" data-en-title="Information">
            稀寵資訊專區
          </h2>
        </div>
        {/* <!-- ---  稀寵資訊卡片區 --- --> */}
        <div className="infoContent py-3 px-1 mx-0 mx-md-auto px-md-0 row g-3 g-md-4 py-md-5">
          <div className="col-12 col-md-4">
            <div className="infoContentCard p-md-5">
              <h3 className="card-title">稀有寵物照護全指南</h3>
              <p className="card-text">想知道你家稀有寵物如何照護嗎?</p>
              <a href="#">查看文章</a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="infoContentCard p-md-5">
              <h3 className="card-title">寵物背後的小故事</h3>
              <p className="card-text">每個寵物背後都有一個可愛的小故事?</p>
              <a href="#">查看文章</a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="infoContentCard p-md-5">
              <h3 className="card-title">寵物界新鮮事</h3>
              <p className="card-text">掌握寵物界最新的潮流新鮮事?</p>
              <a href="#">查看文章</a>
            </div>
          </div>
          <a className="moreInfoBtn btn mb-3 mt-4 mb-md-0 mt-md-5" href="#">
            更多文章
          </a>
        </div>
      </div>

      {/* <!-- 熱門店家 --> */}
      <div className="hotSpot container-md-fluid mb-md-5">
        <div className="d-flex justify-content-center section-title-outside pb-md-4">
          <h2
            className="section-title text-center pb-4 primary-yellow"
            data-en-title="Hot Spot"
          >
            熱門店家
          </h2>
        </div>

        <div className=" mySwiper hotSpot-content py-4 py-md-5">
          <Swiper
            // 綁定模組
            modules={[Navigation, Autoplay, Pagination]}
            // 你的參數設定
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            // 分頁設定
            pagination={{ clickable: true }}
            // 導航按鈕 (綁定下方的 class)
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            // RWD
            breakpoints={{
              768: {
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="mySwiper pb-3"
          >
            {/* <div className="swiper-wrapper pb-3"> */}
            <SwiperSlide>
              <div className="store-card text-center">
                <div className="d-flex justify-content-end align-items-center mb-3 pe-3">
                  {/* <i data-feather="heart" className="fav-icon me-1"></i> */}
                  <Heart className="feather fav-icon me-1" size={20} />
                  <span className="small fw-bold">153</span>
                </div>
                <div className="icon-box mb-3 mb-md-4 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    className="store-img"
                    src="./public/image/hotel.png"
                    alt="店家圖片"
                  />
                </div>
                <div className="store-content">
                  <p className="store-name mb-2">就甘心Ponpon寵物旅館</p>
                  <p className="store-add">
                    台北市中山區新生北路二段60巷16號4樓
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="store-card text-center">
                <div className="d-flex justify-content-end align-items-center mb-3 pe-3">
                  <Heart className="feather fav-icon me-1" size={20} />

                  {/* <i data-feather="heart" className="fav-icon me-1"></i> */}
                  <span className="small fw-bold">87</span>
                </div>
                <div className="icon-box mb-3 mb-md-4 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    className="store-img"
                    src="./public/image/clinic.png"
                    alt="店家圖片"
                  />
                </div>
                <div className="store-content">
                  <p className="store-name mb-2">凡賽爾賽鴿​動物​醫院</p>
                  <p className="store-add">台​中市​西屯區​重慶​路​8號​</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="store-card text-center">
                <div className="d-flex justify-content-end align-items-center mb-3 pe-3">
                  <Heart className="feather fav-icon me-1" size={20} />

                  {/* <i data-feather="heart" className="fav-icon me-1"></i> */}
                  <span className="small fw-bold">93</span>
                </div>
                <div className="icon-box mb-3 mb-md-4 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    className="store-img"
                    src="./public/image/Shop.png"
                    alt="店家圖片"
                  />
                </div>
                <div className="store-content">
                  <p className="store-name mb-2">
                    水手​兩棲爬​蟲.特寵​-南港​店
                  </p>
                  <p className="store-add">
                    台北市​南港​區南​港​路​二​段​20巷5號​B1​
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="store-card text-center">
                <div className="d-flex justify-content-end align-items-center mb-3 pe-3">
                  <Heart className="feather fav-icon me-1" size={20} />

                  {/* <i data-feather="heart" className="fav-icon me-1"></i> */}
                  <span className="small fw-bold">115</span>
                </div>
                <div className="icon-box mb-3 mb-md-4 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    className="store-img"
                    src="./public/image/clinic.png"
                    alt="店家圖片"
                  />
                </div>
                <div className="store-content">
                  <p className="store-name mb-2">星羽​動物​醫院​-​三​民院</p>
                  <p className="store-add">高雄市​三​民區信國​路​20號​</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="store-card text-center">
                <div className="d-flex justify-content-end align-items-center mb-3 pe-3">
                  <Heart className="feather fav-icon me-1" size={20} />

                  {/* <i data-feather="heart" className="fav-icon me-1"></i> */}
                  <span className="small fw-bold">75</span>
                </div>
                <div className="icon-box mb-3 mb-md-4 mx-auto d-flex align-items-center justify-content-center">
                  <img
                    className="store-img"
                    src="./public/image/hotel.png"
                    alt="店家圖片"
                  />
                </div>
                <div className="store-content">
                  <p className="store-name mb-2">熊讚​寵物​精緻​旅館</p>
                  <p className="store-add">
                    新​北市​板橋區館​前​西路​120號2樓​
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="custom-prev swiper-button-prev d-none d-md-flex">
          {/* <i data-feather="arrow-left"></i> */}
          <ArrowLeft className="feather" />
        </div>
        <div className="custom-next swiper-button-next d-none d-md-flex">
          {/* <i data-feather="arrow-right"></i> */}
          <ArrowRight className="feather" />
        </div>
      </div>
    </>
  );
};

export default HomPage;
