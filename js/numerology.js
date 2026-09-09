/**
 * Numerology & Abjad Calculations
 * AI Education Personality Platform
 */

// Western Numerology letter values
const LETTER_VALUES = {
  a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9,
  j:1, k:2, l:3, m:4, n:5, o:6, p:7, q:8, r:9,
  s:1, t:2, u:3, v:4, w:5, x:6, y:7, z:8
};

// Abjad values (Arabic letters)
const ABJAD_VALUES = {
  'ا':1, 'أ':1, 'إ':1, 'آ':1, 'ب':2, 'ج':3, 'د':4, 'ه':5, 'و':6, 'ز':7, 'ح':8, 'ط':9,
  'ي':10, 'ك':20, 'ل':30, 'م':40, 'ن':50, 'س':60, 'ع':70, 'ف':80, 'ص':90,
  'ق':100, 'ر':200, 'ش':300, 'ت':400, 'ث':500, 'خ':600, 'ذ':700, 'ض':800, 'ظ':900, 'غ':1000
};

function reduceToSingleDigit(num) {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
}

function calculateLifePath(dob) {
  // dob format: YYYY-MM-DD
  const parts = dob.split('-');
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);
  
  let sum = day + month + year.toString().split('').reduce((a,b) => a + parseInt(b), 0);
  return reduceToSingleDigit(sum);
}

function calculateDestinyNumber(fullName) {
  const name = fullName.toLowerCase().replace(/[^a-z\u0600-\u06FF]/g, '');
  let sum = 0;
  
  for (let char of name) {
    if (LETTER_VALUES[char]) {
      sum += LETTER_VALUES[char];
    } else if (ABJAD_VALUES[char]) {
      sum += ABJAD_VALUES[char];
    }
  }
  
  return reduceToSingleDigit(sum);
}

function calculateAbjad(fullName) {
  let sum = 0;
  for (let char of fullName) {
    if (ABJAD_VALUES[char]) sum += ABJAD_VALUES[char];
  }
  // Also count English letters if mixed
  const lower = fullName.toLowerCase();
  for (let char of lower) {
    if (LETTER_VALUES[char]) sum += LETTER_VALUES[char];
  }
  return sum;
}

function getLifePathMeaning(num) {
  const meanings = {
    1: { title: "القائد", desc: "شخصية قيادية، مستقلة، مبدعة، تحب المبادرة والتميز. تناسبها المهام التي تتطلب ريادة." },
    2: { title: "المتعاون", desc: "حساسة، دبلوماسية، تحب العمل الجماعي. تتعلم أفضل من خلال التعاون والمشاركة." },
    3: { title: "المبدع", desc: "مبدعة، اجتماعية، تحب التعبير الفني. تتعلم من خلال القصص والصور والإبداع." },
    4: { title: "المنظم", desc: "عملية، منظمة، تحب النظام والخطوات الواضحة. تتعلم بشكل أفضل بالترتيب المنطقي." },
    5: { title: "الحرة", desc: "محبة للحرية والتغيير، فضولية. تتعلم من خلال التجارب العملية والتنوع." },
    6: { title: "المسؤولة", desc: "حنونة، مسؤولة، تحب مساعدة الآخرين. تتعلم جيداً في بيئة داعمة وإنسانية." },
    7: { title: "المحلل", desc: "تحليلية، روحانية، تحب البحث العميق. تتعلم من خلال التأمل والتحليل والتفاصيل." },
    8: { title: "الطموحة", desc: "طموحة، قوية، تحب الإنجاز. تتعلم بشكل أفضل عندما ترى نتائج واضحة وأهداف." },
    9: { title: "الإنسانية", desc: "إنسانية، مثالية، تحب الخير العام. تتعلم من خلال ربط المعرفة بالقيم الإنسانية." },
    11: { title: "الملهمة (ماستر)", desc: "حدسية قوية، ملهمة، روحانية عالية. تتعلم من خلال الإلهام والرؤى." },
    22: { title: "البناء الكبير (ماستر)", desc: "رؤية كبيرة وقدرة على تحويل الأفكار إلى واقع. تتعلم من خلال المشاريع الكبيرة." },
    33: { title: "المعلم الروحي (ماستر)", desc: "قدرة عالية على التعليم والإرشاد. تتعلم وتُعلّم في نفس الوقت." }
  };
  return meanings[num] || { title: "فريدة", desc: "شخصية مميزة لها مزيج خاص." };
}

function getDestinyMeaning(num) {
  return getLifePathMeaning(num); // simplified for prototype
}

// Export for use
window.Numerology = {
  calculateLifePath,
  calculateDestinyNumber,
  calculateAbjad,
  getLifePathMeaning,
  getDestinyMeaning,
  reduceToSingleDigit
};
