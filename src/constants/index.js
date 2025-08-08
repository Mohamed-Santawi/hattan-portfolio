import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  GreenSix,
  HattanBirkman,
  SixSegmaGreen,
  SalesStrategy,
  MangCoach,
  SixSegma,
  TransformAcademy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    titleKey: "services.birkman",
    icon: Icon1,
    link: "/Services/Birkman",
  },
  {
    titleKey: "services.mentor",
    icon: Icon2,
    link: "/Services/Mentor",
  },
  {
    titleKey: "services.interview",
    icon: Icon3,
    link: "/Services/Interview",
  },
  {
    titleKey: "services.career",
    icon: Icon4,
    link: "/Services/CareerAdvising",
  },
];

const projects = [
  {
    name: "CERTIFIESD Sales Coaching",
    description:
      "This certification acknowledges the successful completion of advanced life coaching training with a specialization in sales for business. Endorsed and offered by Transformation.",

    image: TransformAcademy,
  },

  {
    name: "CERTIFIED LEAN SIX SIGMA GREEN BELT",
    description:
      "Successfully completed an accredited Lean Six Sigma Green Belt course and evaluation, demonstrating proficiency in process improvement, waste reduction, and data-driven problem-solving. Certified on April 4, 2025, under CPD and higher education standards.",

    image: SixSegmaGreen,
  },

  {
    name: "Coaching Managers & Leaders for Continuous Improvement",
    description:
      "Developed a fantasy adventure game using Python and Pygame, featuring interactive gameplay mechanics and basic AI behavior. Gained hands-on experience in game design, programming logic, and artificial intelligence concepts.",

    image: MangCoach,
  },
  {
    name: "Sales Strategy: Building Relationships to Successfully Sell",
    description:
      "ompleted training focused on relationship-based sales techniques, emphasizing trust-building, client engagement, and long-term customer success strategies.",

    image: SalesStrategy,
  },
  {
    name: "BIRKMAN CERTIFIED PROFESSIONAL",
    description:
      "Certified in interpreting and applying the Birkman Method to assess personality, behavior, and motivation. Trained to provide insights for personal development, team dynamics, and leadership coaching.",

    image: HattanBirkman,
  },
];

