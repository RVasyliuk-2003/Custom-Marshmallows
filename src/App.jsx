import { useState } from "react";
import "./App.css";
import "./index.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
