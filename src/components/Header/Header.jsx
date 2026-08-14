import style from "./header.module.css";
import Logo from "./../../assets/logo.png";
import Menu from "./../../assets/menu.png";

import Drawer from "./MenuDrawer/Drawer";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className={`container ${style.navContainer}`}>
        {/* {isMenuOpen ? (
          <Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : null} */}

        <Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <div className={style.NavLogoBox}>
          <img src={Logo} alt="Logo" />
          <h4>Зефірка</h4>
        </div>

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
