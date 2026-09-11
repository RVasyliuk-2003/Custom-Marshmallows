import { useState } from "react";
import style from "./orderBouquet.module.css";
import { useParams } from "react-router-dom";
import bouquetDesigns from "../../../data/bouquetDesigns";

import sizeContainer from "../../../data/sizeContainer";

const OrderBouquet = () => {
  const [inptforColor, setInptforColor] = useState(false);

  const { id } = useParams();
  const prod = bouquetDesigns?.find((el) => el.id === Number(id));

  const [size, setSize] = useState(18);
  const [packaging, setPackaging] = useState("Стандарт");
  const [actiRadio, setActiRadio] = useState("");
  const [flavor, setFlavor] = useState("Оберіть смак");

  const priceId = sizeContainer?.find((el) => el.size === size);

  const total =
    priceId?.price +
    (packaging === "Стандарт" ? 50 : 150) +
    (inptforColor ? 200 : 0);

  const nameRegex = /^([a-zA-Z\s]+|[а-яА-ЯҐґЄєІіЇї'’\s]+)$/u;
  const contactRegex = /^(\+?[\d\s\-\(\)]{7,20}|@[a-zA-Z0-9_]{5,32})$/;

  const [inptDate, setInptDate] = useState("");
  const [inptName, setInptName] = useState("");
  const [inptNumber, setInptNumber] = useState("");

  const [error, setError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const resultError = async () => {
    setSubmitted(true);

    if (!inptDate || !inptName || !inptNumber) {
      setError("ЗАПОМНІТЬ УСІ ПОЛЯ");
      return;
    }
    if (!actiRadio) {
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
      const text = `
<b>🛍️ НОВЕ ЗАМОВЛЕННЯ: ${prod?.name || "Букет"}</b>

<b>📌 Деталі:</b>
- <b>Розмір:</b> ${size} см.
- <b>Пакування:</b> ${packaging}
- <b>Смак:</b> ${flavor}
${inptforColor ? "- <b>Насичені кольори:</b> так" : ""}
- <b>Сума:</b> ${total} грн

<b>🚚 Отримання та дата:</b>
- <b>Спосіб:</b> ${actiRadio}
- <b>Дата:</b> ${inptDate}

<b>👤 Клієнт:</b>
- <b>Ім'я:</b> ${inptName}
- <b>Контакт:</b> ${inptNumber}
`;

      try {
        const response = await fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error("Помилка відправки");
        }

        setError("ФОРМУ ВІДПРАВЛЕННО");
        setActiRadio("");
        setInptDate("");
        setInptName("");
        setInptNumber("");
        setSubmitted(false);
      } catch (err) {
        setError("НЕ ВДАЛОСЯ ВІДПРАВИТИ, СПРОБУЙТЕ ЩЕ РАЗ");
      }
    }
  };

  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h2>Оформлення</h2>
          <div className={style.orderCard}>
            <img src={`/${prod?.photo}`} alt={prod.name} />
            <div className={style.prodInfoCard}>
              <h4>{prod.name}</h4>
              <span>{prod.type}</span>
            </div>
          </div>

          <span className={style.label}>РОЗМІР</span>

          <div className={style.sizeRow}>
            {sizeContainer
              ?.filter((type) => type.category === "Букети")
              .map((ell) => (
                <div
                  key={ell.id}
                  onClick={() => setSize(ell.size)}
                  className={
                    size === ell.size
                      ? `${style.sizeChip} ${style.chipActive}`
                      : style.sizeChip
                  }
                >
                  <b>{ell.size}</b>
                  <span>{ell.price} грн</span>
                </div>
              ))}
          </div>
          <span className={style.label}>ПАКУВАННЯ</span>
          <label className={style.optionCard}>
            <span className={style.tagAbsolute}>зазвичай для завитків</span>

            <div className={style.optionLeft}>
              <input
                onChange={() => setPackaging("Стандарт")}
                type="radio"
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
                onChange={() => setPackaging("Подарункове")}
                type="radio"
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
              onClick={() => setActiRadio("Самовивіз")}
              className={
                actiRadio === "Самовивіз"
                  ? `${style.btnRadio} ${style.radioActive}`
                  : style.btnRadio
              }
            >
              Самовивіз
            </button>
            <button
              onClick={() => setActiRadio("По місту")}
              className={
                actiRadio === "По місту"
                  ? `${style.btnRadio} ${style.radioActive}`
                  : style.btnRadio
              }
            >
              По місту
            </button>
            <button
              onClick={() => setActiRadio("Нова пошта")}
              className={
                actiRadio === "Нова пошта"
                  ? `${style.btnRadio} ${style.radioActive}`
                  : style.btnRadio
              }
            >
              Нова пошта
            </button>
          </div>
          <span className={style.label}>БАЖАНА ДАТА</span>
          <input
            value={inptDate}
            onChange={(e) => setInptDate(e.target.value)}
            className={style.inpt}
            placeholder="Наприклад, 14 вересня"
            style={{
              border:
                submitted && !inptDate
                  ? "2px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />
          <span className={style.label}>ІМ'Я ТА ТЕЛЕФОН / TELEGRAM</span>
          <input
            value={inptName}
            onChange={(e) => setInptName(e.target.value)}
            className={style.inpt}
            type="name"
            placeholder="Ваше ім'я"
            style={{
              border:
                submitted && (!inptName || !nameRegex.test(inptName))
                  ? "2px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />
          <input
            value={inptNumber}
            onChange={(e) => setInptNumber(e.target.value)}
            className={style.inpt}
            type="text"
            placeholder="+380 або @нікнейм"
            style={{
              marginTop: "10px",
              border:
                submitted && (!inptNumber || !contactRegex.test(inptNumber))
                  ? "2px solid var(--raspberry-deep)"
                  : undefined,
            }}
          />

          {error ? (
            <p
              className={style.infoError}
              style={{
                color:
                  error === "ФОРМУ ВІДПРАВЛЕННО"
                    ? "var(--pistachio)"
                    : "var(--raspberry-deep)",
              }}
            >
              {error}
            </p>
          ) : null}
          <div className={style.totalRow}>
            <div className={style.totalText}>
              <p>
                Букет {priceId.size} см - {priceId.price} грн
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
            onClick={() => resultError()}
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

export default OrderBouquet;
