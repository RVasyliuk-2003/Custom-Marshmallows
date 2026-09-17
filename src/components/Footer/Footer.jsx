import style from "./footer.module.css";
import logo from "./../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.ftrMainContainer}>
          <div className={style.logoBox}>
            <img src={logo} alt="logo" loading="lazy" />
            <h3>Зефірка</h3>
          </div>

          <p className={style.prFtr}>Букети з зефіру ручної роботи</p>

          <div className={style.spanIconBox}>
            <a
              href="https://instagram.com/olenavasyliuk69/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸
            </a>
            <a
              href="https://t.me/ZefirkaOlena"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬
            </a>
            <a href="tel:+380637751384">📞</a>
          </div>

          <div className={style.footBottom}>© 2026 Зефірка</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
