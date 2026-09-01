import { useState } from "react";
import style from "./catalog.module.css";

import sizeContainer from "./../../data/sizeContainer.js";

import { Link } from "react-router-dom";

const Catalog = () => {
  const [boxProd, setBoxProd] = useState("Усі");

  const filtersCategory = sizeContainer.filter((ell) => {
    if (boxProd === "Усі") {
      return true;
    } else {
      return ell.category === boxProd;
    }
  });

  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <span
            style={{ transform: "rotate(-2deg)", display: "inline-block" }}
            className="eyebrow"
          >
            Обери розмір
          </span>

          <div className={style.filters}>
            <p
              onClick={() => setBoxProd("Усі")}
              className={style.categoryClick}
              style={{
                backgroundColor: boxProd === "Усі" ? "var(--ink)" : "#fff",
                color: boxProd === "Усі" ? "var(--paper)" : "var(--ink-soft)",
              }}
            >
              Усі
            </p>
            <p
              onClick={() => setBoxProd("Букети")}
              className={style.categoryClick}
              style={{
                backgroundColor: boxProd === "Букети" ? "var(--ink)" : "#fff",
                color:
                  boxProd === "Букети" ? "var(--paper)" : "var(--ink-soft)",
              }}
            >
              Букети
            </p>
            <p
              onClick={() => setBoxProd("Завитки")}
              className={style.categoryClick}
              style={{
                backgroundColor: boxProd === "Завитки" ? "var(--ink)" : "#fff",
                color:
                  boxProd === "Завитки" ? "var(--paper)" : "var(--ink-soft)",
              }}
            >
              Завитки
            </p>
            <p
              onClick={() => setBoxProd("Індивідуальний")}
              className={style.categoryClick}
              style={{
                backgroundColor:
                  boxProd === "Індивідуальний" ? "var(--ink)" : "#fff",
                color:
                  boxProd === "Індивідуальний"
                    ? "var(--paper)"
                    : "var(--ink-soft)",
              }}
            >
              Індивідуально
            </p>
          </div>

          {filtersCategory.map((ell) => (
            <Link
              to={`/gallery/${ell.size}`}
              key={ell.id}
              className={style.sizeCard}
            >
              <div
                style={{
                  backgroundColor:
                    ell.id === 7
                      ? "var(--lavender-light)"
                      : null || ell.id === 8
                        ? "var(--honey-light)"
                        : null,
                }}
                className={style.sizeBox}
              >
                <b>{ell.size}</b>
                <span>{ell.unit || "CM"}</span>
              </div>
              <div className={style.sizeInfo}>
                <h4>{ell.name}</h4>
                <p>{ell.description}</p>
              </div>
              <span className={style.priceSpan}>
                {ell.price ? `${ell.price} грн` : "за домов.."}
              </span>
            </Link>
          ))}

          <div className={style.noteCard}>
            <b>Важливо:</b>
            <p>
              замовлення приймаються мінімум за 2-3 дні до потрібної дати.
              Оплата — 100% <br />
              наперед.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
