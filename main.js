

const BOT_TOKEN = "7542656098:AAEm6dhsgHZQigUqCtbzkYS9X7tx5xzjVYU"; // Bot tokeningizni kiriting
const CHAT_ID = "7542656098"; // Foydalanuvchi yoki guruh ID'si


document.getElementById("sendButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const website = document.getElementById("websiteInput").value;
    const text = document.getElementById("textInput").value;

    if (!name || email || text) {
        alert("❌ Iltimos, Ism, Email va Xabar maydonlarini to'ldiring!");
        return;
    }

    const message = `📌 Yangi Xabar!\n\n👤 Ism: ${name}\n📧 Email: ${email}\n🌍 Website: ${website || "Yo‘q"}\n💬 Xabar: ${text}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("✅ Xabar yuborildi!");
                document.getElementById("nameInput").value = "";
                document.getElementById("emailInput").value = "";
                document.getElementById("websiteInput").value = "";
                document.getElementById("textInput").value = "";
            } else {
                alert("❌ Xatolik: " + data.description);
            }
        })
        .catch(error => console.error("Xatolik:", error));
});
