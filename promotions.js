/* ═══════════════════════════════════════════════════════
   نظام الترويجات المتقدم - Advanced Promotions System
   ═══════════════════════════════════════════════════════ */

// --- روابط الترويجات المخصصة لكل نوع ---
const PROMO_LINKS = {
    // الموقع الرئيسي
    main: 'https://asktuobdz.lovable.app/',
    
    // روابط مواقع إضافية (يمكن تعديلها)
    movies: 'https://asktuobdz.lovable.app/',
    special: 'https://asktuobdz.lovable.app/',
    secondary: 'https://asktuobdz.lovable.app/',
    
    // روابط ترويجات المشغلات
    preRoll: 'https://asktuobdz.lovable.app/',      // قبل بدء التشغيل
    midRoll: 'https://asktuobdz.lovable.app/',      // أثناء المشاهدة
    postRoll: 'https://asktuobdz.lovable.app/',     // بعد الانتهاء
    playerOverlay: 'https://asktuobdz.lovable.app/', // شريط المشغل
    
    // روابط إضافية
    floating: 'https://asktuobdz.lovable.app/',     // القلب العائم
    banner: 'https://asktuobdz.lovable.app/',       // البانر العلوي
    sideButton: 'https://asktuobdz.lovable.app/',   // الزر الجانبي
};

// --- إعدادات الترويجات ---
const PROMO_SETTINGS = {
    floatingHeart: {
        enabled: true,
        interval: 8000, // كل 8 ثوانٍ
        duration: 6000  // يبقى 6 ثوانٍ
    },
    searchPromo: {
        enabled: true,
        everyNResults: 6 // بطاقة ترويجية كل 6 نتائج بحث
    },
    topBanner: {
        enabled: true,
        showAfterScroll: 300 // يظهر بعد التمرير 300px
    },
    sideButton: {
        enabled: true
    },
    // إعدادات جديدة لترويجات المشغلات
    playerPromos: {
        preRoll: {
            enabled: true,
            skipAfter: 5, // يمكن التخطي بعد 5 ثوانٍ
            showEveryNPlays: 2, // يظهر كل مشاهدتين
            imageUrl: 'https://asktuobdz.lovable.app/', // رابط الصورة الترويجية
            title: 'اكتشف عالم الترفيه',
            description: 'آلاف الأفلام والمسلسلات بانتظارك'
        },
        midRoll: {
            enabled: true,
            showAfter: 180, // يظهر بعد 3 دقائق (180 ثانية)
            duration: 8000 // يبقى 8 ثوانٍ
        },
        postRoll: {
            enabled: true,
            showProbability: 0.7 // 70% احتمال الظهور
        },
        overlay: {
            enabled: true,
            showAfter: 60, // يظهر بعد دقيقة
            duration: 10000 // يبقى 10 ثوانٍ
        }
    }
};

// --- متابعة عدد المشاهدات ---
let playCount = parseInt(localStorage.getItem('playCount') || '0');

// --- 1. القلب النابض العائم ---
class FloatingHeartPromo {
    constructor() {
        this.isShowing = false;
        this.heartElement = null;
        this.timer = null;
    }

    init() {
        if (!PROMO_SETTINGS.floatingHeart.enabled) return;
        
        // بدء العرض بعد 3 ثوانٍ من تحميل الصفحة
        setTimeout(() => {
            this.startRandomShow();
        }, 100000);
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart-promo';
        heart.innerHTML = `
            <div class="heart-promo-content">
                <div class="heart-icon">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="heart-text">
                    <span class="heart-title">اكتشف المزيد</span>
                    <span class="heart-subtitle">انقر هنا!</span>
                </div>
                <div class="heart-sparkles">
                    <span>✨</span>
                    <span>✨</span>
                    <span>✨</span>
                </div>
            </div>
        `;

        // موقع عشوائي
        const positions = [
            { top: '20%', right: '5%' },
            { top: '50%', right: '3%' },
            { top: '30%', left: '5%' },
            { bottom: '25%', right: '5%' },
            { top: '40%', right: '8%' }
        ];
        
        const randomPos = positions[Math.floor(Math.random() * positions.length)];
        Object.assign(heart.style, randomPos);

        // عند الضغط
        heart.addEventListener('click', () => {
            this.onClick(heart);
        });

        return heart;
    }

