import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Catalog from "./Catalog/Catalog";
import HowToOrder from "./HowToOrder/HowToOrder";
import Reviews from "./ReviewsPage/Reviews";
import Contact from "./Contact/Contact";

import Gallery from "./Gallery/Gallery";

import { Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Catalog" element={<Catalog />} />

          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/HowToOrder" element={<HowToOrder />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default MainPage;
