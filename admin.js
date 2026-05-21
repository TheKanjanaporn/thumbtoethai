// ==========================================
// DUIT THAILAND — ADMIN PANEL JS
// Full CMS Logic
// ==========================================

// ==========================================
// DEFAULT DATA (mirrors app.js defaults)
// ==========================================
const DEFAULT_PRODUCTS = [
    { id:"table_plus", category:"appliances", title:{en:"The Table+",th:"The Table+"}, subtitle:{en:"Minimalist Smart Feeder",th:"เครื่องให้อาหารมินิมอลสไตล์"}, badge:{en:"Smart Tech",th:"เทคโนโลยีอัจฉริยะ"}, price:"7,490", image:"assets/table_plus.png", description:{en:"Minimalist smart automatic feeder. Connects to app, made from food-grade plastic — same quality as baby bottles.",th:"เครื่องให้อาหารอัตโนมัติสไตล์มินิมอล เชื่อมต่อแอพได้ วัสดุพลาสติกเกรดเดียวกับขวดนมเด็ก"}, features:{en:["Minimalist design","App connectivity","Food-grade plastic (same as baby bottles)"],th:["มินิมอล","เชื่อมแอพได้","วัสดุทำจากพลาสติกเกรดเดียวกับขวดนมเด็ก"]}},
    { id:"daily_table", category:"appliances", title:{en:"Daily Table",th:"Daily Table"}, subtitle:{en:"Elevated Food Bowl Stand",th:"ชามอาหารมินิมอล"}, badge:{en:"Popular",th:"ยอดนิยม"}, price:"2,590", image:"assets/daily_table.png", description:{en:"Minimalist elevated food bowl stand. 100% washable, reduces neck strain while eating.",th:"ชามอาหารพร้อมขาตั้งสไตล์มินิมอล ทำความสะอาดได้ 100% ช่วยให้สัตว์เลี้ยงไม่ต้องก้มจนเกินไปขณะกินอาหาร"}, features:{en:["100% washable","Elevated bowl stand with legs","Reduces neck strain while eating"],th:["สามารถทำความสะอาดได้ 100%","ชามอาหารพร้อมขาตั้ง","ช่วยให้สัตว์เลี้ยงไม่ต้องก้มจนเกินไปขณะกินอาหาร"]}},
    { id:"wave_pot", category:"appliances", title:{en:"Wave Pot",th:"Wave Pot"}, subtitle:{en:"Ceramic Water Fountain",th:"น้ำพุพร้อมระบบกรองน้ำชั้นเลิศ"}, badge:{en:"New",th:"ใหม่"}, price:"2,790", image:"assets/wave_pot.png", description:{en:"Premium ceramic water fountain with filtration. Wave-like flow encourages cats to drink more water. Silent operation.",th:"น้ำพุเซรามิกพร้อมระบบกรองน้ำชั้นเลิศ การไหลของน้ำเหมือนคลื่นช่วยกระตุ้นการดื่มน้ำ ไม่มีเสียงรบกวน"}, features:{en:["Made from ceramic material","Wave-like water flow","Encourages hydration","Silent operation","Easy assembly within minutes"],th:["ตัววัสดุผลิตจากเซรามิก","การไหลของน้ำเหมือนคลื่น","ช่วยกระตุ้นการกินน้ำ","ไม่มีเสียงดังรบกวน","ประกอบง่ายภายในไม่กี่นาที"]}},
    { id:"water_pot", category:"appliances", title:{en:"Water Pot",th:"Water Pot"}, subtitle:{en:"Premium Water Fountain",th:"น้ำพุระบบกรองน้ำชั้นเลิศ"}, badge:{en:"Premium",th:"พรีเมียม"}, price:"4,390", image:"assets/water_pot.png", description:{en:"Advanced water fountain with human-grade filtration. Easy to disassemble and clean. Completely silent.",th:"น้ำพุพร้อมระบบกรองน้ำเกรดเดียวกับคนดื่ม สามารถถอดทำความสะอาดได้ง่าย ไม่มีเสียงดังรบกวน"}, features:{en:["Human-grade water filtration","Easy disassembly for cleaning","Silent motor"],th:["มาพร้อมระบบกรองน้ำเกรดเดียวกับคนดื่ม","สามารถถอดทำความสะอาดได้","ไม่มีเสียงดังรบกวน"]}},
    { id:"mouse_bot", category:"appliances", title:{en:"Mouse Bot",th:"Mouse Bot"}, subtitle:{en:"Interactive AI Cat Toy",th:"ของเล่นแมวเลียนแบบอัตโนมัติ"}, badge:{en:"Smart",th:"อัจฉริยะ"}, price:"1,490", image:"assets/mouse_bot.jpg", description:{en:"Smart interactive cat toy that mimics mouse movement. Auto-switches modes, stops automatically when not in use.",th:"ของเล่นแมวอัจฉริยะเลียนแบบการเคลื่อนที่ของหนู ปรับโหมดได้ หยุดอัตโนมัติเมื่อแมวไม่ได้เล่น"}, features:{en:["Adjustable movement modes","No remote control needed","Auto-stops when cat isn't playing"],th:["สามารถปรับเปลี่ยนโหมดได้","ไม่ต้องคอยบังคับ","หากไม่ได้เล่นด้วย Mouse Bot จะหยุดอัตโนมัติ"]}},
    { id:"poopoo_2way", category:"appliances", title:{en:"Poo Poo Box 2-Way",th:"Poo Poo Box 2-Way"}, subtitle:{en:"Dual-Entry Litter Box",th:"ห้องน้ำแมวแบบเข้าได้สองทาง"}, badge:{en:"Best Seller",th:"ขายดี"}, price:"2,990", image:"assets/poopoo_2way.png", description:{en:"Dual-entry litter box — enter from top or side. Excellent odor control while in use. Easy to clean.",th:"ห้องน้ำแมวเข้าได้สองทาง เก็บกลิ่นได้ดีขณะที่สัตว์เลี้ยงใช้งาน ทำความสะอาดง่าย"}, features:{en:["Dual-entry (top & side)","Excellent odor control during use","Easy to clean"],th:["ห้องน้ำที่เข้าได้อย่างดีออกดี","สามารถเข้าได้สองทาง","เก็บกลิ่นได้ดีขณะที่สัตว์เลี้ยงใช้งาน"]}},
    { id:"poopoo_cube", category:"appliances", title:{en:"Poo Poo Box (CUBE)",th:"Poo Poo Box (CUBE)"}, subtitle:{en:"Large Cube Litter Box",th:"ห้องน้ำแมวขนาดใหญ่กว่าเดิม"}, badge:{en:"Spacious",th:"กว้างขวาง"}, price:"2,990", image:"assets/poopoo_cube.png", description:{en:"Large cube-shaped litter box. Easy to clean with no odor or bacteria buildup.",th:"ห้องน้ำแมวรูปทรงลูกบาศก์ขนาดใหญ่ ทำความสะอาดง่าย ไม่สะสมกลิ่นและแบคทีเรีย"}, features:{en:["Extra large size","Easy to clean","No odor or bacteria buildup"],th:["มีขนาดใหญ่","ทำความสะอาดง่าย","ไม่สะสมกลิ่นและแบคทีเรีย"]}},
    { id:"poopoo_long", category:"appliances", title:{en:"Poo Poo Box (LONG)",th:"Poo Poo Box (LONG)"}, subtitle:{en:"XL Long Litter Box",th:"ห้องน้ำแมวขนาดใหญ่พิเศษ"}, badge:{en:"XL Size",th:"ไซส์ XL"}, price:"3,490", image:"assets/poopoo_long.png", description:{en:"Extra-large long litter box specially sized for bigger cats.",th:"ห้องน้ำแมวยาวขนาดใหญ่พิเศษ เหมาะสำหรับแมวตัวใหญ่"}, features:{en:["Extra large special size","Easy to clean","No odor or bacteria"],th:["ห้องน้ำที่มีขนาดใหญ่พิเศษ","ทำความสะอาดง่าย","ไม่สะสมกลิ่นและแบคทีเรีย"]}},
    { id:"peek_a_poo", category:"appliances", title:{en:"Peek a Poo",th:"Peek a Poo"}, subtitle:{en:"Top-Entry Litter Box",th:"ห้องน้ำสำหรับมองจากบน"}, badge:{en:"Odor Free",th:"ไร้กลิ่น"}, price:"2,390", image:"assets/peek_a_poo.png", description:{en:"Top-entry litter box. Easy to clean, dual handles, non-stick surface gentle on paws.",th:"ห้องน้ำแบบเปิดจากบน ทำความสะอาดง่าย มีที่จับสองด้าน พื้นผิวนุ่ม"}, features:{en:["Easy to clean","Dual handles for easy lifting","Non-stick surface gentle on paws"],th:["ทำความสะอาดง่าย","มีที่จับสองด้านทำให้ยกได้ง่าย","พื้นผิวนุ่มไม่ทำให้เล็บสัตว์เลี้ยงติด"]}},
    { id:"standing_board", category:"furniture", title:{en:"Standing Board",th:"Standing Board"}, subtitle:{en:"Vertical Scratch Board",th:"กระดานสำหรับลับเล็บ"}, badge:{en:"Durable",th:"ทนทาน"}, price:"2,390", image:"assets/standing_board.png", description:{en:"Durable vertical scratch board. Helps cats fully stretch their body. No cardboard dust.",th:"กระดานลับเล็บแบบตั้ง วัสดุแข็งแรงทนทาน ช่วยให้น้องแมวยืดตัวได้สุด"}, features:{en:["Strong and durable material","Helps cats stretch fully","No cardboard dust or mess"],th:["วัสดุแข็งแรงทนทาน ใช้ได้นาน","ช่วยให้น้องแมวยืดตัวได้สุด","ไม่มีเศษกระดาษหลุดเลอะเกอะ"]}},
    { id:"run_run_mat", category:"furniture", title:{en:"Run Run Mat (M/L)",th:"Run Run Mat (M/L)"}, subtitle:{en:"Anti-slip Pet Mat",th:"พรมกันลื่น ดักใยผ้าพิเศษ"}, badge:{en:"M / L Size",th:"ไซส์ M / L"}, price:"3,690 / 4,390", image:"assets/run_run_mat.png", description:{en:"Special fiber anti-slip pet mat. Waterproof & easy to clean.",th:"พรมกันลื่นดักใยผ้าพิเศษ กันน้ำและทำความสะอาดง่าย"}, features:{en:["Waterproof & easy to clean","Claw-friendly anti-slip material","5mm cushion reduces noise"],th:["กันน้ำและทำความสะอาดง่าย","กันลื่น เหมาะสำหรับกรงเล็บ","เบาะกันกระแทก 5 มม. ลดเสียงรบกวน"]}},
    { id:"all_day_basket", category:"furniture", title:{en:"All Day Basket",th:"All Day Basket"}, subtitle:{en:"Large Cat Basket",th:"คลอดแมวขนาดใหญ่"}, badge:{en:"Cozy",th:"อบอุ่น"}, price:"2,990", image:"assets/all_day_basket.png", description:{en:"Large and spacious cat basket. Durable with thick premium material.",th:"ตะกร้าแมวขนาดใหญ่ ทนทาน ใช้วัสดุหนาคุณภาพสูง"}, features:{en:["Large size","Durable thick premium material"],th:["มีขนาดใหญ่","ทนทาน ใช้วัสดุลักษณะแบบหนาที่สุด"]}},
    { id:"all_day_rack", category:"furniture", title:{en:"All Day Rack",th:"All Day Rack"}, subtitle:{en:"Multi-Purpose Cat Shelf",th:"ชั้นวางของแมว"}, badge:{en:"Versatile",th:"อเนกประสงค์"}, price:"4,890", image:"assets/all_day_rack.jpg", description:{en:"Multi-purpose cat shelf with strong steel frame. Easy assembly, fits any location.",th:"ชั้นวางของอเนกประสงค์ โครงเหล็กแข็งแรงและประกอบง่าย"}, features:{en:["Multiple usage configurations","Strong steel frame & easy assembly","Fits any location"],th:["ใช้งานได้หลายรูปแบบ","โครงเหล็กแข็งแรงและประกอบง่าย","เข้าได้กับทุกสถานที่"]}},
    { id:"allday_board", category:"toys", title:{en:"All-day Board",th:"All-day Board"}, subtitle:{en:"Ergonomic Curved Scratcher",th:"แผ่นลับเล็บแมว"}, badge:{en:"Ergonomic",th:"เข้ากับสรีระ"}, price:"1,990", image:"assets/allday_board.png", description:{en:"Curved scratch board ergonomically designed for cats.",th:"แผ่นลับเล็บโค้งมนเข้ากับสรีระแมว ทำความสะอาดง่าย"}, features:{en:["Ergonomic curve fits cat body","Easy to clean","Sturdy board, minimal cardboard dust"],th:["โค้งมนเข้ากับสรีระแมว","ทำความสะอาดง่าย","กระดาษแข็ง ผงกระดาษน้อย"]}},
    { id:"peanut_board", category:"toys", title:{en:"Peanut Board",th:"Peanut Board"}, subtitle:{en:"4-in-1 Multipurpose Scratcher",th:"บอร์ดลับเล็บแมว บำรุงสี่แขน"}, badge:{en:"4 in 1",th:"4 อิน 1"}, price:"2,490", image:"assets/peanut_board.png", description:{en:"4-in-1 multipurpose scratch board for sleeping and scratching.",th:"ที่ลับเล็บอเนกประสงค์ 4 in 1 ใช้ได้ทั้งนอนและลับเล็บ"}, features:{en:["4-in-1 multipurpose design","Use for sleeping & scratching","No cardboard dust or mess"],th:["ที่ลับเล็บอเนกประสงค์ 4 in 1","ใช้ได้กับนอนและลับเล็บ","ไม่มีเศษกระดาษหลุดเลอะเกอะ"]}},
    { id:"antibug_light", category:"appliances", title:{en:"Anti-bug Light",th:"Anti-bug Light"}, subtitle:{en:"Natural Insect Repellent Light",th:"ไฟกันแมลง"}, badge:{en:"Natural",th:"ธรรมชาติ 100%"}, price:"1,090", image:"assets/antibug_light.png", description:{en:"Protects your pets from insects naturally. Made from 100% natural herbs.",th:"ป้องกันสัตว์เลี้ยงจากแมลง ใช้สมุนไพรธรรมชาติ 100%"}, features:{en:["Protects pets from insects","100% natural herbs","Night flashing light for safe walking"],th:["ป้องกันสัตว์เลี้ยงจากแมลงได้","ใช้สมุนไพรธรรมชาติ 100%","มีไฟกะพริบสำหรับการเดินตอนกลางคืน"]}},
    { id:"car_seat", category:"furniture", title:{en:"Go Go Car Seat",th:"Go Go Car Seat"}, subtitle:{en:"Pet Car Travel Seat",th:"ที่นั่งในรถยนต์ สำหรับการเดินทาง"}, badge:{en:"Travel",th:"เดินทาง"}, price:"5,450", image:"assets/car_seat.png", description:{en:"Thick and durable pet car seat. Anti-bacterial material, 3-in-1 usage modes.",th:"ที่นั่งในรถยนต์สำหรับสัตว์เลี้ยง หนาและทนทาน วัสดุต้านเชื้อแบคทีเรีย"}, features:{en:["Thick & durable — no tearing","Anti-bacterial material","3-in-1 usage modes"],th:["หนาและทนทาน ไม่ฉีกขาด","วัสดุต้านเชื้อแบคทีเรีย","ใช้งานได้แบบ 3 in 1"]}},
    { id:"silicone_mat", category:"toys", title:{en:"Silicone Mat",th:"Silicone Mat"}, subtitle:{en:"Food & Water Silicone Placemat",th:"แผ่นซิลิโคนรองอาหาร/น้ำ"}, badge:{en:"BPA Free",th:"ปลอด BPA"}, price:"790", image:"assets/silicone_mat.png", description:{en:"Anti-slip waterproof silicone placemat with 1cm raised edge. BPA-free.",th:"แผ่นซิลิโคนกันลื่นและกันน้ำ มีขอบสูง 1 ซม. วัสดุซิลิโคนปลอดสาร BPA"}, features:{en:["Anti-slip & waterproof","1cm raised edge prevents spills","BPA-free silicone"],th:["กันลื่นและกันน้ำ","มีขอบสูง 1 ซม. ป้องกันของเหลวรั่วไหล","วัสดุซิลิโคนปลอดสาร BPA"]}},
    { id:"nonslip_mat", category:"toys", title:{en:"Non-slip Silicone Mat",th:"Non-slip Silicone Mat"}, subtitle:{en:"Safety Floor Mat for Pets",th:"แผ่นกันลื่นสำหรับน้องแมว"}, badge:{en:"Safety",th:"ปลอดภัย"}, price:"2,350", image:"assets/nonslip_mat.png", description:{en:"Premium non-slip silicone floor mat for pets. Waterproof with BPA-free silicone.",th:"แผ่นกันลื่นสำหรับน้องแมว กันลื่นและกันน้ำ วัสดุซิลิโคนปลอดภัย"}, features:{en:["Anti-slip & waterproof","BPA-free safe silicone material"],th:["กันลื่นและกันน้ำ","วัสดุซิลิโคนปลอดภัย"]}},
    { id:"dry_mat", category:"toys", title:{en:"Dry Mat",th:"Dry Mat"}, subtitle:{en:"Diatomite Absorbent Mat",th:"แผ่นรองซับน้ำ"}, badge:{en:"Quick Dry",th:"ซับน้ำเร็ว"}, price:"990", image:"assets/dry_mat.png", description:{en:"Premium diatomite drying mat. Highly absorbent, ideal for placing under food bowls.",th:"แผ่นรองซับน้ำจากไดอะตอมไมต์ ซับซับดี เหมาะสำหรับวางชามอาหาร/น้ำ"}, features:{en:["Diatomite material","Highly absorbent","Ideal for food & water bowl placement"],th:["ใช้วัสดุไดอะตอมไมต์","ซับซับดี","เหมาะสำหรับวางชามอาหาร/น้ำ"]}},
    { id:"floating_bath_tub", category:"toys", title:{en:"Floating Bath Tub",th:"Floating Bath Tub"}, subtitle:{en:"Foldable Pet Bath Tub",th:"อ่างอาบน้ำสำหรับสัตว์เลี้ยง"}, badge:{en:"Foldable",th:"พับได้"}, price:"1,990", image:"assets/floating_bath_tub.png", description:{en:"Foldable pet bath tub to save space. Anti-slip material, strong structure.",th:"อ่างอาบน้ำสำหรับสัตว์เลี้ยงที่พับเก็บได้ ประหยัดพื้นที่ วัสดุกันลื่น"}, features:{en:["Foldable, space-saving design","Anti-slip material","Strong structure distributes weight evenly"],th:["พับเก็บได้/ประหยัดพื้นที่","วัสดุกันลื่น","โครงสร้างแข็งแรงกระจายน้ำหนักดี"]}},
    { id:"banana_brush", category:"toys", title:{en:"Banana Brush",th:"Banana Brush"}, subtitle:{en:"Natural Pet Grooming Brush",th:"แปรงขนแมว"}, badge:{en:"Natural",th:"ธรรมชาติ"}, price:"1,200", image:"assets/banana_brush.png", description:{en:"Gentle banana-shaped grooming brush. 100% natural bristles.",th:"แปรงขนแมวทรงกล้วย อ่อนโยน ขนแปรงธรรมชาติ 100%"}, features:{en:["Gentle — non-irritating","100% natural bristles","Designed specifically for pets"],th:["อ่อนโยน/ไม่ระคายเคือง","ขนแปรงธรรมชาติ 100%","ออกแบบมาเพื่อสัตว์เลี้ยงโดยเฉพาะ"]}},
    { id:"soft_brush", category:"toys", title:{en:"Soft Brush",th:"Soft Brush"}, subtitle:{en:"Self-Cleaning Grooming Brush",th:"แปรงขนนุ่มแมว"}, badge:{en:"Easy Clean",th:"ทำความสะอาดง่าย"}, price:"1,090", image:"assets/soft_brush.png", description:{en:"Ultra-soft grooming brush with self-cleaning button.",th:"แปรงขนนุ่มนวลพร้อมปุ่มกำจัดขน"}, features:{en:["Ultra-soft bristles","Easy grip handle","Self-cleaning button removes fur"],th:["แปรงนุ่มนวล","จับง่าย","มีปุ่ม กำจัดขนหลังใช้งาน"]}},
    { id:"catthenon", category:"furniture", title:{en:"Catthenon",th:"Catthenon"}, subtitle:{en:"Premium Cat Scratcher Tower",th:"ที่ลับเล็บแมว"}, badge:{en:"Premium",th:"พรีเมียม"}, price:"3,190", image:"assets/catthenon.jpg", description:{en:"Premium Catthenon cat scratcher with strong, stable structure. Paper rope — odorless.",th:"ที่ลับเล็บแมวพรีเมียม Catthenon โครงสร้างแข็งแรง วัสดุเชือกกระดาษ ไร้กลิ่น"}, features:{en:["Strong, stable structure","Paper rope material — odorless & minimal dust","Easy assembly"],th:["โครงสร้างแข็งแรง มั่นคง","วัสดุเชือกกระดาษ ไร้กลิ่น/ฝุ่นน้อย","ประกอบง่าย"]}}
];

