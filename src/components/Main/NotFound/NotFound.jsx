import style from "./notFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={style.wrapper}>
      <div className="container">
        <div className={style.card}>
          <span className={style.eyebrow}>404</span>
          <div className={style.flowerBox}>
            <span className={style.dot}></span>
          </div>
          <h2>Сторінку не знайдено</h2>
          <p>
            Здається, такої адреси не існує — можливо, посилання застаріло чи є
            одруківка в URL
          </p>
          <Link className="btn btn-primary" to="/">
            На головну
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
