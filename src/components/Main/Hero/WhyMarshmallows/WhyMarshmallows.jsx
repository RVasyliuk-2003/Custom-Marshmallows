import style from "./whyMarshmallows.module.css";
import img1 from "./images/Together.webp";
import img2 from "./images/Chemical.webp";
import img3 from "./images/flower.webp";

import SubtleEdge from "../../SubtleEdge/SubtleEdge.jsx";

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
            <h2>
              Маленька цукрова <br /> скульптура
            </h2>

            <div className={style.containerMarsh}>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img1} alt="img1" loading="lazy" />
                  <div>
                    <h6>Ручна робота</h6>
                    <p>Кожна пелюстка формується вручну</p>
                  </div>
                </div>
              </div>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img2} alt="img2" loading="lazy" />
                  <div>
                    <h6>Без хімії</h6>
                    <p>Натуральні барвники, можна дітям</p>
                  </div>
                </div>
              </div>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img3} alt="img3" loading="lazy" />
                  <div>
                    <h6>Не в'яне 5 днів</h6>
                    <p>Тримає форму без вази й холодильника</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubtleEdge flip />
        </div>
      </div>
    </section>
  );
};

export default WhyMarshmallows;