const DEFAULT_SLIDES = [
    { id:"slide1", badgeEn:"Hot Pick", badgeTh:"สินค้ายอดฮิต", titleEn:"duit yummy ball", titleTh:"duit yummy ball", descEn:"your playful toy buddy, nose work master.", descTh:"ของเล่นสัตว์เลี้ยงแสนสนุก ฝึกดมกลิ่นและทักษะสมอง", btnEn:"Explore Toys", btnTh:"เลือกชมของเล่น", btnCategory:"toys", image:"https://cdn.imweb.me/thumbnail/20250428/ddee63d251372.jpg" },
    { id:"slide2", badgeEn:"Smart Tech", badgeTh:"อุปกรณ์อัจฉริยะ", titleEn:"duit automatic feeder", titleTh:"เครื่องให้อาหารอัตโนมัติ duit", descEn:"customizable smart feeder, never miss a meal.", descTh:"เครื่องให้อาหารอัจฉริยะ ตั้งเวลาได้ตามใจ หมดกังวลทุกมื้อ", btnEn:"Explore Appliances", btnTh:"เลือกชมอุปกรณ์", btnCategory:"appliances", image:"https://cdn.imweb.me/thumbnail/20240419/4d999960b611b.jpg" },
    { id:"slide3", badgeEn:"Luxury Furniture", badgeTh:"เฟอร์นิเจอร์สุดหรู", titleEn:"duit catthenon", titleTh:"คอนโดแมวที่ลับเล็บ duit", descEn:"modular cat scratching tower, the kingdom of cats.", descTh:"คอนโดแมวที่ลับเล็บสไตล์โมเดิร์น อาณาจักรของเจ้าเหมียว", btnEn:"Explore Furniture", btnTh:"เลือกชมเฟอร์นิเจอร์", btnCategory:"furniture", image:"https://cdn.imweb.me/thumbnail/20241216/f2f68e665eb7f.jpg" }
];

