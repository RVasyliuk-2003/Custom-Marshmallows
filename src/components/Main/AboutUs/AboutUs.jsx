import style from "./aboutUs.module.css";
import avatar from "./../../../assets/avatar.webp";

import { Link } from "react-router-dom";
import { FadeUp } from "../../FadeUp";

const AboutUs = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainerAboutUs}>
          <span className="eyebrow">НАША ІСТОРІЯ</span>
          <FadeUp as="h1" duration={0.8} xOffset={-40}>
            Зефірка почалась <br />з одного букета
          </FadeUp>

          <div className={style.boxText}>
            <p>
              Все почалося з букета на день народження доньки — зробленого
              просто тому, що не було під рукою живих квітів. Відтоді кожна
              квітка створюється вручну, з тим самим теплом, як тоді, перший раз.
            </p>
          </div>

          <div className={style.boxRow}>
            <FadeUp
              className={style.box}
              xOffset={-20}
              yOffset={0}
              duration={0.4}
              delay={0.2}
            >
              <b>3 роки</b>
              <span>на ринку</span>
            </FadeUp>
            <FadeUp
              className={style.box}
              xOffset={-20}
              yOffset={0}
              duration={0.8}
              delay={0.4}
            >
              <b>100+</b>
              <span>букетів</span>
            </FadeUp>
            <FadeUp
              className={style.box}
              xOffset={-40}
              yOffset={0}
              duration={1.2}
              delay={0.6}
            >
              <b>10+</b>
              <span>міст</span>
            </FadeUp>
          </div>

          <div className={style.founder}>
            <img className={style.avatar} src={avatar} alt="avatar" />
            <div>
              <h4>Олена, засновниця</h4>
              <p>Створює кожен букет особисто</p>
            </div>
          </div>

          <FadeUp duration={0.7} delay={0.3} yOffset={15}>
            <Link to="/Catalog" className="btn btn-primary">
              Переглянути каталог
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
