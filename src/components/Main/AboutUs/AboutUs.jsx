import style from "./aboutUs.module.css";
import avatar from "./../../../assets/logo.png";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainerAboutUs}>
          <span className="eyebrow">НАША ІСТОРІЯ</span>
          <h1>
            Зефірка почалась <br />з одного букета
          </h1>

          <div className={style.boxText}>
            <p>
              Все почалося з букета на день народження доньки — зробленого
              просто тому, що не було під рукою живих квітів. Відтоді кожна
              квітка ліпиться вручну, з тим самим теплом, як тоді, перший раз.
            </p>
          </div>

          <div className={style.boxRow}>
            <div className={style.box}>
              <b>3 роки</b>
              <span>на ринку</span>
            </div>
            <div className={style.box}>
              <b>500+</b>
              <span>букетів</span>
            </div>
            <div className={style.box}>
              <b>20+</b>
              <span>міст</span>
            </div>
          </div>

          <div className={style.founder}>
            <img className={style.avatar} src={avatar} alt="avatar" />
            <div>
              <h4>Олена, засновниця</h4>
              <p>Ліпить кожен букет особисто</p>
            </div>
          </div>

          <button className="btn btn-primary">Переглянути каталог</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