const DEFAULT_EVENT = {
    discount: 10,
    lineUrl: "https://line.me/R/ti/p/@duit_thailand",
    titleEn: "DUIT Event Exclusive Offer",
    titleTh: "ข้อเสนอพิเศษเฉพาะงานนี้",
    descEn: "Welcome to our showroom! Scan the QR Code at our booth to explore our products. Register below to receive an instant 10% discount coupon valid for any purchases made today!",
    descTh: "ยินดีต้อนรับสู่โชว์รูมของเรา! เพียงสแกน QR Code ที่บูธเพื่อเลือกชมสินค้า ลงทะเบียนด้านล่างเพื่อรับคูปองส่วนลด 10% ทันที สำหรับซื้อสินค้าภายในงานวันนี้!",
    perks: [
        { en: "10% OFF all items", th: "ลด 10% ทุกรายการสินค้า" },
        { en: "Free Shipping in Thailand", th: "จัดส่งฟรีทั่วประเทศไทย" },
        { en: "DUIT Premium Gift Bag", th: "รับฟรีถุงของขวัญสุดพรีเมียมจาก DUIT" }
    ]
};

const DEFAULT_STORE = {
    addressTh: "โชว์รูมกรุงเทพฯ, ประเทศไทย",
    addressEn: "Bangkok Showroom, Thailand",
    email: "contact@duitthailand.com",
    phone: "+66 (0) 2-123-4567",
    lineId: "@duit_thailand",
    lineUrl: "https://line.me/R/ti/p/@duit_thailand",
    fbUrl: "#",
    igUrl: "#",
    globalUrl: "https://duitoverseas.com/",
    aboutTh: "เฟอร์นิเจอร์และอุปกรณ์สัตว์เลี้ยงระดับพรีเมียมสไตล์มินิมอล นำเข้าจากประเทศเกาหลีใต้ รังสรรค์ด้วยความรักเพื่อยกระดับบ้านสไตล์โมเดิร์น",
    aboutEn: "Minimalist premium pet furniture and appliances. Imported from South Korea, crafted with love for modern homes."
};

const DEFAULT_SETTINGS = {
    adminPin: "admin1234",
    staffPin: "1234"
};

// ==========================================
// STATE
// ==========================================
let cmsData = null;
let currentPanel = "dashboard";

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    await loadCMSData();
    checkAutoLogin();
});

async function loadCMSData() {
    try {
        const res = await fetch('/api/data');
        let saved = await res.json();
        
        // MIGRATION: If backend is empty, try to migrate from localStorage
        if (!saved || Object.keys(saved).length === 0) {
            const localSaved = localStorage.getItem("duit_cms_data");
            if (localSaved) {
                saved = JSON.parse(localSaved);
                await fetch('/api/data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(saved)
                });
            }
        }

        if (saved && Object.keys(saved).length > 0) {
            cmsData = saved;
            if (!cmsData.products) cmsData.products = [...DEFAULT_PRODUCTS];
            if (!cmsData.slides)   cmsData.slides   = [...DEFAULT_SLIDES];
            if (!cmsData.event)    cmsData.event    = { ...DEFAULT_EVENT };
            if (!cmsData.store)    cmsData.store    = { ...DEFAULT_STORE };
            if (!cmsData.settings) cmsData.settings = { ...DEFAULT_SETTINGS };
        } else {
            cmsData = {
                products: JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)),
                slides:   JSON.parse(JSON.stringify(DEFAULT_SLIDES)),
                event:    JSON.parse(JSON.stringify(DEFAULT_EVENT)),
                store:    JSON.parse(JSON.stringify(DEFAULT_STORE)),
                settings: { ...DEFAULT_SETTINGS }
            };
        }
    } catch (err) {
        console.error("Failed to load CMS data from API, falling back to local storage:", err);
        const localSaved = localStorage.getItem("duit_cms_data");
        if (localSaved) {
            cmsData = JSON.parse(localSaved);
        } else {
            cmsData = {
                products: JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)),
                slides:   JSON.parse(JSON.stringify(DEFAULT_SLIDES)),
                event:    JSON.parse(JSON.stringify(DEFAULT_EVENT)),
                store:    JSON.parse(JSON.stringify(DEFAULT_STORE)),
                settings: { ...DEFAULT_SETTINGS }
            };
        }
    }
}

