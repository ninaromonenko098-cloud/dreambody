// ===== Таймер обратного отсчёта до конца акции =====
var deadline = new Date(2026, 10, 30, 23, 59, 59); // 30 декабря 2026 (месяцы с 0)

function two(n) {
    return n < 10 ? "0" + n : String(n);
}

function updateTimer() {
    var diff = deadline - new Date();
    if (diff < 0) { diff = 0; }

    var total = Math.floor(diff / 1000);
    document.getElementById("t-days").textContent  = two(Math.floor(total / 86400));
    document.getElementById("t-hours").textContent = two(Math.floor(total % 86400 / 3600));
    document.getElementById("t-min").textContent   = two(Math.floor(total % 3600 / 60));
    document.getElementById("t-sec").textContent   = two(total % 60);
}

updateTimer();
setInterval(updateTimer, 1000);

// ===== Форма записи =====
document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault(); // сервера нет — просто показываем сообщение
    var name = document.getElementById("name").value;
    document.getElementById("form-message").textContent =
        "Спасибо, " + name + "! Мы свяжемся с вами для подтверждения записи.";
    this.reset();
});
