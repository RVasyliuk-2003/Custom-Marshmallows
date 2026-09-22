import style from "./catalogScroll.module.css";
import { FadeUp } from "../../../FadeUp";

import { Link } from "react-router-dom";

import sizeContainer from "../../../data/sizeContainer";
import bouquetDesigns from "../../../data/bouquetDesigns";

const CatalogScroll = () => {
  return (
    <section>
      <div className="container">
        <div className={style.catalogContainer}>
          <span style={{ width: "min-content" }} className="eyebrow">
            КАТАЛОГ
          </span>
          <FadeUp as="h2" duration={1} xOffset={-30}>
            ОБЕРИ НАСТРІЙ <br /> БУКЕТА
          </FadeUp>
          <p className={style["flip-p"]}> Гортай ліворуч →</p>
          <div className={style.scrollContainer}>
            {bouquetDesigns.slice(0, 5).map((desEll) => {
              const minSize = desEll.availableSizes
                ? Math.min(...desEll.availableSizes)
                : null;
              const priceInfo = sizeContainer.find((el) => el.size === minSize);

              return (
                <Link
                  to={`/gallery/18/Букет`}
                  key={desEll.id}
                  className={style.scrollCard}
                >
                  <img
                    src={`/${desEll.photo}`}
                    alt={desEll.name}
                    className={style.img}
                    loading="lazy"
                  />
                  <h4>Дізнатись більше →</h4>
                  <p className={style.wigthTag}>від {priceInfo?.price} грн</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogScroll;