async function saveCMSData() {
    localStorage.setItem("duit_cms_data", JSON.stringify(cmsData));
    try {
        await fetch('/api/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cmsData)
        });
        showSaveStatus();
    } catch (e) {
        console.error("Failed to save to backend", e);
        showToast("เซฟข้อมูลลงไฟล์ล้มเหลว", "error");
    }
}

function showSaveStatus() {
    const el = document.getElementById("saveStatus");
    el.classList.add("visible");
    setTimeout(() => el.classList.remove("visible"), 3000);
}

// ==========================================
// AUTH
// ==========================================
function checkAutoLogin() {
    const sessionOk = sessionStorage.getItem("duit_admin_session");
    if (sessionOk === "1") {
        showAdminApp();
    }
}

function doAdminLogin() {
    const pin = document.getElementById("adminPinInput").value;
    const correctPin = cmsData.settings.adminPin || "admin1234";
    if (pin === correctPin) {
        sessionStorage.setItem("duit_admin_session", "1");
        showAdminApp();
    } else {
        const err = document.getElementById("loginError");
        err.style.display = "block";
        document.getElementById("adminPinInput").value = "";
        setTimeout(() => err.style.display = "none", 3000);
    }
}

function showAdminApp() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("adminApp").style.display = "flex";
    refreshDashboard();
    renderProductTable();
    renderLeadsTable();
}

function doLogout() {
    sessionStorage.removeItem("duit_admin_session");
    location.reload();
}

// ==========================================
// PANEL NAVIGATION
// ==========================================
function showPanel(name) {
    // Hide all panels
    document.querySelectorAll(".admin-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));

    document.getElementById("panel-" + name).classList.add("active");
    const navEl = document.getElementById("nav-" + name);
    if (navEl) navEl.classList.add("active");
    currentPanel = name;

    // Update topbar title
    const titles = {
        dashboard: "แดชบอร์ด", products: "จัดการสินค้า",
        slider: "Hero Slider", event: "Event Section",
        store: "ข้อมูลร้านค้า", leads: "Leads ลูกค้า", settings: "ตั้งค่า",
        discount: "ส่วนลด Pet Expo"
    };
    const icons = {
        dashboard: "chart-pie", products: "box", slider: "images",
        event: "gift", store: "store", leads: "users", settings: "gear",
        discount: "percent"
    };

    document.getElementById("topbarTitle").textContent = titles[name] || name;
    const titleEl = document.querySelector(".topbar-title i");
    if (titleEl) titleEl.className = `fa-solid fa-${icons[name] || 'circle'}`;

    // Load panel data
    if (name === "slider")   loadSliderEditor();
    if (name === "event")    loadEventEditor();
    if (name === "store")    loadStoreEditor();
    if (name === "settings") loadSettings();
    if (name === "leads")    renderLeadsTable();
    if (name === "discount") loadDiscountPanel();

    closeMobileSidebar();
}

// ==========================================
// DASHBOARD
// ==========================================
function refreshDashboard() {
    fetch('/api/leads').then(r => r.json()).then(leads => {
        document.getElementById("stat-leads").textContent    = leads.length;
        document.getElementById("leadsCount").textContent    = leads.length;
    }).catch(() => {
        const leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
        document.getElementById("stat-leads").textContent    = leads.length;
        document.getElementById("leadsCount").textContent    = leads.length;
    });

    document.getElementById("stat-products").textContent = cmsData.products.length;
    document.getElementById("stat-slides").textContent   = cmsData.slides.length;
    document.getElementById("productCount").textContent  = cmsData.products.length;

    // Update discount nav dot
    updateDiscountNavDot();
}

function updateDiscountNavDot() {
    const dot = document.getElementById("discountNavDot");
    if (!dot) return;
    const enabled = cmsData.discount && cmsData.discount.enabled;
    dot.style.display = enabled ? "block" : "none";
}

// ==========================================
// DISCOUNT MANAGEMENT
// ==========================================
function loadDiscountPanel() {
    if (!cmsData.discount) cmsData.discount = { enabled: false, percent: 10, overrides: {} };
    if (!cmsData.discount.overrides) cmsData.discount.overrides = {};
    const d = cmsData.discount;

    const toggle = document.getElementById("discountToggle");
    const slider = document.getElementById("discountSlider");
    const input  = document.getElementById("discountInput");

    if (toggle) toggle.checked = !!d.enabled;
    if (slider) slider.value   = d.percent || 10;
    if (input)  input.value    = d.percent || 10;

    updateDiscountToggleUI(!!d.enabled);
    updateDiscountPreview(d.percent || 10, !!d.enabled);
    renderProductDiscountTable();
}

function onDiscountToggle(checked) {
    updateDiscountToggleUI(checked);
    const pct = parseInt(document.getElementById("discountInput").value) || 10;
    updateDiscountPreview(pct, checked);
    // Auto-save immediately when toggled
    if (!cmsData.discount) cmsData.discount = { enabled: false, percent: 10 };
    cmsData.discount.enabled = checked;
    cmsData.discount.percent = pct;
    saveCMSData();
    updateDiscountNavDot();
    showToast(checked ? "เปิดระบบส่วนลดแล้ว ⚡ รีเฟรชหน้าเว็บเพื่อดูผล" : "ปิดส่วนลด — กลับเป็นราคาปกติแล้ว", checked ? "success" : "info");
}

function updateDiscountToggleUI(on) {
    const lbl  = document.getElementById("discountToggleLabel");
    const onLb = document.getElementById("discountOnLabel");
    if (lbl)  { lbl.style.display  = on ? "none" : "block"; }
    if (onLb) { onLb.style.display = on ? "block" : "none"; }
}

function syncDiscountInput(val) {
    const input = document.getElementById("discountInput");
    if (input) input.value = val;
    const checked = document.getElementById("discountToggle")?.checked || false;
    updateDiscountPreview(parseInt(val), checked);
}

function syncDiscountSlider(val) {
    const v = Math.max(1, Math.min(50, parseInt(val) || 1));
    const slider = document.getElementById("discountSlider");
    if (slider) slider.value = v;
    const checked = document.getElementById("discountToggle")?.checked || false;
    updateDiscountPreview(v, checked);
}

function updateDiscountPreview(percent, enabled) {
    const preview = document.getElementById("discountPreview");
    if (!preview) return;

    // Sample products for preview
    const samples = [
        { name: "The Table+",   price: "7,490" },
        { name: "Catthenon",    price: "3,190" },
        { name: "Mouse Bot",    price: "1,490" }
    ];

    function calcSale(priceStr, pct) {
        const n = parseInt(priceStr.replace(/[^0-9]/g, ""));
        return Math.round(n * (1 - pct / 100)).toLocaleString("th-TH");
    }

    if (!enabled) {
        preview.innerHTML = samples.map(s => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0; border-bottom:1px solid rgba(255,255,255,0.05);">
                <span style="font-size:0.82rem; color:rgba(255,255,255,0.55);">${s.name}</span>
                <span style="font-size:0.88rem; color:rgba(255,255,255,0.7); font-weight:500;">฿${s.price}</span>
            </div>`).join("") +
            `<div style="margin-top:0.75rem; font-size:0.72rem; color:rgba(255,255,255,0.3); text-align:center;">ราคาปกติ (Toggle OFF)</div>`;
        return;
    }

    preview.innerHTML = samples.map(s => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0; border-bottom:1px solid rgba(255,255,255,0.05);">
            <span style="font-size:0.82rem; color:rgba(255,255,255,0.55);">${s.name}</span>
            <div style="text-align:right;">
                <div style="font-size:0.7rem; color:rgba(255,255,255,0.35); text-decoration:line-through;">฿${s.price}</div>
                <div style="font-size:0.95rem; color:#e74c3c; font-weight:700;">฿${calcSale(s.price, percent)} <span style="font-size:0.65rem; background:rgba(231,76,60,0.2); border:1px solid rgba(231,76,60,0.3); color:#e74c3c; padding:1px 5px; border-radius:3px;">-${percent}%</span></div>
            </div>
        </div>`).join("") +
        `<div style="margin-top:0.75rem; font-size:0.72rem; color:#e74c3c; text-align:center; opacity:0.7;">⚡ ส่วนลดเปิดอยู่</div>`;
}

function saveDiscount() {
    const enabled = document.getElementById("discountToggle")?.checked || false;
    const percent = Math.max(1, Math.min(50, parseInt(document.getElementById("discountInput").value) || 10));
    if (!cmsData.discount) cmsData.discount = {};
    cmsData.discount.enabled = enabled;
    cmsData.discount.percent = percent;
    if (!cmsData.discount.overrides) cmsData.discount.overrides = {};
    saveCMSData();
    updateDiscountNavDot();
    renderProductDiscountTable(); // refresh table with new default
    showToast(`บันทึกส่วนลด ${percent}% เรียบร้อย ✓`, "success");
}

// ==========================================
// PER-PRODUCT DISCOUNT OVERRIDES
// ==========================================
function renderProductDiscountTable() {
    const tbody = document.getElementById("productDiscountTableBody");
    if (!tbody) return;

    if (!cmsData.discount) cmsData.discount = { enabled: false, percent: 10, overrides: {} };
    if (!cmsData.discount.overrides) cmsData.discount.overrides = {};

    const defaultPct  = parseInt(cmsData.discount.percent) || 10;
    const overrides   = cmsData.discount.overrides;
    const q = (document.getElementById("discountProductSearch")?.value || "").toLowerCase();

    const filtered = cmsData.products.filter(p =>
        (p.title.th + p.title.en + p.subtitle.th + p.subtitle.en).toLowerCase().includes(q)
    );

    tbody.innerHTML = "";

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--admin-text-dim);">
            <i class="fa-solid fa-magnifying-glass" style="margin-right:6px;"></i>ไม่พบสินค้า</td></tr>`;
        return;
    }

    filtered.forEach(p => {
        const override   = overrides[p.id];
        const hasOverride = (override !== undefined && override !== null && String(override).trim() !== "");
        const effectivePct = hasOverride ? parseInt(override) : defaultPct;
        const salePrice  = calcSalePriceStr(p.price, effectivePct);
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                    <img src="${escHTML(p.image)}" style="width:40px; height:40px; object-fit:cover; border-radius:6px; background:var(--admin-surface-2); flex-shrink:0;"
                        onerror="this.style.opacity='0.3'">
                    <div>
                        <div style="font-weight:600; font-size:0.82rem; color:var(--admin-text);">${escHTML(p.title.th)}</div>
                        <div style="font-size:0.72rem; color:var(--admin-text-dim);฿${escHTML(p.price)}</div>
                    </div>
                </div>
            </td>
            <td style="text-align:center;">
                <span style="font-size:0.85rem; color:var(--admin-text-dim); font-weight:500;">${defaultPct}%</span>
            </td>
            <td style="text-align:center;">
                <div style="display:flex; align-items:center; justify-content:center; gap:0.4rem;">
                    <input type="number"
                        class="form-input product-discount-input"
                        data-product-id="${escHTML(p.id)}"
                        min="0" max="90" step="1"
                        value="${hasOverride ? escHTML(String(override)) : ''}"
                        placeholder="${defaultPct} (default)"
                        style="width:90px; text-align:center; padding:0.3rem 0.5rem; font-size:0.9rem;"
                        oninput="refreshDiscountRow(this)">
                    <span style="font-size:0.82rem; color:var(--admin-text-dim);">%</span>
                </div>
            </td>
            <td style="text-align:center;">
                <div id="pricecell-${escHTML(p.id)}">
                    ${buildPriceCellHTML(p.price, effectivePct, hasOverride, defaultPct)}
                </div>
            </td>
            <td style="text-align:center;">
                ${hasOverride
                    ? `<button class="btn btn-secondary btn-sm btn-icon" title="ล้างค่า" onclick="clearProductDiscount('${escHTML(p.id)}')"><i class="fa-solid fa-xmark"></i></button>`
                    : `<span style="font-size:0.7rem; color:var(--admin-text-dim);">default</span>`}
            </td>`;
        tbody.appendChild(tr);
    });
}

