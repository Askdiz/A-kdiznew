// ملف بيانات الممثلين والمسلسلات التي شاركوا فيها

// قاعدة بيانات الممثلين
const actorsData = [
    {
        id: "Çağatay_Ulusoy",
        name: "شتاي أولساي",
        nameEn: "Çağatay Ulusoy",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763433057161_nzmqub.png",
        bio: "شتاي أولساي ممثل تركي يتمتع بحضور قوي وجاذبية لافتة، يجمع بين الهيبة والهدوء في ملامحه وطريقة حديثه. يمتلك قدرة فريدة على تجسيد الشخصيات الصعبة بعمق يجعل المشاهد يعيش معها لحظة بلحظة. نظرته الحادة وأسلوبيته المتزنة تمنحه حضورًا لا يمكن تجاهله، وفي كل ظهور له يضيف لمسة خاصة تجعل أداءه أكثر تأثيرًا وواقعية. إنه ممثل يترك بصمة واضحة ويصنع من كل دور يقدمه لحظة تستحق التذكر.",
        socialMedia: {
            instagram: "@Cağatay_Uluso",
            twitter: "@Çağatay_Uluso"
        }
    },
    {
        id: "Demet_Özdemir",
        name: "ديميت اوزديمير",
        nameEn: "Demet Özdemir",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763480232932_kfpuc.png",
        bio: "ديميت أوزدمير ممثلة تركية تتميز بجمال ساحر وحضور آسر يجذب الأنظار أينما ظهرت، تمتلك ملامح أنيقة وتعبيرًا يجمع بين القوة والرقة، مما يمنحها قدرة خاصة على تجسيد الشخصيات بعمق وإحساس عالٍ. حضورها على الشاشة يشبه الضوء الذي يلفت الانتباه دون أي مجهود، وأسلوبها في الأداء ينبض بالعفوية والصدق، يجعل المشاهد يعيش تفاصيل الدور معها بكل مشاعره. هي نجمة تجمع الروح الجميلة بالشخصية القوية في مظهر واحد، وتترك دائمًا انطباعًا لا ينسى في كل عمل تقدمه.",
        socialMedia: {
            instagram: "@Demet_Özdemir",
            twitter: "@Demet_Özdemir"
        }
    },
    {
        id: "Necip_Memili",
        name: "نجيب ميميلي",
        nameEn: "Necip Memili",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763480486523_dva9u.png",
        bio: "ممثل صاحب حضور ثقيل ونبرة قوية، يجيد أدوار الهيبة والسطوة، ويمنح شخصياته واقعية تُشعر المشاهد أنه أمام شخصية حقيقية لا مجرد تمثيل.",
        socialMedia: {
            instagram: "@Necip_Memili",
            twitter: "@Necip_Memili"
        }
    },
    {
        id: "Büşra_Develi",
        name: "بشرى ديفيلي",
        nameEn: "Büşra Develi",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763480678262_l0h8v9.png",
        bio: "ممثلة راقية المظهر والأداء، تجمع بين الجمال الهادئ والتعبير العميق، وتتميز بحضور سينمائي يعطي قوة لأي مشهد تشارك فيه.",
        socialMedia: {
            instagram: "@Büşra_Develi",
            twitter: "@BüşraDeveli"
        }
    },
    {
        id: "Tolga_Tekin",
        name: "تولغا تيكين",
        nameEn: "Tolga Tekin",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763480904199_u5a2nl.png",
        bio: "صاحب أداء ناضج وحضور مميز، يجيد تقديم الشخصيات المركّبة ذات الخلفيات الثقيلة، ويترك دائمًا أثرًا واضحًا على سير القصة.",
        socialMedia: {
            instagram: "@TolgaTekin",
            twitter: "@Tolga_Tekin"
        }
    },
    {
        id: "Ahmet_Rıfat_Şungar",
        name: "احمد رفاعت شونغار",
        nameEn: "Ahmet Rıfat Şungar",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763481143133_vy00b.png",
        bio: "ممثل صاحب قوة داخلية تبدو في ملامحه وطريقة أدائه، يجسد الأدوار الجادة بحرفية ويرسم شخصيات لا تُنسى.",
        socialMedia: {
            instagram: "@AhmetRıfat_sungar",
            twitter: "@Ahmet_Rıfat_sungar"
        }
    },
    {
        id: "Macit_Koper",
        name: "ماجيت كوپر",
        nameEn: "Macit Koper",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763481342192_v1t15f.png",
        bio: "فنان مخضرم يتمتع بوقار وخبرة تظهر في كل كلمة ونظرة، يضيف لأي عمل لمسة كلاسيكية مليئة بالهيبة والعمق.",
        socialMedia: {
            instagram: "@Macit_Koper",
            twitter: "@Macit_Koper"
        }
    },
    {
        id: "Ceren_Benderlioğlu",
        name: "جيرين بندرلي أوغلو",
        nameEn: "Ceren Benderlioğlu",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763481907964_o6tu0u.png",
        bio: "ممثلة أنيقة تجمع بين الجمال والصلابة، تتميز بإطلالة آسرة وقدرة على نقل المشاعر بثبات واحترافية.",
        socialMedia: {
            instagram: "@Ceren_Benderlioğlu",
            twitter: "@Ceren_Benderlioğlu"
        }
    },
    {
    
        id: "Ebrar_Karabakan",
        name: "إبرار كاراباكا",
        nameEn: "Ebrar Karabakan",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763482116661_ald6z9.png",
        bio: "وجه شاب مليء بالحيوية، تمتاز بتعبير صادق يضيف دفئًا للشخصيات التي تؤديها.",
        socialMedia: {
            instagram: "@Ebrar_Karabakan",
            twitter: "@Ebrar_Karabakan"
        }
    },
    {
        id: "Görkem_Sevindik",
        name: "غوركيم سفينديك",
        nameEn: "Görkem Sevindik",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763481703629_f60and.png",
        bio: "ممثل ذو طاقة عالية وحضور قوي، يتقن أدوار القوة والمواجهات، ويمنح مشاهده توترًا وحماسة مميزة.",
        socialMedia: {
            instagram: "@Görkem_Sevindik",
            twitter: "@Görkem_Sevindik"
        }
     },
    {
        id: "Burak_Deniz",
        name: "بوراك دينيز",
        nameEn: "Burak Deniz",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "ممثل تركي بارز يتميز بكاريزما قوية وحضور يجذب الأنظار منذ ظهوره الأول، يمتلك القدرة على تجسيد الشخصيات الرومانسية والدرامية بصدق ويجعل المشاهد يعيش كل لحظة مع الشخصية، أسلوبه يجمع بين الرقة والقوة ويضعه بين أبرز نجوم تركيا في جيله، كل أداء له ينبض بالحياة ويترك أثرًا طويل الأمد في عالم التمثيل",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        }
      },
    {
        id: "Hande_Erçel",
        name: "هاندا ارتشيل",
        nameEn: "Hande Erçel",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763491601544_kysto.png",
        bio: "نجمة تركية من ألمع الوجوه في الدراما الرومانسية والكوميدية، تمتاز بحيوية لا تنضب وملامح تخطف القلوب، تجسد الشخصيات بصدق يجعل المشاهد يصدق كل شعور وتجربة، أسلوبها يجمع بين البراءة والجاذبية والكاريزما الطبيعية، وهي اليوم رمز للأناقة والاحتراف في عالم الفن التركي",
        socialMedia: {
            instagram: "@Hande_Erçel",
            twitter: "@/Hande_Erçel"
        }
       },
    {
        id: "Oğuzhan_Karbi",
        name: "اوغوزهان كاربي",
        nameEn: "Oğuzhan Karbi",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763491997955_u8eoi3j.png",
        bio: "ممثل ذو حضور متزن وأداء ناضج، يمتلك قدرة على تقديم الشخصيات المركبة والمعقدة بطريقة تجعلها حقيقية وواقعية، أسلوبه يعكس الخبرة والعمق الفني، وقد ساهم في رسم صورة قوية للممثل الذي يجيد الجمع بين الدراما والكوميديا في أعماله",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        }
       },
    {
        id: "Özcan_Tekdemir",
        name: "أوزكان تيكدمير",
        nameEn: "Özcan Tekdemir",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763492431389_equgqu.png",
        bio: "ممثلة تركية شابة تتمتع بموهبة كبيرة في التعبير عن المشاعر الدقيقة، قادرة على تحويل أي شخصية مهما كانت بسيطة إلى شخصية حية تترك أثرًا لدى الجمهور، أسلوبها يجمع بين الواقعية والاحتراف، ويجعلها أحد الأصوات المهمة في الجيل الجديد للتمثيل التركي",
        socialMedia: {
            instagram: "@Özcan_Tekdemir",
            twitter: "@/Özcan_Tekdemir"
        } 
       },
    {
        id: "Merve_Çağıran",
        name: "ميرفي تشاغيران",
        nameEn: "Merve Çağıran",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763492591097_1t68i.png",
        bio: "ممثلة تتمتع بطاقة إيجابية وحضور ساحر، تجسد الشخصيات بروح مرحة وحيوية تجعل المشاهد ينجذب إليها بسهولة، أسلوبها في التمثيل يجمع بين العفوية والانضباط الفني، وقد أثبتت نفسها كموهبة صاعدة في عالم الفن التركي من خلال أدوار متنوعة ومؤثرة",
        socialMedia: {
            instagram: "@Merve_Çağıran",
            twitter: "@/Merve_Çağıran"
        } 
       },
    {
        id: "Süleyman_Felek",
        name: "سليمان فيليك",
        nameEn: "Süleyman Felek",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763492724353_pynkcp.png",
        bio: "ممثل ذو حضور قوي وقدرة على تجسيد الشخصيات الواقعية بقوة وصدق، أسلوبه في التمثيل يجمع بين الثقل الدرامي والطاقة الطبيعية، ويضيف لأي عمل يشارك فيه ثقة وحضورًا يجعل الشخصيات التي يؤديها مؤثرة في ذاكرة المشاهد",
        socialMedia: {
            instagram: "@Süleyman_Felek",
            twitter: "@/Süleyman_Felek"
        } 
       },
    {
        id: "Bülent_Emrah_Parlak",
        name: "بولنت إمراه بارلاكي",
        nameEn: "Bülent Emrah Parlak",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763492905762_2irc9.png",
        bio: "ممثل مخضرم يمتاز بالخبرة والوقار على الشاشة، يقدم أدوار الشخصيات الناضجة بطريقة سلسة وواقعية، أسلوبه يعكس التوازن بين الحكمة والكاريزما، ويجعل كل شخصية يؤديها تترك بصمة طويلة الأمد في عالم الدراما التركية",
        socialMedia: {
            instagram: "@Bülent_Emrah_Parlak",
            twitter: "@/Bülent_Emrah_Parlak"
        } 
       },
    {
        id: "Demet_Gül",
        name: "ديميت جول",
        nameEn: "Demet Gül",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763493025716_m4l4s.png",
        bio: "ممثلة تجمع بين الأناقة والحضور الفني، أسلوبها في التمثيل متقن ويعطي الشخصيات لمسة جمالية وسحرية، قدرتها على التعبير عن المشاعر الدقيقة تجعلها فنانة محترفة ومرموقة في عالم الدراما التركية",
        socialMedia: {
            instagram: "@Demet_Gül",
            twitter: "@/Demet_Gül"
        } 
       },
    {
        id: "İsmail_Ege_Şaşmaz",
        name: "اسماعيل ايجي شاسماز",
        nameEn: "İsmail Ege Şaşmaz",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763493170774_vpswlu.png",
        bio: "ممثل شاب موهوب يجمع بين الحيوية والطاقة الطبيعية على الشاشة، أسلوبه يمزج بين الواقعية والديناميكية في الأداء، وقد استطاع أن يثبت نفسه في عالم الفن التركي من خلال أدوار متنوعة وقوية تجذب انتباه الجمهور",
        socialMedia: {
            instagram: "@İsmail_Ege_Şaşmaz",
            twitter: "@/İsmail_Ege_Şaşmaz"
        } 
       },
    {
        id: "Murat_Yıldırım",
        name: "مراد يلدرم",
        nameEn: "Murat Yıldırım",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763494094314_undevn.png",
        bio: "ممثل تركي مشهور بأدواره الرومانسية والدرامية، بدأ مسيرته في منتصف العقد الأول من الألفية وشارك في أعمال تركية مهمة مثل “Fırtına” و“Rüzgarın Kalbi”، يتميز بأسلوب طبيعي في الأداء وحضور قوي على الشاشة يجمع بين الجاذبية والقوة، ويُعرف بقدرته على تجسيد الشخصيات المعقدة والمتنوعة.",
        socialMedia: {
            instagram: "@Murat_Yıldırım",
            twitter: "@/Murat_Yıldırım"
        } 
       },
    {
        id: "Cemre_Baysel",
        name: "جيمري بايسال",
        nameEn: "Cemre Baysel",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763494347861_fkyuj.png",
        bio: "ممثلة شابة صاعدة في الدراما التركية، بدأت شهرتها من خلال أدوارها في مسلسلات رومانسية وشبابية، تتميز بأسلوب عفوي وحيوي، قدرتها على التعبير عن المشاعر الحقيقية تجعلها محط إعجاب الجمهور، وقد أثبتت نفسها كلاعبة رئيسية في الأعمال التي تمزج بين الرومانسية والتحديات الاجتماعية.",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "Oya_Unustası",
        name: "اويا اونوستاسي",
        nameEn: "Oya Unustası",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763494524079_zj2sy.png",
        bio: "ممثلة تركية متألقة لها حضور كلاسيكي على الشاشة، بدأت مسيرتها في المسرح قبل الانتقال للدراما التلفزيونية، تجيد تقديم الأدوار المعقدة التي تحمل أسرارًا وصراعات داخلية، أسلوبها الفني يجمع بين القوة والأنوثة، مما يجعل كل شخصية تؤديها لا تُنسى.",
        socialMedia: {
            instagram: "@Oya_Unustası",
            twitter: "@/Oya_Unustası"
        } 
       },
    {
        id: "Yade_Arayıcı",
        name: "ياده آرايجي",
        nameEn: "Yade Arayıcı",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763494678734_wvicl.png",
        bio: "ممثلة صغيرة سنًا لكنها موهوبة، قدرتها على أداء المشاهد العاطفية المعقدة جعلت منها طفلة بارزة في الدراما التركية، تعكس البراءة والصراعات النفسية من خلال أداء صادق، ولديها مستقبل واعد في عالم التمثيل مع تطور مستمر لقدراتها الفنية.",
        socialMedia: {
            instagram: "@Yade_Arayıcı",
            twitter: "@/Yade_Arayıcı"
        } 
       },
    {
        id: "Hilal_Altınbilek",
        name: "هلال ألتينبيلك",
        nameEn: "Hilal Altınbilek",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763495136827_ertviu.png",
        bio: "ريحان (فتاة ذكية وجريئة) 	ممثلة وعارضة تركية، بدأت التمثيل من سن مبكرة، شاركت في أعمال كبيرة مثل Bir Zamanlar Çukurova حيث لعبت دور “زوليـها” (Züleyha).  لديها حضور قوي وقدرة على تجسيد الشخصيات الدرامية المعقدة.",
        socialMedia: {
            instagram: "@Hilal_Altınbilek",
            twitter: "@/Hilal_Altınbilek"
        } 
       },
    {
        id: "Haluk_Bilginer",
        name: "هالوك بيلجينر",
        nameEn: "Haluk Bilginer",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763495751484_vbrsgj.png",
        bio: "هالوك بيلغينر ممثل تركي مخضرم يتمتع بمسيرة فنية طويلة تتجاوز أربعة عقود، بدأ في المسرح ثم انتقل للتلفزيون والسينما، وقدم أدوارًا درامية ورومانسية وقوية، اشتهر بقدرته على تجسيد الشخصيات المعقدة والمتعددة الأبعاد، كما حاز جوائز دولية عن أعماله مثل Şahsiyet، ويُعتبر رمزًا للاحترافية والفن الراقي في الوسط التركي والعالمي.",
        socialMedia: {
            instagram: "@Haluk_Bilginer",
            twitter: "@/Haluk_Bilginer"
        } 
       },
    {
        id: "Tamer_Levent",
        name: "تامر ليفنت",
        nameEn: "Tamer Levent",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763496119966_nv8yvc.png",
        bio: "تامر ليفنت ممثل تركي مخضرم جدًا وله مسيرة فنية طويلة تشمل المسرح والسينما والتلفزيون، يتميز بقدرته على تجسيد الشخصيات القوية ذات البعد النفسي والاجتماعي، قدم العديد من الأدوار المرموقة في الدراما التركية وذو حضور يضيف ثقلًا لأي عمل يشارك فيه.",
        socialMedia: {
            instagram: "@Tamer_Levent",
            twitter: "@/Tamer_Levent"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        } 
       },
    {
        id: "المعرف",
        name: "اسم الممثل عربي",
        nameEn: "تركي",
        image: "https://wulaopnlopmcwfdritjj.supabase.co/storage/v1/object/public/images/2253b6c9-dc6e-4aed-881b-2e787bafd0b2/1763490992404_qiv2n.png",
        bio: "وصف",
        socialMedia: {
            instagram: "@Burak_Deniz",
            twitter: "@/Burak_Deniz"
        }        
    }
];

