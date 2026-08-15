import MainPage from "./MainPage/MainPage";
import WhyMarshmallows from "./WhyMarshmallows/WhyMarshmallows";
import CatalogScroll from "./CatalogScroll/CatalogScroll";
import Order from "./Order/Order";
import Reviews from "./ReviewsPage/Reviews";
import Connection from "./ConnectionPage/Connection";

const Hero = () => {
  return (
    <>
      <MainPage />
      <WhyMarshmallows />
      <CatalogScroll />
      <Order />
      <Reviews />
      <Connection />
    </>
  );
};

export default Hero;
