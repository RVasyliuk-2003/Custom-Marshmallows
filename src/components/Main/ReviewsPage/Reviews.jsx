import style from "./reviews.module.css";
import icons from "./images/icons8.png";

import { useState, useEffect } from "react";
import reviewsData from "./reviewsData";
import { supabase } from "../../../supabaseClient";
import ReviewModal from "./ReviewModal/ReviewModal";
import { FadeUp } from "./../../FadeUp";

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [close, onclose] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from("Reviews")
        .select("*")
        .eq("status", "approved")
        .order("id", { ascending: false });

      if (!error && data) {
        setReviews([...data, ...reviewsData]);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    document.body.style.overflowY = close ? "hidden" : "auto";
  }, [close]);

  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.ratingBox}>
            <h5>9.9</h5>
            <div>
              <span className={style.rating}>★★★★★</span>
              <p className={style.ratingCount}>{reviews.length} відгуків</p>
            </div>
          </div>
          {close && (
            <ReviewModal
              close={close}
              onclose={onclose}
              setReviews={setReviews}
              reviews={reviews}
            />
          )}
          {close && (
            <div className={style.overlay} onClick={() => onclose(false)}></div>
          )}

          {reviews?.slice(0, visibleCount).map((ell, index) => (
            <FadeUp
              key={ell.id}
              className={style.card}
              delay={(index % 3) * 0.1}
            >
              <img src={icons} alt="icons" />
              <p>{ell.text}</p>
              <h5>{ell.name}</h5>
              <span>{ell.city}</span>
            </FadeUp>
          ))}

          {visibleCount < reviews.length && (
            <p
              className={style.visible}
              onClick={() => setVisibleCount(visibleCount + 3)}
            >
              показати ще
            </p>
          )}

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
