import React from "react";
import { Link } from "react-router-dom";
import styles from "./privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Link to="/" className={styles.backLink}>
          ← На головну
        </Link>

        <h1 className={styles.title}>Політика конфіденційності</h1>
        <p className={styles.updated}>
          Дата останнього оновлення: 27 вересня 2026 р.
        </p>

        <section className={styles.section}>
          <p>
            Ми поважаємо ваше право на приватність і прагнемо захищати ваші
            персональні дані. Ця Політика конфіденційності пояснює, як ми
            збираємо, використовуємо та захищаємо інформацію, яку ви надаєте під
            час користування нашим сайтом.
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. Нерозголошення персональних даних</h2>
          <p>
            <strong>
              Ми гарантуємо, що ваші персональні дані НЕ будуть передані,
              продані, передані в оренду або розповсюджені третім особам
            </strong>
            без вашої прямої згоди, за винятком випадків, передбачених чинним
            законодавством.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Яку інформацію ми збираємо</h2>
          <p>
            Залежно від того, як ви використовуєте сайт, ми можемо збирати
            наступні дані:
          </p>
          <ul>
            <li>
              <strong>Контактні дані:</strong> ім'я, номер телефону, електронна
              адреса (якщо ви залишаєте їх у формах зворотного зв'язку чи
              замовлення).
            </li>
            <li>
              <strong>Технічні дані:</strong> IP-адреса, тип браузера, файли
              cookie (Cookies) для забезпечення коректної роботи сайту та
              аналітики.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Для чого ми використовуємо ваші дані</h2>
          <p>Ми використовуємо зібрану інформацію виключно для:</p>
          <ul>
            <li>
              Зв'язку з вами (відповіді на запити, підтвердження замовлень чи
              записів);
            </li>
            <li>Покращення роботи сайту та забезпечення його безпеки.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Захист даних</h2>
          <p>
            Ми вживаємо необхідних технічних та організаційних заходів безпеки
            для захисту ваших даних від несанкціонованого доступу, зміни,
            розголошення чи знищення.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Ваші права</h2>
          <p>Ви маєте право в будь-який момент:</p>
          <ul>
            <li>Запитати інформацію про те, які ваші дані ми зберігаємо;</li>
            <li>Оновити або виправити свої дані;</li>
            <li>
              Попросити повністю видалити ваші персональні дані з нашої бази.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Контакти для зв'язку</h2>
          <p>
            Якщо у вас виникли запитання щодо цієї Політики конфіденційності або
            ви бажаєте видалити свої дані, зв'яжіться з нами:
          </p>
          <ul className={styles.contactsList}>
            <li>
              <strong>Email:</strong>
              <a href="mailto: vasylukroma@gmail.com">vasylukroma@gmail.com</a>
            </li>
            <li>
              <strong>Telegram / Телефон:</strong>
              <a href="tel: +380677823751">+38 (067) 782 37 51</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
