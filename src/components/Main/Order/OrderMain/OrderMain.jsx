import style from "./orderMain.module.css";
import logo from "./../../../../assets/logo.png";

const OrderMain = () => {
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
          <div className={style.sizeChipBox}>
            <b>10</b>
            <span>см</span>
          </div>
          <div className={style.sizeChipBox}>
            <b>16</b>
            <span>см</span>
          </div>
          <div className={style.sizeChipBox}>
            <b>18</b>
            <span>см</span>
          </div>
          <div className={style.sizeChipBox}>
            <b>20</b>
            <span>см</span>
          </div>
          <div className={style.sizeChipBox}>
            <b>25</b>
            <span>см</span>
          </div>
          <div className={style.sizeChipBox}>
            <b>30</b>
            <span>см</span>
          </div>
        </div>

        <span className={style.typeText}>КОЛЬОРИ</span>
        <input
          className={style.inpt}
          placeholder="Напр.: бордовий, пудровий, з золотом"
        />

        <span className={style.typeText}>СМАК</span>

        <select className={style.select} name="" id="">
          <option value="">Оберіть смак</option>
          <option value="">Вишня</option>
        </select>

        <span className={style.typeText}>ОПИШИ СВОЮ ІДЕЮ</span>

        <input
          className={style.field}
          type="text"
          placeholder="Привід, стиль упаковки, референси — все, що маєш на думці"
        />
        <span className={style.typeText}>ОТРИМАННЯ</span>

        <div className={style.radio}>
          <button className={style.btnRadio}>Самовивіз</button>
          <button className={style.btnRadio}>По місту</button>
          <button className={style.btnRadio}>Нова пошта</button>
        </div>
        <span className={style.typeText}>БАЖАНА ДАТА</span>
        <input className={style.inpt} placeholder="Наприклад, 14 вересня" />

        <span className={style.typeText}>ІМ'Я ТА ТЕЛЕФОН / TELEGRAM</span>
        <input className={style.inpt} type="name" placeholder="Ваше ім'я" />
        <input
          className={style.inpt}
          type="number"
          placeholder="+380 або @нікнейм"
          style={{ marginTop: "10px" }}
        />

        <div className={style.box}>
          <b>Орієнтовно від 1100 грн</b>
          <p>
            Точну ціну повідомимо особисто після обговорення деталей — вона
            залежить від розміру й складності дизайну
          </p>
        </div>

        <button className="btn btn-primary">Надіслати запит</button>
      </div>
    </section>
  );
};

export default OrderMain;
