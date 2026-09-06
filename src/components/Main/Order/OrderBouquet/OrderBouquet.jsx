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

  const priceId = sizeContainer?.find((el) => el.size === size);

  const total =
    priceId?.price +
    (packaging === "Стандарт" ? 50 : 150) +
    (inptforColor ? 200 : 0);

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
            <button className={style.btnRadio}>Самовивіз</button>
            <button className={style.btnRadio}>По місту</button>
            <button className={style.btnRadio}>Нова пошта</button>
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
              <p>svZVasfv sdvaszfv sdvzdsazv</p>
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

export default OrderBouquet;
