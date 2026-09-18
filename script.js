const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const translations = {
  en: {
    nav:{home:'Home',about:'About',plans:'Plans',trainers:'Trainers',gallery:'Gallery',bmi:'BMI',contact:'Contact'},
    common:{scroll:'SCROLL'},
    buttons:{call:'CALL NOW',whatsapp:'WHATSAPP',join:'JOIN NOW',callShort:'CALL',maps:'OPEN MAPS'},
    hero:{eyebrow:'SILVASSA • STRENGTH • FITNESS • RESULTS',title:'BUILD YOUR<br><em>STRONGER</em> SELF.',lead:'Train with purpose. Push your limits. Become the strongest version of you at Universe Fitness Zone.'},
    about:{eyebrow:'ABOUT US',title:'YOUR FITNESS.<br><em>YOUR UNIVERSE.</em>',text:'Universe Fitness Zone is a dedicated space to train hard, stay consistent and work towards your personal fitness goals. Whether you are starting your journey or pushing to the next level, make every workout count.',item1:'Strength<br>Training',item2:'Fitness<br>Training',item3:'Goal<br>Focused'},
    stats:{space:'DEDICATED<br>SPACE',training:'TRAINING<br>FOCUS',goals:'FITNESS<br>GOALS',commitment:'YOUR<br>COMMITMENT'},
    plans:{eyebrow:'MEMBERSHIP',title:'CHOOSE YOUR<br><em>PLAN.</em>',description:'Choose the membership duration that suits you and start your fitness journey.',membership:'MEMBERSHIP',access:'Gym access',strength:'Strength training',guidance:'Fitness guidance',popular:'POPULAR',bestValue:'BEST VALUE',note:'Membership fees shown above are based on the fee card provided for this website.'},
    trainers:{eyebrow:'THE TEAM',title:'MEET YOUR<br><em>TRAINERS.</em>',description:'Trainer cards are ready. Replace the placeholders with trainer names, photos and qualifications when you are ready.',photo:'TRAINER<br>PHOTO',name:'YOUR TRAINER',skill1:'Strength • Fitness • Conditioning',skill2:'Fitness • Weight Training • Guidance',skill3:'Conditioning • Goals • Progress'},
    gallery:{eyebrow:'PHOTO GALLERY',title:'SEE THE<br><em>ENERGY.</em>',description:'Your real UFZ logo and membership-fee photo are included. Add more gym, trainer, medal and member photos to assets/images as you collect them.',gym:'GYM FLOOR',training:'TRAINING',equipment:'EQUIPMENT',weights:'WEIGHTS',fees:'MEMBERSHIP FEES'},
    bmi:{eyebrow:'FREE TOOL',title:'CHECK YOUR<br><em>BMI.</em>',description:'Enter your height and weight for a quick BMI estimate. This is a general screening tool, not medical advice.',height:'HEIGHT',weight:'WEIGHT',calculate:'CALCULATE BMI',result:'Your result will appear here.',placeholderHeight:'e.g. 175',placeholderWeight:'e.g. 75'},
    testimonials:{eyebrow:'MEMBER VOICES',title:'TRAIN. <em>GROW.</em><br>REPEAT.',description:'These are sample testimonials for the design. Replace them with real member feedback before publishing.',one:'Sample member feedback can go here once you collect a real review.',two:'Use short, genuine comments from your members to build trust.',three:'Real experiences will make this section feel personal and authentic.',member:'— MEMBER NAME'},
    achievement:{eyebrow:'ACHIEVEMENTS',title:'HARD WORK<br>DESERVES A <em>MEDAL.</em>',description:'Showcase your members, competitions, certificates and medals here. This section is ready for your real achievements.',placeholder:'YOUR ACHIEVEMENT<br>PHOTO HERE'},
    contact:{eyebrow:'VISIT US',title:'READY TO<br><em>TRAIN?</em>',addressLabel:'ADDRESS',contactLabel:'CONTACT'},
    meta:{title:'Universe Fitness Zone | Silvassa',description:'Universe Fitness Zone — premium fitness training in Silvassa.'},
    bmiLabels:{underweight:'Underweight',healthy:'Healthy range',overweight:'Overweight',obesity:'Obesity range',invalid:'Please enter a valid height and weight.',screening:'For general screening only — individual health can differ.'},
    whatsapp:{info:'Hi Universe Fitness Zone, I want to know more about the gym.',join1:'Hi UFZ, I want to join for 1 month.',join2:'Hi UFZ, I want to join for 2 months.',join3:'Hi UFZ, I want to join for 3 months.',join6:'Hi UFZ, I want to join for 6 months.',join9:'Hi UFZ, I want to join for 9 months.',join12:'Hi UFZ, I want to join for 12 months.'}
  },
  hi: {
    nav:{home:'होम',about:'हमारे बारे में',plans:'प्लान',trainers:'ट्रेनर्स',gallery:'गैलरी',bmi:'BMI',contact:'संपर्क'},
    common:{scroll:'स्क्रॉल'},
    buttons:{call:'अभी कॉल करें',whatsapp:'व्हाट्सऐप',join:'जॉइन करें',callShort:'कॉल',maps:'मैप खोलें'},
    hero:{eyebrow:'सिलवासा • स्ट्रेंथ • फिटनेस • रिज़ल्ट',title:'अपना <br><em>मज़बूत</em> रूप बनाएं।',lead:'सही तरीके से ट्रेन करें, अपनी सीमाओं को पुश करें और Universe Fitness Zone में अपना सबसे मजबूत रूप बनाएं।'},
    about:{eyebrow:'हमारे बारे में',title:'आपकी फिटनेस।<br><em>आपकी दुनिया।</em>',text:'Universe Fitness Zone एक dedicated fitness space है जहाँ आप नियमित ट्रेनिंग करके अपने फिटनेस goals की ओर बढ़ सकते हैं। शुरुआत कर रहे हों या अगले लेवल पर जा रहे हों—हर workout को meaningful बनाएं।',item1:'स्ट्रेंथ<br>ट्रेनिंग',item2:'फिटनेस<br>ट्रेनिंग',item3:'लक्ष्य<br>केंद्रित'},
    stats:{space:'समर्पित<br>स्पेस',training:'ट्रेनिंग<br>फोकस',goals:'फिटनेस<br>लक्ष्य',commitment:'आपका<br>कमिटमेंट'},
    plans:{eyebrow:'मेंबरशिप',title:'अपना <br><em>प्लान चुनें।</em>',description:'अपनी सुविधा के अनुसार मेंबरशिप अवधि चुनें और अपनी फिटनेस जर्नी शुरू करें।',membership:'मेंबरशिप',access:'जिम एक्सेस',strength:'स्ट्रेंथ ट्रेनिंग',guidance:'फिटनेस गाइडेंस',popular:'लोकप्रिय',bestValue:'बेस्ट वैल्यू',note:'ऊपर दिए गए मेंबरशिप फीस आपके दिए गए फीस कार्ड पर आधारित हैं।'},
    trainers:{eyebrow:'हमारी टीम',title:'अपने <br><em>ट्रेनर्स से मिलें।</em>',description:'ट्रेनर कार्ड तैयार हैं। बाद में इनके नाम, फोटो और qualifications डाल सकते हैं।',photo:'ट्रेनर<br>फोटो',name:'आपके ट्रेनर',skill1:'स्ट्रेंथ • फिटनेस • कंडीशनिंग',skill2:'फिटनेस • वेट ट्रेनिंग • गाइडेंस',skill3:'कंडीशनिंग • गोल्स • प्रोग्रेस'},
    gallery:{eyebrow:'फोटो गैलरी',title:'यहाँ की <br><em>एनर्जी देखें।</em>',description:'आपका असली UFZ लोगो और membership-fee photo शामिल है। आगे gym, trainer, medal और member photos assets/images में जोड़ सकते हैं।',gym:'जिम फ्लोर',training:'ट्रेनिंग',equipment:'इक्विपमेंट',weights:'वेट्स',fees:'मेंबरशिप फीस'},
    bmi:{eyebrow:'फ्री टूल',title:'अपना <br><em>BMI देखें।</em>',description:'जल्दी से BMI estimate के लिए अपनी height और weight डालें। यह एक सामान्य screening tool है, medical advice नहीं।',height:'हाइट',weight:'वेट',calculate:'BMI निकालें',result:'आपका रिज़ल्ट यहाँ आएगा।',placeholderHeight:'जैसे 175',placeholderWeight:'जैसे 75'},
    testimonials:{eyebrow:'मेंबर की राय',title:'ट्रेन। <em>ग्रो करें।</em><br>फिर दोहराएँ।',description:'ये design के sample testimonials हैं। पब्लिश करने से पहले इन्हें असली member reviews से बदलें।',one:'असली review मिलने पर यहाँ member feedback डालें।',two:'छोटे और genuine comments trust बढ़ाने में मदद करेंगे।',three:'असली experiences इस section को personal और authentic बनाएँगे।',member:'— मेंबर नाम'},
    achievement:{eyebrow:'अचीवमेंट्स',title:'मेहनत का <br><em>मेडल</em> मिलता है।',description:'यहाँ members, competitions, certificates और medals की photos दिखा सकते हैं।',placeholder:'आपकी उपलब्धि की<br>फोटो यहाँ'},
    contact:{eyebrow:'हमसे मिलें',title:'ट्रेनिंग के लिए <br><em>तैयार?</em>',addressLabel:'पता',contactLabel:'संपर्क'},
    meta:{title:'Universe Fitness Zone | Silvassa',description:'Universe Fitness Zone — Silvassa में fitness training.'},
    bmiLabels:{underweight:'कम वजन',healthy:'सामान्य रेंज',overweight:'ज्यादा वजन',obesity:'मोटापा रेंज',invalid:'कृपया सही height और weight डालें।',screening:'सिर्फ सामान्य screening के लिए — हर व्यक्ति अलग होता है।'},
    whatsapp:{info:'नमस्ते Universe Fitness Zone, मुझे जिम के बारे में जानकारी चाहिए।',join1:'नमस्ते UFZ, मुझे 1 महीने की membership लेनी है.',join2:'नमस्ते UFZ, मुझे 2 महीने की membership लेनी है.',join3:'नमस्ते UFZ, मुझे 3 महीने की membership लेनी है.',join6:'नमस्ते UFZ, मुझे 6 महीने की membership लेनी है.',join9:'नमस्ते UFZ, मुझे 9 महीने की membership लेनी है.',join12:'नमस्ते UFZ, मुझे 12 महीने की membership लेनी है.'}
  },
  hinglish: {
    nav:{home:'Home',about:'Hamare Baare Mein',plans:'Plans',trainers:'Trainers',gallery:'Gallery',bmi:'BMI',contact:'Contact'},
    common:{scroll:'SCROLL'},
    buttons:{call:'CALL NOW',whatsapp:'WHATSAPP',join:'JOIN KARE',callShort:'CALL',maps:'OPEN MAPS'},
    hero:{eyebrow:'SILVASSA • STRENGTH • FITNESS • RESULTS',title:'APNA <br><em>STRONGER</em> VERSION BANAO.',lead:'Purpose ke saath train karo, limits push karo aur Universe Fitness Zone mein apna strongest version bano.'},
    about:{eyebrow:'HAMARE BAARE MEIN',title:'TUMHARI FITNESS.<br><em>TUMHARI DUNIYA.</em>',text:'Universe Fitness Zone ek dedicated fitness space hai jahan aap hard train karke, consistency maintain karke apne fitness goals ki taraf badh sakte ho. Beginner ho ya next level par ja rahe ho—har workout ko count karo.',item1:'Strength<br>Training',item2:'Fitness<br>Training',item3:'Goal<br>Focused'},
    stats:{space:'DEDICATED<br>SPACE',training:'TRAINING<br>FOCUS',goals:'FITNESS<br>GOALS',commitment:'TUMHARA<br>COMMITMENT'},
    plans:{eyebrow:'MEMBERSHIP',title:'APNA <br><em>PLAN CHUNO.</em>',description:'Jo membership duration aapko suit kare, woh choose karo aur fitness journey start karo.',membership:'MEMBERSHIP',access:'Gym access',strength:'Strength training',guidance:'Fitness guidance',popular:'POPULAR',bestValue:'BEST VALUE',note:'Upar diye gaye membership fees aapke diye hue fee card par based hain.'},
    trainers:{eyebrow:'HAMARI TEAM',title:'APNE <br><em>TRAINERS SE MILO.</em>',description:'Trainer cards ready hain. Baad mein names, photos aur qualifications add kar sakte ho.',photo:'TRAINER<br>PHOTO',name:'YOUR TRAINER',skill1:'Strength • Fitness • Conditioning',skill2:'Fitness • Weight Training • Guidance',skill3:'Conditioning • Goals • Progress'},
    gallery:{eyebrow:'PHOTO GALLERY',title:'YAHAN KI <br><em>ENERGY DEKHO.</em>',description:'Aapka real UFZ logo aur membership-fee photo included hai. Baad mein gym, trainer, medal aur member photos assets/images mein add karo.',gym:'GYM FLOOR',training:'TRAINING',equipment:'EQUIPMENT',weights:'WEIGHTS',fees:'MEMBERSHIP FEES'},
    bmi:{eyebrow:'FREE TOOL',title:'APNA <br><em>BMI CHECK KARO.</em>',description:'Quick BMI estimate ke liye height aur weight enter karo. Ye general screening tool hai, medical advice nahi.',height:'HEIGHT',weight:'WEIGHT',calculate:'BMI CALCULATE KARO',result:'Aapka result yahan dikhega.',placeholderHeight:'jaise 175',placeholderWeight:'jaise 75'},
    testimonials:{eyebrow:'MEMBER VOICES',title:'TRAIN. <em>GROW.</em><br>REPEAT.',description:'Ye design ke sample testimonials hain. Publish karne se pehle real member reviews se replace karo.',one:'Real review milne par yahan member feedback add karo.',two:'Short aur genuine comments trust build karne mein help karenge.',three:'Real experiences is section ko personal aur authentic banayenge.',member:'— MEMBER NAME'},
    achievement:{eyebrow:'ACHIEVEMENTS',title:'HARD WORK KO <br><em>MEDAL</em> MILTA HAI.',description:'Members, competitions, certificates aur medals ki photos yahan dikhao. Real achievements ke liye section ready hai.',placeholder:'YOUR ACHIEVEMENT<br>PHOTO HERE'},
    contact:{eyebrow:'VISIT US',title:'TRAINING KE LIYE<br><em>READY?</em>',addressLabel:'ADDRESS',contactLabel:'CONTACT'},
    meta:{title:'Universe Fitness Zone | Silvassa',description:'Universe Fitness Zone — Silvassa mein premium fitness training.'},
    bmiLabels:{underweight:'Underweight',healthy:'Healthy range',overweight:'Overweight',obesity:'Obesity range',invalid:'Valid height aur weight enter karo.',screening:'General screening ke liye — har person alag hota hai.'},
    whatsapp:{info:'Hi Universe Fitness Zone, mujhe gym ke baare mein aur info chahiye.',join1:'Hi UFZ, mujhe 1 month ke liye join karna hai.',join2:'Hi UFZ, mujhe 2 months ke liye join karna hai.',join3:'Hi UFZ, mujhe 3 months ke liye join karna hai.',join6:'Hi UFZ, mujhe 6 months ke liye join karna hai.',join9:'Hi UFZ, mujhe 9 months ke liye join karna hai.',join12:'Hi UFZ, mujhe 12 months ke liye join karna hai.'}
  }
};