    show() {
        if (this.isShowing) return;
        
        this.isShowing = true;
        this.heartElement = this.createHeart();
        document.body.appendChild(this.heartElement);

        // إضافة كلاس للظهور بعد فترة قصيرة
        setTimeout(() => {
            this.heartElement.classList.add('show');
        }, 100);

        // إخفاء تلقائي
        setTimeout(() => {
            this.hide();
        }, PROMO_SETTINGS.floatingHeart.duration);
    }

    hide() {
        if (!this.heartElement || !this.isShowing) return;
        
        this.heartElement.classList.remove('show');
        this.heartElement.classList.add('hide');
        
        setTimeout(() => {
            if (this.heartElement && this.heartElement.parentNode) {
                this.heartElement.remove();
            }
            this.heartElement = null;
            this.isShowing = false;
        }, 5000);
    }

    onClick(heart) {
        // تأثير الانفجار
        heart.classList.add('clicked');
        
        // إنشاء قلوب صغيرة متطايرة
        for (let i = 0; i < 8; i++) {
            this.createFlyingHeart(heart);
        }
        
        setTimeout(() => {
            window.open(PROMO_LINKS.floating, '_blank');
            this.hide();
        }, 300);
    }

    createFlyingHeart(parent) {
        const mini = document.createElement('div');
        mini.className = 'mini-heart';
        mini.innerHTML = '<i class="fas fa-heart"></i>';
        
        const angle = Math.random() * 360;
        const distance = 100 + Math.random() * 100;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;
        
        mini.style.setProperty('--tx', `${x}px`);
        mini.style.setProperty('--ty', `${y}px`);
        
        parent.appendChild(mini);
        
        setTimeout(() => mini.remove(), 1000);
    }

    startRandomShow() {
        this.show();
        
        this.timer = setInterval(() => {
            if (!this.isShowing) {
                this.show();
            }
        }, PROMO_SETTINGS.floatingHeart.interval);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.hide();
    }
}

// --- 2. بانر علوي منزلق ---
class TopBannerPromo {
    constructor() {
        this.banner = null;
        this.isVisible = false;
    }

