import style from "./connection.module.css";
import SubtleEdge from "./../../SubtleEdge/SubtleEdge.jsx";

const Connection = () => {
  return (
    <section>
      <div className="container">
        <div className={style.connectiMainContainer}>
          <SubtleEdge color="var(--kraft)" />

          <p className={`eyebrow ${style.wigth}`}>ГОТОВІ ЗДИВУВАТИ?</p>
          <h2 className={`h2 ${style.h2Mr}`}>
            Напишіть нам — <br /> і ми зберемо букет
          </h2>

          <span>Відповідаємо протягом години</span>

          <button className={`btn ${style.styleBtn1}`}>Instagram </button>
          <button className={`btn btn-outline ${style.styleBtn2}`}>
            Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connection;
