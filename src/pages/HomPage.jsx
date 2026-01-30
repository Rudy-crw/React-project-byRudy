import HeroSection from "../layout/HeroSection";
import InfoSection from "../layout/InfoSection";
import HotSpot from "../layout/HotSpot";

const HomPage = () => {
  return (
    <>
      {/* <!-- padding、margin 的 space 要再改，先暫時以相近的代替 --> */}
      <HeroSection />

      {/* <!-- 稀寵資訊專區 --> */}
      <InfoSection />

      {/* <!-- 熱門店家 --> */}
      <HotSpot />
    </>
  );
};

export default HomPage;
