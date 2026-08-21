import style from "./reviews.module.css";
import icons from "./images/icons8.png";

const Reviews = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.ratingBox}>
            <h5>9.9</h5>
            <div>
              <span className={style.rating}>★★★★★</span>
              <p className={style.ratingCount}>89 відгуків</p>
            </div>
          </div>

          <div className={style.card}>
            <img src={icons} alt="icons" />
            <p>
              Вона довго не могла повірити, що це не живі квіти. Дуже смачно і
              красиво.
            </p>
            <h5>Оля</h5>
            <span>Київ</span>
          </div>
          <div className={style.card}>
            <img src={icons} alt="icons" />
            <p>
              Робили весільний дублер для фотосесії — кожна пелюстка як
              справжня.
            </p>
            <h5>Марина</h5>
            <span>Львів</span>
          </div>
          <div className={style.card}>
            <img src={icons} alt="icons" />
            <p>
              Замовляю вже втретє — щоразу влучають з кольорами й термінами.
            </p>
            <h5>Анастасія</h5>
            <span>Дніпро</span>
          </div>

          <button style={{ marginTop: "20px" }} className="btn btn-outline">
            Залишити відгук
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
