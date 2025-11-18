// --- USER & AUTHENTICATION (LOCAL STORAGE) --- //

let loggedInUser = localStorage.getItem('loggedInUser');

function getAllUsers() {
    try {
        return JSON.parse(localStorage.getItem('users')) || {};
    } catch (error) {
        console.error('Error parsing users data:', error);
        return {};
    }
}

function saveAllUsers(users) {
    try {
        localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Error saving users data:', error);
    }
}

// دالة حساب مجموع النجوم (التقييمات) للمسلسل عبر جميع المستخدمين
function calculateTotalStars(seriesId) {
    try {
        let users = getAllUsers();
        let count = 0;
        for (const username in users) {
            // نتحقق مما إذا كان المسلسل ضمن تقييمات المستخدم (Rated)
            if (users[username].rated && users[username].rated.includes(seriesId)) {
                count++;
            }
        }
        return count;
    } catch (error) {
        console.error('Error calculating total stars:', error);
        return 0;
    }
}

function isSeriesFavorite(seriesId) {
    if (!loggedInUser) return false;
    try {
        let users = getAllUsers();
        let user = users[loggedInUser];
        return user && user.favorites && user.favorites.includes(seriesId);
    } catch (error) {
        console.error('Error checking if series is favorite:', error);
        return false;
    }
}

function hasUserRated(seriesId) {
    if (!loggedInUser) return false;
    try {
        let users = getAllUsers();
        let user = users[loggedInUser];
        return user && user.rated && user.rated.includes(seriesId);
    } catch (error) {
        console.error('Error checking if user has rated:', error);
        return false;
    }
}

function toggleFavorite(seriesId, buttonElement) {
    if (!loggedInUser) {
        openAuthModal();
        return;
    }
    try {
        seriesId = parseInt(seriesId);
        let users = getAllUsers();
        let user = users[loggedInUser];
        
        if (!user.favorites) {
            user.favorites = [];
        }

        const iconElement = buttonElement.querySelector('i');
        const index = user.favorites.indexOf(seriesId);
        let isCurrentlyFav;

        if (index > -1) {
            // Remove from favorites
            user.favorites.splice(index, 1);
            iconElement.classList.remove('fa-solid');
            iconElement.classList.add('fa-regular');
            buttonElement.classList.remove('active');
            isCurrentlyFav = false;
        } else {
            // Add to favorites
            user.favorites.push(seriesId);
            iconElement.classList.remove('fa-regular');
            iconElement.classList.add('fa-solid');
            buttonElement.classList.add('active');
            isCurrentlyFav = true;
        }

        saveAllUsers(users);
        
        // إذا كنا على صفحة المفضلة، نحدثها
        if (document.getElementById('favorites') && document.getElementById('favorites').style.display === 'block') {
            renderFavoritesPage();
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
        alert('حدث خطأ أثناء إضافة/إزالة المفضلة. يرجى المحاولة مرة أخرى.');
    }
}

function toggleStar(seriesId, buttonElement) {
    if (!loggedInUser) {
        openAuthModal();
        return;
    }
    try {
        seriesId = parseInt(seriesId);
        let users = getAllUsers();
        let user = users[loggedInUser];
        
        if (!user.rated) {
            user.rated = [];
        }

        const index = user.rated.indexOf(seriesId);

        if (index > -1) {
            // Remove rating
            user.rated.splice(index, 1);
            buttonElement.classList.remove('rated');
        } else {
            // Add rating
            user.rated.push(seriesId);
            buttonElement.classList.add('rated');
        }

        saveAllUsers(users);
        
        // Update star count and re-render series grid if needed
        const starCountDisplay = document.getElementById('starCountDisplay');
        if (starCountDisplay) {
            starCountDisplay.textContent = `(${calculateTotalStars(seriesId)} نجمة)`;
        }
        
        // Re-render the main series grid to update star counts on cards
        if (typeof renderSeries === 'function' && typeof seriesData !== 'undefined') {
            // نستخدم الترتيب الافتراضي (غير مرتب) لإعادة العرض بعد التقييم
            renderSeries(seriesData);
        }
    } catch (error) {
        console.error('Error toggling star:', error);
        alert('حدث خطأ أثناء تقييم المسلسل. يرجى المحاولة مرة أخرى.');
    }
}

// --- AUTH MODAL LOGIC --- //

function openAuthModal() {
    if (loggedInUser) {
        alert(`أنت مسجل الدخول باسم: ${loggedInUser}`);
        return;
    }
    
    const authModal = document.getElementById('authModalOverlay');
    const authMessage = document.getElementById('authMessage');
    const authUsername = document.getElementById('authUsername');
    const authPassword = document.getElementById('authPassword');
    
    if (authModal) {
        if (authMessage) authMessage.textContent = '';
        if (authUsername) authUsername.value = '';
        if (authPassword) authPassword.value = '';
        
        authModal.style.display = 'flex';
        setTimeout(() => { 
            if (authModal) authModal.classList.add('active'); 
        }, 10);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModalOverlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => { 
            modal.style.display = 'none'; 
        }, 500);
    }
}

