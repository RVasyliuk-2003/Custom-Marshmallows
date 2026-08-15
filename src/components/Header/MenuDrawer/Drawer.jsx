import style from "./drawer.module.css";
import logo from "./../../../assets/logo.png";

import { Link } from "react-router-dom";

const Drawer = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div className={`${style.mainContainer} ${isMenuOpen ? style.open : ""}`}>
        <div className={style.logoContainer}>
          <div className={style.logoBox}>
            <img src={logo} alt="logo" />
            <h3>Зефірка</h3>
          </div>

          <button onClick={() => setIsMenuOpen(false)} className="btn-close">
            X
          </button>
        </div>

        <span className={`tape ${style.typeSize}`}>МЕНЮ</span>

        <nav className={style.spanContainer}>
          <Link className={style.driwerLink} to="/">
            Головна <span>→</span>
          </Link>
          <Link className={style.driwerLink} to="/AboutUs">
            Про нас <span>→</span>
          </Link>
          <Link className={style.driwerLink} to="/Catalog">
            Каталог <span>→</span>
          </Link>
          <Link className={style.driwerLink} to="/HowToOrder">
            Як замовити <span>→</span>
          </Link>
          <Link className={style.driwerLink} to="/Reviews">
            Відгуки <span>→</span>
          </Link>
          <Link className={style.driwerLink} to="/Contact">
            Контакти <span>→</span>
          </Link>
        </nav>

        <div className={style.btnBox}>
          <button className="btn btn-primary">Замовити букет</button>
          <button className="btn">Instagram</button>
        </div>
      </div>
    </>
  );
};

export default Drawer;