function buildPriceCellHTML(priceStr, pct, isOverride, defaultPct) {
    const sale = calcSalePriceStr(priceStr, pct);
    const color = isOverride ? "#e74c3c" : "var(--admin-text-dim)";
    return `
        <div style="font-size:0.72rem; color:var(--admin-text-dim); text-decoration:line-through;">฿${escHTML(priceStr)}</div>
        <div style="font-size:0.88rem; font-weight:700; color:${color};">฿${escHTML(sale)} <span style="font-size:0.65rem; font-weight:400; opacity:0.8;">(-${pct}%)</span></div>`;
}

function calcSalePriceStr(priceStr, percent) {
    if (!priceStr || percent <= 0) return priceStr;
    if (priceStr.includes('/')) {
        return priceStr.split('/').map(p => calcSalePriceStr(p.trim(), percent)).join(' / ');
    }
    const n = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if (isNaN(n)) return priceStr;
    return Math.round(n * (1 - percent / 100)).toLocaleString('th-TH');
}

function refreshDiscountRow(inputEl) {
    const productId = inputEl.dataset.productId;
    const rawVal = inputEl.value.trim();
    const hasVal  = rawVal !== "" && !isNaN(parseInt(rawVal));
    const pct = hasVal ? Math.max(0, Math.min(90, parseInt(rawVal))) : (parseInt(cmsData.discount.percent) || 10);
    const product = cmsData.products.find(p => p.id === productId);
    if (!product) return;
    const cell = document.getElementById("pricecell-" + productId);
    if (cell) cell.innerHTML = buildPriceCellHTML(product.price, pct, hasVal, parseInt(cmsData.discount.percent) || 10);
}

function saveAllProductDiscounts() {
    if (!cmsData.discount) cmsData.discount = { enabled: false, percent: 10, overrides: {} };
    if (!cmsData.discount.overrides) cmsData.discount.overrides = {};

    document.querySelectorAll(".product-discount-input").forEach(input => {
        const id  = input.dataset.productId;
        const val = input.value.trim();
        if (val === "" || isNaN(parseInt(val))) {
            delete cmsData.discount.overrides[id];
        } else {
            cmsData.discount.overrides[id] = Math.max(0, Math.min(90, parseInt(val)));
        }
    });

    saveCMSData();
    renderProductDiscountTable(); // refresh to show reset buttons
    showToast("บันทึกส่วนลดรายสินค้าเรียบร้อย ✓", "success");
}

function clearProductDiscount(productId) {
    if (!cmsData.discount || !cmsData.discount.overrides) return;
    delete cmsData.discount.overrides[productId];
    saveCMSData();
    renderProductDiscountTable();
    showToast("ล้างค่าเรียบร้อย", "success");
}

function clearAllProductDiscounts() {
    if (!confirm("ยืนยันล้างค่าส่วนลดรายสินค้าทั้งหมด?\nสินค้าทุกรายการจะกลับไปใช้ค่า Default")) return;
    if (cmsData.discount) cmsData.discount.overrides = {};
    saveCMSData();
    renderProductDiscountTable();
    showToast("รีเซ็ตส่วนลดรายสินค้าเรียบร้อย", "success");
}

// ==========================================
// PRODUCTS
// ==========================================
function renderProductTable() {
    const q = (document.getElementById("productSearch")?.value || "").toLowerCase();
    const tbody = document.getElementById("productTableBody");
    tbody.innerHTML = "";

    const filtered = cmsData.products.filter(p =>
        (p.title.th + p.title.en + p.subtitle.th + p.subtitle.en + p.price).toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5"><div class="empty-state" style="padding:2rem;">
            <i class="fa-solid fa-box-open"></i><h3>ไม่พบสินค้า</h3></div></td></tr>`;
        return;
    }

    filtered.forEach((p, idx) => {
        const tr = document.createElement("tr");
        const catClass = {appliances:"appliances", furniture:"furniture", toys:"toys"}[p.category] || "";
        const catLabel = {appliances:"Appliances", furniture:"Furniture", toys:"Toys"}[p.category] || p.category;
        tr.innerHTML = `
            <td><img class="product-thumb" src="${escHTML(p.image)}" alt="${escHTML(p.title.th)}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'48\\' height=\\'48\\' fill=\\'%23333\\'/></svg>'"></td>
            <td class="product-name-cell">
                <strong>${escHTML(p.title.th)}</strong>
                <span>${escHTML(p.title.en)}</span>
            </td>
            <td><span class="category-tag ${catClass}">${catLabel}</span></td>
            <td>
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <input type="text" class="form-input" style="padding:0.2rem 0.4rem; font-size:0.75rem;" value="${escHTML(p.badge?.th || '')}" onchange="updateInlineBadge('${escHTML(p.id)}', 'th', this.value)" placeholder="TH (เช่น ใหม่)">
                    <input type="text" class="form-input" style="padding:0.2rem 0.4rem; font-size:0.75rem;" value="${escHTML(p.badge?.en || '')}" onchange="updateInlineBadge('${escHTML(p.id)}', 'en', this.value)" placeholder="EN (e.g. New)">
                </div>
            </td>
            <td class="price-cell">฿${escHTML(p.price)}</td>
            <td>
                <div class="action-btns" style="justify-content:center;">
                    <button class="btn btn-secondary btn-sm btn-icon" title="QR Code" onclick="openQrModal('${escHTML(p.id)}', '${escHTML(p.title.th).replace(/'/g, "\\'")}')">
                        <i class="fa-solid fa-qrcode"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm btn-icon" title="แก้ไข" onclick="openProductDrawer('${escHTML(p.id)}')">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn btn-danger btn-sm btn-icon" title="ลบ" onclick="deleteProduct('${escHTML(p.id)}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function updateInlineBadge(productId, lang, newVal) {
    const p = cmsData.products.find(x => x.id === productId);
    if (!p) return;
    if (!p.badge) p.badge = { th: "", en: "" };
    p.badge[lang] = newVal.trim();
    saveCMSData();
    showToast(`อัปเดตป้ายกำกับ (${lang.toUpperCase()}) เรียบร้อย`, "success");
}