const getPath = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  document.body.classList.remove('lang-en','lang-hi','lang-hinglish');
  document.body.classList.add(`lang-${lang}`);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getPath(t, el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = getPath(t, el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });
  document.title = t.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t.meta.description;
  document.getElementById('height').placeholder = t.bmi.placeholderHeight;
  document.getElementById('weight').placeholder = t.bmi.placeholderWeight;
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = lang;
  updateWhatsappLinks(t);
  localStorage.setItem('ufzLanguage', lang);
}

function updateWhatsappLinks(t) {
  const hero = document.getElementById('heroWhatsapp');
  if (hero) hero.href = 'https://wa.me/916352214914?text=' + encodeURIComponent(t.whatsapp.info);
  document.querySelectorAll('.join-btn').forEach(btn => {
    const months = btn.dataset.months;
    const key = `join${months}`;
    btn.href = 'https://wa.me/916352214914?text=' + encodeURIComponent(t.whatsapp[key]);
  });
}

const savedLanguage = localStorage.getItem('ufzLanguage') || 'en';
applyLanguage(savedLanguage);
document.getElementById('languageSelect')?.addEventListener('change', e => applyLanguage(e.target.value));

const calc = document.getElementById('calcBmi');
const result = document.getElementById('bmiResult');
calc?.addEventListener('click', () => {
  const h = parseFloat(document.getElementById('height').value);
  const w = parseFloat(document.getElementById('weight').value);
  const lang = document.getElementById('languageSelect')?.value || 'en';
  const t = translations[lang] || translations.en;
  if (!h || !w || h < 50 || w < 10) { result.textContent = t.bmiLabels.invalid; return; }
  const bmi = w / Math.pow(h / 100, 2);
  let label = bmi < 18.5 ? t.bmiLabels.underweight : bmi < 25 ? t.bmiLabels.healthy : bmi < 30 ? t.bmiLabels.overweight : t.bmiLabels.obesity;
  result.innerHTML = '<strong>' + bmi.toFixed(1) + '</strong>' + label + '<br><small>' + t.bmiLabels.screening + '</small>';
});
