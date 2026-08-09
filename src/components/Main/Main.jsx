import MainPage from "./MainPage/MainPage";
import WhyMarshmallows from "./WhyMarshmallows/WhyMarshmallows";
import CatalogScroll from "./CatalogScroll/CatalogScroll";
import Order from "./Order/Order";

const Main = () => {
  return (
    <>
      <main>
        <MainPage />
        <WhyMarshmallows />
        <CatalogScroll />
        <Order />
      </main>
    </>
  );
};

export default Main;