// ==========================================
// QR CODE
// ==========================================
let currentQrCode = null;
let currentQrProductName = "";

function openQrModal(productId, productName) {
    const modal = document.getElementById("qrModal");
    const container = document.getElementById("qrCodeContainer");
    const nameEl = document.getElementById("qrProductName");
    
    currentQrProductName = productName || "Product";
    nameEl.textContent = `QR Code: ${currentQrProductName}`;
    container.innerHTML = ""; // Clear old QR
    
    // Construct the URL to point to the storefront with the product ID
    // Uses window.location.origin so it works correctly on any domain/port
    let origin = window.location.origin;
    // if we are at /admin or /admin.html, origin is still the same, but let's be safe
    if (origin.includes("file://")) {
        origin = "https://duit-thailand.web.app"; // fallback if running locally without server
    }
    const productUrl = `${origin}/?product=${encodeURIComponent(productId)}`;

    // Generate QR Code using the qrcode.js library we included
    currentQrCode = new QRCode(container, {
        text: productUrl,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    modal.classList.add("open");
}

function closeQrModal() {
    document.getElementById("qrModal").classList.remove("open");
}

function onQrModalBackdropClick(e) {
    if (e.target === document.getElementById("qrModal")) closeQrModal();
}

function downloadQRCode() {
    const container = document.getElementById("qrCodeContainer");
    const img = container.querySelector("img");
    let url = "";
    
    // Some browsers/versions of qrcode.js might only generate canvas or img might be empty
    if (img && img.src && img.src.startsWith("data:")) {
        url = img.src;
    } else {
        const canvas = container.querySelector("canvas");
        if (canvas) {
            url = canvas.toDataURL("image/png");
        }
    }

    if (!url) {
        showToast("ไม่พบรูปภาพ QR Code กรุณารอสักครู่", "error");
        return;
    }
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `QR_${currentQrProductName}.png`;
    a.click();
    showToast("ดาวน์โหลด QR Code เรียบร้อย", "success");
}

function openProductDrawer(productId) {
    const drawer = document.getElementById("productDrawer");
    drawer.classList.add("open");

    // Reset
    clearImageInput();
    document.getElementById("featuresTh").innerHTML = "";
    document.getElementById("featuresEn").innerHTML = "";

    if (productId === null) {
        // ADD mode
        document.getElementById("drawerTitle").innerHTML = '<i class="fa-solid fa-plus"></i> เพิ่มสินค้าใหม่';
        document.getElementById("editProductId").value = "";
        clearProductForm();
        addFeatureRow("Th");
        addFeatureRow("En");
    } else {
        // EDIT mode
        const p = cmsData.products.find(x => x.id === productId);
        if (!p) return;
        document.getElementById("drawerTitle").innerHTML = '<i class="fa-solid fa-pen"></i> แก้ไขสินค้า';
        document.getElementById("editProductId").value = p.id;
        fillProductForm(p);
    }
}

function closeProductDrawer() {
    document.getElementById("productDrawer").classList.remove("open");
}

function onDrawerBackdropClick(e) {
    if (e.target === document.getElementById("productDrawer")) closeProductDrawer();
}

function clearProductForm() {
    ["prod-titleTh","prod-titleEn","prod-subtitleTh","prod-subtitleEn",
     "prod-price","prod-badgeTh","prod-badgeEn","prod-descTh","prod-descEn"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    document.getElementById("prod-category").value = "appliances";
    document.getElementById("imageUrlInput").value = "";
    clearImageInput();
}

function fillProductForm(p) {
    document.getElementById("prod-titleTh").value    = p.title.th || "";
    document.getElementById("prod-titleEn").value    = p.title.en || "";
    document.getElementById("prod-subtitleTh").value = p.subtitle.th || "";
    document.getElementById("prod-subtitleEn").value = p.subtitle.en || "";
    document.getElementById("prod-category").value   = p.category || "appliances";
    document.getElementById("prod-price").value      = p.price || "";
    document.getElementById("prod-badgeTh").value    = p.badge.th || "";
    document.getElementById("prod-badgeEn").value    = p.badge.en || "";
    document.getElementById("prod-descTh").value     = p.description.th || "";
    document.getElementById("prod-descEn").value     = p.description.en || "";
    document.getElementById("imageUrlInput").value   = p.image || "";
    if (p.image) previewImageFromUrl(p.image);
    // Features
    (p.features.th || []).forEach(f => addFeatureRow("Th", f));
    (p.features.en || []).forEach(f => addFeatureRow("En", f));
}

function saveProduct() {
    const id = document.getElementById("editProductId").value;
    const titleTh = document.getElementById("prod-titleTh").value.trim();
    const titleEn = document.getElementById("prod-titleEn").value.trim();
    const price   = document.getElementById("prod-price").value.trim();

    if (!titleTh || !titleEn || !price) {
        showToast("กรุณากรอกข้อมูลที่จำเป็น: ชื่อ TH, ชื่อ EN, ราคา", "error");
        return;
    }

    // Determine image
    let image = document.getElementById("imageUrlInput").value.trim();
    if (!image) image = "assets/table_plus.png"; // fallback

    // Collect features
    const featuresTh = Array.from(document.querySelectorAll("#featuresTh .feature-input"))
        .map(i => i.value.trim()).filter(Boolean);
    const featuresEn = Array.from(document.querySelectorAll("#featuresEn .feature-input"))
        .map(i => i.value.trim()).filter(Boolean);

    const productData = {
        id: id || slugify(titleEn) + "_" + Date.now(),
        category: document.getElementById("prod-category").value,
        title:    { th: titleTh, en: titleEn },
        subtitle: { th: document.getElementById("prod-subtitleTh").value.trim(), en: document.getElementById("prod-subtitleEn").value.trim() },
        badge:    { th: document.getElementById("prod-badgeTh").value.trim(), en: document.getElementById("prod-badgeEn").value.trim() },
        price,
        image,
        description: { th: document.getElementById("prod-descTh").value.trim(), en: document.getElementById("prod-descEn").value.trim() },
        features: { th: featuresTh, en: featuresEn }
    };

    if (id) {
        const idx = cmsData.products.findIndex(p => p.id === id);
        if (idx > -1) cmsData.products[idx] = productData;
    } else {
        cmsData.products.push(productData);
    }

    saveCMSData();
    closeProductDrawer();
    renderProductTable();
    refreshDashboard();
    showToast(id ? "แก้ไขสินค้าเรียบร้อยแล้ว ✓" : "เพิ่มสินค้าใหม่เรียบร้อยแล้ว ✓", "success");
}

function deleteProduct(id) {
    const p = cmsData.products.find(x => x.id === id);
    if (!p) return;
    if (!confirm(`ยืนยันลบสินค้า "${p.title.th}" ?\n\nการลบนี้ไม่สามารถกู้คืนได้`)) return;
    cmsData.products = cmsData.products.filter(x => x.id !== id);
    saveCMSData();
    renderProductTable();
    refreshDashboard();
    showToast("ลบสินค้าเรียบร้อย", "success");
}

// Features rows
function addFeatureRow(lang, value = "") {
    const container = document.getElementById("features" + lang);
    const row = document.createElement("div");
    row.className = "feature-row";
    row.innerHTML = `
        <input type="text" class="form-input feature-input" value="${escHTML(value)}" placeholder="${lang === "Th" ? "เพิ่มจุดเด่น..." : "Add feature..."}">
        <button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()" title="ลบ">
            <i class="fa-solid fa-minus"></i>
        </button>`;
    container.appendChild(row);
}

// ==========================================
// IMAGE HANDLING
// ==========================================
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
        showToast("ไฟล์ใหญ่เกิน 4MB", "error");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        document.getElementById("imageUrlInput").value = dataUrl;
        showImagePreview(dataUrl);
    };
    reader.readAsDataURL(file);
}

function previewImageFromUrl(url) {
    if (url && url.length > 4) {
        showImagePreview(url);
    } else {
        clearImageInput();
    }
}

function showImagePreview(src) {
    const container = document.getElementById("imagePreviewContainer");
    const img = document.getElementById("imagePreviewEl");
    const prompt = document.getElementById("uploadPrompt");
    img.src = src;
    container.style.display = "block";
    if (prompt) prompt.style.display = "none";
}

function clearImageInput() {
    document.getElementById("imageUrlInput").value = "";
    document.getElementById("imagePreviewEl").src = "";
    document.getElementById("imagePreviewContainer").style.display = "none";
    const prompt = document.getElementById("uploadPrompt");
    if (prompt) prompt.style.display = "block";
    const fileInput = document.getElementById("imageFileInput");
    if (fileInput) fileInput.value = "";
}

// ==========================================
// SLIDER EDITOR
// ==========================================
function loadSliderEditor() {
    const list = document.getElementById("slideEditorList");
    list.innerHTML = "";
    cmsData.slides.forEach((slide, idx) => {
        list.appendChild(buildSlideCard(slide, idx));
    });
}

function buildSlideCard(slide, idx) {
    const card = document.createElement("div");
    card.className = "slide-editor-card";
    card.id = "slide-card-" + idx;
    card.innerHTML = `
        <div class="slide-editor-header" onclick="toggleSlideCard(${idx})">
            <div class="slide-number">${idx + 1}</div>
            <h4>${escHTML(slide.titleTh || slide.titleEn || "Slide " + (idx+1))}</h4>
            <div style="display:flex; gap:0.4rem; align-items:center;">
                ${idx > 0 ? `<button class="btn btn-secondary btn-sm btn-icon" title="ย้ายขึ้น" onclick="event.stopPropagation(); moveSlide(${idx}, -1)"><i class="fa-solid fa-arrow-up"></i></button>` : ''}
                ${idx < cmsData.slides.length - 1 ? `<button class="btn btn-secondary btn-sm btn-icon" title="ย้ายลง" onclick="event.stopPropagation(); moveSlide(${idx}, 1)"><i class="fa-solid fa-arrow-down"></i></button>` : ''}
                <button class="btn btn-danger btn-sm btn-icon" title="ลบ Slide" onclick="event.stopPropagation(); deleteSlide(${idx})"><i class="fa-solid fa-trash"></i></button>
            </div>
            <i class="fa-solid fa-chevron-down chevron"></i>
        </div>
        <div class="slide-editor-body">
            ${slide.image ? `<img class="slide-preview-img" src="${escHTML(slide.image)}" alt="preview" onerror="this.style.display='none'">` : ''}
            <div class="form-grid">
                <div class="form-group span-2">
                    <label class="form-label">URL รูปภาพ Background</label>
                    <input type="text" class="form-input" id="slide-${idx}-image" value="${escHTML(slide.image || '')}" placeholder="https://..." oninput="updateSlidePreview(${idx})">
                </div>
                <div class="form-group">
                    <label class="form-label">Badge (TH)</label>
                    <input type="text" class="form-input" id="slide-${idx}-badgeTh" value="${escHTML(slide.badgeTh || '')}">
                </div>
                <div class="form-group">
                    <label class="form-label">Badge (EN)</label>
                    <input type="text" class="form-input" id="slide-${idx}-badgeEn" value="${escHTML(slide.badgeEn || '')}">
                </div>
                <div class="form-group">
                    <label class="form-label">หัวข้อ (TH)</label>
                    <input type="text" class="form-input" id="slide-${idx}-titleTh" value="${escHTML(slide.titleTh || '')}">
                </div>
                <div class="form-group">
                    <label class="form-label">หัวข้อ (EN)</label>
                    <input type="text" class="form-input" id="slide-${idx}-titleEn" value="${escHTML(slide.titleEn || '')}">
                </div>
                <div class="form-group">
                    <label class="form-label">คำอธิบาย (TH)</label>
                    <textarea class="form-textarea" id="slide-${idx}-descTh" style="min-height:65px;">${escHTML(slide.descTh || '')}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">คำอธิบาย (EN)</label>
                    <textarea class="form-textarea" id="slide-${idx}-descEn" style="min-height:65px;">${escHTML(slide.descEn || '')}</textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">ปุ่ม (TH)</label>
                    <input type="text" class="form-input" id="slide-${idx}-btnTh" value="${escHTML(slide.btnTh || '')}">
                </div>
                <div class="form-group">
                    <label class="form-label">ปุ่ม (EN)</label>
                    <input type="text" class="form-input" id="slide-${idx}-btnEn" value="${escHTML(slide.btnEn || '')}">
                </div>
                <div class="form-group span-2">
                    <label class="form-label">หมวดหมู่ที่ปุ่ม Filter ไป</label>
                    <select class="form-select" id="slide-${idx}-btnCategory">
                        <option value="all" ${slide.btnCategory==="all"?"selected":""}>All (ทั้งหมด)</option>
                        <option value="furniture" ${slide.btnCategory==="furniture"?"selected":""}>Furniture</option>
                        <option value="appliances" ${slide.btnCategory==="appliances"?"selected":""}>Smart Appliances</option>
                        <option value="toys" ${slide.btnCategory==="toys"?"selected":""}>Toys & Accessories</option>
                    </select>
                </div>
            </div>
        </div>`;
    return card;
}

function toggleSlideCard(idx) {
    const card = document.getElementById("slide-card-" + idx);
    card.classList.toggle("expanded");
}

function updateSlidePreview(idx) {
    const url = document.getElementById(`slide-${idx}-image`).value;
    const img = document.querySelector(`#slide-card-${idx} .slide-preview-img`);
    if (img) img.src = url;
}

function addNewSlide() {
    cmsData.slides.push({
        id: "slide" + Date.now(),
        badgeEn: "New", badgeTh: "ใหม่",
        titleEn: "New Slide", titleTh: "สไลด์ใหม่",
        descEn: "", descTh: "",
        btnEn: "Explore", btnTh: "เลือกชม",
        btnCategory: "all",
        image: ""
    });
    loadSliderEditor();
    // Expand last slide
    setTimeout(() => toggleSlideCard(cmsData.slides.length - 1), 50);
}

function deleteSlide(idx) {
    if (cmsData.slides.length <= 1) { showToast("ต้องมีอย่างน้อย 1 Slide", "error"); return; }
    if (!confirm("ยืนยันลบ Slide นี้?")) return;
    cmsData.slides.splice(idx, 1);
    loadSliderEditor();
}

async function clearLeadsData() {
    if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลลูกค้าทั้งหมด?\nการกระทำนี้ไม่สามารถยกเลิกได้!")) return;
    try {
        await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        });
    } catch (e) {
        localStorage.removeItem("duit_leads");
        localStorage.removeItem("claimed_coupon");
    }
    renderLeadsTable();
    showToast("ลบข้อมูลลูกค้าเรียบร้อย", "success");
}

