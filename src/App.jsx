import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

import Header from "./components/Header/Header";
import MainPage from "./components/Main/MainPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
