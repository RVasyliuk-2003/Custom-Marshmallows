import style from "./whyMarshmallows.module.css";
import img from "./../../../../assets/logo.png";
import SubtleEdge from "../../SubtleEdge/SubtleEdge.jsx";

const WhyMarshmallows = () => {
  return (
    <section>
      <div className="container">
        <div className={style.whyMarshmaContainer}>
          <SubtleEdge />
          <div className={style.whyMarshmaBox}>
            <p className={`eyebrow ${style.types}`}>Чому Зефірка?</p>
            <h2>
              Маленька цукрова <br /> скульптура
            </h2>

            <div className={style.containerMarsh}>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img} alt="img" />
                  <div>
                    <h6>Ручна робота</h6>
                    <p>Кожна пелюстка формується вручну</p>
                  </div>
                </div>
              </div>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img} alt="img" />
                  <div>
                    <h6>Без хімії</h6>
                    <p>Натуральні барвники, можна дітям</p>
                  </div>
                </div>
              </div>
              <div className={style.boxMarsh}>
                <div className={style.positionImgbox}>
                  <img src={img} alt="img" />
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