    init() {
        if (!PROMO_SETTINGS.topBanner.enabled) return;
        
        this.createBanner();
        this.setupScrollListener();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'top-banner-promo';
        banner.innerHTML = `
            <div class="banner-content">
                <div class="banner-icon">
                    <i class="fas fa-film"></i>
                </div>
                <div class="banner-text">
                    <strong>عرض خاص!</strong>
                    <span>آلاف الأفلام والمسلسلات في انتظارك</span>
                </div>
                <button class="banner-btn" onclick="window.open('${PROMO_LINKS.banner}', '_blank')">
                    اكتشف الآن <i class="fas fa-arrow-left"></i>
                </button>
                <button class="banner-close" onclick="this.closest('.top-banner-promo').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        this.banner = banner;
        document.body.appendChild(banner);
    }

    setupScrollListener() {
        let hasShown = false;
        
        window.addEventListener('scroll', () => {
            if (hasShown) return;
            
            if (window.scrollY > PROMO_SETTINGS.topBanner.showAfterScroll) {
                this.show();
                hasShown = true;
            }
        });
    }

    show() {
        if (!this.banner || this.isVisible) return;
        this.banner.classList.add('show');
        this.isVisible = true;
    }
}

// --- 3. زر عائم جانبي ---
class FloatingSideButton {
    constructor() {
        this.button = null;
    }

    init() {
        if (!PROMO_SETTINGS.sideButton.enabled) return;
        this.createButton();
    }

    createButton() {
        const button = document.createElement('div');
        button.className = 'floating-side-btn';
        button.innerHTML = `
            <div class="side-btn-content">
                <i class="fas fa-video"></i>
                <span>أفلام</span>
            </div>
            <div class="side-btn-tooltip">
                اكتشف عالم الأفلام
            </div>
        `;
        
        button.addEventListener('click', () => {
            window.open(PROMO_LINKS.sideButton, '_blank');
        });
        
        document.body.appendChild(button);
        this.button = button;
        
        // إظهار بعد ثانية
        setTimeout(() => {
            button.classList.add('show');
        }, 100);
    }
}

// --- 4. بطاقات ترويجية في نتائج البحث ---
const searchPromoCards = [
    {
        type: 'card',
        icon: 'fa-film',
        title: 'ابحث عن الأفلام أيضاً',
        description: 'آلاف الأفلام بجودة عالية',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        link: PROMO_LINKS.movies
    },
    {
        type: 'card',
        icon: 'fa-star',
        title: 'أفلام حصرية',
        description: 'شاهد أحدث الإصدارات',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        link: PROMO_LINKS.special
    },
    {
        type: 'card',
        icon: 'fa-play-circle',
        title: 'مكتبة ضخمة',
        description: 'اختر من بين آلاف العناوين',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        link: PROMO_LINKS.secondary
    },
    {
        type: 'card',
        icon: 'fa-fire',
        title: 'الأكثر مشاهدة',
        description: 'لا تفوت الأفلام الرائجة',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        link: PROMO_LINKS.main
    }
];

function createSearchPromoCard(index) {
    const promo = searchPromoCards[index % searchPromoCards.length];
    
    return `
        <div class="series-card search-promo-card" onclick="window.open('${promo.link}', '_blank')" style="background: ${promo.gradient};">
            <div class="heart-shape-wrapper" style="border-color: rgba(255,255,255,0.5);">
                <div class="series-image-wrapper search-promo-content">
                    <div class="search-promo-icon">
                        <i class="fas ${promo.icon}"></i>
                    </div>
                    <h3 class="search-promo-title">${promo.title}</h3>
                    <p class="search-promo-desc">${promo.description}</p>
                    <div class="search-promo-btn">
                        <i class="fas fa-external-link-alt"></i> اكتشف الآن
                    </div>
                    <div class="search-promo-shine"></div>
                </div>
            </div>
        </div>
    `;
}

// --- 5. نافذة ترحيبية (تظهر مرة واحدة) ---
class WelcomeModal {
    constructor() {
        this.hasShown = localStorage.getItem('welcomeModalShown') === 'true';
    }

    init() {
        if (this.hasShown) return;
        
        // إظهار بعد 5 ثوانٍ من تحميل الصفحة
        setTimeout(() => {
            this.show();
        }, 5000);
    }

    show() {
        const modal = document.createElement('div');
        modal.className = 'welcome-modal-overlay';
        modal.innerHTML = `
            <div class="welcome-modal">
                <button class="welcome-close" onclick="this.closest('.welcome-modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="welcome-content">
                    <div class="welcome-icon">
                        <i class="fas fa-gift"></i>
                    </div>
                    <h2>مرحباً بك! 🎉</h2>
                    <p>هل تعلم أن لدينا موقع مخصص للأفلام؟</p>
                    <div class="welcome-features">
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>آلاف الأفلام بجودة عالية</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>ترجمة احترافية</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-check-circle"></i>
                            <span>تحديث يومي</span>
                        </div>
                    </div>
                    <button class="welcome-btn" onclick="window.open('${PROMO_LINKS.main}', '_blank'); this.closest('.welcome-modal-overlay').remove();">
                        اكتشف الموقع <i class="fas fa-arrow-left"></i>
                    </button>
                    <button class="welcome-skip" onclick="this.closest('.welcome-modal-overlay').remove();">
                        ربما لاحقاً
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // إغلاق عند الضغط على الخلفية
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // تسجيل أنها ظهرت
        setTimeout(() => {
            localStorage.setItem('welcomeModalShown', 'true');
        }, 1000);
    }
}

// --- 6. ترويج Pre-Roll (قبل بدء التشغيل) ---
class PreRollPromo {
    constructor() {
        this.overlay = null;
        this.skipTimer = null;
        this.canSkip = true;
    }

    shouldShow() {
        if (!PROMO_SETTINGS.playerPromos.preRoll.enabled) return false;
        
        playCount++;
        localStorage.setItem('playCount', playCount.toString());
        
        return playCount % PROMO_SETTINGS.playerPromos.preRoll.showEveryNPlays === 0;
    }

