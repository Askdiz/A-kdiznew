// --- DATA SETUP: UPDATED EPISODE COUNTS --- //

// Helper function to generate placeholders
const createPlaceholders = (start, count, seriesTitle) => {
    const episodes = [];
    const details = [];
    for (let i = start; i < start + count; i++) {
        // Placeholder ID for missing Rumble links
        episodes.push(`placeholder_e${i}`);
        details.push(`الحلقة ${i}: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل ${seriesTitle}.`);
    }
    return { episodes, details };
};

// Series Data (Updated with new episode counts)
const seriesData = [
    {
        id: 1,
        title: "حلم اشرف",
        titleEn: "Eşref'in rüyası",
        image: "https://3esk.onl/wp-content/uploads/2025/09/esref-ruya-2.jpg",
        description: "انضم أشرف إلى المافيا وأصبح أحد أقوى رجالها، بينما يواصل بحثه لسنوات عن فتاة حلم بها وأسماها رؤيا. يقع في حب نيسان، دون أن يدرك أنها هي نفسها رؤيا، وأنها تعمل سراً كمخبرة للشرطة، ليجد نفسه عالقًا بين الحب والخيانة والصراع...",
        
        // المشغل الأول (الأساسي)
        episodes: [
            "AE7PZDK1",
            "AE7PZDK1",
            "v3l9494",
            "v3l94b8"
        ],
        
        // المشغل الثاني (Rumble)
        rumbleEpisodes: [
            "v6z5ujg",      // الحلقة 1 - المشغل الثاني (كما طلبت)
            "AE7PZDK1",     // الحلقة 2 - المشغل الثاني (استخدمت المعرف الموجود)
            "v9a2b3c",      // الحلقة 3 - مشغل ثاني
            "v4d5e6f"       // الحلقة 4 - مشغل ثاني
        ],
        
        episodeDetails: [
            "الحلقة 1: البداية القاسية. يدخل أشرف عالم المافيا ويبدأ حلمه برؤيا.",
            "الحلقة 2: لقاء نيسان. يلتقي أشرف بنيسان دون أن يعرف حقيقتها.",
            "الحلقة 3: الحقيقة المخفية. تبدأ نيسان بجمع المعلومات، ويزداد حب أشرف لها.",
            "الحلقة 4: الخيانة والصراع. يكتشف أشرف حقيقة نيسان وتبدأ المواجهة.",
        ],
        year: 2024,
        trailerId: "AE7PZDK1",
        isNew: true
    },
    {
        id: 2,
        title: "الحب لا يفهم الكلام",
        titleEn: "Aşk Laftan Anlamaz",
        image: "https://3esk.onl/wp-content/uploads/2025/09/ask-laftan-anlamaz-poster.jpg",
        description: "القصة تدور حول حياة، فتاة جميلة ومرحة تنتقل من الريف إلى اسطنبول وتبحث عن عمل في أقل من 24 ساعة لكي لا تجبرها عائلتها على العودة إلى القرية. وخلال بحثها تجد نفسها في صراع مع رئيسها (مراد) الوسيم لكنهما يقعان في الحب وتتوالى الأحداث الشيقة.",
        episodes: [
            "v3l908a",
            "AE7PZDK1"
        ],
        episodeDetails: [
            "الحلقة 1: حياة في اسطنبول. تبدأ حياة رحلة البحث عن عمل وتصطدم بـ مراد.",
            "الحلقة 2: سوء التفاهم. يتصاعد التوتر بين حياة ومراد بسبب سوء تفاهم كبير.",
        ],
        year: 2016,
        trailerId: "v3l924k",
        isNew: false
    },
    {
        id: 3,
        title: "ورود ودنوب",
        titleEn: "Güller ve günahlar",
        image: "https://3esk.onl/wp-content/uploads/2025/09/guller-ve-gunahlar-1.jpg",
        description: "القصة تدور حول الفتاة الجميلة صانم (ديميت أوزديمير) التي تعمل في متجر بقالة والدها وتضطر للبحث عن عمل بعدما وضع والدها حداً لعملها في البقالة، لتعمل في وكالة إعلانات حيث تلتقي بـ جان (جان يامان) المصور المشهور والمتهور، ويقعان في علاقة حب كوميدية مليئة بالمغامرات.",
        episodes: [
            "v3l97u6",
            "v3l983a",
            "v3l98b4"
        ],
        episodeDetails: [
            "الحلقة 1: بداية المغامرة. تنتقل صانم للعمل في وكالة الإعلانات وتلتقي بجان للمرة الأولى.",
            "الحلقة 2: كذبة صغيرة. تقع صانم في كذبة صغيرة للحفاظ على وظيفتها.",
            "الحلقة 3: ليلة الأوبرا. يقضي جان وصانم ليلة مليئة بالأحداث الغريبة في الأوبرا.",
        ],
        year: 2018,
        trailerId: "v3l98v6",
        isNew: false
    },
    {
        id: 4,
        title: "المحتالون",
        titleEn: "dolandırıcılar",
        image: "https://3esk.onl/wp-content/uploads/2025/10/Muhtaloun-long-isimsiz.jpg",
        description: "مسلسل تاريخي تركي يروي قصة الغازي أرطغرل، والد عثمان الأول مؤسس الدولة العثمانية. يعرض المسلسل رحلة أرطغرل في البحث عن وطن لقبيلته، ويصوّر صراعه مع الخونة والصليبيين والمغول. ملحمة تاريخية ضخمة تظهر قيم الشجاعة والعدالة...",
        episodes: [
            "v3la0a4",
            "v3la0f2",
            "v3la0k8",
            "v3la0q4",
            "v3la0v2"
        ],
        episodeDetails: [
            "الحلقة 1: ميلاد الأسطورة. يواجه أرطغرل تحديات القبيلة الأولى.",
            "الحلقة 2: خيانة القلعة. يكشف أرطغرل أول مؤامرة ضده.",
            "الحلقة 3: السهم القاتل. معركة كبرى تقلب موازين القوى.",
            "الحلقة 4: طريق الهجرة. يبدأ أرطغرل رحلة البحث عن أرض جديدة.",
            "الحلقة 5: المؤسس. يضع أرطغرل اللبنة الأولى للدولة.",
        ],
        year: 2014,
        trailerId: "v3la1i8",
        isNew: false
    },
    // --- المسلسلات الجديدة 2025 ---
    {
        id: 5,
        title: "الخليفة: نداء الجذور",
        titleEn: "Halef: Köklerin Çağrısı",
        image: "https://placeholder.com/image/halef.jpg",
        description: "مسلسل درامي تركي عُرض لأول مرة في سبتمبر 2025، من بطولة إلهان شان وأيبوكي بوسات وبيران داملا يلماز.",
        episodes: ["v3lB101", "v3lB102"],
        episodeDetails: ["الحلقة 1: الانطلاق. تبدأ رحلة كشف الأسرار والجذور.", "الحلقة 2: الماضي يطرق الباب. أولى الصدامات بين الشخصيات."],
        year: 2025,
        trailerId: "v3lB1T1",
        isNew: true
    },
    {
        id: 6,
        title: "الغرفة المزدوجة",
        titleEn: "Çifte Oda",
        image: "https://placeholder.com/image/cifteoda.jpg",
        description: "مسلسل صيفي رومانسي كوميدي مقتبس عن المسلسل الكوري 'كينج ذا لاند'، يجمع بين الرومانسية والكوميديا.",
        episodes: ["v3lC201", "v3lC202"],
        episodeDetails: ["الحلقة 1: أول لقاء. تبدأ المواقف الكوميدية بين البطلين.", "الحلقة 2: سوء تفاهم رومانسي. محاولة فاشلة للتفاهم."],
        year: 2025,
        trailerId: "v3lC2T1",
        isNew: true
    },
    {
        id: 7,
        title: "ميرا وسليم",
        titleEn: "Meyra ve Selim",
        image: "https://placeholder.com/image/meyraselim.jpg",
        description: "مسلسل درامي رومانسي، وهو نسخة تركية من الدراما الكورية الشهيرة 'ملكة الدموع'. يحكي قصة وريثة غنية تعمل متخفية وتقع في حب محامٍ.",
        episodes: ["v3lD301", "v3lD302"],
        episodeDetails: ["الحلقة 1: الهوية المخفية. عودة ميرا من أمريكا وبداية عملها السري.", "الحلقة 2: انجذاب غير متوقع. لقاء ميرا وسليم الأول."],
        year: 2025,
        trailerId: "v3lD3T1",
        isNew: true
    },
    {
        id: 8,
        title: "الغريب الذي في المرآة",
        titleEn: "Aynadaki Yabancı",
        image: "https://placeholder.com/image/aynadakiyabanci.jpg",
        description: "دراما تحكي عن رجل غامض يدخل حياة امرأة وتتقاطع مصائرهما بطريقة تغير حياتها، وتكشف جوانب مظلمة في ماضيها.",
        episodes: ["v3lE401", "v3lE402"],
        episodeDetails: ["الحلقة 1: المدخل الغامض. ظهور الرجل الغريب في حياة البطلة.", "الحلقة 2: تقاطع الطرق. بداية الكشف عن الأسرار المشتركة."],
        year: 2025,
        trailerId: "v3lE4T1",
        isNew: true
    },
    {
        id: 9,
        title: "الاراضي الغاضبة",
        titleEn: "Kızgın Topraklar",
        image: "https://placeholder.com/image/kizgintopraklar.jpg",
        description: "دراما تدور حول 'أيلول' التي تخلت عن أحلامها من أجل الحب، و 'رأس' الذي حارب عائلته لأجلها، ويواجهان قوى قاسية من الماضي.",
        episodes: ["v3lF501"],
        episodeDetails: ["الحلقة 1: ضريبة الحب. المواجهة الأولى مع ماضي العائلتين."],
        year: 2025,
        trailerId: "v3lF5T1",
        isNew: true
    },
    {
        id: 10,
        title: "كان يا مكان في إسطنبول",
        titleEn: "Bir Zamanlar İstanbul",
        image: "https://placeholder.com/image/birzamanlar.jpg",
        description: "قصة تتقاطع فيها طرق بطل يسعى للعدالة مع صحفية شجاعة. يدور العمل حول تساؤل: هل المجتمع أم الاختيار الشخصي هو ما يدفع الإنسان للجريمة؟",
        episodes: ["v3lG601"],
        episodeDetails: ["الحلقة 1: البحث عن العدالة. لقاء البطل والصحفية وبداية رحلة النضال."],
        year: 2025,
        trailerId: "v3lG6T1",
        isNew: true
    },
    {
        id: 11,
        title: "الزوجة الأخرى",
        titleEn: "Diğer Eş",
        image: "https://placeholder.com/image/digeres.jpg",
        description: "دراما اجتماعية عن صراعات عائلية معقدة.",
        episodes: ["v3lH701"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الزوجة الأخرى."],
        year: 2025,
        trailerId: "v3lH7T1",
        isNew: true
    },
    {
        id: 12,
        title: "الكذبة",
        titleEn: "Yalan",
        image: "https://placeholder.com/image/yalan.jpg",
        description: "مسلسل درامي عن مليكة، امرأة تسجن ظلمًا لمدة 20 عامًا، وتكتشف بعد خروجها كذبة كبيرة تخص ابنتها ستغير كل شيء.",
        episodes: ["v3lI801"],
        episodeDetails: ["الحلقة 1: الخروج. خروج مليكة من السجن وبداية مواجهة العالم الجديد."],
        year: 2025,
        trailerId: "v3lI8T1",
        isNew: true
    },
    {
        id: 13,
        title: "لا تبكي إسطنبول",
        titleEn: "Sen Ağlama İstanbul",
        image: "https://placeholder.com/image/senaglama.jpg",
        description: "دراما شائقة تدور أحداثها بين الحب والصراعات.",
        episodes: ["v3lJ901"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل لا تبكي إسطنبول."],
        year: 2025,
        trailerId: "v3lJ9T1",
        isNew: true
    },
    {
        id: 14,
        title: "ألف ليلة وليلة (مسلسل)",
        titleEn: "Binbir Gece Masalları",
        image: "https://placeholder.com/image/binbirgece.jpg",
        description: "من المتوقع أن يكون من أكثر المسلسلات ترقبًا، يحكي عن شهريار الذي يلتقي بشهرزاد، التي تُحدث تحولاً في حياته من خلال قصصها المليئة بالحكمة.",
        episodes: ["v3lK1001"],
        episodeDetails: ["الحلقة 1: البداية. أول لقاء بين شهريار وشهرزاد."],
        year: 2025,
        trailerId: "v3lK10T1",
        isNew: true
    },
    {
        id: 15,
        title: "قطرات الثلج",
        titleEn: "Kardelenler",
        image: "https://placeholder.com/image/kardelenler.jpg",
        description: "مسلسل درامي جديد يترقبه الجمهور.",
        episodes: ["v3lL1101"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل قطرات الثلج."],
        year: 2025,
        trailerId: "v3lL11T1",
        isNew: true
    },
    {
        id: 16,
        title: "المال القديم",
        titleEn: "Eski Para",
        image: "https://placeholder.com/image/eskipara.jpg",
        description: "مسلسل درامي جديد يركز على قضايا المال والسلطة.",
        episodes: ["v3lM1201"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل المال القديم."],
        year: 2025,
        trailerId: "v3lM12T1",
        isNew: true
    },
    // --- تكملة المسلسلات الوهمية للوصول إلى 20 مسلسلًا جديدًا (من 17 إلى 20) ---
    {
        id: 17,
        title: "المدينة المخفية",
        titleEn: "Gizli Şehir",
        image: "https://placeholder.com/image/gidis.jpg",
        description: "دراما إثارة وغموض حول مدينة تبدو مثالية ولكنها تخفي أسراراً مرعبة.",
        episodes: ["v3lN1301"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل المدينة المخفية."],
        year: 2025,
        trailerId: "v3lN13T1",
        isNew: true
    },
    {
        id: 18,
        title: "أطفال الجنة",
        titleEn: "Cennetin Çocukları",
        image: "https://placeholder.com/image/ocak.jpg",
        description: "دراما اجتماعية مؤثرة عن قصة أطفال واجهوا صعوبات الحياة.",
        episodes: ["v3lO1401"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل أطفال الجنة."],
        year: 2025,
        trailerId: "v3lO14T1",
        isNew: true
    },
    {
        id: 19,
        title: "الظل والنور",
        titleEn: "Gölge ve Işık",
        image: "https://placeholder.com/image/golge.jpg",
        description: "قصة حب معقدة بين شخصيتين متناقضتين تماماً يجمعهما القدر.",
        episodes: ["v3lP1501"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الظل والنور."],
        year: 2025,
        trailerId: "v3lP15T1",
        isNew: true
    },
    {
        id: 20,
        title: "طريق الذئاب",
        titleEn: "Kurtların Yolu",
        image: "https://placeholder.com/image/kurtlar.jpg",
        description: "مسلسل أكشن وإثارة حول عالم المافيا والصراعات على السلطة.",
        episodes: ["v3lQ1601"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل طريق الذئاب."],
        year: 2025,
        trailerId: "v3lQ16T1",
        isNew: true
    },
    {
        id: 21,
        title: "الرحلة الأخيرة",
        titleEn: "Son Yolculuk",
        image: "https://placeholder.com/image/son.jpg",
        description: "دراما نفسية تتناول قصة أشخاص في رحلة مصيرية لا عودة منها.",
        episodes: ["v3lR1701"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل الرحلة الأخيرة."],
        year: 2025,
        trailerId: "v3lR17T1",
        isNew: true
    },
    {
        id: 22,
        title: "قلعة الأسرار",
        titleEn: "Sırların Kalesi",
        image: "https://placeholder.com/image/sir.jpg",
        description: "مسلسل تاريخي يروي قصصاً من القرون الوسطى المليئة بالمكائد والحب.",
        episodes: ["v3lS1801"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل قلعة الأسرار."],
        year: 2025,
        trailerId: "v3lS18T1",
        isNew: true
    },
    {
        id: 23,
        title: "العهد المنسي",
        titleEn: "Unutulmuş Söz",
        image: "https://placeholder.com/image/unut.jpg",
        description: "دراما رومانسية عن عهد قديم بين عائلتين يعود ليلاحق الجيل الجديد.",
        episodes: ["v3lT1901"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل العهد المنسي."],
        year: 2025,
        trailerId: "v3lT19T1",
        isNew: true
    },
    {
        id: 24,
        title: "إيقاع الحياة",
        titleEn: "Hayatın Ritmi",
        image: "https://placeholder.com/image/hayat.jpg",
        description: "قصة ملهمة حول موسيقيين شباب يسعون لتحقيق أحلامهم في إسطنبول.",
        episodes: ["v3lU2001"],
        episodeDetails: ["الحلقة 1: لا يتوفر وصف مفصل لهذه الحلقة من مسلسل إيقاع الحياة."],
        year: 2025,
        trailerId: "v3lU20T1",
        isNew: true
    }
];

// إضافة 36 حلقة وهمية للمسلسل الأخير
const placeholderData = createPlaceholders(6, 36, seriesData[3].title);
seriesData[3].episodes.push(...placeholderData.episodes);
seriesData[3].episodeDetails.push(...placeholderData.details);

// إضافة حلقات وهمية للمسلسل رقم 5
const placeholderData5 = createPlaceholders(3, 5, seriesData[4].title);
seriesData[4].episodes.push(...placeholderData5.episodes);
seriesData[4].episodeDetails.push(...placeholderData5.details);

// إضافة حلقات وهمية للمسلسل رقم 6
const placeholderData6 = createPlaceholders(3, 3, seriesData[5].title);
seriesData[5].episodes.push(...placeholderData6.episodes);
seriesData[5].episodeDetails.push(...placeholderData6.details);

// إضافة حلقات وهمية للمسلسل رقم 7
const placeholderData7 = createPlaceholders(3, 5, seriesData[6].title);
seriesData[6].episodes.push(...placeholderData7.episodes);
seriesData[6].episodeDetails.push(...placeholderData7.details);

// إضافة حلقات وهمية للمسلسل رقم 8
const placeholderData8 = createPlaceholders(3, 5, seriesData[7].title);
seriesData[7].episodes.push(...placeholderData8.episodes);
seriesData[7].episodeDetails.push(...placeholderData8.details);