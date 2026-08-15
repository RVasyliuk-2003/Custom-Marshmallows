import style from "./reviews.module.css";
import img from "./images/icons8.png";

const Reviews = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainerReviews}>
          <p className={`eyebrow ${style.type}`}>ВІДГУКИ</p>
          <h2 className="h2">
            Що кажуть
            <br /> клієнти
          </h2>

          <div className={style.scrollContainer}>
            <div className={`card ${style.widtgCard}`}>
              <img className={style.ImgComm} src={img} alt="ImgComm" />
              <p>
                Вона довго не могла повірити, <br /> що це не живі квіти!
              </p>
              <span>Оля</span>
              <p className={style["sity-p"]}>Київ</p>
            </div>
            <div className={`card ${style.widtgCard}`}>
              <img className={style.ImgComm} src={img} alt="ImgComm" />
              <p>
                Вона довго не могла повірити, <br /> що це не живі квіти!
              </p>
              <span>Оля</span>
              <p className={style["sity-p"]}>Житомир</p>
            </div>
            <div className={`card ${style.widtgCard}`}>
              <img className={style.ImgComm} src={img} alt="ImgComm" />
              <p>
                Кожна пелюстка як справжня. <br /> Неймовірна якість
              </p>
              <span>Олексій</span>
              <p className={style["sity-p"]}>Львів</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
