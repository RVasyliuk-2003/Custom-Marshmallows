import path from "path";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({
      success: false,
      error: "Missing Telegram environment variables",
    });
  }

  const { text } = req.body;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      },
    );

    const data = await telegramRes.json();

    if (!telegramRes.ok) {
      console.error("❌ Telegram API Error:", data);
      return res.status(500).json({ success: false, error: data.description });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Catch Error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}
