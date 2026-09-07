import style from "./orderMain.module.css";
import logo from "./../../../../assets/logo.png";
import sizeContainer from "../../../data/sizeContainer";
import { useState } from "react";

const OrderMain = () => {
  const [size, setSize] = useState(18);
  const [flavor, setFlavor] = useState("Оберіть смак");
  const [actiRadio, setActiRadio] = useState("");

  const [inpColor, setInpColor] = useState("");
  const [inpIdea, setInpIdea] = useState("");
  const [inptDate, setInptDate] = useState("");
  const [inptName, setInptName] = useState("");
  const [inptNumber, setInptNumber] = useState("");

  const [error, setError] = useState("");

  const nameRegex = /^([a-zA-Z\s]+|[а-яА-ЯҐґЄєІіЇї'’\s]+)$/u;
  const contactRegex = /^(\+?[\d\s\-\(\)]{7,20}|@[a-zA-Z0-9_]{5,32})$/;

  const option = sizeContainer?.find((s) => s.size === size);

  const [submitted, setSubmitted] = useState(false);

  const resultError = () => {
    setSubmitted(true);

    if (!inptDate || !inptName || !inptNumber) {
      setError("ЗАПОМНІТЬ УСІ ПОЛЯ");
      return;
    }
    if (!inpIdea) {
      setError("ОПИШІТЬ СВОЮ ІДЕЮ");
      return;
    }
    if (flavor === "Оберіть смак") {
      setError("ОБЕРІТЬ СМАК");
      return;
    }
    if (!actiRadio) {
      setError("ОБЕРІТЬ СПОСІБ ДОСТАВКИ");
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
      setInpColor("");
      setInpIdea("");
      setFlavor("Оберіть смак");
      setActiRadio("");
      setInptDate("");
      setInptName("");
      setInptNumber("");
      setISubmitted(false);
    }
  };

  return (
    <section className="contsiner">
      <div className={style.mainOrderContainer}>
        <h2>Свій букет</h2>
        <div className={style.infoCard}>
          <img src={logo} alt="logo" />
          <div>
            <h4>Опиши, що уявляєш</h4>
            <p>Чим детальніше — тим точніше вийде результат</p>
          </div>
        </div>
        <span className={style.typeText}>РОЗМІР</span>
        <div className={style.chipSize}>
          {sizeContainer
            ?.filter((bo) => bo.category === "Букети")
            .map((ell) => (
              <div
                key={ell.id}
                className={
                  size === ell.size
                    ? `${style.sizeChipBox} ${style.active}`
                    : style.sizeChipBox
                }
                onClick={() => setSize(ell.size)}
              >
                <b>{ell.size}</b>
                <span>{ell.price} грн</span>
              </div>
            ))}
        </div>
        <span className={style.typeText}>КОЛЬОРИ</span>
        <input
          value={inpColor}
          onChange={(e) => setInpColor(e.target.value)}
          className={style.inpt}
          placeholder="Напр.: бордовий, пудровий, з золотом"
        />
        <span className={style.typeText}>СМАК</span>
        <select
          className={style.select}
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          style={{
            border:
              submitted && flavor === "Оберіть смак"
                ? "2px solid var(--raspberry-deep)"
                : undefined,
          }}
          name=""
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
        <span className={style.typeText}>ОПИШИ СВОЮ ІДЕЮ</span>
        <textarea
          placeholder="Привід, стиль упаковки, референси — все, що маєш на думці"
          className={style.field}
          value={inpIdea}
          onChange={(e) => setInpIdea(e.target.value)}
          type="text"
          style={{
            border:
              submitted && !inpIdea
                ? "2px solid var(--raspberry-deep)"
                : undefined,
          }}
        />
        <span className={style.typeText}>ОТРИМАННЯ</span>
        <div className={style.radio}>
          <button
            onClick={() => setActiRadio("Самовивіз")}
            className={
              actiRadio === "Самовивіз"
                ? `${style.btnRadio} ${style.altiveRadio}`
                : style.btnRadio
            }
          >
            Самовивіз
          </button>
          <button
            onClick={() => setActiRadio("По місту")}
            className={
              actiRadio === "По місту"
                ? `${style.btnRadio} ${style.altiveRadio}`
                : style.btnRadio
            }
          >
            По місту
          </button>
          <button
            onClick={() => setActiRadio("Нова пошта")}
            className={
              actiRadio === "Нова пошта"
                ? `${style.btnRadio} ${style.altiveRadio}`
                : style.btnRadio
            }
          >
            Нова пошта
          </button>
        </div>
        <span className={style.typeText}>БАЖАНА ДАТА</span>
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
        <span className={style.typeText}>ІМ'Я ТА ТЕЛЕФОН / TELEGRAM</span>
        <input
          style={{
            border:
              submitted && (!inptName || !nameRegex.test(inptName))
                ? "2px solid var(--raspberry-deep)"
                : null,
          }}
          value={inptName}
          onChange={(e) => setInptName(e.target.value)}
          className={style.inpt}
          type="name"
          placeholder="Ваше ім'я"
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
        {error && (
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
        )}

        <div className={style.box}>
          <b>Орієнтовно від {option.price + 50} грн</b>
          <p>
            Точну ціну повідомимо особисто після обговорення деталей — вона
            залежить від складності дизайну
          </p>
        </div>
        <button onClick={() => resultError()} className="btn btn-primary">
          Надіслати запит
        </button>
      </div>
    </section>
  );
};

export default OrderMain;
