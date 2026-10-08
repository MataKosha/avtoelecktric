const WHATSAPP_PHONE = "77051915003";

// Объект переводов (RU, KZ, EN)
const translations = {
    ru: {
        doc_title: "Выездной Автоэлектрик Астана 24/7 | Срочная Диагностика и Ремонт",
        top_bar: "Дежурный экипаж на линии в Астане. Выезд от 15 минут!",
        header_sub: "Астана • 24/7",
        btn_header: "Срочный вызов",
        badge_equipment: "Профессиональное дилерское оборудование",
        hero_title: 'Срочный ремонт автоэлектрики <br class="hidden sm:block"/> с выездом по Астане <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">24/7</span>',
        hero_desc: "Устраняем любые неисправности на месте поломки. Запуск двигателя, снятие блокировок, компьютерная диагностика и ремонт проводки.",
        btn_call: "Вызвать мастера",
        feat1_title: "Приезд 15–25 мин",
        feat1_sub: "Во всех районах",
        feat2_title: "Круглосуточно",
        feat2_sub: "Без выходных 24/7",
        feat3_title: "Мультисканер",
        feat3_sub: "Точное чтение блоков",
        feat4_title: "Ремонт на месте",
        feat4_sub: "Без эвакуатора",
        services_title: "Услуги выездного автоэлектрика",
        services_subtitle: "Оперативно решаем проблемы любой сложности прямо на месте парковки",
        serv1_title: "Запуск ДВС / Прикурить 12V–24V",
        serv1_desc: "Безопасный запуск двигателя с севшим АКБ профессиональным пусковым бустером без риска для электроники.",
        serv2_title: "Компьютерная диагностика",
        serv2_desc: "Глубокое сканирование ЭБУ, АКПП, ABS, SRS Airbag. Расшифровка и сброс ошибок Check Engine на месте.",
        serv3_title: "Отключение сигнализаций",
        serv3_desc: "Аварийное отключение и разблокировка StarLine, Pandora, Tomahawk, иммобилайзеров и секретных кнопок.",
        serv4_title: "Утечки тока и замыкания",
        serv4_desc: "Устранение причин быстрого разряда аккумулятора. Поиск коротких замыканий и замена сгоревших проводов.",
        serv5_title: "Ремонт генераторов и стартеров",
        serv5_desc: "Диагностика системы зарядки. Экспресс-замена щеток, реле-регулятора, бендикса и втягивающего реле.",
        serv6_title: "Проверка перед покупкой",
        serv6_desc: "Полный осмотр электроники авто перед покупкой. Сканирование реального пробега и истории скрытых ошибок.",
        districts_title: "Зона выезда по Астане и пригороду",
        districts_desc: "Экипажи распределены по всем районам столицы для максимальной скорости прибытия",
        btn_eta: "Уточнить время прибытия",
        dist1_title: "Есильский р-н",
        dist1_desc: "Левый берег, Экспо, Хан Шатыр",
        dist2_title: "Алматинский р-н",
        dist2_desc: "Правый берег, Юго-Восток, Пирамида",
        dist3_title: "Сарыаркинский р-н",
        dist3_desc: "Старый город, Вокзал, Набережная",
        dist4_title: "Байконур и Нура",
        dist4_desc: "Промзона, Жагалау, Ильинка",
        rating_badge: "Рейтинг 5.0 из 5 на основе отзывов клиентов",
        reviews_title: "Отзывы наших клиентов",
        reviews_subtitle: "Реальные отзывы автовладельцев, которым мы помогли на дороге в Астане",
        rev1_name: "Арман Нурланов",
        rev1_car: "Toyota Camry • Есильский р-н",
        rev1_text: "Застрял ночью возле Хан Шатыра, машина вообще не реагировала на ключ. Мастер приехал через 20 минут, быстро определил причину — сбой сигнализации. Отключил блокировку и завел мотор. Огромное спасибо за оперативность!",
        rev2_name: "Дмитрий М.",
        rev2_car: "Hyundai Tucson • Алматинский р-н",
        rev2_text: "В -30 разрядился аккумулятор, обычный бустер друзей не справлялся. Вызвал автоэлектрика — приехали с мощным оборудованием, прикурили за пару минут и проверили генератор. Отличный сервис!",
        rev3_name: "Бауыржан К.",
        rev3_car: "Lexus GS • Сарыаркинский р-н",
        rev3_text: "Появилась утечка тока, за ночь АКБ садился в ноль. Специалист приехал со сканером и мультиметром, за час вычислил короткое замыкание в магнитоле и всё исправил на месте. Цены адекватные.",
        rev4_name: "Елена В.",
        rev4_car: "Kia Rio • р-н Нура",
        rev4_text: "Заказывала выездную диагностику перед покупкой авто. Мастер проверил все блоки управления, нашел скрытые ошибки и честно сказал, что с электроникой всё в порядке. Очень помогли принять решение!",
        faq_title: "Часто задаваемые вопросы",
        faq1_q: "Как быстро мастер приедет на место?",
        faq1_a: "Среднее время приезда мастера составляет от 15 до 30 минут в зависимости от района Астаны и дорожной ситуации.",
        faq2_q: "Работаете ли вы в сильные морозы?",
        faq2_a: "Да, работаем круглосуточно в любую погоду. Выезжаем со специальным тепловым оборудованием и мощными пусковыми бустерами.",
        form_title: "Нужен мастер прямо сейчас?",
        form_subtitle: "Оставьте заявку — сформируется сообщение в WhatsApp",
        form_name_label: "Ваше имя",
        form_name_ph: "Введите имя",
        form_phone_label: "Номер телефона",
        form_issue_label: "Марка авто и проблема",
        form_issue_ph: "Пример: Тойота Камри, не заводится",
        form_btn: "Срочно вызвать автоэлектрика",
        mob_call: "Вызвать"
    },
    kz: {
        doc_title: "Шақыру бойынша автоэлектрик Астана 24/7 | Жедел диагностика және жөндеу",
        top_bar: "Астанада кезекші экипаж желіде. 15 минуттан бастап жету!",
        header_sub: "Астана • 24/7",
        btn_header: "Шұғыл шақыру",
        badge_equipment: "Кәсіби дилерлік жабдық",
        hero_title: 'Астана бойынша шақырумен <br class="hidden sm:block"/> автоэлектрикті шұғыл жөндеу <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">24/7</span>',
        hero_desc: "Кез келген ақауларды бұзылған жерде жоямыз. Қозғалтқышты іске қосу, бұғаттауды алып тастау, компьютерлік диагностика және сымдарды жөндеу.",
        btn_call: "Шеберді шақыру",
        feat1_title: "Жету уақыты 15–25 мин",
        feat1_sub: "Барлық аудандарда",
        feat2_title: "Тәулік бойы",
        feat2_sub: "Демалыссыз 24/7",
        feat3_title: "Мультисканер",
        feat3_sub: "Блоктарды дәл оқу",
        feat4_title: "Орында жөндеу",
        feat4_sub: "Эвакуаторсыз",
        services_title: "Автоэлектриктің шақыру бойынша қызметтері",
        services_subtitle: "Кез келген күрделіліктегі мәселелерді дәл тұрақ орнында жедел шешеміз",
        serv1_title: "Қозғалтқышты іске қосу / От алдыру 12V–24V",
        serv1_desc: "Электроникаға қауіп төндірмей, кәсіби бустермен отырып қалған АКБ бар қозғалтқышты қауіпсіз іске қосу.",
        serv2_title: "Компьютерлік диагностика",
        serv2_desc: "ЭБУ, АКПП, ABS, SRS Airbag терең сканерлеу. Орында Check Engine қателіктерін анықтау және өшіру.",
        serv3_title: "Дабыл жүйелерін (сигнализация) өшіру",
        serv3_desc: "StarLine, Pandora, Tomahawk, иммобилайзерлер мен құпия батырмаларды апатты түрде өшіру және бұғаттан шығару.",
        serv4_title: "Ток ағуы және қысқа тұйықталу",
        serv4_desc: "Аккумулятордың жылдам отырып қалу себептерін жою. Қысқа тұйықталуды іздеу және күйген сымдарды ауыстыру.",
        serv5_title: "Генераторлар мен стартерлерді жөндеу",
        serv5_desc: "Зарядтау жүйесінің диагностикасы. Щеткаларды, реле-реттегішті, бендиксті экспресс-ауыстыру.",
        serv6_title: "Сатып алу алдында тексеру",
        serv6_desc: "Автокөлікті сатып алар алдында электрониканы толық тексеру. Нақты жүрісті және жасырын қателер тарихын сканерлеу.",
        districts_title: "Астана және қала маңы бойынша шығу аймағы",
        districts_desc: "Жету жылдамдығы максималды болуы үшін экипаждар елорданың барлық аудандарына бөлінген",
        btn_eta: "Келу уақытын анықтау",
        dist1_title: "Есіл ауданы",
        dist1_desc: "Сол жағалау, Экспо, Хан Шатыр",
        dist2_title: "Алматы ауданы",
        dist2_desc: "Оң жағалау, Юго-Восток, Пирамида",
        dist3_title: "Сарыарқа ауданы",
        dist3_desc: "Ескі қала, Вокзал, Жағалау",
        dist4_title: "Байқоңыр және Нұра",
        dist4_desc: "Промзона, Жағалау, Ильинка",
        rating_badge: "Клиенттердің пікірлері негізінде рейтинг 5.0-ден 5",
        reviews_title: "Клиенттеріміздің пікірлері",
        reviews_subtitle: "Астана жолында біз көмектескен автокөлік иелерінің шынайы пікірлері",
        rev1_name: "Арман Нұрланов",
        rev1_car: "Toyota Camry • Есіл ауданы",
        rev1_text: "Түнде Хан Шатыр жанында тұрып қалдым, көлік кілтке мүлдем жауап бермеді. Шебер 20 минутта келді, себебін тез анықтады — сигнализация ақауы. Бұғаттауды өшіріп, моторды оталдырды. Жылдамдық үшін үлкен рахмет!",
        rev2_name: "Дмитрий М.",
        rev2_car: "Hyundai Tucson • Алматы ауданы",
        rev2_text: "-30 градус аязда аккумулятор отырып қалды, достардың қарапайым бустері көмектеспеді. Автоэлектрикті шақырдым — қуатты жабдықпен келіп, екі минутта оталдырып, генераторды тексеріп берді. Керемет сервис!",
        rev3_name: "Бауыржан Қ.",
        rev3_car: "Lexus GS • Сарыарқа ауданы",
        rev3_text: "Ток ағуы пайда болды, түнде АКБ нөлге отырып қалатын. Маман сканермен және мультиметрмен келіп, бір сағатта магнитоладағы қысқа тұйықталуды тапты да, орнында жөндеп берді. Бағалары тиімді.",
        rev4_name: "Елена В.",
        rev4_car: "Kia Rio • Нұра ауданы",
        rev4_text: "Көлік сатып алар алдында шақыру бойынша диагностикаға тапсырыс бердім. Шебер барлық басқару блоктарын тексерді, жасырын қателіктерді тапты және электроникада бәрі дұрыс екенін ашық айтты. Шешім қабылдауға өте көмектесті!",
        faq_title: "Жиі қойылатын сұрақтар",
        faq1_q: "Шебер қаншалықты жылдам келеді?",
        faq1_a: "Шебердің келуінің орташа уақыты Астана ауданына және жол жағдайына байланысты 15-тен 30 минутқа дейін созылады.",
        faq2_q: "Қатты аязда жұмыс жасайсыздар ма?",
        faq2_a: "Иә, кез келген ауа райында тәулік бойы жұмыс істейміз. Арнайы жылыту жабдықтарымен және қуатты бустерлермен шығамыз.",
        form_title: "Шебер дәл қазір керек пе?",
        form_subtitle: "Өтінім қалдырыңыз — WhatsApp-та хабарлама қалыптасады",
        form_name_label: "Сіздің атыңыз",
        form_name_ph: "Атыңызды енгізіңіз",
        form_phone_label: "Телефон нөмірі",
        form_issue_label: "Көлік маркасы және мәселе",
        form_issue_ph: "Мысалы: Тойота Камри, от алмай тұр",
        form_btn: "Автоэлектрикті шұғыл шақыру",
        mob_call: "Шақыру"
    },
    en: {
        doc_title: "Mobile Auto Electrician Astana 24/7 | Emergency Diagnostics & Repair",
        top_bar: "On-duty crew on line in Astana. Arrival from 15 minutes!",
        header_sub: "Astana • 24/7",
        btn_header: "Emergency Call",
        badge_equipment: "Professional Dealer Equipment",
        hero_title: 'Emergency Auto Electric Repair <br class="hidden sm:block"/> On-Site in Astana <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">24/7</span>',
        hero_desc: "We fix any malfunctions right on the spot. Engine start, alarm unlocking, computer diagnostics, and wiring repair.",
        btn_call: "Call Technician",
        feat1_title: "Arrival 15–25 min",
        feat1_sub: "In all districts",
        feat2_title: "24/7 Available",
        feat2_sub: "No days off",
        feat3_title: "Multi-scanner",
        feat3_sub: "Accurate ECU reading",
        feat4_title: "On-site Repair",
        feat4_sub: "No tow truck needed",
        services_title: "Mobile Auto Electrician Services",
        services_subtitle: "Promptly solving problems of any complexity right at your parking spot",
        serv1_title: "Engine Jump Start 12V–24V",
        serv1_desc: "Safe engine start with a dead battery using a professional booster without risk to electronics.",
        serv2_title: "Computer Diagnostics",
        serv2_desc: "Deep scanning of ECU, Automatic Transmission, ABS, SRS Airbag. Clearing Check Engine codes on site.",
        serv3_title: "Car Alarm Unlocking",
        serv3_desc: "Emergency shutdown and unlocking of StarLine, Pandora, Tomahawk, immobilizers, and kill switches.",
        serv4_title: "Power Drain & Short Circuits",
        serv4_desc: "Eliminating causes of fast battery drain. Locating short circuits and replacing burnt wiring.",
        serv5_title: "Alternator & Starter Repair",
        serv5_desc: "Charging system diagnostics. Express replacement of brushes, voltage regulators, and starter drives.",
        serv6_title: "Pre-Purchase Inspection",
        serv6_desc: "Comprehensive check of vehicle electronics before buying. Scanning real mileage and hidden fault history.",
        districts_title: "Service Area in Astana & Suburbs",
        districts_desc: "Crews are deployed in all districts of the capital for maximum arrival speed",
        btn_eta: "Check Arrival Time",
        dist1_title: "Esil District",
        dist1_desc: "Left Bank, Expo, Khan Shatyr",
        dist2_title: "Almaty District",
        dist2_desc: "Right Bank, South-East, Pyramid",
        dist3_title: "Saryarka District",
        dist3_desc: "Old Town, Train Station, Embankment",
        dist4_title: "Baikonur & Nura",
        dist4_desc: "Industrial Area, Zhagalau, Ilyinka",
        rating_badge: "5.0 out of 5 Rating based on customer reviews",
        reviews_title: "Customer Reviews",
        reviews_subtitle: "Real reviews from car owners we helped on the road in Astana",
        rev1_name: "Arman Nurlanov",
        rev1_car: "Toyota Camry • Esil district",
        rev1_text: "Got stuck at night near Khan Shatyr, the car didn't respond to the key at all. The master arrived in 20 minutes, quickly found the issue — an alarm glitch. Unlocked it and started the engine. Thanks for the speed!",
        rev2_name: "Dmitry M.",
        rev2_car: "Hyundai Tucson • Almaty district",
        rev2_text: "Battery died at -30°C, my friends' basic booster couldn't handle it. Called the electrician — came with heavy-duty gear, jump-started in a couple minutes, and checked the alternator. Great service!",
        rev3_name: "Bauyrzhan K.",
        rev3_car: "Lexus GS • Saryarka district",
        rev3_text: "Had a power leak draining the battery overnight. The specialist arrived with a scanner and multimeter, found a short circuit in the radio within an hour, and fixed it on site. Fair prices.",
        rev4_name: "Elena V.",
        rev4_car: "Kia Rio • Nura district",
        rev4_text: "Ordered an inspection before buying a car. The master checked all control units, found hidden error codes, and confirmed the electronics were fine. Helped a lot with the decision!",
        faq_title: "Frequently Asked Questions",
        faq1_q: "How fast will the technician arrive?",
        faq1_a: "Average arrival time is between 15 and 30 minutes depending on the Astana district and traffic conditions.",
        faq2_q: "Do you work in severe cold weather?",
        faq2_a: "Yes, we work 24/7 in any weather. We come equipped with special thermal tools and high-power jump starters.",
        form_title: "Need a technician right now?",
        form_subtitle: "Fill out the form — a message will be generated in WhatsApp",
        form_name_label: "Your Name",
        form_name_ph: "Enter your name",
        form_phone_label: "Phone Number",
        form_issue_label: "Car Model & Issue",
        form_issue_ph: "Example: Toyota Camry, won't start",
        form_btn: "Call Auto Electrician Now",
        mob_call: "Call Now"
    }
};

// Функция переключения языка
function setLanguage(lang) {
    if (!translations[lang]) return;

    // Обновляем заголовок вкладки
    document.title = translations[lang].doc_title;

    // Текстовые элементы
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Элементы с placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Активность кнопок языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active', 'bg-amber-500', 'text-slate-950');
            btn.classList.remove('hover:text-white');
        } else {
            btn.classList.remove('active', 'bg-amber-500', 'text-slate-950');
            btn.classList.add('hover:text-white');
        }
    });

    // Сохраняем выбор в localStorage
    localStorage.setItem('preferred_lang', lang);
}

// Инициализация кнопок языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

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

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
});

// При загрузке страницы проверяем сохраненный язык
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'ru';
    setLanguage(savedLang);
});
