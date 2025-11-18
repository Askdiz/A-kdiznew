// ملف بيانات الممثلين والمسلسلات التي شاركوا فيها

// قاعدة بيانات الممثلين
const actorsData = [
    {
        id: "ahmet_yilmaz",
        name: "أحمد يilmاز",
        nameEn: "Ahmet Yılmaz",
        image: "https://via.placeholder.com/200x200/4a90e2/ffffff?text=أحمد+يلماز",
        bio: "ممثل تركي مشهور بأدواره الدرامية القوية",
        socialMedia: {
            instagram: "@ahmetyilmaz",
            twitter: "@ahmetyilmaz_actor"
        }
    },
    {
        id: "zeynep_kaya",
        name: "زينب كايا",
        nameEn: "Zeynep Kaya",
        image: "https://via.placeholder.com/200x200/e91e63/ffffff?text=زينب+كايا",
        bio: "ممثلة تركية شابة موهوبة",
        socialMedia: {
            instagram: "@zeynepkaya",
            twitter: "@zeynepkaya_act"
        }
    },
    {
        id: "mehmet_demir",
        name: "محمد ديمير",
        nameEn: "Mehmet Demir",
        image: "https://via.placeholder.com/200x200/2c3e50/ffffff?text=محمد+ديمير",
        bio: "ممثل ومحاور تركي مشهور",
        socialMedia: {
            instagram: "@mehmetdemir",
            twitter: "@mehmetdemir_fan"
        }
    },
    {
        id: "elif_ozturk",
        name: "إليف أوزتورك",
        nameEn: "Elif Öztürk",
        image: "https://via.placeholder.com/200x200/9b59b6/ffffff?text=إليف+أوزتورك",
        bio: "ممثلة تركية رومانسية مبدعة",
        socialMedia: {
            instagram: "@elifozturk",
            twitter: "@elifozturk_love"
        }
    },
    {
        id: "can_arslan",
        name: "جان أرسلان",
        nameEn: "Can Arslan",
        image: "https://via.placeholder.com/200x200/f39c12/ffffff?text=جان+أرسلان",
        bio: "ممثل تركي كوميدي موهوب",
        socialMedia: {
            instagram: "@canarslan",
            twitter: "@canarslan_fun"
        }
    },
    {
        id: "ayse_kocaman",
        name: "آيشه كوجامان",
        nameEn: "Ayşe Kocaman",
        image: "https://via.placeholder.com/200x200/16a085/ffffff?text=آيشه+كوجامان",
        bio: "ممثلة تركية مخضرمة بأدوار متنوعة",
        socialMedia: {
            instagram: "@aysekocaman",
            twitter: "@aysekocaman_star"
        }
    },
    {
        id: "burak_yildirim",
        name: "براق يildيريم",
        nameEn: "Burak Yıldırım",
        image: "https://via.placeholder.com/200x200/e74c3c/ffffff?text=براق+يلدريم",
        bio: "ممثل تركي رياضي ومحارب",
        socialMedia: {
            instagram: "@burakyildirim",
            twitter: "@burakyildirim_act"
        }
    },
    {
        id: "selin_aydin",
        name: "سيلين آييدين",
        nameEn: "Selin Aydın",
        image: "https://via.placeholder.com/200x200/8e44ad/ffffff?text=سيلين+آييدين",
        bio: "ممثلة تركية رومانسية شابة",
        socialMedia: {
            instagram: "@selinaydin",
            twitter: "@selinaydin_fan"
        }
    }
];

