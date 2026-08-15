import style from "./mainPage.module.css";
import "./../../../../App.css";

import LogoImg from "./../../../../assets/logo.png";

const MainPage = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={`${style.maintape} tape`}></div>
          <p className={`eyebrow ${style.mainEyebrow}`}>
            Ручна робота · Україна
          </p>

          <h1>
            Квіти, які не в'януть.. <br /> Вони тануть
          </h1>

          <p className={style.textMainBox}>
            Зефірка ліпить букети з натурального <br /> маршмелоу вручну —
            пелюстка за пелюсткою
          </p>
          <div className={style.positionMainBoxBtn}>
            <img id={style.img1} src={LogoImg} alt="svg" />
            <img id={style.img2} src={LogoImg} alt="svg" />
            <img id={style.img3} src={LogoImg} alt="svg" />
            <div className={style.btnMainBox}>
              <button className="btn-primary btn">Обрати букет</button>
              <button className="btn">Як це працює</button>
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
