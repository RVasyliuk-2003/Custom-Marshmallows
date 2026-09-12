import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { callback_query } = req.body;

  if (!callback_query) {
    return res.status(200).json({ message: "No callback query" });
  }

  const chatId = callback_query.message.chat.id;
  const messageId = callback_query.message.message_id;
  const actionData = callback_query.data; // approve_12 or reject_12

  const [action, reviewId] = actionData.split("_");

  let statusText = "";

  try {
    if (action === "approve") {
      const { error } = await supabase
        .from("Reviews")
        .update({ status: "approved" })
        .eq("id", reviewId);

      if (error) throw error;
      statusText = "🟢 <b>Відгук опубліковано!</b>";
    } else if (action === "reject") {
      const { error } = await supabase
        .from("Reviews")
        .update({ status: "rejected" })
        .eq("id", reviewId);

      if (error) throw error;
      statusText = "🔴 <b>Відгук відхилено!</b>";
    }

    await fetch(
      `https://api.telegram.org/bot${process.env.VITE_TELEGRAM_BOT_TOKEN}/editMessageText`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          message_id: messageId,
          text: `${callback_query.message.text}\n\nСтатус: ${statusText}`,
          parse_mode: "HTML",
        }),
      },
    );

    await fetch(
      `https://api.telegram.org/bot${process.env.VITE_TELEGRAM_BOT_TOKEN}/answerCallbackQuery`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callback_query_id: callback_query.id }),
      },
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).json({ error: err.message });
  }
}
