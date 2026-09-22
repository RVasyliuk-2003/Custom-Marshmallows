import style from "./connection.module.css";
import SubtleEdge from "../../SubtleEdge/SubtleEdge.jsx";
import { FadeUp } from "../../../FadeUp.jsx";

const Connection = () => {
  return (
    <section>
      <div className="container">
        <div className={style.connectiMainContainer}>
          <SubtleEdge color="var(--kraft)" />

          <span style={{ width: "max-content" }} className="eyebrow">
            ГОТОВІ ЗДИВУВАТИ?
          </span>
          <h2 className={`h2 ${style.h2Mr}`}>
            Напишіть нам — <br /> і ми зберемо букет
          </h2>

          <span>Відповідаємо протягом години</span>

          <FadeUp
            as="a"
            duration={0.7}
            delay={0.3}
            yOffset={15}
            href="https://instagram.com/olenavasyliuk69/"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${style.styleBtn1}`}
          >
            Instagram
          </FadeUp>

          <FadeUp
            as="a"
            duration={0.7}
            delay={0.6}
            yOffset={15}
            href="https://t.me/ZefirkaOlena"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${style.styleBtn2}`}
          >
            Telegram
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Connection;
