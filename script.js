const WHATSAPP_PHONE = "77051915003";

// --- 1. Полный словарь переводов (RU / KK / EN) ---
const translations = {
    ru: {
        // Шапка / Навигация
        navServices: "Услуги",
        navAdvantages: "Преимущества",
        navFaq: "Часто задаваемые вопросы",
        navReviews: "Отзывы",
        navContact: "Контакты",
        callEmergency: "Срочный выезд 24/7",

        // Главный блок (Hero)
        heroBadge: "⚡ Выезд от 20 минут по Астане",
        heroTitle: "Срочный выезд автоэлектрика в Астане",
        heroSubtitle: "Компьютерная диагностика, запуск двигателя, отключение сигнализаций и ремонт автоэлектрики на месте.",
        btnCallMaster: "Вызвать мастера",
        btnWhatsApp: "Написать в WhatsApp",
        heroStat1: "15+ лет опыта",
        heroStat2: "24/7 Без выходных",
        heroStat3: "100% Гарантия",

        // Секция Услуг
        servicesTitle: "Наши услуги",
        servicesSubtitle: "Решаем любые проблемы с электрикой автомобилей всех марок",
        service1Title: "Запуск двигателя / Прикурить",
        service1Desc: "Прикурить 12/24V, замена аккумулятора, запуск заглохшего авто.",
        service2Title: "Компьютерная диагностика",
        service2Desc: "Сброс ошибок (Check Engine), чтение всех блоков сканерами Launch и Autel.",
        service3Title: "Отключение сигнализаций",
        service3Desc: "Аварийное отключение StarLine, Pandora, иммобилайзеров и метки.",
        service4Title: "Генераторы и стартеры",
        service4Desc: "Диагностика и ремонт на месте, замена бендикса, реле, щеток.",
        service5Title: "Короткое замыкание",
        service5Desc: "Поиск утечки тока, ремонт проводки после замыкания или воды.",
        service6Title: "Установка оборудования",
        service6Desc: "Установка автосигнализаций, парктроников, видеорегистраторов и LED.",

        // Преимущества
        advTitle: "Почему выбирают нас",
        adv1Title: "Быстрый приезд",
        adv1Desc: "Приедем в любой район Астаны за 20–40 минут.",
        adv2Title: "Проф. оборудование",
        adv2Desc: "Используем мультисканеры дилерского уровня.",
        adv3Title: "Честные цены",
        adv3Desc: "Стоимость озвучивается до начала проведения работ.",

        // Форма заявки
        formTitle: "Нужен автоэлектрик прямо сейчас?",
        formSubtitle: "Заполните форму и мастер свяжется с вами в течение 2 минут",
        nameLabel: "Ваше имя",
        namePlaceholder: "Например, Арман",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+7 (705) 000-00-00",
        issueLabel: "Проблема / Марка авто",
        issuePlaceholder: "Например, Toyota Camry, не заводится",
        btnSubmitForm: "Отправить в WhatsApp",

        // Вопросы и ответы (FAQ)
        faqTitle: "Часто задаваемые вопросы",
        faq1Q: "Как быстро приезжает автоэлектрик?",
        faq1A: "В среднем мастер приезжает за 20–40 минут в зависимости от пробок и района Астаны.",
        faq2Q: "Сколько стоит выезд и диагностика?",
        faq2A: "Выезд и первичная компьютерная диагностика стоит от 5 000 ₸. Точную цену мастер озвучит по телефону.",
        faq3Q: "Выезжаете ли вы за город / на трассу?",
        faq3A: "Да, выезжаем в пригород Астаны (Косшы, Жибек Жолы, Ильинка и др.). Стоимость оговаривается отдельно.",
        faq4Q: "Какая гарантия на выполненные работы?",
        faq4A: "Мы даем гарантию на выполненный ремонт от 1 до 6 месяцев в зависимости от вида работ.",

        // Отзывы и Модальное окно
        reviewsTitle: "Отзывы клиентов",
        btnOpenReviewModal: "Оставить отзыв",
        modalTitle: "Написать отзыв",
        reviewNameLabel: "Ваше имя",
        reviewNamePlaceholder: "Арман",
        reviewGenderLabel: "Пол",
        genderMale: "Мужской",
        genderFemale: "Женский",
        reviewCarLabel: "Автомобиль",
        reviewCarPlaceholder: "Lexus GS300",
        reviewRatingLabel: "Оценка",
        reviewTextLabel: "Ваш отзыв",
        reviewTextPlaceholder: "Опишите впечатления о работе...",
        btnSubmitReview: "Опубликовать отзыв",

        // WhatsApp Сообщения
        waGreeting: "Здравствуйте! Меня зовут",
        waPhone: "Мой телефон",
        waIssueLabel: "Проблема / Авто",
        waDefaultIssue: "Нужен срочный выезд автоэлектрика.",

        // Футер & Статусы
        today: "Сегодня",
        justNow: "Только что",
        footerRights: "Все права защищены.",
        footerLocation: "г. Астана, выезд по всему городу и пригороду"
    },

    kk: {
        // Шапка / Навигация
        navServices: "Қызметтер",
        navAdvantages: "Артықшылықтар",
        navFaq: "Сұрақ-жауап",
        navReviews: "Пікірлер",
        navContact: "Байланыс",
        callEmergency: "Шұғыл шығу 24/7",

        // Главный блок (Hero)
        heroBadge: "⚡ Астана бойынша 20 минуттан бастап шығу",
        heroTitle: "Астанадағы автоэлектриктің шұғыл шығуы",
        heroSubtitle: "Компьютерлік диагностика, қозғалтқышты іске қосу, сигнализацияны өшіру және орнында жөндеу.",
        btnCallMaster: "Шеберді шақыру",
        btnWhatsApp: "WhatsApp-қа жазу",
        heroStat1: "15+ жыл тәжірибе",
        heroStat2: "24/7 Демалыссыз",
        heroStat3: "100% Кепілдік",

        // Секция Услуг
        servicesTitle: "Біздің қызметтер",
        servicesSubtitle: "Барлық маркалы көліктердің электр жүйесіндегі кез келген мәселені шешеміз",
        service1Title: "Қозғалтқышты іске қосу / От алу",
        service1Desc: "12/24V от алу, аккумуляторды ауыстыру, өшіп қалған көлікті оталдыру.",
        service2Title: "Компьютерлік диагностика",
        service2Desc: "Қателіктерді жою (Check Engine), Launch және Autel сканерлерімен тексеру.",
        service3Title: "Сигнализацияны өшіру",
        service3Desc: "StarLine, Pandora, иммобилайзерлерді және құпия түймелерді апаттық өшіру.",
        service4Title: "Генераторлар мен стартерлер",
        service4Desc: "Орнында диагностика жасау және жөндеу, бендикс, реле, щеткаларды ауыстыру.",
        service5Title: "Қысқа тұйықталуды табу",
        service5Desc: "Ток ағуын табу, тұйықталудан немесе судан кейін сымдарды қалпына келтіру.",
        service6Title: "Жабдықтарды орнату",
        service6Desc: "Сигнализация, парктрониктер, бейнетіркегіштер және LED шамдарды орнату.",

        // Преимущества
        advTitle: "Неліктен бізді таңдайды",
        adv1Title: "Жылдам келу",
        adv1Desc: "Астананың кез келген ауданына 20–40 минутта жетеміз.",
        adv2Title: "Кәсіби жабдық",
        adv2Desc: "Дилерлік деңгейдегі мультисканерлерді қолданамыз.",
        adv3Title: "Әділ бағалар",
        adv3Desc: "Жұмыс басталмай тұрып нақты құны айтылады.",

        // Форма заявки
        formTitle: "Автоэлектрик дәл қазір керек пе?",
        formSubtitle: "Нысанды толтырыңыз, шебер 2 минут ішінде хабарласады",
        nameLabel: "Сіздің атыңыз",
        namePlaceholder: "Мысалы, Арман",
        phoneLabel: "Телефон нөмірі",
        phonePlaceholder: "+7 (705) 000-00-00",
        issueLabel: "Мәселе / Көлік маркасы",
        issuePlaceholder: "Мысалы, Toyota Camry, от алмай тұр",
        btnSubmitForm: "WhatsApp арқылы жіберу",

        // Вопросы и ответы (FAQ)
        faqTitle: "Жиі қойылатын сұрақтар",
        faq1Q: "Автоэлектрик қаншалықты тез келеді?",
        faq1A: "Орташа есеппен кептелістер мен Астана ауданына байланысты шебер 20–40 минутта келеді.",
        faq2Q: "Шығу және диагностика қанша тұрады?",
        faq2A: "Шығу және алғашқы компьютерлік диагностика 5 000 ₸ басталады. Нақты бағаны шебер айтады.",
        faq3Q: "Қала сыртына немесе трассаға шығасыздар ма?",
        faq3A: "Иә, Астана маңына шығамыз (Қосшы, Жібек Жолы, Ильинка т.б.). Бағасы бөлек келісіледі.",
        faq4Q: "Орындалған жұмыстарға қандай кепілдік бар?",
        faq4A: "Жұмыс түріне байланысты 1 айдан 6 айға дейін кепілдік береміз.",

        // Отзывы и Модальное окно
        reviewsTitle: "Клиенттердің пікірлері",
        btnOpenReviewModal: "Пікір қалдыру",
        modalTitle: "Пікір жазу",
        reviewNameLabel: "Сіздің атыңыз",
        reviewNamePlaceholder: "Арман",
        reviewGenderLabel: "Жынысы",
        genderMale: "Ер",
        genderFemale: "Әйел",
        reviewCarLabel: "Көлік",
        reviewCarPlaceholder: "Lexus GS300",
        reviewRatingLabel: "Бағалау",
        reviewTextLabel: "Сіздің пікіріңіз",
        reviewTextPlaceholder: "Жұмыс туралы әсеріңізбен бөлісіңіз...",
        btnSubmitReview: "Пікірді жариялау",

        // WhatsApp Сообщения
        waGreeting: "Сәлеметсіз бе! Менің атым",
        waPhone: "Менің телефон нөмірім",
        waIssueLabel: "Мәселе / Көлік",
        waDefaultIssue: "Автоэлектриктің шұғыл шығуы қажет.",

        // Футер & Статусы
        today: "Бүгін",
        justNow: "Жаңа ғана",
        footerRights: "Барлық құқықтар қорғалған.",
        footerLocation: "Астана қ., бүкіл қала мен қала маңына шығу"
    },

    en: {
        // Шапка / Навигация
        navServices: "Services",
        navAdvantages: "Advantages",
        navFaq: "FAQ",
        navReviews: "Reviews",
        navContact: "Contacts",
        callEmergency: "24/7 Mobile Service",

        // Главный блок (Hero)
        heroBadge: "⚡ 20–40 min arrival in Astana",
        heroTitle: "Mobile Auto Electrician in Astana",
        heroSubtitle: "Computer diagnostics, engine jump-start, alarm override, and roadside electrical repair.",
        btnCallMaster: "Call Electrician",
        btnWhatsApp: "Chat on WhatsApp",
        heroStat1: "15+ Years Exp",
        heroStat2: "24/7 Available",
        heroStat3: "100% Guarantee",

        // Секция Услуг
        servicesTitle: "Our Services",
        servicesSubtitle: "We resolve any automotive electrical issues for all vehicle makes and models",
        service1Title: "Engine Jump Start / Battery",
        service1Desc: "12/24V boost start, battery replacement, stalled vehicle troubleshooting.",
        service2Title: "Computer Diagnostics",
        service2Desc: "Check Engine error reset, full scanner diagnostics with Launch & Autel.",
        service3Title: "Alarm & Immobilizer Bypass",
        service3Desc: "Emergency bypass for StarLine, Pandora, immobilizers, and hidden cutoffs.",
        service4Title: "Alternator & Starter Repair",
        service4Desc: "On-site diagnostics & repair, bendix, relay, brush replacements.",
        service5Title: "Short Circuit Search",
        service5Desc: "Current leak detection, wiring harness repair after shorts or water damage.",
        service6Title: "Equipment Installation",
        service6Desc: "Installation of alarms, parking sensors, dashcams, and LED lights.",

        // Преимущества
        advTitle: "Why Choose Us",
        adv1Title: "Fast Arrival",
        adv1Desc: "We reach any district of Astana within 20–40 minutes.",
        adv2Title: "Pro Equipment",
        adv2Desc: "We use dealer-grade diagnostic scanners and tools.",
        adv3Title: "Upfront Pricing",
        adv3Desc: "Cost is agreed upon before starting any work.",

        // Форма заявки
        formTitle: "Need an Auto Electrician Right Now?",
        formSubtitle: "Fill out the form and a technician will contact you within 2 minutes",
        nameLabel: "Your Name",
        namePlaceholder: "e.g., Alex",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+7 (705) 000-00-00",
        issueLabel: "Issue / Car Model",
        issuePlaceholder: "e.g., Toyota Camry, won't start",
        btnSubmitForm: "Send via WhatsApp",

        // Вопросы и ответы (FAQ)
        faqTitle: "Frequently Asked Questions",
        faq1Q: "How fast does the auto electrician arrive?",
        faq1A: "On average, arrival takes 20–40 minutes depending on traffic and your district in Astana.",
        faq2Q: "How much does call-out & diagnostics cost?",
        faq2A: "Call-out and basic computer diagnostics start from 5,000 KZT. Exact pricing is confirmed over the phone.",
        faq3Q: "Do you service suburban areas or highways?",
        faq3A: "Yes, we cover Astana suburbs (Kosshy, Zhibek Zholy, Ilyinka, etc.). Rates are discussed individually.",
        faq4Q: "What warranty do you provide?",
        faq4A: "We provide a 1 to 6-month warranty depending on the type of work performed.",

        // Отзывы и Модальное окно
        reviewsTitle: "Client Reviews",
        btnOpenReviewModal: "Leave a Review",
        modalTitle: "Write a Review",
        reviewNameLabel: "Your Name",
        reviewNamePlaceholder: "John",
        reviewGenderLabel: "Gender",
        genderMale: "Male",
        genderFemale: "Female",
        reviewCarLabel: "Car Model",
        reviewCarPlaceholder: "Lexus GS300",
        reviewRatingLabel: "Rating",
        reviewTextLabel: "Your Review",
        reviewTextPlaceholder: "Share your experience...",
        btnSubmitReview: "Publish Review",

        // WhatsApp Сообщения
        waGreeting: "Hello! My name is",
        waPhone: "My phone number",
        waIssueLabel: "Issue / Vehicle",
        waDefaultIssue: "Urgent auto electrician call-out required.",

        // Футер & Статусы
        today: "Today",
        justNow: "Just now",
        footerRights: "All rights reserved.",
        footerLocation: "Astana city, on-site service across the city and suburbs"
    }
};