function moveSlide(idx, dir) {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= cmsData.slides.length) return;
    const tmp = cmsData.slides[idx];
    cmsData.slides[idx] = cmsData.slides[newIdx];
    cmsData.slides[newIdx] = tmp;
    loadSliderEditor();
}

function saveSlider() {
    cmsData.slides = cmsData.slides.map((slide, idx) => ({
        id: slide.id,
        image:      document.getElementById(`slide-${idx}-image`)?.value.trim() || slide.image,
        badgeTh:    document.getElementById(`slide-${idx}-badgeTh`)?.value.trim() || "",
        badgeEn:    document.getElementById(`slide-${idx}-badgeEn`)?.value.trim() || "",
        titleTh:    document.getElementById(`slide-${idx}-titleTh`)?.value.trim() || "",
        titleEn:    document.getElementById(`slide-${idx}-titleEn`)?.value.trim() || "",
        descTh:     document.getElementById(`slide-${idx}-descTh`)?.value.trim() || "",
        descEn:     document.getElementById(`slide-${idx}-descEn`)?.value.trim() || "",
        btnTh:      document.getElementById(`slide-${idx}-btnTh`)?.value.trim() || "",
        btnEn:      document.getElementById(`slide-${idx}-btnEn`)?.value.trim() || "",
        btnCategory:document.getElementById(`slide-${idx}-btnCategory`)?.value || "all"
    }));
    saveCMSData();
    showToast("บันทึก Hero Slider เรียบร้อย ✓", "success");
    refreshDashboard();
}

// ==========================================
// EVENT SECTION EDITOR
// ==========================================
function loadEventEditor() {
    const ev = cmsData.event;
    document.getElementById("event-discount").value  = ev.discount ?? 10;
    document.getElementById("event-lineUrl").value   = ev.lineUrl || "";
    document.getElementById("event-titleTh").value   = ev.titleTh || "";
    document.getElementById("event-titleEn").value   = ev.titleEn || "";
    document.getElementById("event-descTh").value    = ev.descTh || "";
    document.getElementById("event-descEn").value    = ev.descEn || "";
    renderPerksEditor(ev.perks || []);
}

function renderPerksEditor(perks) {
    const container = document.getElementById("perksEditorList");
    container.innerHTML = "";
    perks.forEach((perk, idx) => {
        const row = document.createElement("div");
        row.style.cssText = "display:flex; gap:0.5rem; align-items:center;";
        row.innerHTML = `
            <input type="text" class="form-input perk-th" value="${escHTML(perk.th || '')}" placeholder="สิทธิ์ (TH)" style="flex:1;">
            <input type="text" class="form-input perk-en" value="${escHTML(perk.en || '')}" placeholder="Benefit (EN)" style="flex:1;">
            <button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()"><i class="fa-solid fa-minus"></i></button>`;
        container.appendChild(row);
    });
}

