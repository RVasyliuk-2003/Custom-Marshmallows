import { useState } from "react";
import style from "./orderBouquet.module.css";

const OrderBouquet = () => {
  const [inptforColor, setInptforColor] = useState(false);
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h2>Оформлення</h2>
          <div className={style.orderCard}>
            <img src="" alt="" />
            <div>
              <h4>fdgzvfd</h4>
              <span>vzfdf</span>
            </div>
          </div>
          <span className={style.label}>РОЗМІР</span>

          <div className={style.sizeRow}>
            <div className={style.sizeChip}>
              <b>10</b>
              <span>600 грн</span>
            </div>
            <div className={style.sizeChip}>
              <b>16</b>
              <span>1000 грн</span>
            </div>
            <div className={style.sizeChip}>
              <b>18</b>
              <span>1100 грн</span>
            </div>
            <div className={style.sizeChip}>
              <b>20</b>
              <span>1300 грн</span>
            </div>
            <div className={style.sizeChip}>
              <b>25</b>
              <span>1800 грн</span>
            </div>
            <div className={style.sizeChip}>
              <b>30</b>
              <span>2500 грн</span>
            </div>
          </div>

          <span className={style.label}>ПАКУВАННЯ</span>

          <label className={style.optionCard}>
            <span className={style.tagAbsolute}>зазвичай для завитків</span>

            <div className={style.optionLeft}>
              <input
                type="radio"
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
            <b>1000 грн</b>
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
