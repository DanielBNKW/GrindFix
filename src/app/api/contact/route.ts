import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            console.error("Missing Telegram configuration");
            return NextResponse.json({ success: false, error: "Błąd konfiguracji serwera" }, { status: 500 });
        }

        const text = `
🔔 *Nowe zapytanie z GrindFix*

👤 *Imię:* ${data.name || "Brak"}
📞 *Telefon:* ${data.phone || "Brak"}
✉️ *E-mail:* ${data.email || "Brak"}
🔧 *Usługa:* ${data.service || "Brak"}

📝 *Wiadomość:*
${data.message || "Brak wiadomości"}
`;

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "Markdown",
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram API Error:", errorData);
            throw new Error("Błąd podczas wysyłania do Telegrama");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error in /api/contact:", error);
        return NextResponse.json({ success: false, error: "Błąd podczas wysyłania" }, { status: 500 });
    }
}
