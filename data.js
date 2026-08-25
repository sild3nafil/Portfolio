
const WORKS = [
  {
    id: 1,
    title: "Phantasia",
    category: "Illustration",
    date: "2022",
    medium: "數位插畫、紙",
    size: "50 × 70 cm",
    cover: "assets/phantasia.jpg",
    lead: "把繪畫當作興趣，是理想與現實的折衷。",
    description: [
      "我在2022年完成了Phantasia這幅插畫，" +
      "多年過去它仍然是我最喜歡的作品之一。",

      "當時我想要畫一幅能夠表達自己內心世界的作品，於是我選擇了幻想的題材，並且使用了鮮豔的色彩和細膩的筆觸來呈現。",

      "塞了很多主題，以艾爾登法環和探險活寶做為發想的起點，並且加入了自己當時對於人生、夢想和現實的掙扎。" +
      "在繁忙的課業和生活中，Phantasia讓我思考到自己對於藝術的熱愛，如何在現實中追求自己的夢想。",

      "兩者之間的折衷，讓我學會了如何在現實中找到自己的位置。"
    ],
    images: ["assets/phantasia.jpg"]
  },
  {
    id: 2,
    title: "Wow-wow Kitchen",
    category: "Illustration",
    date: "2024",
    medium: "數位插畫、悠遊卡",
    size: "8.5 × 5.4 cm",
    cover: "assets/wowwowkitchen.jpg",
    lead: "一份給朋友的生日禮物。",
    description: [
      "當初想說順便練習透視，以廚房為靈感，便設計了一張悠遊卡插畫。",
      "我很喜歡在插畫裡加入許多小細節，有點像是小時候看威利在哪裡的感覺，讓人可以在畫面裡尋找小驚喜。" +
      "至於為什麼要取名叫Wow-wow Kitchen，其實沒有特別的意義，這是我亂取的名。"
    ],
    images: ["assets/wowwowkitchen.jpg","assets/wowwowkitchen02.png"]
  },
  {
    id: 3,
    title: "Yichi Play",
    category: "Illustration",
    date: "2025",
    medium: "數位插畫、紙",
    size: "10 × 14.8 cm",
    cover: "assets/YICHIPLAY.PNG",
    lead: "如果可以，我想一直去旅行。",
    description: [
      "2025第一次出了國，看了瑞典的森林、挪威的峽灣、英國的街道，" +
      "回到台灣後到了台東待了一個多月，每天曬著太陽、看著海，沒有煩惱、沒有壓力、沒有時間的限制。",
      "無論是鹿野高台的熱氣球、台東的海岸線、還是國王湖的牛，都是我想要記錄的風景。" +
      "我想要把這些美好的回憶畫下來，留在紙上。"
    ],
    images: ["assets/YICHIPLAY.PNG"]
  },
  {
    id: 4,
    title: "Travel Bug",
    category: "Illustration",
    date: "2026",
    medium: "數位插畫、紙",
    size: "10 × 14.8 cm",
    cover: "assets/TravelBug.PNG",
    lead: "殘像並不是留下來的圖，而是視線離開之後仍沒有消失的東西。",
    description: [
      "2025年到了台東打工換宿，在都蘭的旅行蟲民宿待上了一個多月。",
      "今年（2026）我又回到了台東，只不過這次旅行蟲要收了，" +
      "內心有種複雜的情緒，希望未來回到都蘭時，都還能來旅行蟲坐坐，找找認識的人，聊聊生活，" +
      "但這終究是個不可能的願望。",
      "我畫了這幅插畫送給旅行蟲的老闆，作為紀念，也希望能夠留下這段美好的回憶。"
    ],
    images: ["assets/TravelBug.PNG"]
  },
  {
    id: 5,
    title: "Yellow & Purple",
    category: "Animation",
    date: "2022",
    medium: "數位插畫、GIF",
    size: "480 × 480 px",
    cover: "assets/YellowPurple/01.gif",
    lead: "黃色和紫色，外星人沒有戴帽子。",
    description: [
      "這是課堂上期末的專案，Cyberpunk的主題在當時十分吸引我，於是我決定以這個主題來創作一個動畫作品。",
      "這也是我第一次嘗試使用GIF動畫的形式來製作，過程中遇到了不少困難。",
      "而當時最終呈現方式是透過線上的簡報工具來展示，現在回顧後，還是會想起當初老師提到的完整度不夠的問題，" +
      "自己也覺得有點虎頭蛇尾，整體的呈現還是有些不足。",
      "或許直白地放在網頁上才是最適合的方式。"
    ],
    galleryLayout: "two-column",
    images: [
      "assets/YellowPurple/01.gif",
      "assets/YellowPurple/02.gif",
      "assets/YellowPurple/03.gif",
      "assets/YellowPurple/04.gif",
      "assets/YellowPurple/05.gif",
      "assets/YellowPurple/06.gif",
      "assets/YellowPurple/07.gif",
      "assets/YellowPurple/08.gif",
    ]
  },
  {
    id: 6,
    title: "90139",
    category: "Paper Sculpture, Website Design",
    date: "2024",
    medium: "白模版、3D建模、網頁",
    size: "30 × 30 × 2 cm",
    cover: "assets/90139.png",
    lead: "一顆顆手作的米白色角錐 — 大學四年所學的結晶。",
    description: [
      "這個作品花了許多時間製作，應該可以說是目前最耗時的作品了。",
      "從發想、研究不同角度的角錐的解剖圖、材料挑選，到實際製作，再到後期的影像拍攝、網頁製作以及3D建模，都由我自己一手包辦。",
      "花費了大約一個多月的時間，完成了這個作品，" +
      "算是我對於大學四年來所學的設計知識與技能的一個總結，也是一個對自己能力的挑戰。"
    ],
    embedUrl: "https://sild3nafil.github.io/90139.github.io/index.html",
    images: []
  },
  {
    id: 7,
    title: "Ticket-Style Card",
    category: "Card Design",
    date: "2024",
    medium: "數位插畫、紙",
    size: "8 × 20.5 cm",
    cover: "assets/TicketCard/Mockup.png",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/TicketCard/birthday_card.png",
      "assets/TicketCard/mothersday_card.png",
      "assets/TicketCard/halloween_card.png"
    ]
  },
  {
    id: 8,
    title: "Cactus",
    category: "Comic",
    date: "2024",
    medium: "數位插畫",
    size: "21 × 21 cm",
    cover: "assets/Cactus/image3.PNG",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/Cactus/image1.PNG",
      "assets/Cactus/image2.PNG",
      "assets/Cactus/image3.PNG",
      "assets/Cactus/image4.PNG",
      "assets/Cactus/image5.PNG",
      "assets/Cactus/image6.PNG",
      "assets/Cactus/image7.PNG",
      "assets/Cactus/image8.PNG",
      "assets/Cactus/image9.PNG",
      "assets/Cactus/image10.PNG",
    ]
  },
  {
    id: 9,
    title: "Rain",
    category: "iPhone Case Design",
    date: "2024",
    medium: "數位插畫、手機殼",
    size: "17 × 9 × 1.5 cm",
    cover: "assets/IPoneCase/Rain.png",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    galleryLayout: "two-column",
    images: [
      "assets/IPoneCase/Rain.png",
      "assets/IPoneCase/01.png",
    ]
  },
  {
    id: 10,
    title: "Yippe",
    category: "iPhone Case Design",
    date: "2024",
    medium: "數位插畫、手機殼",
    size: "17 × 9 × 1.5 cm",
    cover: "assets/IPoneCase/Yippe.png",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    galleryLayout: "two-column",
    images: [
      "assets/IPoneCase/Yippe.png",
      "assets/IPoneCase/02.png",
    ]
  },
  {
    id: 11,
    title: "Hanni's Party",
    category: "Comic",
    date: "2023",
    medium: "數位插畫",
    size: "21 × 21 cm",
    cover: "assets/HannisParty.png",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/HannisParty.png"
    ]
  },
  {
    id: 12,
    title: "Halloween Costume",
    category: "Comic",
    date: "2023",
    medium: "數位插畫",
    size: "21 × 21 cm",
    cover: "assets/HalloweenCostume.png",
    coverFit: "contain",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/HalloweenCostume.png"
    ]
  },
  {
    id: 13,
    title: "Skateboarder",
    category: "Illustration",
    date: "2021",
    medium: "數位插畫",
    size: "49.0 × 34.7 cm",
    cover: "assets/skateboard.JPG",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/skateboard.JPG",
      "assets/skateboard02.JPG"
    ]
  },
  {
    id: 14,
    title: "UNO Is Not My Game",
    category: "Animation",
    date: "2024",
    medium: "數位插畫、動畫",
    size: "1920 × 1080 px",
    cover: "assets/UNO.jpg",
    lead: "引言",
    description: [
      "說明"
    ],
    youtube: "Jj6Hb2sOipA",
    images: []
  },
  {
    id: 15,
    title: "Stamp",
    category: "Illustration",
    coverFit: "contain",
    date: "2026",
    medium: "數位插畫、郵票",
    size: "1000 × 1000 px",
    cover: "assets/Stamp/01.png",
    lead: "引言",
    description: [
      "說明"
    ],
    galleryLayout: "marquee",
    images: [
      "assets/Stamp/01.png",
      "assets/Stamp/02.png",
      "assets/Stamp/03.png",
      "assets/Stamp/04.png",
    ]
  },
  {
    id: 16,
    title: "Long-Chen Temple",
    category: "Illustration",
    date: "2022",
    medium: "數位插畫",
    size: "2000 × 2000 px",
    cover: "assets/LongchenTemple/03.PNG",
    lead: "引言",
    description: [
      "說明"
    ],
    galleryLayout: "grid",
    images: [
      "assets/LongchenTemple/01.PNG",
      "assets/LongchenTemple/03.PNG",
      "assets/LongchenTemple/02.PNG",
      "assets/LongchenTemple/04.PNG",
      "assets/LongchenTemple/09.png",
      "assets/LongchenTemple/06.PNG",
      "assets/LongchenTemple/05.PNG",
      "assets/LongchenTemple/07.PNG",
      "assets/LongchenTemple/08.PNG",
    ]
  },
  {
    id: 17,
    title: "Apple Valley",
    category: "Illustration",
    date: "2021",
    medium: "插畫、麥克筆、金屬",
    size: "17.75 × 24.97 cm",
    cover: "assets/AppleValley/applevalley.jpg",
    lead: "引言",
    description: [
      "說明"
    ],
    images: [
      "assets/AppleValley/applevalley.jpg",
    ]
  },
  {
    id: 18,
    title: "Don't Drop the Soap",
    category: "Comic",
    coverFit: "contain",
    date: "2020",
    medium: "數位插畫",
    size: "750 × 750 px",
    cover: "assets/Dont drop the soap.png",
    lead: "你有聽過撿肥皂的鬼故事嗎？",
    description: [
      "不可以彎腰！"
    ],
    images: [
      "assets/Dont drop the soap.png",
    ]
  },
  },
];
