import MainPage from "./Hero/MainPage/MainPage";
import WhyMarshmallows from "./Hero/WhyMarshmallows/WhyMarshmallows";
import CatalogScroll from "./Hero/CatalogScroll/CatalogScroll";
import Order from "./Hero/Order/Order";
import Reviews from "./Hero/ReviewsPage/Reviews";
import Connection from "./Hero/ConnectionPage/Connection";

const Main = () => {
  return (
    <>
      <main>
        <MainPage />
        <WhyMarshmallows />
        <CatalogScroll />
        <Order />
        <Reviews />
        <Connection />
      </main>
    </>
  );
};

export default Main;
