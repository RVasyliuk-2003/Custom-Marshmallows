import style from "./contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.contactBox}>
            <div className={style.icon}>📸</div>
            <div className={style.contactLink}>
              <b>Instagram</b>
              <span>@zefirka.ua</span>
            </div>
          </div>
          <div className={style.contactBox}>
            <div className={style.icon}>💬</div>
            <div className={style.contactLink}>
              <b>Telegram</b>
              <span>@zefirka_bot</span>
            </div>
          </div>
          <div className={style.contactBox}>
            <div className={style.icon}>📞</div>
            <div className={style.contactLink}>
              <b>Телефон</b>
              <span>+380 00 000 00 00</span>
            </div>
          </div>
          <div className={style.contactBox}>
            <div className={style.icon}>🕘</div>
            <div className={style.contactLink}>
              <b>Графік</b>
              <span>щодня 9:00–20:00</span>
            </div>
          </div>
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
              className={style.inpt}
              type="name"
              placeholder="Як до вас звертатись"
            />
          </div>

          <div className={style.mesageBox}>
            <label htmlFor="userPhone">ТЕЛЕФОН АБО TELEGRAM</label>
            <input
              id="userPhone"
              className={style.inpt}
              type="text"
              placeholder="+380... або @нікнейм"
            />
          </div>

          <div className={style.mesageBox}>
            <label htmlFor="userName">ПОВІДОМЛЕННЯ</label>
            <textarea
              className={style.inpt}
              name=""
              id=""
              placeholder="Кольори, привід, бюджет"
            ></textarea>
          </div>

          <button style={{ marginTop: "16px" }} className="btn btn-primary">
            Надіслати
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
