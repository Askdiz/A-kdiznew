// --- GLOBAL STATE --- //
let currentPlayingSeriesId = null;
let currentPlayingEpisode = null;
let waitTimer = null;
let currentState = 0; // 0: Aşk (red), 1: Clicked Aşk (diz fading), 2: Frame (Aşk diz white)
let currentSeriesPage = 1; // الصفحة الحالية تبدأ من 1
const SERIES_PER_PAGE = 10; // 10 مسلسلات في كل صفحة
let seriesData = []; // المسلسلات المحملة
let isLoadingMore = false; // لتجنب التحميل المتكرر

// --- TITLE ANIMATION LOGIC --- //
const wordAsk = document.getElementById('word-ask');
const wordDiz = document.getElementById('word-diz');
const clickableHeart = document.getElementById('clickable-heart');
const titleFrame = document.getElementById('title-frame');
const clickableArea = document.getElementById('clickable-area');
const mainTitleContainer = document.getElementById('mainTitleContainer');

function initializeTitle() {
    wordDiz.classList.add('hidden');
    wordAsk.classList.add('color-primary-red');
    if (clickableArea) {
        clickableArea.onclick = handleAskClick;
    }
}

// دالة جديدة للتعامل مع النقر على الشعار في الشريط العلوي
function handleLogoClick() {
    window.location.href = 'https://askdiz-video-vault-23702.lovable.app/';
}

function handleAskClick() {
    if (currentState !== 0) return;
    wordAsk.classList.remove('color-primary-red');
    wordAsk.classList.add('color-white');
    
    // Position diz exactly where Ask is
    wordDiz.style.position = 'absolute';
    wordDiz.style.left = wordAsk.offsetLeft + 'px';
    wordDiz.style.top = wordAsk.offsetTop + 'px';
    
    wordDiz.classList.remove('hidden');
    clickableHeart.classList.remove('hidden');
    
    // Move Ask
    wordAsk.style.transform = 'translateX(-70px) scale(0.9)';
    wordAsk.style.opacity = '0';
    
    // Move diz
    wordDiz.style.transform = 'translateX(20px) scale(1.1)';
    wordDiz.style.opacity = '1';

    clickableArea.onclick = null; // Disable click during transition

    setTimeout(() => {
        // Reset positions after transition
        wordAsk.style.position = 'static';
        wordAsk.style.transform = 'none';
        wordAsk.style.opacity = '1';
        wordDiz.style.position = 'static';
        wordDiz.style.transform = 'none';
        wordDiz.style.opacity = '1';
        
        // Hide Ask, show diz with proper spacing
        wordAsk.classList.add('hidden');
        
        clickableArea.onclick = handleHeartClick; // Next step click
        currentState = 1;
    }, 500);
}

function handleHeartClick() {
    if (currentState !== 1) return;
    
    // Move Ask back to initial state (hidden) and align it
    wordAsk.classList.remove('hidden');
    wordAsk.classList.remove('color-white');
    wordAsk.classList.add('color-primary-red');
    wordAsk.style.opacity = '0';

    // Measure the final desired position
    const padding = 15;
    const areaRect = clickableArea.getBoundingClientRect();
    const containerRect = mainTitleContainer.getBoundingClientRect();

    // Calculate frame size and position based on clickable-area
    const frameWidth = areaRect.width + padding * 2;
    const frameHeight = areaRect.height + padding * 2;
    const frameCenterX = areaRect.left + areaRect.width / 2 - containerRect.left;
    const frameCenterY = areaRect.top + areaRect.height / 2 - containerRect.top;

    titleFrame.style.width = `${frameWidth}px`;
    titleFrame.style.height = `${frameHeight}px`;
    titleFrame.style.left = `${frameCenterX - frameWidth / 2}px`;
    titleFrame.style.top = `${frameCenterY - frameHeight / 2}px`;
    
    titleFrame.style.transform = 'scale(1)';
    titleFrame.style.opacity = '1';
    
    wordAsk.classList.remove('color-primary-red');
    wordAsk.classList.add('color-white');

    currentState = 2;
    clickableArea.onclick = handleFrameClick;
}

function handleFrameClick() {
    if (currentState !== 2) return;
    
    titleFrame.style.transform = 'scale(0)';
    titleFrame.style.opacity = '0';
    
    wordDiz.classList.add('hidden');
    clickableHeart.classList.add('hidden');
    
    wordAsk.classList.remove('color-white');
    wordAsk.classList.add('color-primary-red');
    
    currentState = 0;
    clickableArea.onclick = handleAskClick;
}

// --- COLOR THEME LOGIC ---
const colorThemes = {
    'default': '#E60023', 'blue': '#1E90FF', 'green': '#3CB371', 'purple': '#9370DB', 'orange': '#FF8C00',
    'pink': '#FF69B4', 'cyan': '#00CED1', 'gold': '#FFD700', 'brown': '#A0522D', 'teal': '#008080',
    'red-wine': '#800020', 'deep-sky-blue': '#00BFFF', 'lime-green': '#32CD32', 'indigo': '#4B0082',
    'dark-orange': '#FF8C00', 'hot-pink': '#FF69B4', 'turquoise': '#40E0D0', 'sienna': '#A0522D',
    'olive': '#808000', 'maroon': '#800000', 'navy': '#000080', 'forest-green': '#228B22',
    'crimson': '#DC143C', 'slate-blue': '#6A5ACD', 'dark-goldenrod': '#B8860B', 'medium-violet-red': '#C71585',
    'dark-cyan': '#008B8B', 'firebrick': '#B22222', 'peru': '#CD853F', 'steel-blue': '#4682B4'
};

