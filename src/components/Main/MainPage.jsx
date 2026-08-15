import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Catalog from "./Catalog/Catalog";
import HowToOrder from "./HowToOrder/HowToOrder";
import Reviews from "./ReviewsPage/Reviews";
import Contact from "./Contact/Contact";

const MainPage = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <Catalog />
        <HowToOrder />
        <Reviews />
        <Contact />
      </main>
    </>
  );
};

export default MainPage;
