import "./whyMarshmallows.css";
import img from "./../../../assets/logo.png";
import SubtleEdge from "../../SubtleEdge/SubtleEdge";

const WhyMarshmallows = () => {
  return (
    <section>
      <div className="container">
        
        <div className="whyMarshmaContainer">
          <SubtleEdge />
          <div className="whyMarshmaBox">
            <p className="eyebrow types">Чому Зефірка?</p>
            <h2>
              Маленька цукрова <br /> скульптура
            </h2>

            <div className="containerMarsh">
              <div className="boxMarsh">
                <div className="positionImgbox">
                  <img src={img} alt="img" />
                  <div>
                    <h6>Ручна робота</h6>
                    <p>Кожна пелюстка формується вручну</p>
                  </div>
                </div>
              </div>
              <div className="boxMarsh">
                <div className="positionImgbox">
                  <img src={img} alt="img" />
                  <div>
                    <h6>Без хімії</h6>
                    <p>Натуральні барвники, можна дітям</p>
                  </div>
                </div>
              </div>
              <div className="boxMarsh">
                <div className="positionImgbox">
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
