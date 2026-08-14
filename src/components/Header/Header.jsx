import style from "./header.module.css";
import Logo from "./../../assets/logo.png";
import Menu from "./../../assets/menu.png";

const Header = () => {
  return (
    <>
      <nav className={`container ${style.navContainer}`}>
        <div className={style.NavLogoBox}>
          <img src={Logo} alt="Logo" />
          <h4>Зефірка</h4>
        </div>

        <img className={style.imgMenu} src={Menu} alt="Menu" />
      </nav>
    </>
  );
};

export default Header;
