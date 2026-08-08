import "./catalogScroll.css";

const CatalogScroll = () => {
  return (
    <section>
      <div className="container">
        <div className="catalogContainer">
          <p className="eyebrow typ">КАТАЛОГ</p>
          <h2>
            ОБЕРИ НАСТРІЙ <br /> БУКЕТА
          </h2>
          <p className="flip-p"> Гортай праворуч →</p>
          <div className="scrollContainer">
            <div className="scrollCard">
              <div className="cardImg"></div>
              <h4>Класика</h4>
              <p className="tag wigthTag">450 грн</p>
            </div>
            <div className="scrollCard">
              <div className="cardImg"></div>
              <h4>День народж.</h4>
              <p className="tag wigthTag">850 грн</p>
            </div>
            <div className="scrollCard">
              <div className="cardImg"></div>
              <h4>Весільний</h4>
              <p className="tag wigthTag">560грн</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogScroll;