    show(onComplete) {
        if (!this.shouldShow()) {
            if (onComplete) onComplete();
            return;
        }

        this.overlay = document.createElement('div');
        this.overlay.className = 'preroll-promo-overlay';
        this.overlay.innerHTML = `
            <div class="preroll-promo-content">
                <div class="preroll-video-container">
                    <div class="preroll-gradient-bg"></div>
                    ${PROMO_SETTINGS.playerPromos.preRoll.imageUrl ? `
                    <div class="preroll-image-container">
                        <img src="${PROMO_SETTINGS.playerPromos.preRoll.imageUrl}" alt="Promo" class="preroll-promo-image" />
                    </div>
                    ` : `
                    <div class="preroll-icon">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    `}
                    <h2 class="preroll-title">${PROMO_SETTINGS.playerPromos.preRoll.title}</h2>
                    <p class="preroll-description">${PROMO_SETTINGS.playerPromos.preRoll.description}</p>
                    <button class="preroll-cta-btn" onclick="window.open('${PROMO_LINKS.preRoll}', '_blank')">
                        <i class="fas fa-external-link-alt"></i>
                        اكتشف الآن
                    </button>
                    <div class="preroll-skip-container">
                        <button class="preroll-skip-btn" id="prerollSkipBtn" disabled>
                            <span id="skipText">يمكنك التخطي بعد <span id="skipCounter">${PROMO_SETTINGS.playerPromos.preRoll.skipAfter}</span> ثانية</span>
                            <span id="skipReady" style="display:none;">تخطي الإعلان <i class="fas fa-forward"></i></span>
                        </button>
                    </div>
                    <div class="preroll-timer-bar">
                        <div class="preroll-timer-fill" id="prerollTimerFill"></div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(this.overlay);
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            this.overlay.classList.add('active');
        }, 100);

        // بدء العد التنازلي
        this.startSkipTimer(onComplete);
    }

    startSkipTimer(onComplete) {
        let seconds = PROMO_SETTINGS.playerPromos.preRoll.skipAfter;
        const skipBtn = document.getElementById('prerollSkipBtn');
        const skipText = document.getElementById('skipText');
        const skipReady = document.getElementById('skipReady');
        const counter = document.getElementById('skipCounter');
        const timerFill = document.getElementById('prerollTimerFill');

        if (!skipBtn || !counter || !timerFill) return;

        // تحديث شريط التقدم
        const totalTime = seconds;
        timerFill.style.transition = `width ${totalTime}s linear`;
        setTimeout(() => {
            timerFill.style.width = '100%';
        }, 100);

        this.skipTimer = setInterval(() => {
            seconds--;
            counter.textContent = seconds;

            if (seconds <= 0) {
                clearInterval(this.skipTimer);
                this.canSkip = true;
                skipBtn.disabled = false;
                skipBtn.classList.add('can-skip');
                skipText.style.display = 'none';
                skipReady.style.display = 'inline';
                
                skipBtn.onclick = () => this.close(onComplete);
            }
        }, 1000);
    }

    close(onComplete) {
        if (this.skipTimer) {
            clearInterval(this.skipTimer);
            this.skipTimer = null;
        }

        if (this.overlay) {
            this.overlay.classList.remove('active');
            setTimeout(() => {
                if (this.overlay && this.overlay.parentNode) {
                    this.overlay.remove();
                }
                this.overlay = null;
                document.body.style.overflow = '';
                if (onComplete) onComplete();
            }, 400);
        }
    }
}

// --- 7. ترويج Mid-Roll (أثناء المشاهدة) ---
class MidRollPromo {
    constructor() {
        this.banner = null;
        this.timer = null;
        this.hasShown = false;
    }

    init(playerContainer) {
        if (!PROMO_SETTINGS.playerPromos.midRoll.enabled || this.hasShown) return;

        this.timer = setTimeout(() => {
            this.show(playerContainer);
        }, PROMO_SETTINGS.playerPromos.midRoll.showAfter * 1000);
    }

    show(playerContainer) {
        if (this.hasShown || !playerContainer) return;
        this.hasShown = false;

        this.banner = document.createElement('div');
        this.banner.className = 'midroll-promo-banner';
        this.banner.innerHTML = `
            <div class="midroll-content">
                <div class="midroll-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="midroll-text">
                    <strong>أفلام ومسلسلات رائعة</strong>
                    <span>اكتشف المزيد الآن</span>
                </div>
                <button class="midroll-btn" onclick="window.open('${PROMO_LINKS.midRoll}', '_blank')">
                    شاهد <i class="fas fa-arrow-left"></i>
                </button>
                <button class="midroll-close" onclick="this.closest('.midroll-promo-banner').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        playerContainer.appendChild(this.banner);

        setTimeout(() => {
            this.banner.classList.add('show');
        }, 100);

        // إخفاء تلقائي
        setTimeout(() => {
            this.hide();
        }, PROMO_SETTINGS.playerPromos.midRoll.duration);
    }

