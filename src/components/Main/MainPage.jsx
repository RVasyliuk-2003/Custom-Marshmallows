import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Catalog from "./Catalog/Catalog";
import HowToOrder from "./HowToOrder/HowToOrder";
import Reviews from "./ReviewsPage/Reviews";
import Contact from "./Contact/Contact";

import Gallery from "./Gallery/Gallery";
import OrderMain from "./Order/OrderMain/OrderMain";
import OrderBouquet from "./Order/OrderBouquet/OrderBouquet";
import OrderCurl from "./Order/OrderCurl/OrderCurl";

import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import { Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Catalog" element={<Catalog />} />

          <Route path="/gallery/:size/:type" element={<Gallery />} />
          <Route path="/orderMain" element={<OrderMain />} />
          <Route path="/order-bouquet/:id" element={<OrderBouquet />} />
          <Route path="/order-curl/:cu" element={<OrderCurl />} />

          <Route path="/HowToOrder" element={<HowToOrder />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default MainPage;
