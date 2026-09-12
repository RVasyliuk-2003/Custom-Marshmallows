import style from "./reviews.module.css";
import icons from "./images/icons8.png";

import { useState } from "react";
import reviewsData from "./reviewsData";
import ReviewModal from "./ReviewModal/ReviewModal";

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);

  const [close, onclose] = useState(false);

  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.ratingBox}>
            <h5>9.9</h5>
            <div>
              <span className={style.rating}>★★★★★</span>
              <p className={style.ratingCount}>89 відгуків</p>
            </div>
          </div>
          {close && <ReviewModal close={close} onclose={onclose} />}
          {reviews?.map((ell) => (
            <div key={ell.id} className={style.card}>
              <img src={icons} alt="icons" />
              <p>{ell.text}</p>
              <h5>{ell.name}</h5>
              <span>{ell.city}</span>
            </div>
          ))}

          <button
            onClick={() => onclose(true)}
            style={{ marginTop: "20px" }}
            className="btn btn-outline"
          >
            Залишити відгук
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