    hide() {
        if (!this.banner) return;
        
        this.banner.classList.remove('show');
        setTimeout(() => {
            if (this.banner && this.banner.parentNode) {
                this.banner.remove();
            }
            this.banner = null;
        }, 400);
    }

    reset() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.hide();
        this.hasShown = false;
    }
}

// --- 8. شريط Overlay أثناء المشاهدة ---
class PlayerOverlayPromo {
    constructor() {
        this.overlay = null;
        this.timer = null;
        this.hasShown = false;
    }

    init(playerContainer) {
        if (!PROMO_SETTINGS.playerPromos.overlay.enabled || this.hasShown) return;

        this.timer = setTimeout(() => {
            this.show(playerContainer);
        }, PROMO_SETTINGS.playerPromos.overlay.showAfter * 1000);
    }

    show(playerContainer) {
        if (this.hasShown || !playerContainer) return;
        this.hasShown = true;

        this.overlay = document.createElement('div');
        this.overlay.className = 'player-overlay-promo';
        this.overlay.innerHTML = `
            <div class="player-overlay-content">
                <span class="overlay-text">
                    <i class="fas fa-video"></i>
                    اكتشف آلاف الأفلام والمسلسلات
                </span>
                <button class="overlay-cta" onclick="window.open('${PROMO_LINKS.playerOverlay}', '_blank')">
                    انقر هنا
                </button>
                <button class="overlay-close" onclick="this.closest('.player-overlay-promo').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        playerContainer.appendChild(this.overlay);

        setTimeout(() => {
            this.overlay.classList.add('show');
        }, 100);

        // إخفاء تلقائي
        setTimeout(() => {
            this.hide();
        }, PROMO_SETTINGS.playerPromos.overlay.duration);
    }

    hide() {
        if (!this.overlay) return;
        
        this.overlay.classList.remove('show');
        setTimeout(() => {
            if (this.overlay && this.overlay.parentNode) {
                this.overlay.remove();
            }
            this.overlay = null;
        }, 400);
    }

    reset() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.hide();
        this.hasShown = false;
    }
}

// --- 9. ترويج Post-Roll (بعد الانتهاء) ---
class PostRollPromo {
    constructor() {
        this.overlay = null;
    }

    shouldShow() {
        if (!PROMO_SETTINGS.playerPromos.postRoll.enabled) return false;
        return Math.random() < PROMO_SETTINGS.playerPromos.postRoll.showProbability;
    }

    show() {
        if (!this.shouldShow()) return;

        this.overlay = document.createElement('div');
        this.overlay.className = 'postroll-promo-overlay';
        this.overlay.innerHTML = `
            <div class="postroll-promo-content">
                <div class="postroll-icon">
                    <i class="fas fa-thumbs-up"></i>
                </div>
                <h2 class="postroll-title">استمتعت بالمشاهدة؟</h2>
                <p class="postroll-description">اكتشف المزيد من المحتوى الرائع</p>
                <div class="postroll-buttons">
                    <button class="postroll-cta" onclick="window.open('${PROMO_LINKS.postRoll}', '_blank')">
                        <i class="fas fa-play"></i>
                        تصفح المزيد
                    </button>
                    <button class="postroll-close-btn" onclick="this.closest('.postroll-promo-overlay').remove()">
                        إغلاق
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(this.overlay);

        setTimeout(() => {
            this.overlay.classList.add('active');
        }, 300);

        // إغلاق عند الضغط على الخلفية
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.overlay.remove();
            }
        });
    }
}

// --- 10. شريط إعلاني متحرك ---
class ScrollingBanner {
    constructor() {
        this.banner = null;
    }

    init() {
        this.createBanner();
    }

