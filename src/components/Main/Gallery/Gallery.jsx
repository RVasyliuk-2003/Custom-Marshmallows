import style from "./gallery.module.css";
import logo from "./../../../assets/logo.png";

import sizeContainer from "./../../data/sizeContainer";
import bouquetDesigns from "./../../data/bouquetDesigns";

const Gallery = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainGalleryContainet}>
          <span
            className="eyebrow"
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
          >
            РОЗМІР: 10 СМ
          </span>
          <p className={style.filtTabl}>ТИП</p>

          <div className={style.filters}>
            <p className={style.categoryClick}>Усі</p>
            <p className={style.categoryClick}>Букети</p>
            <p className={style.categoryClick}>Завитки</p>
            <p className={style.categoryClick}>Індивідуальний</p>
          </div>

          <p className={style.filtTabl}>РОЗМІР</p>
          <div className={style.filters}>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>10</p>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>16</p>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>18</p>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>20</p>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>25</p>
            <p className={`${style.categoryClick} ${style.sizeClick}`}>30</p>
          </div>

          <div className={style.flexContanerCard}>
            {bouquetDesigns.map((ell) => {
              return (
                <div key={ell.id} className={style.mainGalleryBoxCard}>
                  <div className={style.positionImg}>
                    <img src={ell.photo} alt={ell.name} />
                    <span>{ell.type}</span>
                  </div>

                  <div className={style.photoText}>
                    <h4>{ell.name}</h4>
                    <span>{ell.name}</span>
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

          <button className="btn btn-outline">Замовити індивідуально</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
