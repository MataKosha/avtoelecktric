const WHATSAPP_PHONE = "77772805721";

// --- 1. Аккордеон FAQ ---
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        button.classList.toggle('active');
        content.classList.toggle('hidden');
        
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });
});

// --- 2. Перенаправление формы заявки в WhatsApp ---
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const issue = document.getElementById('issue').value.trim();

        let message = `Здравствуйте! Меня зовут ${name}.\n`;
        message += `📞 Мой телефон: ${phone}\n`;
        if (issue) {
            message += `🛠 Проблема / Авто: ${issue}`;
        } else {
            message += `🛠 Нужен срочный выезд автоэлектрика.`;
        }

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
    });
}

// --- 3. Динамический блок отзывов с сохранением в localStorage ---
const reviewModal = document.getElementById('reviewModal');
const openReviewBtn = document.getElementById('openReviewModal');
const closeReviewBtn = document.getElementById('closeReviewModal');
const addReviewForm = document.getElementById('addReviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');

// Защита от XSS (экранирование спецсимволов)
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Создание элемента отзыва в DOM
function createReviewElement(review) {
    const isFemale = review.gender === 'female';
    const avatarBg = isFemale 
        ? 'bg-pink-500/10 border-pink-500/30 text-pink-400' 
        : 'bg-amber-500/10 border-amber-500/30 text-amber-400';
    const avatarIcon = isFemale ? 'fa-user-nurse' : 'fa-user';

    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        if (i < review.rating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }

    const card = document.createElement('div');
    card.className = 'glass-card p-6 rounded-2xl flex flex-col justify-between animate-fade-in';
    card.innerHTML = `
        <div>
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 border rounded-full flex items-center justify-center font-bold ${avatarBg}">
                        <i class="fa-solid ${avatarIcon} text-lg"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-white text-base">${escapeHtml(review.name)}</h4>
                        <span class="text-xs text-slate-400">${escapeHtml(review.car)}</span>
                    </div>
                </div>
                <div class="flex text-amber-400 text-xs gap-1">
                    ${starsHtml}
                </div>
            </div>
            <p class="text-slate-300 text-sm leading-relaxed">${escapeHtml(review.text)}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">${review.date || 'Только что'}</div>
    `;
    return card;
}

// Загрузка ранее созданных отзывов из LocalStorage при старте
function loadSavedReviews() {
    const saved = localStorage.getItem('autoelectric_custom_reviews');
    if (saved && reviewsContainer) {
        try {
            const reviews = JSON.parse(saved);
            reviews.forEach(review => {
                const elem = createReviewElement(review);
                reviewsContainer.prepend(elem);
            });
        } catch (e) {
            console.error('Ошибка загрузки отзывов из localStorage', e);
        }
    }
}

// Сохранение отзыва в LocalStorage
function saveReviewToLocal(review) {
    const saved = localStorage.getItem('autoelectric_custom_reviews');
    let reviews = saved ? JSON.parse(saved) : [];
    reviews.push(review);
    localStorage.setItem('autoelectric_custom_reviews', JSON.stringify(reviews));
}

// Открытие модального окна
if (openReviewBtn && reviewModal) {
    openReviewBtn.addEventListener('click', () => {
        reviewModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
}

// Функция закрытия модального окна
function closeModal() {
    if (reviewModal) {
        reviewModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', closeModal);
}

if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            closeModal();
        }
    });
}

// Обработка формы и публикация нового отзыва
if (addReviewForm) {
    addReviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('reviewName').value.trim();
        const gender = document.getElementById('reviewGender').value;
        const car = document.getElementById('reviewCar').value.trim();
        const rating = parseInt(document.getElementById('reviewRating').value);
        const text = document.getElementById('reviewText').value.trim();

        if (!name || !car || !text) return;

        const newReview = {
            name: name,
            gender: gender,
            car: car,
            rating: rating,
            text: text,
            date: 'Только что'
        };

        // Вставляем отзыв в верхнюю часть списка
        const reviewCard = createReviewElement(newReview);
        reviewsContainer.prepend(reviewCard);

        // Сохраняем в память браузера
        saveReviewToLocal(newReview);

        // Сбрасываем форму и закрываем окно
        addReviewForm.reset();
        closeModal();
    });
}

// Загрузка отзывов при открытии страницы
document.addEventListener('DOMContentLoaded', () => {
    loadSavedReviews();
});
