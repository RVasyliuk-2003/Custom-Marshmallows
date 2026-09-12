import { useState } from "react";
import style from "./reviewModal.module.css";
import Reviews from "../Reviews";

const ReviewModal = ({ close, onclose }) => {
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
          <textarea placeholder="Що сподобалось найбільше?"></textarea>

          <span className={style.label}>Ім'я та місто</span>
          <div className={style.fieldBox}>
            <input
              className={style.field}
              type="name"
              placeholder="Ваше ім'я"
            />
            <input className={style.field} type="text" placeholder="Місто" />
          </div>

          <button style={{ marginTop: "18px" }} className="btn btn-primary">
            Надіслати відгук
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewModal;