// Текущий язык (сохраняем в localStorage, по умолчанию 'ru')
let currentLang = localStorage.getItem('site_lang') || 'ru';

// Функция переключения языка
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;

    // 1. Тексты элементов с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });

    // 2. Placeholder элементов с атрибутом data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            elem.placeholder = translations[lang][key];
        }
    });

    // 3. Переключение подсветки активной кнопки языка
    document.querySelectorAll('[data-lang]').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('bg-amber-500', isActive);
        btn.classList.toggle('text-slate-950', isActive);
        btn.classList.toggle('text-white', !isActive);
    });
}

// Перехват кликов по кнопкам языков (RU / KK / EN)
document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

// --- 2. Аккордеон FAQ ---
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        if (!content) return;

        button.classList.toggle('active');
        content.classList.toggle('hidden');
        
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });
});

// --- 3. Форма заявки с отправкой в WhatsApp ---
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const issue = document.getElementById('issue')?.value.trim() || '';
        const t = translations[currentLang] || translations.ru;

        let message = `${t.waGreeting} ${name}.\n`;
        message += `📞 ${t.waPhone}: ${phone}\n`;
        message += issue 
            ? `🛠 ${t.waIssueLabel}: ${issue}` 
            : `🛠 ${t.waDefaultIssue}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
    });
}

// --- 4. Отзывы ---
const reviewModal = document.getElementById('reviewModal');
const openReviewBtn = document.getElementById('openReviewModal');
const closeReviewBtn = document.getElementById('closeReviewModal');
const addReviewForm = document.getElementById('addReviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function createReviewElement(review) {
    const isFemale = review.gender === 'female';
    const avatarBg = isFemale 
        ? 'bg-pink-500/10 border-pink-500/30 text-pink-400' 
        : 'bg-amber-500/10 border-amber-500/30 text-amber-400';
    const avatarIcon = isFemale ? 'fa-user-nurse' : 'fa-user';

    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        starsHtml += i < review.rating 
            ? '<i class="fa-solid fa-star"></i>' 
            : '<i class="fa-regular fa-star"></i>';
    }

    const t = translations[currentLang] || translations.ru;
    const reviewDate = review.date || t.today;

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
        <div class="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">${escapeHtml(reviewDate)}</div>
    `;
    return card;
}

