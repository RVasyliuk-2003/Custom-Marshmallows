import { useState } from "react";
import style from "./reviewModal.module.css";
import Reviews from "../Reviews";

import { supabase } from "../../../../supabaseClient";

const ReviewModal = ({ close, onclose, setReviews, reviews }) => {
  const [submitted, setSubmitted] = useState(false);

  const [inptName, setInptName] = useState("");
  const [inptCity, setInptCity] = useState("");
  const [inptText, setInptText] = useState("");

  const [result, setResult] = useState("");

  const reviewAdd = async () => {
    setSubmitted(true);

    if (!inptName || !inptCity || !inptText) {
      setResult("ЗАПОВНІТЬ УСІ ПОЛЯ");
      return;
    }
    if (inptName[0] !== inptName[0].toUpperCase()) {
      setResult("ІМ'Я ПИШЕМО З ВЕЛИКОЇ ЛІТЕРИ");
      return;
    }
    if (inptCity[0] !== inptCity[0].toUpperCase()) {
      setResult("МІСТО ПИШЕМО З ВЕЛИКОЇ ЛІТЕРИ");
      return;
    }

    const { data, error } = await supabase.from("Reviews").insert([
      {
        name: inptName,
        city: inptCity,
        text: inptText,
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Помилка зберігання в Supabase:", error);
      setResult("ПОМИЛКА ВІДПРАВКИ. СПРОБУЙТЕ ЩЕ РАЗ");
      return;
    }

    setResult("ДЯКУЄМО! ВІДГУК НАДІСЛАНО НА МОДЕРАЦІЮ");
    setSubmitted(false);
    setInptName("");
    setInptCity("");
    setInptText("");

    setTimeout(() => {
      onclose(false);
    }, 3000);
  };

  return (
    <>
      {close && (
        <div className={style.reviewModalBox}>
          <div className={style.madalTop}>
            <span className="eyebrow">НОВИЙ ВІДГУК</span>
            <button onClick={() => onclose(false)} className={style.btnClose}>
              X
            </button>
          </div>
          <h2 className={style.h2}>
            Поділись <br /> враженням
          </h2>

          <span className={style.label}>ВАШ ВІДГУК</span>
          <textarea
            value={inptText}
            onChange={(e) => setInptText(e.target.value)}
            placeholder="Що сподобалось найбільше?"
            style={{
              border:
                submitted && !inptText
                  ? "2px solid var(--raspberry-deep)"
                  : undefined,
            }}
          ></textarea>

          <span className={style.label}>Ім'я та місто</span>
          <div className={style.fieldBox}>
            <input
              value={inptName}
              onChange={(e) => setInptName(e.target.value)}
              className={style.field}
              type="name"
              placeholder="Ваше ім'я"
              style={{
                border:
                  submitted &&
                  (!inptName || inptName[0] !== inptName[0].toUpperCase())
                    ? "2px solid var(--raspberry-deep)"
                    : undefined,
              }}
            />
            <input
              value={inptCity}
              onChange={(e) => setInptCity(e.target.value)}
              className={style.field}
              type="text"
              placeholder="Місто"
              style={{
                border:
                  submitted &&
                  (!inptCity || inptCity[0] !== inptCity[0].toUpperCase())
                    ? "2px solid var(--raspberry-deep)"
                    : undefined,
              }}
            />
          </div>

          {result && (
            <p
              style={{
                color: result.startsWith("ДЯКУЄМО")
                  ? "var(--pistachio)"
                  : "var(--raspberry-deep)",
              }}
              className={style.result}
            >
              {result}
            </p>
          )}

          <button
            onClick={() => reviewAdd()}
            style={{ marginTop: "18px" }}
            className="btn btn-primary"
          >
            Надіслати відгук
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewModal;
