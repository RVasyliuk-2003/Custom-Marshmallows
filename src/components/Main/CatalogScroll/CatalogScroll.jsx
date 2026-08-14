import style from "./catalogScroll.module.css";

const CatalogScroll = () => {
  return (
    <section>
      <div className="container">
        <div className={style.catalogContainer}>
          <p className={`eyebrow ${style.typ}`}>КАТАЛОГ</p>
          <h2>
            ОБЕРИ НАСТРІЙ <br /> БУКЕТА
          </h2>
          <p className={style["flip-p"]}> Гортай праворуч →</p>
          <div className={style.scrollContainer}>
            <div className={style.scrollCard}>
              <div className={style.cardImg}></div>
              <h4>Класика</h4>
              <p className={`${style.tag} ${style.wigthTag}`}>450 грн</p>
            </div>
            <div className={style.scrollCard}>
              <div className={style.cardImg}></div>
              <h4>День народж.</h4>
              <p className={`${style.tag} ${style.wigthTag}`}>850 грн</p>
            </div>
            <div className={style.scrollCard}>
              <div className={style.cardImg}></div>
              <h4>Весільний</h4>
              <p className={`${style.tag} ${style.wigthTag}`}>560грн</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogScroll;