function isUserLoggedIn() {
    return !!loggedInUser;
}

function updateAuthLink() {
    // تحديث زر الحساب في القائمة الجانبية
    const accountButton = document.getElementById('accountButton');
    const accountInfo = document.getElementById('accountInfo');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (accountButton) {
        if (loggedInUser) {
            // استخدام أيقونة Google Material Design
            accountButton.innerHTML = `<i class="material-icons">account_circle</i>`; 
            accountButton.title = `${loggedInUser} (مستخدم مسجل)`;
            accountButton.onclick = null; // تعطيل النقر عند تسجيل الدخول
            
            // إظهار معلومات المستخدم
            if (userNameDisplay) {
                userNameDisplay.textContent = loggedInUser;
            }
            if (accountInfo) {
                accountInfo.style.display = 'block';
            }
        } else {
            accountButton.innerHTML = `<i class="material-icons">account_circle</i>`;
            accountButton.title = `تسجيل الدخول`;
            accountButton.onclick = openAuthModal;
            
            // إخفاء معلومات المستخدم
            if (accountInfo) {
                accountInfo.style.display = 'none';
            }
        }
    }
    
    // إخفاء/إظهار زر المفضلة في القائمة الجانبية
    const favoritesNavBtn = document.getElementById('favoritesNavBtn');
    if (favoritesNavBtn) {
        favoritesNavBtn.style.display = loggedInUser ? 'block' : 'none';
    }
}

function handleAuth() {
    const usernameInput = document.getElementById('authUsername');
    const passwordInput = document.getElementById('authPassword');
    const messageElement = document.getElementById('authMessage');

    if (!usernameInput || !passwordInput || !messageElement) {
        console.error('Auth form elements not found');
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        messageElement.textContent = 'يرجى ملء جميع الحقول.';
        return;
    }
    
    // التحقق من النمط (أحرف إنجليزية وأرقام فقط)
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        messageElement.textContent = 'اسم المستخدم يجب أن يحتوي على أحرف إنجليزية وأرقام فقط.';
        return;
    }

    try {
        let users = getAllUsers();

        if (users[username]) {
            // تسجيل الدخول
            if (users[username].password === password) {
                loggedInUser = username;
                localStorage.setItem('loggedInUser', username);
                messageElement.textContent = `تم تسجيل الدخول بنجاح باسم: ${username}`;
                setTimeout(() => {
                    closeAuthModal();
                    updateAuthLink();
                }, 1000);
            } else {
                messageElement.textContent = 'كلمة المرور غير صحيحة.';
            }
        } else {
            // تسجيل مستخدم جديد
            users[username] = { 
                password: password, 
                favorites: [],
                rated: [] // Add rated array for star tracking
            };
            saveAllUsers(users);
            loggedInUser = username;
            localStorage.setItem('loggedInUser', username);
            messageElement.textContent = `تم إنشاء حساب وتسجيل الدخول بنجاح باسم: ${username}`;
            setTimeout(() => {
                closeAuthModal();
                updateAuthLink();
            }, 1000);
        }
    } catch (error) {
        console.error('Auth error:', error);
        messageElement.textContent = 'حدث خطأ. يرجى المحاولة مرة أخرى.';
    }
}

