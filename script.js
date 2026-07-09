const translations = {
  en: {
    brand: "Michelle & Tom",
    navDetails: "Details",
    navRundown: "The Day",
    navVenue: "Venue",
    navGallery: "Gallery",
    heroKicker: "Together with their families",
    heroInvite: "request the pleasure of your company at their wedding",
    ctaRundown: "View the day",
    ctaVenue: "Find the venue",
    detailsEyebrow: "Wedding Celebration",
    detailsTitle: "Join us for a day by the bay",
    detailsLead:
      "We would be honoured to celebrate with you at The Verandah, The Repulse Bay.",
    labelDate: "Date",
    valueDate: "Sunday, 13 December 2026",
    labelTime: "Time",
    valueTime: "10:00 AM – 3:00 PM",
    labelPlace: "Location",
    valuePlace: "The Verandah, The Repulse Bay",
    rundownTitle: "The Day's Events",
    rundownDate: "December 13, 2026",
    r1t: "10:00 AM",
    r1e: "Guest Arrival",
    r2t: "10:30 AM",
    r2e: "Vows and I Do's",
    r3t: "11:30 AM",
    r3e: "Cocktail Hour",
    r4t: "12:30 PM",
    r4e: "Wedding Lunch",
    r5t: "2:30 PM",
    r5e: "Cake & Farewell",
    venueEyebrow: "The Venue",
    venueTitle: "The Verandah",
    venueLead:
      "A seaside garden setting at The Repulse Bay — nostalgic elegance, soft light, and the calm of the shore.",
    venueAddress: "1/F, 109 Repulse Bay Road, Hong Kong",
    venueLink: "Visit venue website",
    notesEyebrow: "For our guests",
    notesTitle: "A few notes for the day",
    notesLead: "Everything you need to feel at ease as we celebrate together.",
    note1Label: "Dress code",
    note1Title: "Formal & smart casual",
    note1Body:
      "Formal or smart casual attire is welcome. Soft colours suit the seaside setting; please avoid flip-flops and sleeveless shirts for gentlemen.",
    note2Label: "Arrival",
    note2Title: "From 10:00 AM",
    note2Body:
      "Guests are invited to arrive from 10:00 AM. The ceremony begins at 10:30 AM on the Front Lawn.",
    note3Label: "Transport",
    note3Title: "Shuttle bus",
    note3Body:
      "A complimentary shuttle bus will be arranged for guests. Pickup details and timing will be shared closer to the wedding day.",
    note4Label: "Parking",
    note4Title: "Complimentary parking",
    note4Body:
      "Complimentary parking is available at The Repulse Bay for wedding guests on the day.",
    mapEyebrow: "Getting there",
    mapTitle: "Find us on the map",
    mapLead: "The Verandah, The Repulse Bay — 1/F, 109 Repulse Bay Road, Hong Kong.",
    mapOpen: "Open in Google Maps",
    galleryEyebrow: "Moments",
    galleryTitle: "Our story in frames",
    closingLine: "We cannot wait to celebrate with you.",
    footer: "With love — Michelle & Tom",
  },
  zh: {
    brand: "Michelle & Tom",
    navDetails: "詳情",
    navRundown: "當日流程",
    navVenue: "地點",
    navGallery: "相冊",
    heroKicker: "誠邀您與家人一同見證",
    heroInvite: "恭請光臨我們的婚禮",
    ctaRundown: "查看當日流程",
    ctaVenue: "查看場地",
    detailsEyebrow: "婚禮邀請",
    detailsTitle: "淺水灣畔，與您同慶",
    detailsLead: "誠邀您蒞臨淺水灣 The Verandah，與我們共度溫馨喜慶的一天。",
    labelDate: "日期",
    valueDate: "2026年12月13日（星期日）",
    labelTime: "時間",
    valueTime: "上午10時至下午3時",
    labelPlace: "地點",
    valuePlace: "淺水灣 The Verandah",
    rundownTitle: "當日流程",
    rundownDate: "2026年12月13日",
    r1t: "上午10:00",
    r1e: "賓客到達",
    r2t: "上午10:30",
    r2e: "婚禮誓言",
    r3t: "上午11:30",
    r3e: "雞尾酒會",
    r4t: "下午12:30",
    r4e: "婚宴午宴",
    r5t: "下午2:30",
    r5e: "切餅及歡送",
    venueEyebrow: "場地",
    venueTitle: "The Verandah",
    venueLead: "位於淺水灣的海傍花園餐廳——懷舊優雅、柔和光線，與海岸的寧靜氣息。",
    venueAddress: "香港淺水灣道109號1樓",
    venueLink: "前往場地網站",
    notesEyebrow: "賓客須知",
    notesTitle: "當日小提示",
    notesLead: "以下資訊希望讓您輕鬆愉快地與我們同慶。",
    note1Label: "服裝",
    note1Title: "Formal 及 Smart casual",
    note1Body: "歡迎 Formal 或 Smart casual 打扮。柔和色調適合海傍場地；男士請避免拖鞋及無袖上衣。",
    note2Label: "到達時間",
    note2Title: "上午10時起",
    note2Body: "誠邀賓客於上午10時起到達，儀式將於上午10時30分在 Front Lawn 開始。",
    note3Label: "交通",
    note3Title: "接駁巴士",
    note3Body: "當日將安排免費接駁巴士接送賓客。上車地點及時間將於婚禮前另行通知。",
    note4Label: "泊車",
    note4Title: "免費泊車位",
    note4Body: "婚禮當日影灣園為賓客提供免費泊車位。",
    mapEyebrow: "交通指引",
    mapTitle: "地圖位置",
    mapLead: "淺水灣 The Verandah — 香港淺水灣道109號1樓。",
    mapOpen: "在 Google 地圖開啟",
    galleryEyebrow: "時光",
    galleryTitle: "我們的故事",
    closingLine: "期待與您一同慶祝。",
    footer: "Michelle & Tom 敬上",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";

  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dict[key] != null) {
      node.textContent = dict[key];
    }
  });

  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  try {
    localStorage.setItem("mt-wedding-lang", lang);
  } catch (_) {
    /* ignore */
  }
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let initialLang = "en";
try {
  const saved = localStorage.getItem("mt-wedding-lang");
  if (saved === "en" || saved === "zh") initialLang = saved;
} catch (_) {
  /* ignore */
}
setLanguage(initialLang);

const revealTargets = document.querySelectorAll(
  ".details, .rundown-panel, .venue-copy, .venue-photo, .venue-spaces-title, .note-card, .venue-map, .gallery .section-title, .gallery-grid .g, .closing"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
