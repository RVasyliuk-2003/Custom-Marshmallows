import style from "./orderCurl.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import bouquetDesigns from "../../../data/bouquetDesigns";

const OrderCurl = () => {
  const [inptforColor, setInptforColor] = useState(false);
  const { cu } = useParams();
  const curl = bouquetDesigns.find((ell) => ell.id === Number(cu));

  const [count, setCount] = useState(1);
  const [packaging, setPackaging] = useState("Стандарт");

  const total =
    count * 40 +
    (packaging === "Стандарт" ? 50 : 150) +
    (inptforColor ? 200 : 0);

  const [deliverColor, setDeliverColor] = useState("Самовивіз");
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h2>Оформлення завитків</h2>
          <div className={style.orderCard}>
            <img src={`/${curl.photo}`} alt={curl.name} />
            <div>
              <h4>{curl.type}</h4>
              <span>40 грн / шт · 40-50г</span>
            </div>
          </div>
          <span className={style.label}>КІЛЬКІСТЬ</span>
          <div className={style.qty}>
            <button
              onClick={() => setCount(count - 1)}
              className={style.btnQty}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className={style.btnQty}
            >
              +
            </button>
          </div>

          <span className={style.label}>ПАКУВАННЯ</span>

          <label className={style.optionCard}>
            <span className={style.tagAbsolute}>зазвичай для завитків</span>

            <div className={style.optionLeft}>
              <input
                type="radio"
                onChange={() => setPackaging("Стандарт")}
                checked={packaging === "Стандарт"}
                name="optionGroup"
                className={style.optionRadio}
              />
              <div>
                <h4 className={style.optionTitle}>Стандарт</h4>
                <span className={style.optionText}>Плівка, Стрічка</span>
              </div>
            </div>

            <p className={style.optionPrice}>50-60 грн</p>
          </label>

          <label className={style.optionCard}>
            <span className={style.tagAbsolute}>зазвичай для букетів</span>

            <div className={style.optionLeft}>
              <input
                type="radio"
                onChange={() => setPackaging("Подарункове")}
                checked={packaging === "Подарункове"}
                name="optionGroup"
                className={style.optionRadio}
              />
              <div>
                <h4 className={style.optionTitle}>Подарункове</h4>
                <span className={style.optionText}>
                  Крафт-папір, більше декору
                </span>
              </div>
            </div>

            <p className={style.optionPrice}>150 грн</p>
          </label>

          <span className={style.label}>СМАК</span>

          <select className={style.selectField} name="">
            <option value="">Полуничний</option>
            <option value="">Полуничний</option>
            <option value="">Полуничний</option>
            <option value="">Полуничний</option>
            <option value="">Полуничний</option>
            <option value="">Полуничний</option>
          </select>

          <span className={style.label}>КОЛЬОРИ</span>

          <label className={`${style.optionCard} ${style.optionClickStyle}`}>
            <div className={style.optionLeft}>
              <input
                type="checkbox"
                checked={inptforColor}
                onChange={(e) => setInptforColor(e.target.checked)}
                className={style.optionCheckbox}
              />
              <div>
                <h4 className={style.optionTitle}>Насичені кольори</h4>
                <span className={style.optionText}>
                  Яскравіші відтінки на вибір
                </span>
              </div>
            </div>

            <p className={style.optionPrice}>+200 грн</p>
          </label>
          {inptforColor && (
            <input
              className={style.infoColor}
              placeholder="Опиши бажаний колір (напр. бордовий)"
              type="text"
            />
          )}

          <span className={style.label}>ОТРИМАННЯ</span>

          <div className={style.radio}>
            <button
              onClick={() => setDeliverColor("Самовивіз")}
              className={
                deliverColor === "Самовивіз"
                  ? `${style.btnRadio} ${style.activeCol}`
                  : style.btnRadio
              }
            >
              Самовивіз
            </button>
            <button
              onClick={() => setDeliverColor("По місту")}
              className={
                deliverColor === "По місту"
                  ? `${style.btnRadio} ${style.activeCol}`
                  : style.btnRadio
              }
            >
              По місту
            </button>
            <button
              onClick={() => setDeliverColor("Нова пошта")}
              className={
                deliverColor === "Нова пошта"
                  ? `${style.btnRadio} ${style.activeCol}`
                  : style.btnRadio
              }
            >
              Нова пошта
            </button>
          </div>
          <span className={style.label}>БАЖАНА ДАТА</span>
          <input className={style.inpt} placeholder="Наприклад, 14 вересня" />

          <span className={style.label}>ІМ'Я ТА ТЕЛЕФОН / TELEGRAM</span>
          <input className={style.inpt} type="name" placeholder="Ваше ім'я" />
          <input
            className={style.inpt}
            type="number"
            placeholder="+380 або @нікнейм"
            style={{ marginTop: "10px" }}
          />

          <div className={style.totalRow}>
            <div className={style.totalText}>
              <p>fdasdvga</p>
              <p>sdzVafd zfdbzfa fasdv</p>
            </div>
            <b>{total} грн</b>
          </div>

          <button className="btn btn-primary" style={{ marginTop: "16px" }}>
            Підтвердити замовлення
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderCurl;
