import style from "./whyMarshmallows.module.css";
import img1 from "./images/Together.webp";
import img2 from "./images/Chemical.webp";
import img3 from "./images/flower.webp";

import SubtleEdge from "../../SubtleEdge/SubtleEdge.jsx";
import { FadeUp } from "../../../FadeUp.jsx";

const WhyMarshmallows = () => {
  return (
    <section>
      <div className="container">
        <div className={style.whyMarshmaContainer}>
          <SubtleEdge />
          <div className={style.whyMarshmaBox}>
            <span
              style={{ display: "inline-block", width: "max-content" }}
              className="eyebrow"
            >
              Чому Зефірка?
            </span>
            <FadeUp as="h2" duration={1} xOffset={-30}>
              Маленька цукрова <br /> скульптура
            </FadeUp>

            <div className={style.containerMarsh}>
              <FadeUp
                className={style.boxMarsh}
                duration={0.7}
                delay={0.1}
                yOffset={20}
              >
                <div className={style.positionImgbox}>
                  <img src={img1} alt="img1" loading="lazy" />
                  <div>
                    <h6>Ручна робота</h6>
                    <p>Кожна пелюстка формується вручну</p>
                  </div>
                </div>
              </FadeUp>
              <FadeUp
                className={style.boxMarsh}
                duration={0.7}
                delay={0.2}
                yOffset={20}
              >
                <div className={style.positionImgbox}>
                  <img src={img2} alt="img2" loading="lazy" />
                  <div>
                    <h6>Без хімії</h6>
                    <p>Натуральні інгредієнти, можна дітям</p>
                  </div>
                </div>
              </FadeUp>
              <FadeUp
                className={style.boxMarsh}
                duration={0.7}
                delay={0.3}
                yOffset={20}
              >
                <div className={style.positionImgbox}>
                  <img src={img3} alt="img3" loading="lazy" />
                  <div>
                    <h6>Не в'яне 10 днів</h6>
                    <p>Тримає форму без вази й холодильника</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
          <SubtleEdge flip />
        </div>
      </div>
    </section>
  );
};

export default WhyMarshmallows;