// Birkman Feedback/Testimonials
const birkmanFeedback = [
  {
    id: 1,
    name: "Sarah M.",
    text: "مساء الخير بقولكم عن وحده من احلى الخطوات اللي اخذتها الفترة اللي راحت اني سويت اختبار بيركمان! الامتع ؟ اني سويته مع د.هتان اسلوبه وتفسيره لكل الاختبار خلاني استمتع جدًا حتى في الاشياء الي ماكنت احب اسمعها عني",
    rating: 5,
    color: "green",
  },
  {
    id: 2,
    name: "Nora A.",
    text: "مساء الخير دكتور هتان ممتنه لك جدًا لاني عرفته منك ماكنت اعرف ايش بيركمان وببالي مجرد اختبار واسئله عاديه لكن انصدمت كيف انها اعمق بكثييييييير ومنجد من يومها بتكلم عنو بانبهار من بعد ماسويته بديت اشوف انو لازم كل شخص يسويه .. شكرًا لك من القلب",
    rating: 5,
    color: "blue",
  },
  {
    id: 3,
    name: "Ahmed K.",
    text: "خضت مؤخرًا تجربة مميزة من خلال تحليل الشخصية بتقرير بيركمان سيجنشر، وكانت من التجارب اللي فتحت لي أبواب كثيرة لفهم ذاتي بشكل أعمق وأكثر وضوحًا. وأحب أشكر المستشار د/هتان عارف على تقديمه للتقرير بأسلوب احترافي وثراء معرفي ساعدني أفهم النتائج بشكل أوضح وأعمق. حضوره وخبرته أضافت قيمة حقيقية للتجربة.",
    rating: 5,
    color: "red",
  },
  {
    id: 4,
    name: "Lina S.",
    text: "من أول لحظة، حسيت إني مو بس قاعدة أسمع شرح نتائج كنت قاعدة أفهم نفسي فعلاً شرحك أ.د هتان كان جداً واضح، مرتب، وفسرت لي كل نقطة بلغة بسيطة بس بعمق معناها، خليتني أشوف سلوكياتي من زاوية ما قد شفتها قبل. شكرًا من القلب على احترافيتك العالية، وسعة صدرك والطريقة الإنسانية اللي قدمت فيها الجلسة.",
    rating: 5,
    color: "yellow",
  },
  {
    id: 5,
    name: "Emma J.",
    text: "I am so happy that I learned such a tool exists!! The Birkman report is like a fingerprint, no one's report will look like yours and vise versa, by just answering a number of questions within about 20 minutes!! Thank you Hattan Arif for literally enlightening me, interpreting and explaining to me my report smoothly and thoroughly.",
    rating: 5,
    color: "green",
  },
  {
    id: 6,
    name: "Omar R.",
    text: "اللّٰه يعطيك العافية دكتور هتان، صراحة استشارتك في استبيان بيركمان كانت أكثر من رائعة! أسلوبك في الشرح وتحليلك العميق للتطبيق بيّن لي أشياء عن شخصيتي ما كنت أعرفها أو حتى منتبه لها. قراءتك كانت دقيقة، وتوصياتك فعلاً لمست نقاط جوهرية فرقت معي كثير. واستفدت من جلستك استفادة كبيرة. ممتن لك جدًا، وشكرًا من القلب على الاحترافية والرُقي",
    rating: 5,
    color: "blue",
  },
  {
    id: 7,
    name: "Rahaf A.",
    text: "السلام عليكم د.هتان بصراحة أنبهرت كثير بمدة دقة اختبار بيركمان في تحديد أشياء كثير في شخصيتي ، بعضها كنت أعرفه، والبعض الآخر تعرفت عليه لأول مرة من خلال جلسة التقرير.الشي إلي ابهرني طريقتك الواضحة والعفوية في شرح التقرير إلي خلتني وساعدتني كثير على فهم التحليل و النقاط بطريقة دقيقة وواقعية. شكرا لك على تجربة إلي حقيقي كل شخص يحتاجها عشان ينمي شخصيته أكثر.",
    rating: 5,
    color: "yellow",
  },
];

