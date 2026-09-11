import style from "./connection.module.css";
import SubtleEdge from "../../SubtleEdge/SubtleEdge.jsx";

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

          <a
            href="https://t.me/ZefirkaOlena"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${style.styleBtn1}`}
          >
            Instagram
          </a>
          <a
            href="https://telegram.me/ZefirkaOlena/"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${style.styleBtn2}`}
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connection;
