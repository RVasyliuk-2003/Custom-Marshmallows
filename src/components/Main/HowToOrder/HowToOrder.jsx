import style from "./howToOrder.module.css";
import { Link } from "react-router-dom";
import { FadeUp } from "../../FadeUp";

const HowToOrder = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <p className={style.pTime}>Від ідеї до букета — 3 кроки, 3–4 дні.</p>
          <div className={style.stagesContainer}>
            <div className={style.line}>
              <svg
                width="2"
                height="100%"
                style={{ position: "absolute", inset: 0, opacity: 0.4 }}
              >
                <line className={style.doodle} x1="1" y1="0" x2="1" y2="150" />
              </svg>
            </div>
            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>1</p>
              </div>
              <FadeUp
                className={style.textStagesBox}
                xOffset={-25}
                yOffset={0}
                duration={0.5}
                delay={0.1}
              >
                <h4>Опиши свій букет</h4>
                <p>Кольори, розмір, привід — в Instagram чи Telegram</p>
              </FadeUp>
            </div>

            {/* Крок 2 */}
            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>2</p>
              </div>
              <FadeUp
                className={style.textStagesBox}
                xOffset={-25}
                yOffset={0}
                duration={0.5}
                delay={0.3}
              >
                <h4>Погодь дату</h4>
                <p>Порахуємо вартість і домовимось про терміни</p>
              </FadeUp>
            </div>

            {/* Крок 3 */}
            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>3</p>
              </div>
              <FadeUp
                className={style.textStagesBox}
                xOffset={-25}
                yOffset={0}
                duration={0.5}
                delay={0.5}
              >
                <h4>Забери або отримай</h4>
                <p>Особисто або Новою поштою по Україні</p>
              </FadeUp>
            </div>
          </div>

          <span
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
            className="eyebrow"
          >
            ПИТАННЯ
          </span>

          <div className={style.infoBox}>
            <h5>Скільки триває виготовлення?</h5>
            <p>Зазвичай 1–2 дні залежно від розміру</p>
          </div>
          <div className={style.infoBox}>
            <h5>Чи можна свої кольори?</h5>
            <p>Так, підберемо під будь-яку палітру</p>
          </div>

          <FadeUp
            as="Link"
            duration={0.7}
            delay={0.3}
            yOffset={15}
            to="/catalog"
            className={`btn btn-primary ${style.marginBtn}`}
          >
            Почати замовлення
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