// ربط الممثلين بمسلسلات محددة
const actorsInSeries = {
    // مسلسل حلم أشرف (ID: 1)
    1: [
        { actorId: "Çağatay_Ulusoy", roleName: "أشرف" },
        { actorId: "Demet_Özdemir", roleName: "نيسان" },
        { actorId: "Necip_Memili", roleName:" جوردال" },
        { actorId: "Büşra_Develi", roleName: "شيدام" },
        { actorId: "Tolga_Tekin", roleName: "مسلم" },
        { actorId: "Ebrar_Karabakan", roleName: "عفراء" },
        { actorId: "Ahmet_Rıfat_Şungar", roleName: "فاروق" },
        { actorId: "Görkem_Sevindik", roleName: "قدير" },
        { actorId: "Macit_Koper", roleName: "الأب يعقوب" },
        { actorId: "Ceren_Benderlioğlu", roleName: "إيرماك" }
        
    ],
    
    // مسلسل الحب لا يفهم الكلام (ID: 2)
    2: [
        { actorId: "Burak_Deniz", roleName: "مراد سارسيلماز" },
        { actorId: "Hande_Erçel", roleName: "حياة اوزون" },
        { actorId: "Oğuzhan_Karbi", roleName:" دوروك سارسيلماز" },
        { actorId: "Özcan_Tekdemir", roleName: "آصلي" },
        { actorId: "Merve_Çağıran", roleName: "إيبيك" },
        { actorId: "Süleyman_Felek", roleName: "كرم" },
        { actorId: "Bülent_Emrah_Parlak", roleName: "جيميل اوزون" },
        { actorId: "İsmail_Ege_Şaşmaz", roleName: "إبراهيم" },
        { actorId: "Demet_Gül", roleName: "توفال" }
        
    ],
    
    // مسلسل ورود ودنوب (ID: 3)
    3: [
        { actorId: "Murat_Yıldırım", roleName: "سرحات" },
        { actorId: "Cemre_Baysel", roleName: "زينب" },
        { actorId: "Oya_Unustası", roleName: "براك" },
        { actorId: "Yade_Arayıcı", roleName: "قدر" }
        
    ],
    
    // مسلسل المحتالون (ID: 4)
    4: [
        { actorId: "Burak_Deniz", roleName: "إرتان" },
        { actorId: "Hilal_Altınbilek", roleName: "آسيا" },
        { actorId: "Haluk_Bilginer", roleName:" والد ارتان" },
        { actorId: "Tamer_Levent", roleName: "هدايت" }
        
    ],
    
    // مسلسل الخليفة (ID: 5)
    5: [
        { actorId: "Macit_Koper", roleName: "الأب يعقوب" },
        { actorId: "Ceren_Benderlioğlu", roleName: "إيرماك" }
        
    ],
    
    // مسلسل الغرفة المزدوجة (ID: 6)
    6: [
        { actorId: "Çağatay_Ulusoy", roleName: "أشرف" },
        { actorId: "Demet_Özdemir", roleName: "نيسان" },
        { actorId: "Necip_Memili", roleName:" جوردال" }
        
    ],
    
    // مسلسل ميرا وسليم (ID: 7)
    7: [
        { actorId: "Necip_Memili", roleName:" جوردال" },
        { actorId: "Büşra_Develi", roleName: "شيدام" },
        { actorId: "Tolga_Tekin", roleName: "مسلم" },
        
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