function loadSavedReviews() {
    if (!reviewsContainer) return;
    const saved = localStorage.getItem('autoelectric_custom_reviews');
    if (!saved) return;

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

function saveReviewToLocal(review) {
    try {
        const saved = localStorage.getItem('autoelectric_custom_reviews');
        let reviews = saved ? JSON.parse(saved) : [];
        reviews.push(review);
        localStorage.setItem('autoelectric_custom_reviews', JSON.stringify(reviews));
    } catch (e) {
        console.error('Ошибка сохранения отзыва в localStorage', e);
    }
}

function closeModal() {
    if (reviewModal) {
        reviewModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

if (openReviewBtn && reviewModal) {
    openReviewBtn.addEventListener('click', () => {
        reviewModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
}

if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', closeModal);
}

if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reviewModal && !reviewModal.classList.contains('hidden')) {
        closeModal();
    }
});

if (addReviewForm) {
    addReviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('reviewName')?.value.trim();
        const gender = document.getElementById('reviewGender')?.value;
        const car = document.getElementById('reviewCar')?.value.trim();
        const rating = parseInt(document.getElementById('reviewRating')?.value || '5', 10);
        const text = document.getElementById('reviewText')?.value.trim();

        if (!name || !car || !text || !reviewsContainer) return;

        let locale = 'ru-RU';
        if (currentLang === 'kk') locale = 'kk-KZ';
        if (currentLang === 'en') locale = 'en-US';

        const formattedDate = new Date().toLocaleDateString(locale, { day: 'numeric', month: 'long' });

        const newReview = {
            name,
            gender,
            car,
            rating,
            text,
            date: formattedDate
        };

        const reviewCard = createReviewElement(newReview);
        reviewsContainer.prepend(reviewCard);

        saveReviewToLocal(newReview);

        addReviewForm.reset();
        closeModal();
    });
}

// --- 5. Старт при загрузке DOM ---
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    loadSavedReviews();
});
