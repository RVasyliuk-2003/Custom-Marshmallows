import style from "./drawer.module.css";
import logo from "./../../../assets/logo.png";

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
          <a className={style.driwerLink} href="#">
            Головна <span>→</span>
          </a>
          <a className={style.driwerLink} href="#">
            Про нас <span>→</span>
          </a>
          <a className={style.driwerLink} href="#">
            Каталог <span>→</span>
          </a>
          <a className={style.driwerLink} href="#">
            Як замовити <span>→</span>
          </a>
          <a className={style.driwerLink} href="#">
            Відгуки <span>→</span>
          </a>
          <a className={style.driwerLink} href="#">
            Контакти <span>→</span>
          </a>
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
