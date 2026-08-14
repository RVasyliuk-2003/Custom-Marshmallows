import style from "./drawer.module.css";
import logo from "./../../../assets/logo.png";

const Drawer = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.logoContainer}>
          <div className={style.logoBox}>
            <img src={logo} alt="logo" />
            <h3>Зефірка</h3>
          </div>

          <button className="btn-close">X</button>
        </div>

        <span className={`tape ${style.typeSize}`}>МЕНЮ</span>

        <nav className={style.spanContainer}>
          <a className={style.driwerLink} href="Головна">
            Головна <spam>→</spam>
          </a>
          <a className={style.driwerLink} href="Про нас">
            Про нас <spam>→</spam>
          </a>
          <a className={style.driwerLink} href="каталог">
            Каталог <spam>→</spam>
          </a>
          <a className={style.driwerLink} href="Як замовити">
            Як замовити <spam>→</spam>
          </a>
          <a className={style.driwerLink} href="Відгуки">
            Відгуки <spam>→</spam>
          </a>
          <a className={style.driwerLink} href="Контакти">
            Контакти <spam>→</spam>
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
