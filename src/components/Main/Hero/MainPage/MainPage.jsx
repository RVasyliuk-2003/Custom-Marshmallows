import style from "./mainPage.module.css";
import "./../../../../App.css";

import { FadeUp } from "../../../FadeUp";

import LogoImg from "./../../../../assets/logo.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={`${style.maintape} tape`}></div>
          <span
            style={{ display: "inline-block", width: "max-content" }}
            className="eyebrow"
          >
            Ручна робота · Україна
          </span>

          <h1>
            Квіти, які не в'януть.. <br /> Вони тануть
          </h1>

          <p className={style.textMainBox}>
            Зефірка ліпить букети з натурального <br /> маршмелоу вручну —
            пелюстка за пелюсткою
          </p>
          <div className={style.positionMainBoxBtn}>
            <FadeUp
              as="img"
              duration={1.2}
              delay={0.1}
              yOffset={50}
              id={style.img1}
              src="/ze2.webp"
              alt="Букет квітів з зефіру"
            />
            <FadeUp
              as="img"
              duration={1}
              delay={0.35}
              yOffset={35}
              id={style.img2}
              src="/ze3.webp"
              alt="Букет квітів з зефіру"
            />
            <FadeUp
              as="img"
              duration={0.9}
              delay={0.55}
              yOffset={25}
              id={style.img3}
              src="/ze5.webp"
              alt="Букет квітів з зефіру"
            />

            <div className={style.btnMainBox}>
              <Link
                style={{ position: "relative", zIndex: "2" }}
                to="/catalog"
                className="btn-primary btn"
              >
                Обрати букет
              </Link>
              <Link to="/HowToOrder" className="btn">
                Як це працює
              </Link>
            </div>

            <div className={style.mainPrimary}>
              <div className={style.boxPrimary}>
                <img src={LogoImg} alt="svg" />
                <p>Тримає форму 5 днів</p>
              </div>
              <div className={style.boxPrimary}>
                <img src={LogoImg} alt="svg" />
                <p>Доставка по Україні</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
