import style from "./gallery.module.css";
import logo from "./../../../assets/logo.png";

import sizeContainer from "./../../data/sizeContainer";
import bouquetDesigns from "./../../data/bouquetDesigns";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const { size } = useParams();
  const [typeFilt, setTypeFilt] = useState("Букет");
  const [sizeFilt, setSizeFilt] = useState(Number(size) || 18);

  const renderType = bouquetDesigns.filter((ell) => {
    const matchesType = typeFilt === "Усі" || typeFilt === ell.type;

    return matchesType;
  });

  return (
    <section>
      <div className="container">
        <div className={style.mainGalleryContainet}>
          <span
            className="eyebrow"
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
          >
            РОЗМІР: {sizeFilt} СМ
          </span>
          <p className={style.filtTabl}>ТИП</p>

          <div className={style.filters}>
            <button
              style={
                typeFilt === "Букет"
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setTypeFilt("Букет")}
              className={style.categoryClick}
            >
              Букети
            </button>
            <button
              style={
                typeFilt === "Завиток"
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setTypeFilt("Завиток")}
              className={style.categoryClick}
            >
              Завитки
            </button>
            <button
              style={
                typeFilt === "Індивідуальний"
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setTypeFilt("Індивідуальний")}
              className={style.categoryClick}
            >
              Індивідуальний
            </button>
          </div>

          <p className={style.filtTabl}>РОЗМІР</p>
          <div className={style.filters}>
            <button
              style={
                sizeFilt === 10
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(10)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              10
            </button>
            <button
              style={
                sizeFilt === 16
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(16)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              16
            </button>
            <button
              style={
                sizeFilt === 18
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(18)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              18
            </button>
            <button
              style={
                sizeFilt === 20
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(20)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              20
            </button>
            <button
              style={
                sizeFilt === 25
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(25)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              25
            </button>
            <button
              style={
                sizeFilt === 30
                  ? { color: "var(--paper)", backgroundColor: "var(--ink)" }
                  : null
              }
              onClick={(e) => setSizeFilt(30)}
              className={`${style.categoryClick} ${style.sizeClick}`}
            >
              30
            </button>
          </div>

          <div className={style.flexContanerCard}>
            {renderType.map((ell) => {
              const priceInfo = sizeContainer.find((s) => s.size === sizeFilt);

              return (
                <div key={ell.id} className={style.mainGalleryBoxCard}>
                  <div className={style.positionImg}>
                    <img src={`/${ell.photo}`} alt={ell.name} />
                    <span>{ell.type}</span>
                  </div>

                  <div className={style.photoText}>
                    <h4>{ell.name}</h4>
                    <span>
                      {ell.type === "Завиток"
                        ? "40 грн/шт"
                        : `${priceInfo?.price} грн`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={style.customLine}></div>

          <div className={style.dopInfoBox}>
            <img src={logo} alt="logo" />
            <div>
              <h4>Не знайшов свій?</h4>
              <p>Опиши, що уявляєш — зробимо саме такий</p>
            </div>
          </div>

          <button
            className={
              typeFilt === "Індивідуальний"
                ? "btn btn-primary"
                : "btn btn-outline"
            }
          >
            Замовити індивідуально
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
