import style from "./footer.module.css";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.ftrMainContainer}>
          <div className={style.logoBox}>
            <img src={logo} alt="logo" />
            <h3>Зефірка</h3>
          </div>

          <p className={style.prFtr}>Букети з зефіру ручної роботи</p>

          <div className={style.spanIconBox}>
            <span>@</span>
            <span>✉</span>
            <span>📞</span>
          </div>

          <div className={style.footBottom}>© 2026 Зефірка</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