    createBanner() {
        const banner = document.createElement('div');
        banner.className = 'scrolling-banner-promo';
        banner.innerHTML = `
            <div class="scrolling-content">
                <span class="scroll-item">🎬 اكتشف موقع الأفلام الجديد</span>
                <span class="scroll-item">⭐ آلاف الأفلام المترجمة</span>
                <span class="scroll-item">🔥 تحديثات يومية</span>
                <span class="scroll-item">🎯 جودة عالية HD</span>
                <span class="scroll-item">🎬 اكتشف موقع الأفلام الجديد</span>
                <span class="scroll-item">⭐ آلاف الأفلام المترجمة</span>
                <span class="scroll-item">🔥 تحديثات يومية</span>
                <span class="scroll-item">🎯 جودة عالية HD</span>
            </div>
        `;
        
        banner.addEventListener('click', () => {
            window.open(PROMO_LINKS.main, '_blank');
        });
        
        this.banner = banner;
    }

    show() {
        if (!this.banner || document.body.contains(this.banner)) return;
        document.body.appendChild(this.banner);
    }

    hide() {
        if (this.banner && document.body.contains(this.banner)) {
            this.banner.remove();
        }
    }
}

// --- تهيئة النظام ---
let floatingHeart = null;
let topBanner = null;
let sideButton = null;
let welcomeModal = null;
let scrollingBanner = null;

// ترويجات المشغلات (instances جديدة في كل مرة)
let currentPreRoll = null;
let currentMidRoll = null;
let currentPlayerOverlay = null;
let currentPostRoll = null;

function initPromotions() {
    console.log('🎯 تهيئة نظام الترويجات...');
    
    // القلب النابض
    floatingHeart = new FloatingHeartPromo();
    floatingHeart.init();
    
    // البانر العلوي
    topBanner = new TopBannerPromo();
    topBanner.init();
    
    // الزر الجانبي
    sideButton = new FloatingSideButton();
    sideButton.init();
    
    // نافذة الترحيب (تظهر مرة واحدة فقط)
    welcomeModal = new WelcomeModal();
    welcomeModal.init();
    
    // الشريط المتحرك (اختياري)
    scrollingBanner = new ScrollingBanner();
scrollingBanner.init();

// تشغيل أول مرة
scrollingBanner.show();

// كل 60 ثانية: يظهر ثم بعد 60 ثانية يختفي
setInterval(() => {
    scrollingBanner.show(); // يظهر الشريط
    setTimeout(() => {
        scrollingBanner.hide(); // بعد دقيقة يختفي
    }, 8000); // 60000ms = 1 دقيقة
}, 16000); // كل دورتين: دقيقة ظهور + دقيقة اختفاء // يمكن تفعيله عند الحاجة
    
    console.log('✅ نظام الترويجات جاهز!');
}

// --- وظائف ترويجات المشغلات (للاستدعاء من app.js) ---

// عرض Pre-Roll قبل بدء المشغل
function showPreRollPromo(onComplete) {
    currentPreRoll = new PreRollPromo();
    currentPreRoll.show(onComplete);
}

// تهيئة Mid-Roll و Overlay بعد بدء المشغل
function initPlayerPromos(playerContainer) {
    // Mid-Roll Banner
    currentMidRoll = new MidRollPromo();
    currentMidRoll.init(playerContainer);
    
    // Player Overlay
    currentPlayerOverlay = new PlayerOverlayPromo();
    currentPlayerOverlay.init(playerContainer);
}

// عرض Post-Roll عند إغلاق المشغل
function showPostRollPromo() {
    currentPostRoll = new PostRollPromo();
    currentPostRoll.show();
}

// إعادة تعيين ترويجات المشغل
function resetPlayerPromos() {
    if (currentMidRoll) currentMidRoll.reset();
    if (currentPlayerOverlay) currentPlayerOverlay.reset();
}

// تشغيل تلقائي عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPromotions);
} else {
    initPromotions();
}

// تصدير للاستخدام في ملفات أخرى
window.createSearchPromoCard = createSearchPromoCard;
window.showPreRollPromo = showPreRollPromo;
window.initPlayerPromos = initPlayerPromos;
window.showPostRollPromo = showPostRollPromo;
window.resetPlayerPromos = resetPlayerPromos;

window.PromotionsSystem = {
    floatingHeart,
    topBanner,
    sideButton,
    welcomeModal,
    scrollingBanner,
    createSearchPromoCard,
    showPreRollPromo,
    initPlayerPromos,
    showPostRollPromo,
    resetPlayerPromos,
    PROMO_LINKS
};
