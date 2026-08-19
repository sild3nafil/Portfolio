
const WORKS = [
  {
    id: 1,
    title: "Phantasia",
    category: "Illustration",
    date: "2022",
    cover: "assets/phantasia.jpg",
    lead: "把夜晚裡非常小的亮光，放大成畫面的主體。",
    description: [
      "這是一段範例文字。之後只要修改 data.js，就可以新增或改作品，不需要碰到版面程式。",
      "你也可以把 SVG placeholder 換成自己的 JPG、PNG、WebP 圖片。"
    ],
    images: ["assets/phantasia.jpg"]
  },
  {
    id: 2,
    title: "Wow-wow Kitchen",
    category: "Illustration",
    date: "2024",
    cover: "assets/wowwowkitchen.jpg",
    lead: "一件關於空間、記憶與日常物件失重感的作品。",
    description: [
      "這裡可以放作品的創作概念。你可以寫作品起源、靈感、媒材，以及當時想處理的情緒或問題。",
      "第二段可以放技法、尺寸、製作過程，或是展出時的現場狀態。內容長度不限，手機版會自動換行。"
    ],
    images: ["assets/wowwowkitchen.jpg","assets/wowwowkitchen02.png"]
  },
  {
    id: 3,
    title: "Yichi Play",
    category: "Illustration",
    date: "2025",
    cover: "assets/YICHIPLAY.PNG",
    lead: "測試空間邊界如何被觀看者重新定義。",
    description: ["作品描述範例。","這件作品會自動出現在第二頁。"],
    images: ["assets/YICHIPLAY.PNG"]
  },
  {
    id: 4,
    title: "Travel Bug",
    category: "Illustration",
    date: "2026",
    cover: "assets/TravelBug.PNG",
    lead: "殘像並不是留下來的圖，而是視線離開之後仍沒有消失的東西。",
    description: ["作品描述範例。","可加入更多段落。"],
    images: ["assets/TravelBug.PNG"]
  },
  {
    id: 5,
    title: "Yellow & Purple",
    category: "Animation",
    date: "2022",
    cover: "assets/YellowPurple/01.gif",
    lead: "利用低對比與噪點質感做出的數位作品。",
    description: ["作品描述範例。","可加入更多段落。"],
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
    cover: "assets/90139.png",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
    ],
    embedUrl: "https://sild3nafil.github.io/90139.github.io/index.html",
    images: []
  },
  {
    id: 7,
    title: "Ticket-Style Card",
    category: "Card Design",
    date: "2024",
    cover: "assets/birthday_card.png",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
    ],
    images: ["assets/birthday_card.png","assets/mothersday_card.png","assets/halloween_card.png"]
  },
  {
    id: 8,
    title: "Cactus",
    category: "Comic",
    date: "2024",
    cover: "assets/Cactus/image3.PNG",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/IPoneCase/Rain.png",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/IPoneCase/Yippe.png",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/HannisParty.png",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/HalloweenCostume.png",
    coverFit: "contain",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/skateboard.JPG",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
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
    cover: "assets/UNO.jpg",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
    ],
    youtube: "Jj6Hb2sOipA",
    images: []
  },
  {
    id: 15,
    title: "Diving",
    category: "Illustation",
    date: "2026",
    cover: "assets/Diving.png",
    lead: "以留白和重複構圖，記錄一段不需要被解釋的時間。",
    description: [
      "細部頁面的形式參考了你提供的網站：大標題、分類與日期、分隔線、內文，再往下放作品大圖。",
      "如果想更像展覽型作品集，也可以在下一版加入作品年份、尺寸、媒材與展覽資訊。"
    ],
    images: [
      "assets/Diving.png"
    ]
  },
  {
    id: 16,
    title: "Long-Chen Temple",
    category: "Illustration",
    date: "2022",
    cover: "assets/longchen temple/03.PNG",
    lead: "從最單純的灰階開始，試著留下紙張本身的呼吸感。",
    description: [
      "這裡是作品描述範例。",
      "首頁每頁目前顯示 6 件作品；作品超過 6 件時會自動出現頁碼。"
    ],
    galleryLayout: "grid",
    images: [
      "assets/longchen temple/01.PNG",
      "assets/longchen temple/03.PNG",
      "assets/longchen temple/02.PNG",
      "assets/longchen temple/04.PNG",
      "assets/longchen temple/09.png",
      "assets/longchen temple/06.PNG",
      "assets/longchen temple/05.PNG",
      "assets/longchen temple/07.PNG",
      "assets/longchen temple/08.PNG",
    ]
  },
  {
    id: 17,
    title: "Apple Valley",
    category: "Illustration",
    date: "2021",
    cover: "assets/applevalley.jpg",
    lead: "從最單純的灰階開始，試著留下紙張本身的呼吸感。",
    description: [
      "這裡是作品描述範例。",
      "首頁每頁目前顯示 6 件作品；作品超過 6 件時會自動出現頁碼。"
    ],
    images: [
      "assets/applevalley.jpg",
    ]
  },
];
