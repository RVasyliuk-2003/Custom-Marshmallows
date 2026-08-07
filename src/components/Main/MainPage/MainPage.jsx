import "./mainPage.css";
import "./../../../App.css";

import LogoImg from "./../../../assets/logo.png";

const MainPage = () => {
  return (
    <section>
      <div className="container">
        <div className="mainContainer">
          <div className="maintape tape"></div>
          <p className="eyebrow mainEyebrow">Ручна робота · Україна</p>

          <h1>
            Квіти, які не в'януть.. <br /> Вони тануть
          </h1>

          <p className="textMainBox">
            Зефірка ліпить букети з натурального <br /> маршмелоу вручну —
            пелюстка за пелюсткою
          </p>
          <div className="positionMainBoxBtn">
            <img id="img1" src={LogoImg} alt="svg" />
            <img id="img2" src={LogoImg} alt="svg" />
            <img id="img3" src={LogoImg} alt="svg" />
            <div className="btnMainBox">
              <button className="btn-primary btn">Обрати букет</button>
              <button className="btn">Як це працює</button>
            </div>

            <div className="mainPrimary">
              <div className="boxPrimary">
                <img src={LogoImg} alt="svg" />
                <p>Тримає форму 5 днів</p>
              </div>
              <div className="boxPrimary">
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
