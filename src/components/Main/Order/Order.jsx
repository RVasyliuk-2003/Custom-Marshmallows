import "./order.css";

import SubtleEdge from "./../../SubtleEdge/SubtleEdge.jsx";
const Order = () => {
  return (
    <section>
      <div className="container">
        <div className="orderMainContainer contactsSection">
          <SubtleEdge />
          <div>
            <p className="eyebrow width-eyebrow">ЯК ЗАМОВИТИ?</p>
            <h2 className="h2">
              3 кроки <br /> до букета
            </h2>
          </div>

          <div className="stagesContainer">
            <div className="line">
              <svg
                width="2"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
              >
                <line className="doodle" x1="1" y1="0" x2="1" y2="150" />
              </svg>
            </div>
            <div className="stagesBox">
              <div className="numberStagesBox">
                <p>1</p>
              </div>
              <div className="textStagesBox">
                <h4>Опиши свій букет</h4>
                <p>Кольори, розмір, привід — в Instagram чи Telegram</p>
              </div>
            </div>

            <div className="stagesBox">
              <div className="numberStagesBox">
                <p>2</p>
              </div>
              <div className="textStagesBox">
                <h4>Погодь дату</h4>
                <p>Порахуємо вартість і домовимось про терміни</p>
              </div>
            </div>

            <div className="stagesBox">
              <div className="numberStagesBox">
                <p>3</p>
              </div>
              <div className="textStagesBox">
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
