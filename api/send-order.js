// /api/send-order.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    title,
    count,
    packaging,
    flavor,
    total,
    delivery,
    date,
    name,
    contact,
  } = req.body;

  const text = `
🛍️ **НОВЕ ЗАМОВЛЕННЯ: ${title}**

📌 **Деталі:**
• **Кількість:** ${count} шт.
• **Пакування:** ${packaging}
• **Смак:** ${flavor}
• **Сума:** ${total} грн

🚚 **Отримання та дата:**
• **Спосіб:** ${delivery}
• **Дата:** ${date}

👤 **Клієнт:**
• **Ім'я:** ${name}
• **Контакт:** ${contact}
  `;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!telegramRes.ok) throw new Error("Telegram API Error");

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
