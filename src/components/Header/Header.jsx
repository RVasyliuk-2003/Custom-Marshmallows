import style from "./header.module.css";
import Logo from "./../../assets/logo.png";
import Menu from "./../../assets/menu.png";

import Drawer from "./MenuDrawer/Drawer";
import { Link } from "react-router-dom";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className={`container ${style.navContainer}`}>
        <Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Link to="/" className={style.NavLogoBox}>
          <img src={Logo} alt="Logo" />
          <h4>Зефірка</h4>
        </Link>

        <img
          onClick={() => setIsMenuOpen(true)}
          className={style.imgMenu}
          src={Menu}
          alt="Menu"
        />
      </nav>
    </>
  );
};

export default Header;
