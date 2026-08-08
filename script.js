const WHATSAPP_PHONE = "77755046561";

// Аккордеон FAQ
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        content.classList.toggle('hidden');
    });
});

// Перенаправление формы прямо в WhatsApp
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const issue = document.getElementById('issue').value.trim();

    // Формирование текста сообщения
    let message = `Здравствуйте! Меня зовут ${name}.\n`;
    message += `📞 Мой телефон: ${phone}\n`;
    if (issue) {
        message += `🛠 Проблема / Авто: ${issue}`;
    } else {
        message += `🛠 Нужен срочный выезд автоэлектрика.`;
    }

    // Кодируем текст для URL
    const encodedMessage = encodeURIComponent(message);
    
    // Переход в WhatsApp
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
});