function addPerkRow() {
    const container = document.getElementById("perksEditorList");
    const row = document.createElement("div");
    row.style.cssText = "display:flex; gap:0.5rem; align-items:center;";
    row.innerHTML = `
        <input type="text" class="form-input perk-th" placeholder="สิทธิ์ (TH)" style="flex:1;">
        <input type="text" class="form-input perk-en" placeholder="Benefit (EN)" style="flex:1;">
        <button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()"><i class="fa-solid fa-minus"></i></button>`;
    container.appendChild(row);
}

function saveEventSection() {
    const perks = [];
    document.querySelectorAll("#perksEditorList > div").forEach(row => {
        const th = row.querySelector(".perk-th")?.value.trim();
        const en = row.querySelector(".perk-en")?.value.trim();
        if (th || en) perks.push({ th, en });
    });
    cmsData.event = {
        discount: parseInt(document.getElementById("event-discount").value) || 10,
        lineUrl:  document.getElementById("event-lineUrl").value.trim(),
        titleTh:  document.getElementById("event-titleTh").value.trim(),
        titleEn:  document.getElementById("event-titleEn").value.trim(),
        descTh:   document.getElementById("event-descTh").value.trim(),
        descEn:   document.getElementById("event-descEn").value.trim(),
        perks
    };
    saveCMSData();
    showToast("บันทึก Event Section เรียบร้อย ✓", "success");
}

// ==========================================
// STORE INFO EDITOR
// ==========================================
function loadStoreEditor() {
    const s = cmsData.store;
    document.getElementById("store-addressTh").value = s.addressTh || "";
    document.getElementById("store-addressEn").value = s.addressEn || "";
    document.getElementById("store-email").value     = s.email || "";
    document.getElementById("store-phone").value     = s.phone || "";
    document.getElementById("store-lineId").value    = s.lineId || "";
    document.getElementById("store-lineUrl").value   = s.lineUrl || "";
    document.getElementById("store-fbUrl").value     = s.fbUrl || "";
    document.getElementById("store-igUrl").value     = s.igUrl || "";
    document.getElementById("store-globalUrl").value = s.globalUrl || "";
    document.getElementById("store-aboutTh").value   = s.aboutTh || "";
    document.getElementById("store-aboutEn").value   = s.aboutEn || "";
}

function saveStoreInfo() {
    cmsData.store = {
        addressTh: document.getElementById("store-addressTh").value.trim(),
        addressEn: document.getElementById("store-addressEn").value.trim(),
        email:     document.getElementById("store-email").value.trim(),
        phone:     document.getElementById("store-phone").value.trim(),
        lineId:    document.getElementById("store-lineId").value.trim(),
        lineUrl:   document.getElementById("store-lineUrl").value.trim(),
        fbUrl:     document.getElementById("store-fbUrl").value.trim(),
        igUrl:     document.getElementById("store-igUrl").value.trim(),
        globalUrl: document.getElementById("store-globalUrl").value.trim(),
        aboutTh:   document.getElementById("store-aboutTh").value.trim(),
        aboutEn:   document.getElementById("store-aboutEn").value.trim()
    };
    saveCMSData();
    showToast("บันทึกข้อมูลร้านเรียบร้อย ✓", "success");
}

// ==========================================
// SETTINGS
// ==========================================
function loadSettings() {
    const len = (cmsData.settings.staffPin || "").length;
    document.getElementById("currentStaffPinHint").textContent = "*".repeat(len || 4);
}

function changeAdminPin() {
    const current = document.getElementById("adminPinCurrent").value;
    const newPin  = document.getElementById("adminPinNew").value;
    const confirm = document.getElementById("adminPinConfirm").value;
    if (current !== cmsData.settings.adminPin) { showToast("รหัสผ่านปัจจุบันไม่ถูกต้อง", "error"); return; }
    if (newPin.length < 4) { showToast("รหัสผ่านใหม่ต้องมีอย่างน้อย 4 ตัวอักษร", "error"); return; }
    if (newPin !== confirm) { showToast("รหัสผ่านใหม่ไม่ตรงกัน", "error"); return; }
    cmsData.settings.adminPin = newPin;
    saveCMSData();
    document.getElementById("adminPinCurrent").value = "";
    document.getElementById("adminPinNew").value = "";
    document.getElementById("adminPinConfirm").value = "";
    showToast("เปลี่ยนรหัสผ่าน Admin เรียบร้อย ✓", "success");
}

function changeStaffPin() {
    const newPin = document.getElementById("staffPinNew").value.trim();
    if (newPin.length < 1) { showToast("กรุณากรอก PIN ใหม่", "error"); return; }
    cmsData.settings.staffPin = newPin;
    saveCMSData();
    document.getElementById("staffPinNew").value = "";
    loadSettings();
    showToast(`เปลี่ยน Staff PIN เป็น "${newPin}" เรียบร้อย ✓`, "success");
}

function togglePinVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    btn.innerHTML = isPassword ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
}

// ==========================================
// LEADS
// ==========================================
async function renderLeadsTable() {
    const tbody = document.getElementById("leadsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    let leads = [];
    try {
        const res = await fetch('/api/leads');
        leads = await res.json();
    } catch(e) {
        leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    }

    if (leads.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state" style="padding:2rem;">
            <i class="fa-solid fa-folder-open"></i><h3>ยังไม่มีข้อมูลลูกค้า</h3></div></td></tr>`;
        return;
    }

    [...leads].reverse().forEach((lead, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="color:var(--admin-text-dim);">${leads.length - i}</td>
            <td style="font-weight:600; color:var(--admin-text);">${escHTML(lead.name)}</td>
            <td>${escHTML(lead.phone)}</td>
            <td>${escHTML(lead.line)}</td>
            <td><span class="code-chip">${escHTML(lead.code)}</span></td>
            <td style="font-size:0.78rem;">${escHTML(lead.timestamp)}</td>`;
        tbody.appendChild(tr);
    });
}

async function exportLeadsCSV() {
    let leads = [];
    try {
        const res = await fetch('/api/leads');
        leads = await res.json();
    } catch(e) {
        leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    }
    if (leads.length === 0) {
        showToast("ไม่มีข้อมูลให้ออกรายงาน", "error");
        return;
    }
    let csv = "\uFEFFName,Mobile Number,LINE ID,Promo Code,Registration Date\n";
    leads.forEach(l => {
        csv += `"${l.name.replace(/"/g,'""')}","${l.phone.replace(/"/g,'""')}","${l.line.replace(/"/g,'""')}","${l.code}","${l.timestamp}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = `DUIT_Leads_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    showToast("Export CSV เรียบร้อย", "success");
}

async function clearLeadsData() {
    if (!confirm("ยืนยันลบข้อมูล Leads ทั้งหมด?\n\nไม่สามารถกู้คืนได้")) return;
    try {
        await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        });
    } catch(e) {
        localStorage.removeItem("duit_leads");
        localStorage.removeItem("claimed_coupon");
    }
    renderLeadsTable();
    refreshDashboard();
    showToast("ลบข้อมูล Leads เรียบร้อย", "success");
}

// ==========================================
// EXPORT / IMPORT
// ==========================================
function exportCMSData() {
    const dataStr = JSON.stringify(cmsData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = `duit_cms_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    showToast("Export JSON เรียบร้อย", "success");
}

function importCMSData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (!imported.products && !imported.slides) {
                showToast("ไฟล์ไม่ถูกต้อง — ต้องเป็น CMS backup", "error");
                return;
            }
            if (!confirm("ยืนยัน Import ข้อมูล?\n\nข้อมูลปัจจุบันจะถูกแทนที่ด้วยข้อมูลในไฟล์")) return;
            cmsData = imported;
            saveCMSData();
            showPanel("dashboard");
            renderProductTable();
            refreshDashboard();
            showToast("Import ข้อมูลเรียบร้อย ✓", "success");
        } catch {
            showToast("ไม่สามารถอ่านไฟล์ได้", "error");
        }
    };
    reader.readAsText(file);
    event.target.value = "";
}

function resetToDefaults() {
    if (!confirm("รีเซ็ตข้อมูลทั้งหมดเป็นค่าเริ่มต้น?\n\nการแก้ไขทั้งหมดจะหายไป")) return;
    localStorage.removeItem("duit_cms_data");
    loadCMSData();
    showPanel("dashboard");
    renderProductTable();
    refreshDashboard();
    showToast("รีเซ็ตเรียบร้อย", "success");
}

// ==========================================
// MOBILE SIDEBAR
// ==========================================
function toggleMobileSidebar() {
    const sidebar = document.getElementById("adminSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("active");
}

function closeMobileSidebar() {
    document.getElementById("adminSidebar").classList.remove("mobile-open");
    document.getElementById("sidebarOverlay").classList.remove("active");
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icons = { success: "circle-check", error: "circle-exclamation", info: "circle-info" };
    toast.innerHTML = `<i class="fa-solid fa-${icons[type] || 'circle-check'}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        toast.style.transition = "0.3s";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================
// UTILITIES
// ==========================================
function escHTML(str) {
    return String(str || "").replace(/[&<>"']/g, c =>
        ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":'&#39;' }[c])
    );
}

function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").slice(0, 30);
}
