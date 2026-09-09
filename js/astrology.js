/**
 * Astrology Module
 * AI Education Personality Platform
 */

function getZodiacSign(dob) {
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const signs = [
    { name: "الجدي", en: "Capricorn", start: [12, 22], end: [1, 19], element: "ترابي", traits: "منظم، طموح، صبور، عملي" },
    { name: "الدلو", en: "Aquarius", start: [1, 20], end: [2, 18], element: "هوائي", traits: "مبتكر، مستقل، إنساني، فضولي" },
    { name: "الحوت", en: "Pisces", start: [2, 19], end: [3, 20], element: "مائي", traits: "حساس، خيالي، متعاطف، حدسي" },
    { name: "الحمل", en: "Aries", start: [3, 21], end: [4, 19], element: "ناري", traits: "شجاع، نشيط، قيادي، مباشر" },
    { name: "الثور", en: "Taurus", start: [4, 20], end: [5, 20], element: "ترابي", traits: "صامت، عنيد، حسي، موثوق" },
    { name: "الجوزاء", en: "Gemini", start: [5, 21], end: [6, 20], element: "هوائي", traits: "فضولي، اجتماعي، متقلب، ذكي" },
    { name: "السرطان", en: "Cancer", start: [6, 21], end: [7, 22], element: "مائي", traits: "عاطفي، حامي، حدسي، منزلي" },
    { name: "الأسد", en: "Leo", start: [7, 23], end: [8, 22], element: "ناري", traits: "واثق، كريم، مبدع، قيادي" },
    { name: "العذراء", en: "Virgo", start: [8, 23], end: [9, 22], element: "ترابي", traits: "تحليلي، دقيق، عملي، مساعد" },
    { name: "الميزان", en: "Libra", start: [9, 23], end: [10, 22], element: "هوائي", traits: "دبلوماسي، عادل، اجتماعي، جمالي" },
    { name: "العقرب", en: "Scorpio", start: [10, 23], end: [11, 21], element: "مائي", traits: "قوي، غامض، عاطفي عميق، مصمم" },
    { name: "القوس", en: "Sagittarius", start: [11, 22], end: [12, 21], element: "ناري", traits: "مغامر، متفائل، فلسفي، حر" }
  ];

  for (let sign of signs) {
    const [sm, sd] = sign.start;
    const [em, ed] = sign.end;
    
    if (sm === 12) { // Capricorn wraps year
      if ((month === 12 && day >= sd) || (month === 1 && day <= ed)) return sign;
    } else {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) {
        return sign;
      }
    }
  }
  return signs[0]; // fallback
}

function getElementLearningStyle(element) {
  const map = {
    "ناري": { style: "حركي / نشط", tip: "تتعلم أفضل بالتجربة العملية والحركة والنقاش الحي." },
    "ترابي": { style: "عملي / منظم", tip: "تتعلم أفضل بالخطوات الواضحة والأمثلة الواقعية والجداول." },
    "هوائي": { style: "سمعي / ذهني", tip: "تتعلم أفضل بالنقاش والشرح الشفهي والقصص والأفكار." },
    "مائي": { style: "بصري / عاطفي", tip: "تتعلم أفضل بالصور والقصص العاطفية والخيال والبيئة الهادئة." }
  };
  return map[element] || { style: "متعدد", tip: "لديك مرونة في أساليب التعلم." };
}

window.Astrology = {
  getZodiacSign,
  getElementLearningStyle
};
