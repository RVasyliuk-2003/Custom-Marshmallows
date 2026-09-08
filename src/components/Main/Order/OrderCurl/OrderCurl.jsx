import style from "./orderCurl.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import bouquetDesigns from "../../../data/bouquetDesigns";

const OrderCurl = () => {
  const [inptforColor, setInptforColor] = useState(false);
  const { cu } = useParams();
  const curl = bouquetDesigns.find((ell) => ell.id === Number(cu));

  const [count, setCount] = useState(6);
  const [packaging, setPackaging] = useState("Стандарт");
  const [flavor, setFlavor] = useState("Оберіть смак");

  const total =
    count * 40 +
    (packaging === "Стандарт" ? 50 : 150) +
    (inptforColor ? 200 : 0);

  const [deliverColor, setDeliverColor] = useState("");

  const [inptDate, setInptDate] = useState("");
  const [inptName, setInptName] = useState("");
  const [inptNumber, setInptNumber] = useState("");

  const [error, setError] = useState("");

  const nameRegex = /^([a-zA-Z\s]+|[а-яА-ЯҐґЄєІіЇї'’\s]+)$/u;
  const contactRegex = /^(\+?[\d\s\-\(\)]{7,20}|@[a-zA-Z0-9_]{5,32})$/;

  const [submitted, setSubmitted] = useState(false);

  const errorContact = () => {
    setSubmitted(true);
    if (!inptDate || !inptName || !inptNumber) {
      setError("ЗАПОМНІТЬ УСІ ПОЛЯ");
      return;
    }
    if (!deliverColor) {
      setError("ОБЕРІТЬ СПОСІБ ДОСТАВКИ");
      return;
    }
    if (flavor === "Оберіть смак") {
      setError("ОБЕРІТЬ СМАК");
      return;
    }
    if (!nameRegex.test(inptName)) {
      setError("НЕПРАВИЛЬНО ВВЕДЕННО ІМ'Я");
      return;
    }
    if (!contactRegex.test(inptNumber)) {
      setError("НЕПРАВЕЛЬНО ВВЕДЕННИЙ НОМЕР ТЕЛЕФОНУ АБО НІКНЕЙМ");
      return;
    } else {
      setError("ФОРМУ ВІДПРАВЛЕННО");
      setDeliverColor("");
      setInptDate("");
      setInptName("");
      setInptNumber("");
      setSubmitted(false);
    }
  };

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
              onClick={() => {
                if (count > 6) {
                  setCount(count - 1);
                  return;
                }
              }}
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

          <select
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            className={style.selectField}
            name=""
            style={{
              border:
                submitted && flavor === "Оберіть смак"
                  ? "1px solid var(--raspberry-deep)"
                  : undefined,
            }}
          >
            <option value="Оберіть смак">Оберіть смак</option>
            <option value="Полуниця">Полуниця</option>
            <option value="Смородина">Смородина</option>
            <option value="Апельсин">Апельсин</option>
            <option value="Малина">Малина</option>
            <option value="Абрикосовий">Абрикосовий</option>
            <option value="Сливовий">Сливовий</option>
            <option value="Яблучно-Грушевий">Яблучно-Грушевий</option>
            <option value="Ванільний">Ванільний</option>
            <option value="Грушевий">Грушевий</option>
            <option value="Яблучний">Яблучний</option>
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
          <input
            onChange={(e) => setInptDate(e.target.value)}
            value={inptDate}
            className={style.inpt}
            placeholder="Наприклад, 14 вересня"
            style={{
              border:
                submitted && !inptDate
                  ? "1px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />

          <span className={style.label}>ІМ'Я ТА ТЕЛЕФОН / TELEGRAM</span>
          <input
            onChange={(e) => setInptName(e.target.value)}
            value={inptName}
            className={style.inpt}
            type="name"
            placeholder="Ваше ім'я"
            style={{
              border:
                submitted && (!inptName || !nameRegex.test(inptName))
                  ? "1px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />
          <input
            onChange={(e) => setInptNumber(e.target.value)}
            value={inptNumber}
            className={style.inpt}
            type="text"
            placeholder="+380 або @нікнейм"
            style={{
              marginTop: "10px",
              border:
                submitted && (!inptNumber || !contactRegex.test(inptNumber))
                  ? "1px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />

          {error ? (
            <p
              style={{
                color:
                  error === "ФОРМУ ВІДПРАВЛЕННО"
                    ? "var(--pistachio)"
                    : "var(--raspberry-deep)",
              }}
              className={style.infoError}
            >
              {error}
            </p>
          ) : null}

          <div className={style.totalRow}>
            <div className={style.totalText}>
              <p>
                Завиток x {count} - {count * 40} грн
              </p>
              <p>
                {packaging} - {packaging === "Стандарт" ? 50 : 150} грн
              </p>
              {inptforColor && <p> Насичені кольори - 200 грн</p>}
              {flavor && <p>Смак - {flavor}</p>}
            </div>
            <b>{total} грн</b>
          </div>

          <button
            onClick={() => errorContact()}
            className="btn btn-primary"
            style={{ marginTop: "16px" }}
          >
            Підтвердити замовлення
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderCurl;
