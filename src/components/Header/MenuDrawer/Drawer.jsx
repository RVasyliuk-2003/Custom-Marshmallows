import style from "./drawer.module.css";
import logo from "./../../../assets/logo.png";

import { NavLink } from "react-router-dom";

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

        <nav
          className={style.spanContainer}
          onClick={() => setIsMenuOpen(false)}
        >
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/"
          >
            Головна <span>→</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/AboutUs"
          >
            Про нас <span>→</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/Catalog"
          >
            Каталог <span>→</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/HowToOrder"
          >
            Як замовити <span>→</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/Reviews"
          >
            Відгуки <span>→</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style.driwerLink} ${isActive ? style.active : ""}`
            }
            to="/Contact"
          >
            Контакти <span>→</span>
          </NavLink>
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
