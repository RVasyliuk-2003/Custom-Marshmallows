import MainPage from "./MainPage/MainPage";
import WhyMarshmallows from "./WhyMarshmallows/WhyMarshmallows";
import CatalogScroll from "./CatalogScroll/CatalogScroll";
import Order from "./Order/Order";
import Reviews from "./ReviewsPage/Reviews";

const Main = () => {
  return (
    <>
      <main>
        <MainPage />
        <WhyMarshmallows />
        <CatalogScroll />
        <Order />
        <Reviews />
      </main>
    </>
  );
};

export default Main;
