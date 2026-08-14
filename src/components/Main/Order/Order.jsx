import style from "./order.module.css";
import SubtleEdge from "./../../SubtleEdge/SubtleEdge.jsx";

const Order = () => {
  return (
    <section>
      <div className="container">
        <div className={`${style.orderMainContainer} ${style.contactsSection}`}>
          <SubtleEdge />
          <div>
            <p className={`eyebrow ${style.widthEyebrow}`}>ЯК ЗАМОВИТИ?</p>
            <h2 className={style.h2}>
              3 кроки <br /> до букета
            </h2>
          </div>

          <div className={style.stagesContainer}>
            <div className={style.line}>
              <svg
                width="2"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
              >
                <line className={style.doodle} x1="1" y1="0" x2="1" y2="150" />
              </svg>
            </div>
            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>1</p>
              </div>
              <div className={style.textStagesBox}>
                <h4>Опиши свій букет</h4>
                <p>Кольори, розмір, привід — в Instagram чи Telegram</p>
              </div>
            </div>

            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>2</p>
              </div>
              <div className={style.textStagesBox}>
                <h4>Погодь дату</h4>
                <p>Порахуємо вартість і домовимось про терміни</p>
              </div>
            </div>

            <div className={style.stagesBox}>
              <div className={style.numberStagesBox}>
                <p>3</p>
              </div>
              <div className={style.textStagesBox}>
                <h4>Забери або отримай</h4>
                <p>Особисто або Новою поштою по Україні</p>
              </div>
            </div>
          </div>

          <SubtleEdge flip />
        </div>
      </div>
    </section>
  );
};

export default Order;