// ربط الممثلين بمسلسلات محددة
const actorsInSeries = {
    // مسلسل حلم أشرف (ID: 1)
    1: [
        { actorId: "ahmet_yilmaz", roleName: "أشرف" },
        { actorId: "zeynep_kaya", roleName: "نيسان" },
        { actorId: "mehmet_demir", roleName: "سليم" },
        { actorId: "elif_ozturk", roleName: "ميرا" },
        { actorId: "can_arslan", roleName: "فادي" },
        { actorId: "ayse_kocaman", roleName: "أم زينب" },
        { actorId: "burak_yildirim", roleName: "رامز" },
        { actorId: "selin_aydin", roleName: "مريم" }
    ],
    
    // مسلسل الحب لا يفهم الكلام (ID: 2)
    2: [
        { actorId: "can_arslan", roleName: "مراد" },
        { actorId: "selin_aydin", roleName: "حياة" },
        { actorId: "mehmet_demir", roleName: "يوسف" },
        { actorId: "zeynep_kaya", roleName: "سارة" },
        { actorId: "burak_yildirim", roleName: "علي" },
        { actorId: "ayse_kocaman", roleName: "أم حياة" },
        { actorId: "elif_ozturk", roleName: "لينا" },
        { actorId: "ahmet_yilmaz", roleName: "حسام" }
    ],
    
    // مسلسل ورود ودنوب (ID: 3)
    3: [
        { actorId: "burak_yildirim", roleName: "جان" },
        { actorId: "elif_ozturk", roleName: "صانم" },
        { actorId: "zeynep_kaya", roleName: "إيرين" },
        { actorId: "can_arslan", roleName: "إيليف" },
        { actorId: "ahmet_yilmaz", roleName: "تينو" },
        { actorId: "ayse_kocaman", roleName: "أم صانم" },
        { actorId: "selin_aydin", roleName: "دنيز" },
        { actorId: "mehmet_demir", roleName: "أرات" }
    ],
    
    // مسلسل المحتالون (ID: 4)
    4: [
        { actorId: "mehmet_demir", roleName: "أرطغرل" },
        { actorId: "ayse_kocaman", roleName: "هلبه" },
        { actorId: "ahmet_yilmaz", roleName: "سولمان شاه" },
        { actorId: "zeynep_kaya", roleName: "السلطانة مالحة" },
        { actorId: "burak_yildirim", roleName: "أرنوت" },
        { actorId: "elif_ozturk", roleName: "أسن" },
        { actorId: "can_arslan", roleName: "دينيز بيه" },
        { actorId: "selin_aydin", roleName: "إيلالاي" }
    ],
    
    // مسلسل الخليفة (ID: 5)
    5: [
        { actorId: "ahmet_yilmaz", roleName: "إلهان" },
        { actorId: "zeynep_kaya", roleName: "آيشة" },
        { actorId: "elif_ozturk", roleName: "نور" },
        { actorId: "can_arslan", roleName: "بيرك" },
        { actorId: "burak_yildirim", roleName: "فائق" },
        { actorId: "selin_aydin", roleName: "سينم" },
        { actorId: "mehmet_demir", roleName: "متين" },
        { actorId: "ayse_kocaman", roleName: "أم آيشة" }
    ],
    
    // مسلسل الغرفة المزدوجة (ID: 6)
    6: [
        { actorId: "can_arslan", roleName: "إيليف" },
        { actorId: "selin_aydin", roleName: "ديلارا" },
        { actorId: "burak_yildirim", roleName: "توقاي" },
        { actorId: "zeynep_kaya", roleName: "نورا" },
        { actorId: "elif_ozturk", roleName: "ألين" },
        { actorId: "ahmet_yilmaz", roleName: "جومان" },
        { actorId: "ayse_kocaman", roleName: "أم ديلارا" },
        { actorId: "mehmet_demir", roleName: "تولجا" }
    ],
    
    // مسلسل ميرا وسليم (ID: 7)
    7: [
        { actorId: "zeynep_kaya", roleName: "ميرا" },
        { actorId: "ahmet_yilmaz", roleName: "سليم" },
        { actorId: "elif_ozturk", roleName: "لينا" },
        { actorId: "can_arslan", roleName: "أوميت" },
        { actorId: "burak_yildirim", roleName: "سادات" },
        { actorId: "selin_aydin", roleName: "فاهيرا" },
        { actorId: "ayse_kocaman", roleName: "أم ميرا" },
        { actorId: "mehmet_demir", roleName: "عبد الرحمن" }
    ]
};

// دوال مساعدة للوظائف
function getActorsForSeries(seriesId) {
    const seriesActors = actorsInSeries[seriesId] || [];
    return seriesActors.map(seriesActor => {
        const actorInfo = actorsData.find(actor => actor.id === seriesActor.actorId);
        return {
            ...actorInfo,
            roleName: seriesActor.roleName,
            seriesId: seriesId
        };
    });
}

function getSeriesForActor(actorId) {
    const actorSeries = [];
    
    Object.keys(actorsInSeries).forEach(seriesId => {
        const seriesActors = actorsInSeries[seriesId];
        const hasActor = seriesActors.some(seriesActor => seriesActor.actorId === actorId);
        
        if (hasActor) {
            const series = seriesData.find(s => s.id === parseInt(seriesId));
            if (series) {
                const actorRole = seriesActors.find(seriesActor => seriesActor.actorId === actorId);
                actorSeries.push({
                    ...series,
                    actorRole: actorRole.roleName
                });
            }
        }
    });
    
    return actorSeries;
}

function getActorById(actorId) {
    return actorsData.find(actor => actor.id === actorId);
}