// دالة تحديث الألوان في القائمة الجانبية
function updateColorPickerGrid() {
    const grid = document.getElementById('colorPickerGrid');
    if (!grid) return;
    grid.innerHTML = ''; // مسح الأزرار القديمة

    for (const [themeName, colorCode] of Object.entries(colorThemes)) {
        const themeClass = `theme-${themeName}`;
        const button = document.createElement('button');
        button.className = 'color-picker-button';
        button.style.backgroundColor = colorCode;
        button.dataset.theme = themeClass;
        button.onclick = () => changeTheme(themeClass);
        
        const icon = document.createElement('i');
        icon.className = 'fas fa-check';
        button.appendChild(icon);

        grid.appendChild(button);
    }
    updateActiveColorButton();
}

function initializeColorPicker() {
    updateColorPickerGrid();
}

function changeTheme(themeClass) {
    document.body.className = themeClass;
    localStorage.setItem('selectedTheme', themeClass);
    updateActiveColorButton();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme-default';
    changeTheme(savedTheme);
}

function updateActiveColorButton() {
    const currentTheme = localStorage.getItem('selectedTheme') || 'theme-default';
    const buttons = document.querySelectorAll('.color-picker-button');
    buttons.forEach(button => {
        if (button.dataset.theme === currentTheme) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function openColorPickerModal() {
    const modal = document.getElementById('colorPickerModalOverlay');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeColorPickerModal() {
    const modal = document.getElementById('colorPickerModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

// --- تحميل المسلسلات من ملف JSON ---
async function loadSeriesFromFile(pageNumber) {
    try {
        const response = await fetch(`series${pageNumber}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load series${pageNumber}.json`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error loading series${pageNumber}.json:`, error);
        return [];
    }
}

// --- NEW SERIES LOGIC ---
function renderNewSeries() {
    if (typeof seriesData === 'undefined' || !Array.isArray(seriesData)) {
        console.error('Error: seriesData is not loaded correctly.');
        alert('حدث خطأ: بيانات المسلسلات غير محملة بشكل صحيح.');
        return;
    }
    const newSeries = seriesData.filter(s => s.isNew === true);
    renderSeries(newSeries, 'seriesGrid');
    switchSection('series');
    closeNav();
}

// --- NEW FUNCTION: SORTING BY RATING ---
function renderMostWatchedSeries() {
    // تتطلب وجود الدالة calculateTotalStars و مصفوفة seriesData
    if (typeof calculateTotalStars !== 'function' || typeof seriesData === 'undefined' || !Array.isArray(seriesData)) {
        console.error('Error: calculateTotalStars function or seriesData is not loaded correctly.');
        alert('حدث خطأ: ملف auth.js أو series_data.js غير محمل بشكل صحيح.');
        return;
    }

    // 1. نسخ المصفوفة لعدم تغيير الترتيب الأصلي
    const sortedSeries = [...seriesData];

    // 2. الفرز بناءً على عدد النجوم (الأعلى أولاً)
    sortedSeries.sort((a, b) => {
        // نستخدم دالة calculateTotalStars من ملف auth.js
        const starsB = calculateTotalStars(b.id);
        const starsA = calculateTotalStars(a.id);
        return starsB - starsA;
    });

    // 3. عرض المسلسلات المرتبة
    renderSeries(sortedSeries, 'seriesGrid');
    
    // 4. التبديل إلى قسم العرض الرئيسي وإغلاق القائمة الجانبية
    switchSection('series');
    closeNav();
}

// --- RENDERING & NAVIGATION --- 

function renderSeries(seriesArray, gridId = 'seriesGrid', append = false) {
    const seriesGrid = document.getElementById(gridId);
    if (!seriesGrid) return; 
    
    if (!Array.isArray(seriesArray)) {
        console.error('Error: seriesArray is not a valid array.');
        return;
    }

    // دالة مساعدة لإنشاء بطاقة المسلسل
    const createSeriesCard = (series) => {
        // تعتمد على calculateTotalStars من ملف auth.js
        const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(series.id) : 0;
        
        return `
            <div class="series-card" onclick="openDetailsPage(${series.id})">
                <div class="heart-shape-wrapper">
                    <div class="series-image-wrapper">
                        <img src="${series.image}" alt="${series.title}" class="series-image">
                        
                        <span class="series-badge" style="background: var(--primary-light); color: var(--secondary); border: 2px solid var(--primary); font-size: 14px;">
                            <i class="fas fa-star" style="color: var(--primary);"></i> ${totalStars} 
                        </span>
                        
                        <div class="series-overlay">
                            <h3 class="series-title">${series.title}</h3>
                            <p class="series-title-en">${series.titleEn}</p>
                            <div class="series-meta">
                                <span class="meta-item"><i class="fas fa-video"></i> ${series.episodes.length} حلقة</span>
                                <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    if (append) {
        // إضافة مسلسلات جديدة
        seriesGrid.innerHTML += seriesArray.map(createSeriesCard).join('');
    } else {
        // عرض من جديد
        seriesGrid.innerHTML = seriesArray.map(createSeriesCard).join('');
    }

    // تحديث زر "تصفح المزيد"
    updateLoadMoreButton();
}

// دالة لتحديث حالة زر "تصفح المزيد"
function updateLoadMoreButton() {
    const loadMoreSection = document.getElementById('loadMoreSection');
    if (loadMoreSection) {
        // إظهار الزر إذا كان هناك المزيد من الصفحات (حتى 5)
        if (currentSeriesPage < 5) {
            loadMoreSection.style.display = 'block';
        } else {
            loadMoreSection.style.display = 'none';
        }
    }
}

async function loadMoreSeries() {
    if (isLoadingMore) return; // تجنب التحميل المتكرر
    
    if (currentSeriesPage >= 5) {
        // وصلنا إلى آخر صفحة
        updateLoadMoreButton();
        return;
    }
    
    isLoadingMore = true;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    // تغيير نص الزر أثناء التحميل
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
        loadMoreBtn.disabled = true;
    }
    
    // تحميل الصفحة التالية
    currentSeriesPage++;
    const newSeries = await loadSeriesFromFile(currentSeriesPage);
    
    if (newSeries && newSeries.length > 0) {
        // إضافة المسلسلات الجديدة إلى المصفوفة الرئيسية
        seriesData = seriesData.concat(newSeries);
        
        // عرض المسلسلات الجديدة
        renderSeries(newSeries, 'seriesGrid', true);
    }
    
    // إعادة تفعيل الزر
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<i class="fas fa-plus-circle"></i> تصفح المزيد من المسلسلات';
        loadMoreBtn.disabled = false;
    }
    
    isLoadingMore = false;
}

function performSearch() {
    const input = document.getElementById('seriesSearchInput').value.toLowerCase().trim();
    if (input.length === 0) return;

    const filteredSeries = seriesData.filter(series => {
        const titleMatch = series.title.toLowerCase().includes(input);
        const titleEnMatch = series.titleEn.toLowerCase().includes(input);
        return titleMatch || titleEnMatch;
    });

    openSearchModal(filteredSeries);
}

function openSearchModal(seriesArray) {
    const modalOverlay = document.getElementById('searchModalOverlay');
    const resultsGrid = document.getElementById('searchResultsGrid');
    const noResultsMsg = document.getElementById('searchNoResultsMessage');
    
    if (seriesArray.length === 0) {
        resultsGrid.innerHTML = '';
        noResultsMsg.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'none';
        renderSearchResults(seriesArray);
    }
    
    modalOverlay.style.display = 'flex';
    setTimeout(() => { modalOverlay.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    const modalOverlay = document.getElementById('searchModalOverlay');
    modalOverlay.classList.remove('active');
    setTimeout(() => { 
        modalOverlay.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    }, 500);
}

function renderSearchResults(seriesArray) {
    const resultsGrid = document.getElementById('searchResultsGrid');
    resultsGrid.innerHTML = seriesArray.map(series => {
        // تعتمد على calculateTotalStars من ملف auth.js
        const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(series.id) : 0;
        return `
            <div class="search-heart-card" onclick="openDetailsPage(${series.id}); closeSearchModal();">
                <div class="search-heart-wrapper">
                    <i class="fas fa-heart search-heart"></i>
                    <div class="search-image-clip">
                        <img src="${series.image}" alt="${series.title}" class="search-image">
                    </div>
                </div>
                <div class="search-heart-info">
                    <h4 class="search-heart-title">${series.title}</h4>
                    <p class="search-heart-rating">(${totalStars} نجمة)</p>
                </div>
            </div>
        `;
    }).join('');
}

function switchSection(sectionId) {
    document.getElementById('series').style.display = 'none';
    document.getElementById('favorites').style.display = 'none';
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    closeNav();
}

// --- DETAILS & PLAYER FUNCTIONS --- 

function openDetailsPage(seriesId) {
    const series = seriesData.find(s => s.id === seriesId);
    if (!series) return;

    const modalOverlay = document.getElementById('detailsModalOverlay');
    
    // 1. Header and Meta Info
    document.getElementById('detailsTitle').textContent = series.title;
    document.getElementById('detailsTitleEn').textContent = series.titleEn;
    document.getElementById('detailsDescription').textContent = series.description;
    
    document.getElementById('detailsBackdrop').style.backgroundImage = `url('${series.image}')`;
    document.getElementById('detailsMeta').innerHTML = `
        <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${series.year}</span>
        <span class="meta-item"> | <i class="fas fa-video"></i> ${series.episodes.length} حلقة</span>
    `;

    // 2. Star Button (Rating)
    const starButton = document.getElementById('starButton');
    // تعتمد على hasUserRated و calculateTotalStars و toggleStar من ملف auth.js
    const isRated = typeof hasUserRated === 'function' ? hasUserRated(seriesId) : false;
    const totalStars = typeof calculateTotalStars === 'function' ? calculateTotalStars(seriesId) : 0;
    
    starButton.classList.remove('rated');
    if (isRated) {
        starButton.classList.add('rated');
    }
    starButton.onclick = () => toggleStar(seriesId, starButton);
    document.getElementById('starCountDisplay').textContent = `(${totalStars} نجمة)`;

    // 3. Trailer and Favorite Buttons
    document.getElementById('trailerButton').onclick = () => handlePlaybackFlow(seriesId, 0); // Episode 0 for trailer

    const detailsWishlistBtn = document.getElementById('detailsWishlistBtn');
    // تعتمد على isSeriesFavorite و toggleFavorite من ملف auth.js
    const isFav = typeof isSeriesFavorite === 'function' ? isSeriesFavorite(seriesId) : false;
    
    detailsWishlistBtn.onclick = () => toggleFavorite(seriesId, detailsWishlistBtn);

    const favIcon = detailsWishlistBtn.querySelector('i');
    favIcon.classList.remove(isFav ? 'fa-regular' : 'fa-solid');
    favIcon.classList.add(isFav ? 'fa-solid' : 'fa-regular');
    
    if (isFav) {
        detailsWishlistBtn.classList.add('active');
    } else {
        detailsWishlistBtn.classList.remove('active');
    }

    // 4. Episodes Grid (calls the new flow)
    const episodesGrid = document.getElementById('episodesGrid');
    episodesGrid.innerHTML = '';
    series.episodes.forEach((url, index) => {
        const episodeNum = index + 1;
        const wrapper = document.createElement('div');
        wrapper.className = 'episode-btn-wrapper';
        
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart episode-heart';
        
        const btn = document.createElement('button');
        btn.className = 'episode-btn';
        btn.textContent = episodeNum;
        
        // NEW: Use the new playback flow
        btn.onclick = () => handlePlaybackFlow(seriesId, episodeNum);
        
        const heartBg = document.createElement('i');
        heartBg.className = 'fas fa-heart episode-heart-bg';
        
        wrapper.appendChild(heartBg);
        wrapper.appendChild(heart);
        wrapper.appendChild(btn);
        episodesGrid.appendChild(wrapper);
    });
    
    modalOverlay.style.display = 'flex';
    setTimeout(() => { modalOverlay.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeDetailsPage() {
    const modalOverlay = document.getElementById('detailsModalOverlay');
    modalOverlay.classList.remove('active');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
}

function handlePlaybackFlow(seriesId, episodeNum) {
    closeDetailsPage();
    setTimeout(() => {
        showWaitAndPlay(seriesId, episodeNum);
    }, 500);
}

function clearWaitTimer() {
    if (waitTimer) {
        clearInterval(waitTimer);
        waitTimer = null;
    }
}

function showWaitAndPlay(seriesId, episodeNum) {
    const waitModal = document.getElementById('waitModal');
    const countdownTimer = document.getElementById('countdownTimer');
    const watchButton = document.getElementById('watchButton');
    const waitTitle = document.getElementById('waitTitle');
    
    clearWaitTimer();
    
    waitTitle.textContent = 'جارٍ التحضير... يرجى الانتظار 5 ثواني';
    watchButton.classList.remove('visible');
    countdownTimer.style.display = 'flex';
    
    let count = 5;
    countdownTimer.textContent = count;
    
    waitModal.style.display = 'flex';
    setTimeout(() => { waitModal.classList.add('active'); }, 10);
    document.body.style.overflow = 'hidden';
    
    waitTimer = setInterval(() => {
        count--;
        countdownTimer.textContent = count;
        
        if (count <= 0) {
            clearInterval(waitTimer);
            countdownTimer.style.display = 'none';
            waitTitle.textContent = 'المشغل جاهز الآن!';
            watchButton.classList.add('visible');
            
            // Set up the final click action
            watchButton.onclick = () => {
                waitModal.classList.remove('active');
                setTimeout(() => {
                    waitModal.style.display = 'none';
                    playVideo(seriesId, episodeNum);
                }, 500);
            };
        }
    }, 1000);
}

function playVideo(seriesId, episodeNum) {
    const series = seriesData.find(s => s.id === seriesId);
    if (!series) return;

    currentPlayingSeriesId = seriesId;
    currentPlayingEpisode = episodeNum;
    
    // حفظ معلومات الحلقة للمشغلين
    window.currentVideoInfo = {
        seriesId: seriesId,
        episodeNum: episodeNum,
        videoId: getVideoId(series, episodeNum),
        episodeName: getEpisodeName(series, episodeNum)
    };
    
    // إظهار نافذة اختيار المشغل
    showPlayerSelection();
}

function getVideoId(series, episodeNum) {
    if (episodeNum === 0) {
        return series.trailerId;
    } else {
        if (series.episodes && series.episodes[episodeNum - 1]) {
            return series.episodes[episodeNum - 1];
        } else {
            console.error(`Video ID not found for series ${series.id}, episode ${episodeNum}`);
            return 'v3l908a'; // معرّف افتراضي
        }
    }
}

function getEpisodeName(series, episodeNum) {
    if (episodeNum === 0) {
        return 'التريلر';
    } else {
        return `الحلقة ${episodeNum}`;
    }
}

function showPlayerSelection() {
    const overlay = document.getElementById('playerSelectionOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
}

function closePlayerSelection() {
    const overlay = document.getElementById('playerSelectionOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 400);
    }
}

function selectPlayer(playerType) {
    closePlayerSelection();
    
    if (playerType === 'main') {
        playMainPlayer();
    } else if (playerType === 'rumble') {
        playRumblePlayer();
    }
}

function playMainPlayer() {
    const videoInfo = window.currentVideoInfo;
    if (!videoInfo) return;
    
    const series = seriesData.find(s => s.id === videoInfo.seriesId);
    if (!series) return;

    const videoPlayerContainer = document.getElementById('video_player_container');
    const videoPlayer = document.getElementById('videoPlayer');
    const currentEpisodeDescription = document.getElementById('episodeDescriptionBox');
    const prevBtn = document.getElementById('prevEpisodeBtn');
    const nextBtn = document.getElementById('nextEpisodeBtn');
    
    // مسح المشغل السابق
    videoPlayerContainer.innerHTML = '';
    
    // فحص أزرار التنقل
    prevBtn.disabled = videoInfo.episodeNum <= 1; // 1 هي الحلقة الأولى، 0 هو التريلر
    nextBtn.disabled = videoInfo.episodeNum >= series.episodes.length;

    // بناء رابط التضمين الجديد
    const embedUrl = `https://asktuobdz.lovable.app/embed/${videoInfo.videoId}`;

    // عرض وصف الحلقة
    let descriptionHTML = '';
    if (videoInfo.episodeNum > 0 && series.episodeDetails && series.episodeDetails[videoInfo.episodeNum - 1]) {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>${series.episodeDetails[videoInfo.episodeNum - 1]}</p>`;
    } else if (videoInfo.episodeNum === 0) {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>شاهد العرض التشويقي الرسمي للمسلسل.</p>`;
    } else {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>لا يتوفر وصف لهذه الحلقة.</p>`;
    }
    currentEpisodeDescription.innerHTML = descriptionHTML;

    // بناء iframe للمشغل
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player');
    iframe.setAttribute('src', embedUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    
    videoPlayerContainer.appendChild(iframe);
    
    videoPlayer.style.display = 'flex';
    setTimeout(() => videoPlayer.classList.add('active'), 10);
}

function playRumblePlayer() {
    const videoInfo = window.currentVideoInfo;
    if (!videoInfo) return;
    
    const series = seriesData.find(s => s.id === videoInfo.seriesId);
    if (!series) return;

    const videoPlayerContainer = document.getElementById('video_player_container');
    const videoPlayer = document.getElementById('videoPlayer');
    const currentEpisodeDescription = document.getElementById('episodeDescriptionBox');
    const prevBtn = document.getElementById('prevEpisodeBtn');
    const nextBtn = document.getElementById('nextEpisodeBtn');
    
    // مسح المشغل السابق
    videoPlayerContainer.innerHTML = '';
    
    // فحص أزرار التنقل
    prevBtn.disabled = videoInfo.episodeNum <= 1;
    nextBtn.disabled = videoInfo.episodeNum >= series.episodes.length;

    // عرض وصف الحلقة
    let descriptionHTML = '';
    if (videoInfo.episodeNum > 0 && series.episodeDetails && series.episodeDetails[videoInfo.episodeNum - 1]) {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>${series.episodeDetails[videoInfo.episodeNum - 1]}</p>`;
    } else if (videoInfo.episodeNum === 0) {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>شاهد العرض التشويقي الرسمي للمسلسل.</p>`;
    } else {
        descriptionHTML = `<h4>${series.title} - ${videoInfo.episodeName}:</h4><p>لا يتوفر وصف لهذه الحلقة.</p>`;
    }
    currentEpisodeDescription.innerHTML = descriptionHTML;

    // استخدام معرف المشغل الثاني (rumbleEpisodes)
    let rumbleVideoId = videoInfo.videoId; // المعرف الافتراضي
    
    if (videoInfo.episodeNum > 0 && series.rumbleEpisodes && series.rumbleEpisodes[videoInfo.episodeNum - 1]) {
        // استخدام معرف المشغل الثاني
        rumbleVideoId = series.rumbleEpisodes[videoInfo.episodeNum - 1];
    }
    
    // بناء iframe لمشغل Rumble
    const rumbleEmbedUrl = `https://rumble.com/embed/${rumbleVideoId}`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'askdiz-player');
    iframe.setAttribute('src', rumbleEmbedUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    
    videoPlayerContainer.appendChild(iframe);
    
    videoPlayer.style.display = 'flex';
    setTimeout(() => videoPlayer.classList.add('active'), 10);
}

function navigateEpisode(direction) {
    if (currentPlayingSeriesId !== null && currentPlayingEpisode !== null) {
        const series = seriesData.find(s => s.id === currentPlayingSeriesId);
        if (!series) return;
        
        let newEpisodeNum = currentPlayingEpisode + direction;

        // Check bounds (Trailer is 0, Episodes 1 to N)
        if (newEpisodeNum >= 0 && newEpisodeNum <= series.episodes.length) {
            // Close the player instantly
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.classList.remove('active');
            
            // Clear the player to stop playback
            document.getElementById('video_player_container').innerHTML = '';
            
            // Re-open the flow for the new episode
            setTimeout(() => {
                showWaitAndPlay(currentPlayingSeriesId, newEpisodeNum);
            }, 100); 
        }
    }
}

// MODIFIED: Close player to return to details page
function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPlayerContainer = document.getElementById('video_player_container');
    
    videoPlayerContainer.innerHTML = '';
    
    videoPlayer.classList.remove('active');
    
    // Check if we should return to the details page
    if (currentPlayingSeriesId !== null) {
        const seriesIdToReopen = currentPlayingSeriesId;
        
        // Reset tracking variables *before* closing entirely
        currentPlayingSeriesId = null;
        currentPlayingEpisode = null;
        
        // Close player visuals
        setTimeout(() => {
            videoPlayer.style.display = 'none';
            document.body.style.overflow = 'auto'; 
            // Open the details page after the player is closed
            if (typeof openDetailsPage === 'function') {
                openDetailsPage(seriesIdToReopen);
            }
        }, 500); 

    } else {
         // Normal closing if no series was playing 
        setTimeout(() => {
            videoPlayer.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }, 500);
    }
}

// --- NAVIGATION FUNCTIONS ---
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // منع التمرير عند فتح القائمة
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeNav() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const btn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// --- EXPORT NEW FUNCTIONS FOR GLOBAL ACCESS ---
window.loadMoreSeries = loadMoreSeries;
window.showPlayerSelection = showPlayerSelection;
window.closePlayerSelection = closePlayerSelection;
window.selectPlayer = selectPlayer;
window.playMainPlayer = playMainPlayer;
window.playRumblePlayer = playRumblePlayer;
function initializeEventListeners() {
    // Navigation Links
    document.getElementById('navHome').onclick = () => switchSection('series');
    document.getElementById('navSeries').onclick = () => switchSection('series');
    document.getElementById('navNewSeries').onclick = renderNewSeries;
    document.getElementById('navMostWatched').onclick = renderMostWatchedSeries;
    document.getElementById('navColorPicker').onclick = openColorPickerModal;
    
    // Auth and Favorites
    const favoritesNavBtn = document.getElementById('favoritesNavBtn');
    if (favoritesNavBtn) {
        favoritesNavBtn.onclick = checkAuthAndRenderFavorites;
    }

    // Search
    const searchInput = document.getElementById('seriesSearchInput');
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.onclick = performSearch;
    }
    if (searchInput) {
        searchInput.onkeyup = (event) => {
            if(event.key === 'Enter') performSearch();
        };
    }
    
    // Title Clickable Area
    if (clickableArea) {
        clickableArea.onclick = handleAskClick;
    }
}

// التحقق من تحميل DOM قبل التهيئة
document.addEventListener('DOMContentLoaded', async function() {
    try {
        loadTheme();
        initializeTitle();
        initializeColorPicker();
        initializeEventListeners();
        
        // تعتمد على دالة updateAuthLink في ملف auth.js
        if (typeof updateAuthLink === 'function') {
            updateAuthLink();
        }
        
        // تحميل أول 10 مسلسلات من series1.json
        seriesData = await loadSeriesFromFile(1);
        
        if (seriesData && seriesData.length > 0) {
            renderSeries(seriesData);
            console.log('✅ تم تحميل الصفحة الأولى من المسلسلات');
        } else {
            console.error('❌ فشل تحميل المسلسلات من series1.json');
        }
        
        console.log('✅ تم تهيئة الموقع بنجاح');
    } catch (error) {
        console.error('❌ خطأ في تهيئة الموقع:', error);
    }
});

// التأكد من إغلاق القائمة عند تغيير حجم الشاشة من موبايل إلى ديسكتوب
window.addEventListener('resize', () => {
    // إذا كان العرض أكبر من 1024 بكسل، تأكد من إغلاق القائمة الجانبية وإزالة فئة active
    if (window.innerWidth > 1024) {
        closeNav();
    }
});

// ===============================
// ACTORS FUNCTIONALITY
// ===============================

/**
 * عرض الممثلين في صفحة تفاصيل المسلسل
 * @param {number} seriesId - معرف المسلسل
 */
function displayActorsForSeries(seriesId) {
    const actorsGrid = document.getElementById('actorsGrid');
    if (!actorsGrid) return;
    
    // الحصول على الممثلين لهذا المسلسل
    const seriesActors = getActorsForSeries(seriesId);
    
    // إنشاء بطاقات الممثلين
    actorsGrid.innerHTML = '';
    
    seriesActors.forEach(actor => {
        const actorCard = createActorCard(actor);
        actorsGrid.appendChild(actorCard);
    });
}

/**
 * إنشاء بطاقة ممثل
 * @param {Object} actor - معلومات الممثل
 * @returns {HTMLElement} - عنصر HTML للبطاقة
 */
function createActorCard(actor) {
    const actorCard = document.createElement('div');
    actorCard.className = 'actor-card';
    actorCard.onclick = () => openActorModal(actor.id);
    
    actorCard.innerHTML = `
        <img src="${actor.image}" alt="${actor.name}" class="actor-avatar" onerror="this.src='https://via.placeholder.com/80x80/666666/ffffff?text=${encodeURIComponent(actor.name)}'">
        <h4 class="actor-name">${actor.name}</h4>
        <p class="actor-role">${actor.roleName}</p>
    `;
    
    return actorCard;
}

/**
 * فتح نافذة الممثل المنبثقة
 * @param {string} actorId - معرف الممثل
 */
function openActorModal(actorId) {
    const actor = getActorById(actorId);
    if (!actor) return;
    
    // تحديث معلومات الممثل في النافذة
    const actorModalAvatar = document.getElementById('actorModalAvatar');
    const actorModalName = document.getElementById('actorModalName');
    const actorModalNameEn = document.getElementById('actorModalNameEn');
    const actorModalBio = document.getElementById('actorModalBio');
    
    if (actorModalAvatar) {
        actorModalAvatar.src = actor.image;
        actorModalAvatar.onerror = () => {
            actorModalAvatar.src = `https://via.placeholder.com/120x120/666666/ffffff?text=${encodeURIComponent(actor.name)}`;
        };
    }
    
    if (actorModalName) actorModalName.textContent = actor.name;
    if (actorModalNameEn) actorModalNameEn.textContent = actor.nameEn;
    if (actorModalBio) actorModalBio.textContent = actor.bio;
    
    // تحديث قائمة المسلسلات
    displayActorSeries(actorId);
    
    // فتح النافذة
    const modalOverlay = document.getElementById('actorModalOverlay');
    if (modalOverlay) {
        modalOverlay.style.display = 'flex';
        setTimeout(() => { modalOverlay.classList.add('active'); }, 10);
        document.body.style.overflow = 'hidden';
    }
}

/**
 * عرض مسلسلات الممثل
 * @param {string} actorId - معرف الممثل
 */
function displayActorSeries(actorId) {
    const actorSeriesGrid = document.getElementById('actorSeriesGrid');
    if (!actorSeriesGrid) return;
    
    // الحصول على مسلسلات الممثل
    const actorSeries = getSeriesForActor(actorId);
    
    // إذا لم توجد مسلسلات، اعرض رسالة
    if (actorSeries.length === 0) {
        actorSeriesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-gray);">
                <i class="fas fa-tv" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3>لا توجد مسلسلات لهذا الممثل</h3>
                <p>سيتم تحديث المحتوى قريباً</p>
            </div>
        `;
        return;
    }
    
    // تقسيم المسلسلات: أول 4 في الأعلى، الباقي في الأسفل
    const topSeries = actorSeries.slice(0, 4);
    const bottomSeries = actorSeries.slice(4);
    
    // إنشاء التصميم الجديد
    actorSeriesGrid.innerHTML = `
        <div class="actor-series-section">
            <!-- العرض العادي في الأعلى -->
            <div class="actor-series-grid-top" id="actorSeriesTop">
                ${topSeries.map(series => createActorSeriesCardHTML(series)).join('')}
            </div>
            
            <!-- العرض بالتمرير في الأسفل -->
            ${bottomSeries.length > 0 ? `
                <div class="actor-series-grid-bottom">
                    <div class="actor-series-slider" id="actorSeriesSlider">
                        ${bottomSeries.map((series, index) => createActorSeriesSlideHTML(series, index)).join('')}
                        <!-- بطاقة موقع الأفلام -->
                        <div class="actor-movies-site-card" onclick="window.open('https://id-preview--ade74e2d-9472-46b0-b859-05333b895cd2.lovable.app/', '_blank')">
                            <div class="actor-movies-site-icon">
                                <i class="fas fa-film"></i>
                            </div>
                            <h3 class="actor-movies-site-title">موقع الأفلام</h3>
                            <p class="actor-movies-site-description">
                                اكتشف عالماً من الأفلام الرومانسية والمثيرة
                            </p>
                            <div class="actor-movies-site-badge">أفلام أجنبية</div>
                        </div>
                    </div>
                    
                    <!-- أزرار التنقل -->
                    <button class="actor-series-nav-btn prev" id="actorSeriesPrev" onclick="navigateActorSeries(-1)" style="display: none;">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <button class="actor-series-nav-btn next" id="actorSeriesNext" onclick="navigateActorSeries(1)" style="display: none;">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
            ` : `
                <!-- إذا لم توجد مسلسلات إضافية، اعرض بطاقة الموقع مباشرة -->
                <div class="actor-series-grid-bottom" style="padding: 20px; display: flex; justify-content: center;">
                    <div class="actor-movies-site-card" onclick="window.open('https://id-preview--ade74e2d-9472-46b0-b859-05333b895cd2.lovable.app/', '_blank')" style="flex: 0 0 400px; max-width: 400px;">
                        <div class="actor-movies-site-icon">
                            <i class="fas fa-film"></i>
                        </div>
                        <h3 class="actor-movies-site-title">موقع الأفلام</h3>
                        <p class="actor-movies-site-description">
                            اكتشف عالماً من الأفلام الرومانسية والمثيرة
                        </p>
                        <div class="actor-movies-site-badge">أفلام أجنبية</div>
                    </div>
                </div>
            `}
        </div>
    `;
    
    // تفعيل التنقل باللمس والتمرير الأفقي
    initializeHorizontalSlider();
}

/**
 * إنشاء HTML لبطاقة مسلسل
 * @param {Object} series - معلومات المسلسل
 * @returns {string} - HTML للبطاقة
 */
function createActorSeriesCardHTML(series) {
    return `
        <div class="actor-series-card" onclick="closeActorModal(); setTimeout(() => openDetailsPage('${series.id}'), 100);">
            <img src="${series.image}" alt="${series.title}" class="actor-series-image" onerror="this.src='https://via.placeholder.com/400x380/666666/ffffff?text=${encodeURIComponent(series.title)}'">
            <div class="actor-series-info">
                <h4 class="actor-series-title">${series.title}</h4>
                <p class="actor-series-role">الدور: ${series.actorRole}</p>
                <div class="actor-series-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                    <span style="margin-right: 10px;"><i class="fas fa-video"></i> ${series.episodes.length} حلقة</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * إنشاء HTML لبطاقة مسلسل في السلايدر
 * @param {Object} series - معلومات المسلسل
 * @param {number} index - فهرس البطاقة
 * @returns {string} - HTML للبطاقة
 */
function createActorSeriesSlideHTML(series, index) {
    return `
        <div class="actor-series-slide ${index === 0 ? 'active' : ''}" onclick="closeActorModal(); setTimeout(() => openDetailsPage('${series.id}'), 100);">
            <div class="actor-series-card">
                <img src="${series.image}" alt="${series.title}" class="actor-series-image" onerror="this.src='https://via.placeholder.com/280x380/666666/ffffff?text=${encodeURIComponent(series.title)}'">
                <div class="actor-series-info">
                    <h4 class="actor-series-title">${series.title}</h4>
                    <p class="actor-series-role">الدور: ${series.actorRole}</p>
                    <div class="actor-series-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                        <span style="margin-right: 10px;"><i class="fas fa-video"></i> ${series.episodes.length} حلقة</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * تفعيل السلايدر الأفقي مثل نتفليكس
 */
function initializeHorizontalSlider() {
    const slider = document.getElementById('actorSeriesSlider');
    if (!slider) return;
    
    let currentIndex = 0;
    let isScrolling = false;
    
    // مراقبة التمرير وتحديث البطاقات النشطة
    function updateActiveCards() {
        const slides = slider.querySelectorAll('.actor-series-slide');
        const containerWidth = slider.offsetWidth;
        const scrollLeft = slider.scrollLeft;
        const slideWidth = 280 + 15; // عرض البطاقة + الفجوة
        
        slides.forEach((slide, index) => {
            const slideStart = index * slideWidth;
            const slideEnd = slideStart + 280;
            const slideCenter = slideStart + 140;
            
            // تحديد البطاقة النشطة بناءً على موضع التمرير
            if (Math.abs(scrollLeft + containerWidth / 2 - slideCenter) < containerWidth / 2) {
                slide.classList.add('active');
                currentIndex = index;
            } else {
                slide.classList.remove('active');
            }
        });
        
        // إظهار/إخفاء أزرار التنقل
        updateNavigationButtons();
    }
    
    // أحداث التمرير
    slider.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(() => {
                updateActiveCards();
                isScrolling = false;
            });
        }
    });
    
    // تمرير سلس إلى البطاقة المحددة
    function smoothScrollTo(index) {
        const slideWidth = 280 + 15;
        const targetScroll = index * slideWidth;
        
        slider.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }
    
    // جعل الدوال متاحة عالمياً
    window.navigateActorSeries = function(direction) {
        const slides = slider.querySelectorAll('.actor-series-slide');
        if (slides.length === 0) return;
        
        let newIndex = currentIndex + direction;
        newIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
        
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            smoothScrollTo(currentIndex);
        }
    };
    
    // مراقبة التحميل الأولي
    setTimeout(updateActiveCards, 100);
    
    // تفعيل التمرير باللمس
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startTime = Date.now();
    });
    
    slider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const deltaTime = Date.now() - startTime;
        
        // التحقق من أن الحركة أفقية وسريعة
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50 && deltaTime < 300) {
            if (deltaX > 0) {
                navigateActorSeries(-1); // تمرير لليمين
            } else {
                navigateActorSeries(1);  // تمرير لليسار
            }
        }
    });
}

/**
 * إنشاء بطاقة مسلسل الممثل (دالة محتفظ بها للتوافق)
 * @param {Object} series - معلومات المسلسل
 * @returns {HTMLElement} - عنصر HTML للبطاقة
 */
function createActorSeriesCard(series) {
    const seriesCard = document.createElement('div');
    seriesCard.className = 'actor-series-card';
    seriesCard.onclick = () => {
        closeActorModal();
        setTimeout(() => openDetailsPage(series.id), 100);
    };
    
    seriesCard.innerHTML = `
        <img src="${series.image}" alt="${series.title}" class="actor-series-image" onerror="this.src='https://via.placeholder.com/200x120/666666/ffffff?text=${encodeURIComponent(series.title)}'">
        <div class="actor-series-info">
            <h4 class="actor-series-title">${series.title}</h4>
            <p class="actor-series-role">الدور: ${series.actorRole}</p>
            <div class="actor-series-meta">
                <span><i class="fas fa-calendar-alt"></i> ${series.year}</span>
                <span style="margin-right: 10px;"><i class="fas fa-video"></i> ${series.episodes.length} حلقة</span>
            </div>
        </div>
    `;
    
    return seriesCard;
}

/**
 * إغلاق نافذة الممثل
 */
function closeActorModal() {
    const modalOverlay = document.getElementById('actorModalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
}

// تحديث دالة عرض تفاصيل المسلسل لتشمل الممثلين
const originalOpenDetailsPage = openDetailsPage;
openDetailsPage = function(seriesId) {
    // تنفيذ الدالة الأصلية أولاً
    originalOpenDetailsPage(seriesId);
    
    // ثم إضافة الممثلين
    setTimeout(() => {
        displayActorsForSeries(seriesId);
    }, 100);
};

/**
 * تحديث حالة أزرار التنقل
 */
function updateNavigationButtons() {
    const slider = document.getElementById('actorSeriesSlider');
    const prevBtn = document.getElementById('actorSeriesPrev');
    const nextBtn = document.getElementById('actorSeriesNext');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const slides = slider.querySelectorAll('.actor-series-slide');
    if (slides.length === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }
    
    // حساب الحد الأقصى للتمرير
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;
    
    // تحديث حالة الأزرار
    prevBtn.style.display = currentScroll > 5 ? 'flex' : 'none';
    nextBtn.style.display = currentScroll < maxScroll - 5 ? 'flex' : 'none';
    
    // تحديث حالة الزر
    prevBtn.disabled = currentScroll <= 5;
    nextBtn.disabled = currentScroll >= maxScroll - 5;
}