function handleLogout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        try {
            loggedInUser = null;
            localStorage.removeItem('loggedInUser');
            updateAuthLink();
            
            // العودة إلى صفحة المسلسلات وإخفاء المفضلة
            if (typeof switchSection === 'function') {
                switchSection('series');
            }
            alert('تم تسجيل الخروج بنجاح.');
        } catch (error) {
            console.error('Logout error:', error);
            alert('حدث خطأ أثناء تسجيل الخروج. يرجى إعادة تحميل الصفحة.');
        }
    }
}

// وظيفة تحقق من تسجيل الدخول قبل عرض المفضلة
function checkAuthAndRenderFavorites() {
    if (isUserLoggedIn()) {
        if (typeof renderFavoritesPage === 'function') {
            renderFavoritesPage();
        }
    } else {
        openAuthModal();
    }
}

// دالة عرض صفحة المفضلة
function renderFavoritesPage() {
    try {
        if (typeof switchSection === 'function') {
            switchSection('favorites');
        }
        
        const favoritesGrid = document.getElementById('favoritesGrid');
        const noFavoritesMessage = document.getElementById('noFavoritesMessage');
        
        if (typeof seriesData !== 'undefined') {
            const favoriteSeries = seriesData.filter(series => isSeriesFavorite(series.id));
            
            if (favoritesGrid) {
                if (favoriteSeries.length === 0) {
                    if (noFavoritesMessage) {
                        noFavoritesMessage.style.display = 'block';
                    }
                    favoritesGrid.innerHTML = '';
                    return;
                } else {
                    if (noFavoritesMessage) {
                        noFavoritesMessage.style.display = 'none';
                    }
                }

                // عرض الكاردات في صفحة المفضلة
                favoritesGrid.innerHTML = favoriteSeries.map(series => {
                    const totalStars = calculateTotalStars(series.id);
                    return `
                        <div class="search-heart-card" onclick="openDetailsPage(${series.id}); switchSection('series');">
                            <div class="search-heart-wrapper">
                                <i class="fas fa-heart search-heart" style="color: var(--primary-red);"></i>
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
        }
    } catch (error) {
        console.error('Error rendering favorites page:', error);
        alert('حدث خطأ أثناء عرض قائمة المفضلة.');
    }
}

function handleLogout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        try {
            loggedInUser = null;
            localStorage.removeItem('loggedInUser');
            updateAuthLink();
            
            // العودة إلى صفحة المسلسلات وإخفاء المفضلة
            if (typeof switchSection === 'function') {
                switchSection('series');
            }
            alert('تم تسجيل الخروج بنجاح.');
        } catch (error) {
            console.error('Logout error:', error);
            alert('حدث خطأ أثناء تسجيل الخروج. يرجى إعادة تحميل الصفحة.');
        }
    }
}

// تصدير الدوال للاستخدام في ملفات أخرى
window.updateAuthLink = updateAuthLink;
window.handleAuth = handleAuth;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.checkAuthAndRenderFavorites = checkAuthAndRenderFavorites;
window.isUserLoggedIn = isUserLoggedIn;
window.calculateTotalStars = calculateTotalStars;
window.isSeriesFavorite = isSeriesFavorite;
window.hasUserRated = hasUserRated;
window.toggleFavorite = toggleFavorite;
window.toggleStar = toggleStar;
window.renderFavoritesPage = renderFavoritesPage;
window.handleLogout = handleLogout;