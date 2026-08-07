import "./header.css";
import Logo from "./../../assets/logo.png";
import Menu from "./../../assets/menu.png";

const Header = () => {
  return (
    <>
      <nav className="container navContainer">
        <div className="NavLogoBox">
          <img src={Logo} alt="Logo" />
          <h4>Зефірка</h4>
        </div>

        <img className="imgMenu" src={Menu} alt="Menu" />
      </nav>
    </>
  );
};

export default Header;
