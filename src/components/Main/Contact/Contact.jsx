import style from "./contact.module.css";
import { FadeUp } from "../../FadeUp";
import { useState } from "react";

const Contact = () => {
  const [error, setError] = useState(null);
  const [inptName, setInptName] = useState("");
  const [phoneOrNik, setPhoneOrNik] = useState("");
  const [comment, setComment] = useState("");

  const isNameValid = /^[а-яА-ЯіІїЇєЄa-zA-Z\s]{2,}$/;

  const isContactValid = /^(\+?\d{9,13}|@[\w]{3,})$/;

  const resultContactForm = async () => {
    if (!inptName || !phoneOrNik || !comment) {
      setError("ЗАПОМНІТЬ УСІ ПОЛЯ");
      return;
    }
    if (!isNameValid.test(inptName)) {
      setError("НЕПРАВИЛЬНО ВВЕДЕННО ІМ'Я");
      return;
    }
    if (!isContactValid.test(phoneOrNik)) {
      setError("НЕПРАВИЛЬНО ВВЕДЕННИЙ НОМЕР ТЕЛЕФОНУ АБО НІКНЕЙМ");
      return;
    } else {
      const text = `
<b>🛍️ З вами хоче зв'язатися: ${inptName}</b>
<b>Повідомлення: ${comment}</b>
- <b>Контакт:</b> ${phoneOrNik}
`;
      try {
        const response = await fetch("/api/send-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error("Помилка відправки");
        }
        setError("ФОРМУ ВІДПРАВЛЕННО");
        setInptName("");
        setPhoneOrNik("");
        setComment("");
      } catch (err) {
        setError("НЕ ВДАЛОСЯ ВІДПРАВИТИ, СПРОБУЙТЕ ЩЕ РАЗ");
      }
    }
  };

  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <FadeUp
            as="a"
            href="https://instagram.com/olenavasyliuk69/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.contactBox}
            duration={0.5}
            delay={0.1}
            yOffset={20}
          >
            <div className={style.icon}>📸</div>
            <div className={style.contactLink}>
              <b>Instagram</b>
              <span>@zefirka.ua</span>
            </div>
          </FadeUp>
          <FadeUp
            as="a"
            href="https://t.me/ZefirkaOlena"
            target="_blank"
            rel="noopener noreferrer"
            className={style.contactBox}
            duration={0.5}
            delay={0.2}
            yOffset={20}
          >
            <div className={style.icon}>💬</div>
            <div className={style.contactLink}>
              <b>Telegram</b>
              <span>@ZefirkaOlena</span>
            </div>
          </FadeUp>
          <FadeUp
            as="a"
            className={style.contactBox}
            href="tel:+380 63 775 13 84"
            duration={0.5}
            delay={0.3}
            yOffset={20}
          >
            <div className={style.icon}>📞</div>
            <div className={style.contactLink}>
              <b>Телефон</b>
              <span>+380 63 775 13 84</span>
            </div>
          </FadeUp>
          <FadeUp
            className={style.contactBox}
            duration={0.5}
            delay={0.4}
            yOffset={20}
          >
            <div className={style.icon}>🕘</div>
            <div className={style.contactLink}>
              <b>Графік</b>
              <span>щодня 9:00–20:00</span>
            </div>
          </FadeUp>
          <div className={style.mapBlock}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16961.448509463036!2d28.81780026877435!3d49.71453448640261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472ce0090a270309%3A0x3de5384b6bbd3b28!2sHrosh!5e0!3m2!1sru!2spl!4v1787399224292!5m2!1sru!2spl"
              style={{
                border: 0,
                borderRadius: "16px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              width="100%"
              height="100%"
            ></iframe>
          </div>

          <span
            className="eyebrow"
            style={{ marginTop: "20px", display: "inline-block" }}
          >
            НАПИСАТИ НАМ
          </span>

          <div className={style.mesageBox}>
            <label htmlFor="userName">ІМ'Я</label>
            <input
              onChange={(e) => setInptName(e.target.value)}
              value={inptName}
              className={style.inpt}
              type="name"
              placeholder="Як до вас звертатись"
            />
          </div>

          <div className={style.mesageBox}>
            <label htmlFor="userPhone">ТЕЛЕФОН АБО TELEGRAM</label>
            <input
              onChange={(e) => setPhoneOrNik(e.target.value)}
              value={phoneOrNik}
              id="userPhone"
              className={style.inpt}
              type="text"
              placeholder="+380... або @нікнейм"
            />
          </div>

          <div className={style.mesageBox}>
            <label htmlFor="userName">ПОВІДОМЛЕННЯ</label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              className={style.inpt}
              name=""
              id=""
              placeholder="Кольори, привід, бюджет"
            ></textarea>
          </div>

          {error !== null ? (
            <p
              className={style.errorInfo}
              style={{
                color:
                  error === "ФОРМУ ВІДПРАВЛЕННО"
                    ? "var(--pistachio)"
                    : "var(--raspberry-deep)",
              }}
            >
              {error}
            </p>
          ) : null}

          <FadeUp
            as="button"
            onClick={() => resultContactForm()}
            style={{ marginTop: "16px" }}
            className="btn btn-primary"
            duration={0.7}
            delay={0.3}
            yOffset={10}
          >
            Надіслати
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Contact;