const InterviewFeedback = [
  {
    id: 1,
    name: "Afnan Albohassan",
    text: "I got accepted into my specialty of choice and I'm over the moon!!! Thank you SO much for all your help - I seriously couldn't have done this without you. Your support meant the world to me. With all my gratitude, Afnan Albohassan - A medical intern, A future radiologist.",
    rating: 5,
    color: "green",
  },
  {
    id: 2,
    name: "Anonymous",
    text: "السلام عليكم ورحمة اللّٰه، كيفك د. هتان، اللّٰه يسعدك وشكرا على اللي قدمته وابشرك الحمدلله انقبلت بالسنتر اللي حطيته خيار اول.",
    rating: 5,
    color: "green",
  },
  {
    id: 3,
    name: "Anonymous",
    text: "السلام عليكم دكتور هتان، ان شاء اللّٰه تكون بخير، ابشرك انقبلت أشعة في الحرس، رغبتي الأولى، اللّٰه يسعدك شكراً جزيلاً على مساعدتك بالمقابلة.",
    rating: 5,
    color: "green",
  },
  {
    id: 4,
    name: "Anonymous",
    text: "السلام عليكم ورحمة اللّٰه وبركاته مساء الخير د. هتّان، اتمنى تكون بصحة وعافية، أبشرك، انقبلت في تخصص Ophthalmology الآن الحمدلله، الحلم اليوم يصبح واقعًا بفضل الله، ثم بالسعي وبدعم قدوات ملهمة مثلك كانت ذات أثرٍ في مسيرتي. جزيل الشكر والامتنان لك على كل دعم وتوجيه، جزاكم اللّٰه كل الأجر.",
    rating: 5,
    color: "green",
  },
  {
    id: 5,
    name: "Anonymous",
    text: "والله دكتور يعطيك العافية وشكرا لك كثير وجزاك اللّٰه خير واكيد اني استفدت نبهتني على نقاط كثير صار عندي فكرة افضل واوضح تعرف كيف كذا كأنك نورت لي جزء كبير وصار بالنسبة ليا واضح. فكرة المقابلة اللي قبل من غير تجهيز تظهر الافكار اللي فيا بشكل اوضح وتظهر نقاط الضعف والقوة بشكل اوضح عشان اعرف اشتغل عليها بشكل صحيح.",
    rating: 5,
    color: "green",
  },
  {
    id: 6,
    name: "Anonymous",
    text: "اول شي حابه اشكر جهودك وعطائك وإنك مابخلت بولا معلومه وكنت حاب تعطي اكثر قدر ممكن وتفيدني وهذا شي نادر احد يسويه وان دل يدل على طيبك وشغفك بالشي الي تسويه. مره استفدت وكنت فعلاً منجذبه لكل كلمه سمعتها ولامستني كثير.",
    rating: 5,
    color: "green",
  },
  {
    id: 7,
    name: "عدنان الشيخ",
    text: "السلام عليكم دكتور هتان معاك عدنان الشيخ سويت معاك مقابلة قبل شوي، شكرا لك على ذي الفرصة و بصراحة فهمت من ذي التجربة كيف ابني كلامي و عرفت اخطائي فين.",
    rating: 5,
    color: "green",
  },
  {
    id: 8,
    name: "Anonymous",
    text: "قبل بداية الجلسة كنت متوتر قليلا لاعتقادي انها بتكون مقابلة رسمية ، عبارة عن سؤال واجابة وسريعه جدا وغير كافية ولكن .. عند بداية الجلسة استقبلني د. هتان جزاه اللّٰه خير بكل رحابة صدر وان المقابلة بتكون بسيطة ونركز على كل الجوانب باذن اللّٰه وفعلًا كانت هكذا. كانت عبارة عن اسئلة وأجبت عليهم وراجعنا جميع الاسئلة والاجابات بشكل مفصل والاجابات الافضل لهذه الاسئلة. آخرًا كانت جلسة جميلة وقيمة جدًا وتنورت بشكل كبير بعدها عن كيف تدار هذه المقابلات بطريقة احترافية ومميزه.",
    rating: 5,
    color: "green",
  },
  {
    id: 9,
    name: "Anonymous",
    text: "Dear Dr. Hattan, I would like to sincerely thank you for the incredibly informative and well-organized mock interview session today. It was truly a privilege to learn from someone with such deep experience in this field. What stood out to me most was how you explained the purpose behind each question. It was eye-opening to realize that every interview question carries an underlying intention, and by understanding that, I can answer more effectively. Your insights clarified several questions I had misunderstood, and your guidance gave me a clearer direction. The feedback you provided was not only constructive but also predictive—it helped me identify areas for improvement that I might not have recognized on my own. I truly appreciate the time and dedication you invested—your support means a great deal to me.",
    rating: 5,
    color: "green",
  },
  {
    id: 10,
    name: "محمد العمري",
    text: "مساك دكتور هتان، معك محمد العمري سويت معاك Mock. احب اشكرك الصراحه استفدت اكثر من مما كنت اتخيل ، وفتحت عيني على نقاط واشياء م كنت اشوفها .. اللّٰه يسعدك وباذن اللّٰه ابشرك بقبولي على خير ان شاء اللّه.",
    rating: 5,
    color: "green",
  },
  {
    id: 11,
    name: "Anonymous",
    text: "اللّٰه يسعدك يارب ويرفع قدرك دكتور هتان شكرا كثير على كل الكلام والفيدباك الجميل. حقيقي لهذه الفرصه معاكم وأتعلم منكم، سبحان اللّٰه كم من المرات الي احتجت اجلس على الCV والتدريب على المقابله بشكل عميق لكن للأسف ما قد اعطيته فرصته الكافيه واعطيته حقه من الوقت.. فهذه التجربه تعني لي الكثير وما شاء اللّٰه عليكم أبدا ما قصرتوا، وبإذن اللّٰه أبشركم بأخبار جميله في أقرب وقت يارب.",
    rating: 5,
    color: "green",
  },
  {
    id: 12,
    name: "عبدالعزير مفرح الدغماني",
    text: "السلام عليكم، دكتور هتان، معاك عبد العزير مفرح الدغماني. دكتور انا حضرت معاك المقابلة اليوم الساعة 3:20 والمقابلة كانت اول مرة لي وكانت جدا ممتازة واستفدت كثير منها والله وتعلمت فيها الاخطاء في المقابلات واستمتعت لكلامك وشرحك المميز جدا. عسى يوفقك ويسهل عليك يارب.",
    rating: 5,
    color: "green",
  },
  {
    id: 13,
    name: "زياد الرويثي",
    text: "سلام عليكم، بعطيك العافيه يادكتور هتان، فعلا اضفت لي الكثير بالمقابله التجريبيه، شاكر ومقدر لك، وزادك اللّٰه من علمه وفضله يارب. ويشرفني ويسعدني نتواصل ثاني. شاكر وممتن لك.",
    rating: 5,
    color: "green",
  },
  {
    id: 14,
    name: "عائشة الشريدة",
    text: "السلام عليكم ورحمة اللّٰه وبركاته، مساء الخير دكتور هتان، معك عائشه الشريدة. اليوم قدمت عندك المقابلة. أولاً جزاك اللّٰه خير الجزاء على عطائك المتميز والملاحظات المثرية. والحمدلله استفدت الكثير وكنت متخوفة قليل من المقابلة لكن تيسرت بفضل اللّٰه ثم تعاملك الطيب، وإن شاءالله اني أطبق الملاحظات بحذافيرها.",
    rating: 5,
    color: "green",
  },
  {
    id: 15,
    name: "Anonymous",
    text: "اللّٰه يعطيك العافية يا دكتور هتان، الحمد لله استفدت كثير من ال mock interview اللي سويتها معاي. تعلمت منك كيف أطور نفسي، أفهم المغزى من كل سؤال، وأجهز إجاباتي بثقة وتنظيم. توجيهاتك الدقيقة وأسلوبك الهادئ أعطتني ثقة كبيرة.",
    rating: 5,
    color: "green",
  },
  {
    id: 16,
    name: "غزوى",
    text: "السلام عليكم ورحمة اللّٰه وبركاته، معاك غزوى. اللّٰه يعطيك العافية يا دكتور، هاذي اول مرة اسوي مقابلة وكنت مررة متخوفة. التجربة خففت علي كثير. شكراً لك.",
    rating: 5,
    color: "green",
  },
  {
    id: 17,
    name: "Anonymous",
    text: "شخصيًا، كانت أول مره أخوض تجربة كهذه. الواقع كان أفضل من توقعاتي. أسلوبك في التركيز على جوهر السؤال والشرح بوضوح فرق كثير. أنصح جدًا بهذه التجربة.",
    rating: 5,
    color: "green",
  },
  {
    id: 18,
    name: "عبدالرحمن الزهراني",
    text: "السلام عليكم ورحمة اللّٰه وبركاته، معك عبدالرحمن الزهراني. التجربة جميلة، شعرت فعلاً بجو المقابلة، الأسئلة مرتبة، مراجعة الأجوبة مفيدة، والنصيحة بأن كل سؤال له معنى كانت مؤثرة جدًا.",
    rating: 5,
    color: "green",
  },
];

export { services, projects, birkmanFeedback, InterviewFeedback };
