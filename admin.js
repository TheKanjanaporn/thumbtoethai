// ==========================================
// THUMB TOE THAILAND — ADMIN PANEL JS
// Full CMS Logic
// ==========================================

// ==========================================
// DEFAULT DATA (mirrors app.js defaults)
// ==========================================
const DEFAULT_CATEGORIES = [
    { id: "grip", name: { th: "ถุงเท้ากันลื่น", en: "Grip Socks" } },
    { id: "daily", name: { th: "ถุงเท้าใส่ทุกวัน", en: "Daily Socks" } },
    { id: "accessories", name: { th: "อุปกรณ์เสริม", en: "Accessories" } }
];

const DEFAULT_PRODUCTS = [
    {
        "id": "daisy",
        "category": "grip",
        "title": {
            "en": "Daisy Grip Socks",
            "th": "Daisy Grip Socks"
        },
        "subtitle": {
            "en": "Signature Flower Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเดซี่สีสันสดใส"
        },
        "badge": {
            "en": "Best Seller",
            "th": "ขายดี"
        },
        "price": "390",
        "image": "assets/Daisy.jpg",
        "description": {
            "en": "Signature daisy patterned five-toe grip socks. Provides optimal grip for your toes and sole. Designed in Korea.",
            "th": "ถุงเท้ากันลื่นแยกห้านิ้วลายดอกเดซี่ที่เป็นเอกลักษณ์เฉพาะตัว ปุ่มซิลิโคนเต็มฝ่าเท้าและทุกนิ้วเท้า ยึดเกาะเครื่องรีฟอร์เมอร์ได้ดีเยี่ยม สไตล์น่ารักส่งตรงจากเกาหลี"
        },
        "features": {
            "en": [
                "Premium combed cotton blend",
                "Individual five-toe separation",
                "Full-sole silicon non-slip grip",
                "Elastic arch support band"
            ],
            "th": [
                "ผลิตจากเนื้อผ้าฝ้ายผสมพรีเมียมนุ่มพิเศษ",
                "ดีไซน์แยก 5 นิ้ว เพื่อการทรงตัวตามธรรมชาติ",
                "ปุ่มซิลิโคนกันลื่นหนาแน่นเต็มฝ่าเท้า",
                "แถบยืดหยุ่นโอบอุ้มอุ้งเท้า ลดความเมื่อยล้า"
            ]
        }
    },
    {
        "id": "bichon",
        "category": "grip",
        "title": {
            "en": "Bichon Grip Socks",
            "th": "Bichon Grip Socks"
        },
        "subtitle": {
            "en": "Cute Bichon Dog Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องหมาบิชองสุดน่ารัก"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "420",
        "image": "assets/Bichon.jpg",
        "description": {
            "en": "Adorable Bichon Frise dog pattern pilates socks with non-slip sole grip. Snug elastic fit that stays secure.",
            "th": "ถุงเท้าพิลาทิสโยคะแบบห้านิ้วลายน้องหมาบิชองฝรั่งเศสแสนซน สีพาสเทลน่ารัก เหมาะสำหรับผู้ที่หลงใหลในความคิ้วท์ พร้อมปุ่มกันลื่นเจลเกรดพรีเมียม"
        },
        "features": {
            "en": [
                "Fun cute dog character design",
                "Moisture-wicking mesh ventilation",
                "Thick terry cotton on heel for cushioning",
                "Safe eco-friendly silicone print"
            ],
            "th": [
                "ดีไซน์ตัวการ์ตูนสุนัขบิชองสุดน่ารักสดใส",
                "ตาข่ายทอด้านบนช่วยระบายความชื้นได้อย่างดี",
                "บุเทอร์รี่หนานุ่มบริเวณส้นเท้าเพื่อลดแรงกระแทก",
                "ปุ่มซิลิโคนเจลที่เป็นมิตรต่อผิวหนังและกันลื่นแน่น"
            ]
        }
    },
    {
        "id": "bubble_bubble",
        "category": "grip",
        "title": {
            "en": "Bubble Bubble Grip Socks",
            "th": "Bubble Bubble Grip Socks"
        },
        "subtitle": {
            "en": "Vibrant Bubble Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายจุดฟองสบู่สดใส"
        },
        "badge": {
            "en": "New Arrival",
            "th": "มาใหม่"
        },
        "price": "420",
        "image": "assets/Bubble Bubble.jpg",
        "description": {
            "en": "Unique bubble-patterned five-toe grip socks to add vibrant energy to your practice. Breathable instep for fresh comfort.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายจุดฟองสบู่สลับสีสันสุดสดใส เติมพลังบวกให้การออกกำลังกายของคุณ ผ้าเนื้อนุ่มพิเศษกระชับหน้าเท้าและข้อเท้า"
        },
        "features": {
            "en": [
                "Unique colorful bubble prints",
                "Highly stretchable ankle band",
                "Instep breathability channel",
                "Strong grip support on key touchpoints"
            ],
            "th": [
                "ลายพิมพ์ฟองสบู่สลับสีโดดเด่นไม่ซ้ำใคร",
                "ยางยืดรอบข้อเท้าสูงและกระชับ ไม่ย้วยง่าย",
                "ช่องระบายอากาศกลางหลังเท้าเพื่อความแห้งสบาย",
                "ปุ่มกันลื่นทนทานสูงในทุกๆ จุดสัมผัส"
            ]
        }
    },
    {
        "id": "cosmos",
        "category": "grip",
        "title": {
            "en": "Cosmos Grip Socks",
            "th": "Cosmos Grip Socks"
        },
        "subtitle": {
            "en": "Elegant Cosmos Space Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายอวกาศคอสมอส"
        },
        "badge": {
            "en": "Elegant",
            "th": "หรูหรา"
        },
        "price": "450",
        "image": "assets/Cosmos.jpg",
        "description": {
            "en": "Elegant cosmos space themed five-toe grip socks. Perfect mystical color blend for a premium studio look.",
            "th": "ดีไซน์ลายดวงดาวและห้วงอวกาศหรูหราคอสมอสในโทนเข้มลึกลับ เพิ่มระดับความพรีเมียมให้กับการสวมใส่ในสตูดิโอ ยึดเกาะมั่นคงทุกท่าโพส"
        },
        "features": {
            "en": [
                "Elegant starry galaxy print pattern",
                "Instep support for lateral stability",
                "Reinforced heel protection",
                "Full-grip cover for high performance"
            ],
            "th": [
                "ลายพิมพ์ดวงดาวและกาแล็กซี่หรูหราระดับพรีเมียม",
                "โครงสร้างกระชับกลางเท้าเพื่อกันถุงเท้าหมุนรอบ",
                "เสริมความหนาพิเศษที่ส้นเท้ากันการเสียดสีดึงรั้ง",
                "ปุ่มซิลิโคนแน่นและกว้างรองรับทุกแรงกดเท้า"
            ]
        }
    },
    {
        "id": "emerald",
        "category": "grip",
        "title": {
            "en": "Emerald Grip Socks",
            "th": "Emerald Grip Socks"
        },
        "subtitle": {
            "en": "Rich Emerald Green Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมรกตพรีเมียม"
        },
        "badge": {
            "en": "Premium Solid",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/Emerald.jpg",
        "description": {
            "en": "Rich emerald solid five-toe grip socks. A perfect balance of athletic performance and minimalist aesthetic.",
            "th": "ถุงเท้ากันลื่นสีพื้นในโทนเขียวมรกตเข้มพรีเมียม เรียบหรู สะท้อนความเป็นมินิมอลแต่ทรงพลังในการเคลื่อนไหว ซิลิโคนกันลื่นหนาพิเศษยึดเกาะดีเยี่ยม"
        },
        "features": {
            "en": [
                "Classic deep emerald color",
                "Ergonomic toe spacing",
                "Double-yarn construction for durability",
                "High-density non-slip print"
            ],
            "th": [
                "โทนสีเขียวมรกตคลาสสิกเข้มลึก ดูมีรสนิยม",
                "ช่องแยกนิ้วทอละเอียด สวมง่าย ไม่เบียดนิ้วเท้า",
                "การทอเส้นด้ายคู่เพิ่มความทนทานเป็นสองเท่า",
                "ปุ่มซิลิโคนหนาพิเศษ กันลื่นได้อย่างมั่นใจ"
            ]
        }
    },
    {
        "id": "flower",
        "category": "grip",
        "title": {
            "en": "Flower Grip Socks",
            "th": "Flower Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Blooming Flower Pattern",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายดอกไม้เบ่งบาน"
        },
        "badge": {
            "en": "Popular",
            "th": "ยอดนิยม"
        },
        "price": "390",
        "image": "assets/Flower.jpg",
        "description": {
            "en": "Beautiful blooming flower five-toe grip socks. Soft pastel palette that brings positive vibes and cozy comfort to your practice.",
            "th": "ถุงเท้ากันลื่นลายดอกไม้เบ่งบานหลากสีสันพาสเทล ให้ความรู้สึกอบอุ่น สดใส และสนุกสนานขณะฝึกซ้อม เนื้อผ้านุ่มกระชับระบายอับชื้นดีเยี่ยม"
        },
        "features": {
            "en": [
                "Sweet pastel floral aesthetics",
                "Moisture-wicking combed cotton",
                "Arch support compression",
                "Slip-free print covering every single toe"
            ],
            "th": [
                "ลวดลายดอกไม้สไตล์พาสเทลหวาน อบอุ่นหัวใจ",
                "ผลิตจากฝ้าย Combed ซับเหงื่อและระบายอากาศไว",
                "โอบรัดอุ้งเท้าช่วยประคองท่าการทรงตัว",
                "ปุ่มกันลื่นคลุมเต็มฝ่าเท้ารวมถึงปลายนิ้วเท้าทุกนิ้ว"
            ]
        }
    },
    {
        "id": "galaxy",
        "category": "grip",
        "title": {
            "en": "Galaxy Grip Socks",
            "th": "Galaxy Grip Socks"
        },
        "subtitle": {
            "en": "Mystical Dusty Nebula Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายกาแล็กซีสีพาสเทลหม่น"
        },
        "badge": {
            "en": "Hot Item",
            "th": "ยอดฮิต"
        },
        "price": "450",
        "image": "assets/Galaxy.jpg",
        "description": {
            "en": "Deep starry galaxy five-toe grip socks. Features a premium nebula gradient design to make you stand out.",
            "th": "ลวดลายห้วงอวกาศและหมอกควันเนบิวลาสีม่วง-น้ำเงินไล่โทนลึกลับน่าค้นหา สำหรับผู้ที่ต้องการความโดดเด่นมีคลาสในชั้นเรียนพิลาทิส"
        },
        "features": {
            "en": [
                "Vibrant starry galaxy gradient color",
                "Targeted compression zone",
                "Blister prevention fit",
                "Industrial-grade non-slip gel"
            ],
            "th": [
                "ลายพิมพ์ไล่เฉดสีเนบิวลาอวกาศสดใสสะดุดตา",
                "ส่วนบีบอัดเฉพาะจุดรอบข้อเท้าเพิ่มความมั่นใจ",
                "กระชับพอดีเท้าเพื่อป้องกันการเกิดแผลกดเสียดสี",
                "เจลซิลิโคนกันลื่นเกรดอุตสาหกรรม เกาะแน่นยาวนาน"
            ]
        }
    },
    {
        "id": "lemon",
        "category": "grip",
        "title": {
            "en": "Lemon Grip Socks",
            "th": "Lemon Grip Socks"
        },
        "subtitle": {
            "en": "Sunny Day Lemon Yellow Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเหลืองเลมอนสดใส"
        },
        "badge": {
            "en": "Fresh Aesthetic",
            "th": "สีสดใส"
        },
        "price": "390",
        "image": "assets/Lemon.jpg",
        "description": {
            "en": "Bright sunny lemon yellow five-toe grip socks. Uplifts your studio mood and energizes your Pilates sequences.",
            "th": "ถุงเท้าห้านิ้วสีเหลืองเลมอนสว่างไสว ปลุกพลังความสดชื่นและกระปรี้กระเปร่าในสตูดิโอ ทอลายตารางระบายหลังเท้าดีเยี่ยม ยึดเกาะแน่นหนา"
        },
        "features": {
            "en": [
                "Vibrant cheerful lemon yellow color",
                "Top-instep mesh panels for cooling",
                "Five-toe natural grip splay",
                "Superior wash resistance silicone"
            ],
            "th": [
                "เฉดสีเหลืองเลมอนสว่าง สดใส สนุกสนาน",
                "หน้าเท้าทอตาข่ายโปร่งเพื่อระบายไอความร้อนสะสม",
                "ช่วยกางนิ้วเท้าเพื่อกระจายน้ำหนักอย่างเหมาะสม",
                "ซิลิโคนทนทานต่อการซักเครื่อง ไม่หลุดร่อนง่าย"
            ]
        }
    },
    {
        "id": "marble",
        "category": "grip",
        "title": {
            "en": "Marble Grip Socks",
            "th": "Marble Grip Socks"
        },
        "subtitle": {
            "en": "Modern Abstract Marble Textures",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหินอ่อนสุดชิค"
        },
        "badge": {
            "en": "Modern Look",
            "th": "ลุคโมเดิร์น"
        },
        "price": "420",
        "image": "assets/Marble.jpg",
        "description": {
            "en": "Chic modern marble textured five-toe grip socks. The perfect choice for stylish practitioners who appreciate fine aesthetics.",
            "th": "ถุงเท้าห้านิ้วลายหินอ่อนธรรมชาติสไตล์โมเดิร์นคลาสสิก ให้ความรู้สึกนิ่ง สงบ และหรูหราเข้ากับห้องสตูดิโอได้อย่างกลมกลืน นุ่มสบายเป็นเลิศ"
        },
        "features": {
            "en": [
                "Stylish modern abstract marble pattern",
                "Highly cushioned footbed for joint comfort",
                "Premium sweat-absorption yarns",
                "Eco-friendly anti-slip print"
            ],
            "th": [
                "ลายพิมพ์หินอ่อนสไตล์นามธรรมสุดชิคทันสมัย",
                "พื้นรองเท้าบุซับนุ่มเป็นพิเศษช่วยซับแรงกดข้อเท้า",
                "เส้นด้ายเกรดสูงดูดซับเหงื่อแห้งไวพิเศษ",
                "ซิลิโคนปลอดสารพิษ เป็นมิตรต่อผิวหนังกันลื่นดีเยี่ยม"
            ]
        }
    },
    {
        "id": "woody",
        "category": "grip",
        "title": {
            "en": "Woody Grip Socks",
            "th": "Woody Grip Socks"
        },
        "subtitle": {
            "en": "Warm Earthy Woody Brown Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำตาลลายไม้ธรรมชาติ"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "390",
        "image": "assets/Woody.jpg",
        "description": {
            "en": "Cozy warm woody brown five-toe grip socks. Brings the calming sense of nature and organic warm textures to your practice.",
            "th": "ถุงเท้าห้านิ้วสีน้ำตาลเอิร์ธโทนลายเนื้อไม้ธรรมชาติ อบอุ่น เรียบง่าย สงบเงียบ เหมาะสำหรับสวมใส่เล่นโยคะและพิลาทิส ยึดเกาะกระชับเป็นเลิศ"
        },
        "features": {
            "en": [
                "Calming warm earthy brown tones",
                "Organic texture look with high durability",
                "Comfort fit toe pockets",
                "Heavy-duty non-slip printing"
            ],
            "th": [
                "เฉดสีน้ำตาลเอิร์ธโทนลายเนื้อไม้ อบอุ่น ผ่อนคลาย",
                "ทอผ้าหนาแน่นทนต่อการเสียดสีสูง ใช้งานได้ยาวนาน",
                "กระเป๋าแยกนิ้วเท้านุ่มสบายไม่ระคายเคืองช่องนิ้ว",
                "ซิลิโคนกันลื่นหนาแน่นสูง ยึดเกาะแน่นยาวนาน"
            ]
        }
    },
    {
        "id": "polo",
        "category": "daily",
        "title": {
            "en": "Polo Daily Socks",
            "th": "Polo Daily Socks"
        },
        "subtitle": {
            "en": "Sporty Ribbed Non-Grip Socks",
            "th": "ถุงเท้าแฟชั่นสตรีทลุคสไตล์โปโล (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Daily Sporty",
            "th": "ใส่ลำลอง"
        },
        "price": "290",
        "image": "assets/Polo.jpg",
        "description": {
            "en": "Classic ribbed daily five-toe socks without grip. Ideal for pairing with sneakers, casual outdoor wear, and preventing toe-rub friction.",
            "th": "ถุงเท้าแฟชั่นห้านิ้วแบบไม่มีกันลื่น ทรงข้อกลาง Ribbed สไตล์สปอร์ตคลาสสิก เหมาะสำหรับใส่กับรองเท้าผ้าใบ ลำลอง ออกข้างนอก ช่วยลดกลิ่นอับและอาการนิ้วเท้าเบียดเสียดสี"
        },
        "features": {
            "en": [
                "Classic ribbed retro sport style",
                "No silicon print for footwear comfort",
                "Prevents inter-toe moisture accumulation",
                "Breathable lightweight structure"
            ],
            "th": [
                "ทรงข้อกลางลอนร่องสไตล์สปอร์ตย้อนยุคสุดชิค",
                "แบบไม่มีซิลิโคน เหมาะสำหรับใส่เดินนอกบ้านในรองเท้า",
                "ช่วยระบายอากาศและลดการสะสมความชื้นระหว่างนิ้วเท้า",
                "น้ำหนักเบา นุ่มสบาย สวมใส่ได้ตลอดทั้งวัน"
            ]
        }
    },
    {
        "id": "peach_lavender",
        "category": "daily",
        "title": {
            "en": "Peach Lavender Socks",
            "th": "Peach Lavender Socks"
        },
        "subtitle": {
            "en": "Sweet Two-Tone Non-Grip Socks",
            "th": "ถุงเท้าห้านิ้วทูโทนสีพีช-ลาเวนเดอร์ (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Cozy Home",
            "th": "หวานละมุน"
        },
        "price": "290",
        "image": "assets/Peach Lavender.jpg",
        "description": {
            "en": "Sweet peach and lavender dual-toned daily five-toe socks. Perfect cozy fit for home lounging, light walks, and preventing blisters.",
            "th": "ถุงเท้าห้านิ้วข้อสั้นแบบไม่มีกันลื่นในสีคู่สลับทูโทน พีชและม่วงลาเวนเดอร์ สุดหวานละมุนตา สวมใส่พักผ่อนสบายๆ ในบ้าน หรือใส่นอนช่วยรักษาอุณหภูมิร่างกาย"
        },
        "features": {
            "en": [
                "Sweet contrast two-tone color block",
                "Blister-free soft inter-toe fit",
                "Ideal for home cozy lounging",
                "High elastic comfort cuff"
            ],
            "th": [
                "การตัดสีทูโทน พีช-ลาเวนเดอร์ น่ารักสะดุดตา",
                "ช่องแยกนิ้วเท้านุ่มเรียบลื่น ป้องกันการเกิดตุ่มเสียดสี",
                "เหมาะสำหรับสวมใส่อุ่นข้อเท้าและพักผ่อนในบ้าน",
                "ขอบถุงเท้ายืดหยุ่นสูงพิเศษ ไม่โอบรัดหน้าแข้งจนเจ็บ"
            ]
        }
    },
    {
        "id": "daisy_open_toe",
        "category": "grip",
        "title": {
            "en": "Daisy Open Toe Grip Socks",
            "th": "Daisy Open Toe Grip Socks"
        },
        "subtitle": {
            "en": "Signature Open-Toe Flower Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าลายเดซี่สีสันสดใส"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "390",
        "image": "assets/Daisy Open Toe.jpg",
        "description": {
            "en": "Signature daisy patterned five-toe open toe grip socks. Open toe design allows for better sensory feedback and natural toe movement. Designed in Korea.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบเปิดนิ้วเท้าลายเดซี่สุดน่ารัก ดีไซน์เปิดนิ้วเท้าช่วยให้หน้าสัมผัสเท้าได้ระบายอากาศ ยึดเกาะเครื่องได้มั่นคงและสัมผัสได้อย่างธรรมชาติ"
        },
        "features": {
            "en": [
                "Premium combed cotton blend",
                "Open five-toe separation",
                "Full-sole silicon non-slip grip",
                "Elastic arch support band"
            ],
            "th": [
                "ผลิตจากเนื้อผ้าฝ้ายผสมพรีเมียมนุ่มพิเศษ",
                "ดีไซน์แยก 5 นิ้วแบบเปิดปลาย ช่วยการทรงตัวตามธรรมชาติ",
                "ปุ่มซิลิโคนกันลื่นหนาแน่นเต็มฝ่าเท้า",
                "แถบยืดหยุ่นโอบอุ้มอุ้งเท้า ลดความเมื่อยล้า"
            ]
        }
    },
    {
        "id": "earth_white",
        "category": "grip",
        "title": {
            "en": "Earth White Grip Socks",
            "th": "Earth White Grip Socks"
        },
        "subtitle": {
            "en": "Minimalist Classic Off-White Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีขาวเอิร์ธโทนสุดคลาสสิก"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "390",
        "image": "assets/Earth White.png",
        "description": {
            "en": "Classic earth white five-toe grip socks. Minimalist off-white color that matches beautifully with any studio attire and offers top-tier stability.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีขาวเอิร์ธโทนมินิมอล เรียบง่าย สะอาดตา แมทช์ชุดออกกำลังกายง่าย ผลิตจากเส้นด้ายทนทานพิเศษพร้อมปุ่มกันลื่นเจลพรีเมียม"
        },
        "features": {
            "en": [
                "Classic aesthetic off-white tone",
                "Anatomical five-toe separated shape",
                "Heavy-density silicon gel grip",
                "Double-ply combed cotton"
            ],
            "th": [
                "สีขาวนวลแบบเอิร์ธโทน คลาสสิก แมทช์ง่าย",
                "แยกนิ้วเท้าช่วยปรับสมดุลเท้าในการออกกำลังกาย",
                "ปุ่มซิลิโคนกันลื่นหนาแน่นสูง เกาะมั่นใจทุกเครื่อง",
                "ผลิตจากเส้นด้ายฝ้ายหนาพิเศษทนทาน"
            ]
        }
    },
    {
        "id": "earth_white_open_toe",
        "category": "grip",
        "title": {
            "en": "Earth White Open Toe Grip Socks",
            "th": "Earth White Open Toe Grip Socks"
        },
        "subtitle": {
            "en": "Barefoot Feel Off-White Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีขาวเอิร์ธโทน"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "390",
        "image": "assets/Earth White Open Toe.png",
        "description": {
            "en": "Classic earth white open toe five-toe grip socks. Offers a barefoot feel with ultimate non-slip stability and sensory freedom.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบเปิดนิ้วเท้าสีขาวเอิร์ธโทน ให้ความรู้สึกเหมือนเท้าเปล่า สัมผัสพื้นผิวเครื่องได้อย่างอิสระ ทรงตัวและฝึกซ้อมได้แม่นยำยิ่งขึ้น"
        },
        "features": {
            "en": [
                "Barefoot feedback open toe style",
                "Premium combed cotton blend",
                "Full-sole silicon non-slip grip",
                "Highly stretchable supportive band"
            ],
            "th": [
                "ดีไซน์เปิดนิ้วเท้า สัมผัสพื้นและเครื่องโดยตรง",
                "ผ้าฝ้าย Combed เกรดพรีเมียม นุ่มสบายผิว",
                "ซิลิโคนกันลื่นคุณภาพสูงยึดเกาะแน่นปลอดภัย",
                "ยางยืดรอบเท้ากระชับส้นไม่เลื่อนหลุดง่าย"
            ]
        }
    },
    {
        "id": "marble_open_toe",
        "category": "grip",
        "title": {
            "en": "Marble Open Toe Grip Socks",
            "th": "Marble Open Toe Grip Socks"
        },
        "subtitle": {
            "en": "Modern Marble Open-Toe Design",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าลายหินอ่อนสุดชิค"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "420",
        "image": "assets/Marble Open Toe.png",
        "description": {
            "en": "Modern abstract marble textured open toe grip socks. Blends elegance with performance and barefoot feedback for professional studio work.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบเปิดนิ้วเท้าลวดลายหินอ่อนยอดนิยมสไตล์โมเดิร์นคลาสสิก ปล่อยปลายเท้าสัมผัสเครื่องโดยตรง เพิ่มแรงยึดเกาะและการทรงตัวดีเยี่ยม"
        },
        "features": {
            "en": [
                "Stylish modern abstract marble pattern",
                "Barefoot feedback open toe style",
                "Soft cushioned sole for joint support",
                "Durable eco-friendly non-slip prints"
            ],
            "th": [
                "ลวดลายหินอ่อนสลับสี สวยเด่น ทันสมัย",
                "ดีไซน์เปิดนิ้วเท้า ให้การเคลื่อนไหวเป็นธรรมชาติสุดๆ",
                "พื้นถุงเท้าทอหนานุ่มซับแรงกระแทกบริเวณส้นเท้า",
                "ปุ่มซิลิโคนเกรดพรีเมียม ปลอดภัยและทนทานสูง"
            ]
        }
    },
    {
        "id": "woody_open_toe",
        "category": "grip",
        "title": {
            "en": "Woody Open Toe Grip Socks",
            "th": "Woody Open Toe Grip Socks"
        },
        "subtitle": {
            "en": "Warm Earthy Brown Open-Toe Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีน้ำตาลลายไม้ธรรมชาติ"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "390",
        "image": "assets/Woody Open Toe.png",
        "description": {
            "en": "Cozy woody brown open toe five-toe grip socks. Earthy natural tone meets organic barefoot movement for a grounding experience.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบเปิดนิ้วเท้าสีน้ำตาลเอิร์ธโทนลายเนื้อไม้ อบอุ่น เรียบง่าย ได้ความรู้สึกผ่อนคลายและสัมผัสเครื่องฝึกฝนได้อย่างเป็นธรรมชาติ"
        },
        "features": {
            "en": [
                "Warm calming organic woody brown tone",
                "Open toe barefoot motion feel",
                "Durable dense thread count for studio use",
                "Silicon non-slip pads covering sole"
            ],
            "th": [
                "เฉดสีน้ำตาลลายไม้ อบอุ่น ผ่อนคลายสไตล์ธรรมชาติ",
                "ดีไซน์เปิดนิ้วเท้า สัมผัสพื้นผิวเครื่องได้อย่างมั่นใจ",
                "การทอเส้นด้ายหนาพิเศษ ทนทานต่อการเสียดสีดึงรั้ง",
                "ซิลิโคนเต็มฝ่าเท้า ป้องกันการลื่นล้มไถลในทุกสตูดิโอ"
            ]
        }
    },
    {
        "id": "pink",
        "category": "grip",
        "title": {
            "en": "Pink Grip Socks",
            "th": "Pink Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Dreamy Pink Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีชมพูหวานสดใส"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "390",
        "image": "assets/Pink.jpg",
        "description": {
            "en": "Vibrant and sweet dreamy pink five-toe grip socks. Energize your pilates session with a bright splash of color and secure grip performance.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีชมพูพาสเทลสดใส น่ารักสุดๆ ช่วยเติมความกระปรี้กระเปร่าและสีสันให้กับการเคลื่อนไหวในชั้นเรียน ทอแน่นหนากระชับเท้าดีเยี่ยม"
        },
        "features": {
            "en": [
                "Sweet vibrant hot pink color theme",
                "Soft breathing weave on instep",
                "Anatomical five-toe separated shape",
                "Full-sole silicon gel anti-slip prints"
            ],
            "th": [
                "เฉดสีชมพูสดใสสุดชิค เพิ่มความโดดเด่นสะดุดตา",
                "ทอตาข่ายโปร่งบริเวณหลังเท้าแห้งสบายและระบายดีเยี่ยม",
                "กระเป๋าแยกนิ้วสวมง่าย ช่วยโอบล้อมนิ้วเท้าเป็นรายนิ้ว",
                "ปุ่มซิลิโคนเจลหนานุ่ม ยึดเกาะเครื่องได้อย่างมีประสิทธิภาพ"
            ]
        }
    },
    {
        "id": "mud",
        "category": "grip",
        "title": {
            "en": "Mud Grip Socks",
            "th": "Mud Grip Socks"
        },
        "subtitle": {
            "en": "Organic Deep Mud-Grey Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาโคลนธรรมชาติ"
        },
        "badge": {
            "en": "Earthy",
            "th": "สีธรรมชาติ"
        },
        "price": "390",
        "image": "assets/Mud.jpg",
        "description": {
            "en": "Organic deep mud-grey five-toe grip socks. Natural, grounded tone that offers a clean, professional studio look with great durability.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาโคลนเข้มแบบเอิร์ธโทน เรียบหรู คลาสสิก เหมาะสำหรับผู้เล่นที่ชอบสไตล์คุมโทน สวมใส่สบาย ซักล้างทนทาน ไม่เปื้อนง่าย"
        },
        "features": {
            "en": [
                "Calming deep mud grey color",
                "High density double-ply cotton blend",
                "Elastic arch support compression band",
                "Durable slip-free silicon grip print"
            ],
            "th": [
                "เฉดสีเทาเข้มธรรมชาติ เรียบร้อย ทนทาน ไม่เลอะง่าย",
                "ทอด้ายคู่เส้นหนา ให้สัมผัสนุ่มและปกป้องสูงสุด",
                "แถบยืดรัดกระชับอุ้งเท้า ป้องกันถุงเท้าบิดหมุน",
                "เจลซิลิโคนกันลื่นหนาพิเศษ ยึดเกาะแน่นยาวนาน"
            ]
        }
    },
    {
        "id": "pink_panther",
        "category": "grip",
        "title": {
            "en": "Pink Panther Grip Socks",
            "th": "Pink Panther Grip Socks"
        },
        "subtitle": {
            "en": "Vibrant Panther Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเสือชมพูพาสเทลชิค"
        },
        "badge": {
            "en": "Playful",
            "th": "สายแฟชั่น"
        },
        "price": "420",
        "image": "assets/Pink Panther.jpg",
        "description": {
            "en": "Playful and wild pink and black panther patterned five-toe grip socks. A fashionable statement piece for pilates enthusiasts who love styling.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายเสือสลับทูโทนชมพู-ดำสุดเก๋ ดีไซน์แฟชั่นนิสต้าสำหรับผู้รักการแต่งตัวขณะออกกำลังกาย ปุ่มซิลิโคนหนาพิเศษยึดเกาะได้ทุกทิศทาง"
        },
        "features": {
            "en": [
                "Bold pink panther character design",
                "Thick padded footbed for shock absorption",
                "Secure non-slip eco-friendly silicone print",
                "Reinforced elastic ankle cuff"
            ],
            "th": [
                "ลายพิมพ์เสือพาสเทลสลับสีโดดเด่นเป็นเอกลักษณ์",
                "พื้นสัมผัสใต้เท้าบุนุ่มหนาพิเศษรองรับน้ำหนักตัวได้ดี",
                "ซิลิโคนกันลื่นเป็นมิตรต่อผิว ยึดเกาะแน่นปลอดภัย",
                "ยางยืดขอบข้อมั่นคง กระชับข้อเท้า ไม่หมุนหรือรั้ง"
            ]
        }
    },
    {
        "id": "silver",
        "category": "grip",
        "title": {
            "en": "Silver Grip Socks",
            "th": "Silver Grip Socks"
        },
        "subtitle": {
            "en": "Elegant Silver-Grey Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาเงินพรีเมียม"
        },
        "badge": {
            "en": "Classic",
            "th": "เรียบง่าย"
        },
        "price": "390",
        "image": "assets/Silver.jpg",
        "description": {
            "en": "Elegant silver-grey solid five-toe grip socks. Clean, professional look that coordinates with all activewear collections perfectly.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาเงินสว่างพรีเมียม ลุคมืออาชีพ เรียบหรู สะอาดตา ดูดีทุกมิติ พร้อมซิลิโคนกันลื่นแบบเจลใสเกรดสูงสุด ทนทานเป็นพิเศษ"
        },
        "features": {
            "en": [
                "Elegant sleek silver grey shade",
                "High moisture absorption breathable fibers",
                "Flexible separate toe pocket slots",
                "Transparent high density silicone print"
            ],
            "th": [
                "เฉดสีเทาเงินสว่างพรีเมียม หรูหราทันสมัย",
                "เส้นใยระบายอากาศชั้นยอด แห้งไว ไร้กลิ่นอับชื้น",
                "ทอแยกช่องนิ้วเท้าเรียบเนียน ไม่ระคายเคืองช่องนิ้ว",
                "ปุ่มซิลิโคนเจลแบบใสพิเศษ ยึดเกาะเสถียรและเกาะเครื่องแน่น"
            ]
        }
    }
];


const DEFAULT_SLIDES = [
    { id:"slide1", badgeEn:"Best Seller", badgeTh:"สินค้าขายดี", titleEn:"thumb toe pilates socks", titleTh:"ถุงเท้าพิลาทิส thumb toe", descEn:"everyday pilates, everyday comfort.", descTh:"ถุงเท้าพิลาทิสเกาหลี ใส่สบายทุกวัน", btnEn:"Shop Now", btnTh:"ช้อปเลย", btnCategory:"grip", image:"https://thumbtoe.shop/web/upload/category/editor/2026/260107_main_PC.jpg" },
    { id:"slide2", badgeEn:"New Collection", badgeTh:"คอลเลกชันใหม่", titleEn:"daisy collection", titleTh:"คอลเลกชัน Daisy", descEn:"colorful grip socks for your pilates practice.", descTh:"ถุงเท้ากันลื่นสีสันสดใสสำหรับการฝึกพิลาทิส", btnEn:"Explore Collection", btnTh:"ดูคอลเลกชัน", btnCategory:"grip", image:"https://thumbtoe.shop/web/product/big/202505/80a4390daaa68948ac7682bfc36e8a94.jpg" },
    { id:"slide3", badgeEn:"Daily Essentials", badgeTh:"สินค้าจำเป็นประจำวัน", titleEn:"non-grip daily socks", titleTh:"ถุงเท้าใส่ทุกวัน", descEn:"soft, breathable socks for everyday comfort.", descTh:"ถุงเท้านุ่มสบาย ระบายอากาศ สำหรับใส่ทุกวัน", btnEn:"Shop Daily Socks", btnTh:"ช้อปถุงเท้าใส่ทุกวัน", btnCategory:"daily", image:"https://thumbtoe.shop/web/product/big/202602/318893c7f749c2172bf42a9c152ce0b1.jpg" }
];

const DEFAULT_EVENT = {
    discount: 10,
    lineUrl: "https://line.me/R/ti/p/@thumbtoe_th",
    titleEn: "Thumb Toe Exclusive Offer",
    titleTh: "ข้อเสนอพิเศษเฉพาะงานนี้",
    descEn: "Welcome to our showroom! Scan the QR Code at our booth to explore our products. Register below to receive an instant 10% discount coupon valid for any purchases made today!",
    descTh: "ยินดีต้อนรับสู่โชว์รูมของเรา! เพียงสแกน QR Code ที่บูธเพื่อเลือกชมสินค้า ลงทะเบียนด้านล่างเพื่อรับคูปองส่วนลด 10% ทันที สำหรับซื้อสินค้าภายในงานวันนี้!",
    perks: [
        { en: "10% OFF all items", th: "ลด 10% ทุกรายการสินค้า" },
        { en: "Free Shipping in Thailand", th: "จัดส่งฟรีทั่วประเทศไทย" },
        { en: "Thumb Toe Premium Gift Bag", th: "รับฟรีถุงของขวัญสุดพรีเมียมจาก Thumb Toe" }
    ]
};

const DEFAULT_STORE = {
    addressTh: "โชว์รูมกรุงเทพฯ, ประเทศไทย",
    addressEn: "Bangkok Showroom, Thailand",
    email: "contact@thumbtoe.shop",
    phone: "+66 (0) 2-123-4567",
    lineId: "@thumbtoe_th",
    lineUrl: "https://line.me/R/ti/p/@thumbtoe_th",
    fbUrl: "#",
    igUrl: "https://instagram.com/thumbtoe_th",
    globalUrl: "https://thumbtoe.shop/",
    aboutTh: "Thumb Toe แบรนด์ถุงเท้าพิลาทิสแบบแยกห้านิ้วยอดนิยมจากเกาหลี ออกแบบถุงเท้ากันลื่นที่ผสานประสิทธิภาพ ความรู้สึกกระชับ และสไตล์มินิมอลสีสันสดใสได้อย่างยอดเยี่ยม เพื่อการเคลื่อนไหวและการออกกำลังกายของคุณในทุกๆ วัน",
    aboutEn: "Thumb Toe is Korea's original five-toe pilates grip socks brand. We design grip socks that combine performance, comfort, and sweet vibrant style — perfect for pilates, yoga, barre, and everyday movement."
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

function isDuitData(data) {
    if (!data || !data.products) return false;
    const duitIds = ['water_pot', 'wave_pot', 'standing_board', 'nonslip_mat', 'silicone_mat', 'soft_brush', 'table_plus', 'peanut_board', 'poopoo_cube', 'poopoo_2way', 'poopoo_long', 'run_run_mat', 'dry_mat', 'mouse_bot', 'peek_a_poo', 'floating_bath_tub'];
    return data.products.some(p => p && (duitIds.includes(p.id) || p.category === 'furniture' || p.category === 'appliances'));
}

async function loadCMSData() {
    try {
        const res = await fetch(`/api/data?_t=${Date.now()}`);
        let saved = await res.json();
        
        if (isDuitData(saved)) {
            console.warn("Detected DUIT data in API. Resetting...");
            saved = null;
        }

        // MIGRATION: If backend is empty, try to migrate from localStorage
        if (!saved || Object.keys(saved).length === 0) {
            const localSaved = localStorage.getItem("thumbtoe_cms_data");
            let parsedLocal = null;
            if (localSaved) {
                try {
                    parsedLocal = JSON.parse(localSaved);
                    if (isDuitData(parsedLocal)) {
                        console.warn("Detected DUIT data in localStorage. Clearing...");
                        localStorage.removeItem("thumbtoe_cms_data");
                        parsedLocal = null;
                    }
                } catch (e) {
                    console.error("Failed to parse localSaved", e);
                }
            }

            if (parsedLocal) {
                saved = parsedLocal;
                await fetch('/api/data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(saved)
                });
            } else {
                // If local storage is also empty, try to fetch default data.json
                try {
                    const defaultRes = await fetch('/data.json');
                    saved = await defaultRes.json();
                    if (saved && Object.keys(saved).length > 0) {
                        await fetch('/api/data', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(saved)
                        });
                    }
                } catch (jsonErr) {
                    console.warn("Failed to seed from default data.json", jsonErr);
                }
            }
        }

        if (saved && Object.keys(saved).length > 0) {
            cmsData = saved;
            if (!cmsData.categories) cmsData.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
            if (!cmsData.products) cmsData.products = [...DEFAULT_PRODUCTS];
            if (!cmsData.slides)   cmsData.slides   = [...DEFAULT_SLIDES];
            if (!cmsData.event)    cmsData.event    = { ...DEFAULT_EVENT };
            if (!cmsData.store)    cmsData.store    = { ...DEFAULT_STORE };
            if (!cmsData.settings) cmsData.settings = { ...DEFAULT_SETTINGS };
        } else {
            cmsData = {
                categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
                products: JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)),
                slides:   JSON.parse(JSON.stringify(DEFAULT_SLIDES)),
                event:    JSON.parse(JSON.stringify(DEFAULT_EVENT)),
                store:    JSON.parse(JSON.stringify(DEFAULT_STORE)),
                settings: { ...DEFAULT_SETTINGS }
            };
        }
    } catch (err) {
        console.error("Failed to load CMS data from API, falling back to local storage:", err);
        const localSaved = localStorage.getItem("thumbtoe_cms_data");
        if (localSaved) {
            cmsData = JSON.parse(localSaved);
            if (!cmsData.categories) cmsData.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
        } else {
            cmsData = {
                categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
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
    localStorage.setItem("thumbtoe_cms_data", JSON.stringify(cmsData));
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
    const sessionOk = sessionStorage.getItem("thumbtoe_admin_session");
    if (sessionOk === "1") {
        showAdminApp();
    }
}

function doAdminLogin() {
    const pin = document.getElementById("adminPinInput").value;
    const correctPin = cmsData.settings.adminPin || "admin1234";
    if (pin === correctPin) {
        sessionStorage.setItem("thumbtoe_admin_session", "1");
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
    renderCategoryTable();
    updateCategoryDropdown();
    renderLeadsTable();
}

function doLogout() {
    sessionStorage.removeItem("thumbtoe_admin_session");
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
        dashboard: "แดชบอร์ด", products: "จัดการสินค้า", categories: "หมวดหมู่สินค้า",
        slider: "Hero Slider", event: "Event Section",
        store: "ข้อมูลร้านค้า", leads: "Leads ลูกค้า", settings: "ตั้งค่า",
        discount: "ส่วนลดพิเศษ"
    };
    const icons = {
        dashboard: "chart-pie", products: "box", categories: "tags", slider: "images",
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
        const leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];
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
        tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state" style="padding:2rem;">
            <i class="fa-solid fa-box-open"></i><h3>ไม่พบสินค้า</h3></div></td></tr>`;
        return;
    }

    filtered.forEach((p, idx) => {
        const cat = cmsData.categories.find(c => c.id === p.category);
        const catName = cat ? cat.name.en : p.category;

        const masterIdx = cmsData.products.findIndex(x => x.id === p.id);
        const isFirst = masterIdx === 0;
        const isLast = masterIdx === cmsData.products.length - 1;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img class="product-thumb" src="${escHTML(p.image)}" alt="${escHTML(p.title.th)}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'48\\' height=\\'48\\' fill=\\'%23333\\'/></svg>'"></td>
            <td class="product-name-cell">
                <strong>${escHTML(p.title.th)}</strong>
                <span>${escHTML(p.title.en)}</span>
            </td>
            <td><span class="category-tag">${escHTML(catName)}</span></td>
            <td>
                <div style="display:flex; flex-direction:column; gap:4px;">
                    <input type="text" class="form-input" style="padding:0.2rem 0.4rem; font-size:0.75rem;" value="${escHTML(p.badge?.th || '')}" onchange="updateInlineBadge('${escHTML(p.id)}', 'th', this.value)" placeholder="TH (เช่น ใหม่)">
                    <input type="text" class="form-input" style="padding:0.2rem 0.4rem; font-size:0.75rem;" value="${escHTML(p.badge?.en || '')}" onchange="updateInlineBadge('${escHTML(p.id)}', 'en', this.value)" placeholder="EN (e.g. New)">
                </div>
            </td>
            <td class="price-cell">฿${escHTML(p.price)}</td>
            <td style="text-align:center;">
                <div style="display:flex; gap:4px; justify-content:center; align-items:center;">
                    <button class="btn btn-secondary btn-sm btn-icon" title="ย้ายขึ้น" ${isFirst || q !== "" ? "disabled style='opacity:0.3; cursor:not-allowed;'" : ""} onclick="moveProduct('${escHTML(p.id)}', -1)">
                        <i class="fa-solid fa-arrow-up"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm btn-icon" title="ย้ายลง" ${isLast || q !== "" ? "disabled style='opacity:0.3; cursor:not-allowed;'" : ""} onclick="moveProduct('${escHTML(p.id)}', 1)">
                        <i class="fa-solid fa-arrow-down"></i>
                    </button>
                </div>
            </td>
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

function moveProduct(productId, direction) {
    const idx = cmsData.products.findIndex(p => p.id === productId);
    if (idx === -1) return;
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= cmsData.products.length) return;

    // Swap items in-place
    const temp = cmsData.products[idx];
    cmsData.products[idx] = cmsData.products[newIdx];
    cmsData.products[newIdx] = temp;

    saveCMSData();
    renderProductTable();
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
        origin = "https://thumbtoe.shop"; // fallback if running locally without server
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

    // Reset everything first
    clearProductForm();
    document.getElementById("featuresTh").innerHTML = "";
    document.getElementById("featuresEn").innerHTML = "";

    if (productId === null) {
        // ADD mode
        document.getElementById("drawerTitle").innerHTML = '<i class="fa-solid fa-plus"></i> เพิ่มสินค้าใหม่';
        document.getElementById("editProductId").value = "";
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
     "prod-price","prod-badgeTh","prod-badgeEn","prod-descTh","prod-descEn",
     "prod-dimTh", "prod-dimEn"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    document.getElementById("variantsList").innerHTML = "";
    document.getElementById("prod-category").value = cmsData.categories.length ? cmsData.categories[0].id : "";
    document.getElementById("imageUrlInput").value = "";
    clearImageInput();
}

function fillProductForm(p) {
    document.getElementById("prod-titleTh").value    = p.title.th || "";
    document.getElementById("prod-titleEn").value    = p.title.en || "";
    document.getElementById("prod-subtitleTh").value = p.subtitle.th || "";
    document.getElementById("prod-subtitleEn").value = p.subtitle.en || "";
    document.getElementById("prod-category").value   = p.category || (cmsData.categories.length ? cmsData.categories[0].id : "");
    document.getElementById("prod-price").value      = p.price || "";
    document.getElementById("prod-badgeTh").value    = p.badge.th || "";
    document.getElementById("prod-badgeEn").value    = p.badge.en || "";
    document.getElementById("prod-dimTh").value      = (p.dimensions && p.dimensions.th) ? p.dimensions.th : "";
    document.getElementById("prod-dimEn").value      = (p.dimensions && p.dimensions.en) ? p.dimensions.en : "";
    document.getElementById("prod-descTh").value     = p.description.th || "";
    document.getElementById("prod-descEn").value     = p.description.en || "";
    document.getElementById("imageUrlInput").value   = p.image || "";
    if (p.image) previewImageFromUrl(p.image);
    // Features
    (p.features.th || []).forEach(f => addFeatureRow("Th", f));
    (p.features.en || []).forEach(f => addFeatureRow("En", f));
    // Variants
    (p.variants || []).forEach(v => addVariantRow(v.name.th, v.name.en, v.image, v.desc?.th, v.desc?.en));
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

    // Collect variants
    const variants = [];
    document.querySelectorAll(".variant-row").forEach(row => {
        const th = row.querySelector(".var-name-th").value.trim();
        const en = row.querySelector(".var-name-en").value.trim();
        const img = row.querySelector(".var-image").value.trim();
        const dTh = row.querySelector(".var-desc-th").value.trim();
        const dEn = row.querySelector(".var-desc-en").value.trim();
        if (th || en || img) {
            variants.push({ name: { th, en }, image: img, desc: { th: dTh, en: dEn } });
        }
    });

    const productData = {
        id: id || slugify(titleEn) + "_" + Date.now(),
        category: document.getElementById("prod-category").value,
        title:    { th: titleTh, en: titleEn },
        subtitle: { th: document.getElementById("prod-subtitleTh").value.trim(), en: document.getElementById("prod-subtitleEn").value.trim() },
        badge:    { th: document.getElementById("prod-badgeTh").value.trim(), en: document.getElementById("prod-badgeEn").value.trim() },
        dimensions: { th: document.getElementById("prod-dimTh").value.trim(), en: document.getElementById("prod-dimEn").value.trim() },
        price,
        image,
        variants,
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

// Variant rows
function addVariantRow(th = "", en = "", img = "", descTh = "", descEn = "") {
    const container = document.getElementById("variantsList");
    const row = document.createElement("div");
    row.className = "feature-row variant-row";
    const uniqueId = "var-img-" + Date.now() + Math.floor(Math.random() * 1000);
    row.innerHTML = `
        <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; gap:8px;">
                <input type="text" class="form-input var-name-th" value="${escHTML(th)}" placeholder="ชื่อตัวเลือก (TH) เช่น สีดำ" style="flex:1;">
                <input type="text" class="form-input var-name-en" value="${escHTML(en)}" placeholder="Variant name (EN) e.g. Black" style="flex:1;">
            </div>
            <div style="display:flex; gap:8px;">
                <input type="text" id="${uniqueId}" class="form-input var-image" value="${escHTML(img)}" placeholder="URL รูปภาพ (https://...)" style="flex:1;">
                <input type="file" accept="image/*" style="display:none;" onchange="handleVariantImageUpload(event, '${uniqueId}')">
                <button type="button" class="btn btn-secondary btn-icon" onclick="this.previousElementSibling.click()" title="อัปโหลดรูปภาพ" style="padding: 0.5rem 0.75rem;">
                    <i class="fa-solid fa-upload"></i>
                </button>
            </div>
            <textarea class="form-textarea var-desc-th" placeholder="คำอธิบายเพิ่มเติมเฉพาะตัวเลือกนี้ (TH) (ไม่บังคับ)" rows="2">${escHTML(descTh)}</textarea>
            <textarea class="form-textarea var-desc-en" placeholder="Variant description (EN) (Optional)" rows="2">${escHTML(descEn)}</textarea>
        </div>
        <button type="button" class="btn btn-danger btn-sm btn-icon" style="align-self: flex-start; margin-left:8px;" onclick="this.parentElement.remove()" title="ลบ">
            <i class="fa-solid fa-minus"></i>
        </button>`;
    container.appendChild(row);
}

// ==========================================
// CROPPER HANDLING
// ==========================================
let cropper = null;
let currentCropTarget = null; // 'main' or targetId for variant

function loadCropperDependencies(callback) {
    if (window.Cropper) {
        return callback();
    }
    
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css';
    document.head.appendChild(css);
    
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js';
    script.onload = callback;
    document.head.appendChild(script);
}

function ensureCropperModal() {
    if (document.getElementById('cropperModal')) return;
    
    const modalHtml = `
    <div class="admin-modal-backdrop" id="cropperModal" style="z-index: 10000; align-items:center; justify-content:center; display:none;">
        <div class="card" style="width:100%; max-width:800px; text-align:center; position:relative; max-height: 90vh; display: flex; flex-direction: column;">
            <h2 style="margin-bottom:1rem;" id="cropperTitle">ครอบตัดรูปภาพ</h2>
            <div style="flex:1; width:100%; min-height: 400px; max-height: 60vh; background-color: #f0f0f0; border-radius: 8px; overflow: hidden; display:flex; justify-content:center; align-items:center;">
                <img id="cropperImage" src="" alt="Picture" style="max-width: 100%; max-height: 100%; display:block;">
            </div>
            <div style="margin-top:1.5rem; display:flex; justify-content:center; gap: 1rem;">
                <button class="btn btn-secondary" onclick="closeCropperModal()">ยกเลิก</button>
                <button class="btn btn-primary" onclick="confirmCrop()">
                    <i class="fa-solid fa-crop"></i> ยืนยันการตัด
                </button>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openCropper(dataUrl, target) {
    currentCropTarget = target;
    
    // Ensure HTML and Dependencies exist
    ensureCropperModal();
    loadCropperDependencies(() => {
        const modal = document.getElementById('cropperModal');
        const image = document.getElementById('cropperImage');
        
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
        
        image.src = dataUrl;
        modal.style.display = 'flex';
        modal.classList.add('open');
        
        setTimeout(() => {
            cropper = new Cropper(image, {
                aspectRatio: 1,
                viewMode: 1,
                dragMode: 'move',
                autoCropArea: 1,
                restore: false,
                guides: true,
                center: true,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: false,
            });
        }, 100);
    });
}

function closeCropperModal() {
    const modal = document.getElementById('cropperModal');
    if (modal) {
        modal.classList.remove('open');
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    }
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    // Safely clear all file inputs
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => input.value = '');
}

function confirmCrop() {
    if (!cropper) return;
    
    const canvas = cropper.getCroppedCanvas({
        width: 800,
        height: Math.round(800 * (45 / 55))
    });
    
    if (!canvas) {
        showToast("ไม่สามารถครอบตัดรูปภาพได้", "error");
        return;
    }
    
    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
    
    if (currentCropTarget === 'main') {
        document.getElementById("imageUrlInput").value = croppedDataUrl;
        showImagePreview(croppedDataUrl);
    } else {
        const input = document.getElementById(currentCropTarget);
        if (input) input.value = croppedDataUrl;
    }
    
    closeCropperModal();
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
        openCropper(dataUrl, 'main');
    };
    reader.readAsDataURL(file);
}

function handleVariantImageUpload(event, targetId) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
        showToast("ไฟล์ใหญ่เกิน 4MB", "error");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        openCropper(dataUrl, targetId);
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
// CATEGORY MANAGEMENT
// ==========================================
function updateCategoryDropdown() {
    const sel = document.getElementById("prod-category");
    if (!sel) return;
    sel.innerHTML = "";
    (cmsData.categories || []).forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat.id;
        opt.textContent = `${cat.name.en} (${cat.name.th})`;
        sel.appendChild(opt);
    });
}

function renderCategoryTable() {
    const tbody = document.getElementById("categoryTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    document.getElementById("categoryCount").innerText = (cmsData.categories || []).length;
    document.getElementById("stat-categories").innerText = (cmsData.categories || []).length;

    (cmsData.categories || []).forEach(cat => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${escHTML(cat.id)}</code></td>
            <td>${escHTML(cat.name.th)}</td>
            <td>${escHTML(cat.name.en)}</td>
            <td style="text-align:center;">
                <button class="btn btn-secondary btn-sm" onclick="openCategoryDrawer('${cat.id}')">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteCategory('${cat.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openCategoryDrawer(id) {
    const modal = document.getElementById("categoryDrawer");
    modal.classList.add("open");
    
    if (id) {
        document.getElementById("categoryDrawerTitle").innerHTML = '<i class="fa-solid fa-tags"></i> แก้ไขหมวดหมู่';
        const cat = cmsData.categories.find(c => c.id === id);
        document.getElementById("editCategoryOldId").value = id;
        document.getElementById("cat-id").value = cat.id;
        document.getElementById("cat-titleTh").value = cat.name.th;
        document.getElementById("cat-titleEn").value = cat.name.en;
    } else {
        document.getElementById("categoryDrawerTitle").innerHTML = '<i class="fa-solid fa-tags"></i> เพิ่มหมวดหมู่';
        document.getElementById("editCategoryOldId").value = "";
        document.getElementById("cat-id").value = "";
        document.getElementById("cat-titleTh").value = "";
        document.getElementById("cat-titleEn").value = "";
    }
}

function closeCategoryDrawer() {
    document.getElementById("categoryDrawer").classList.remove("open");
}

function onCategoryDrawerBackdropClick(e) {
    if (e.target.id === "categoryDrawer") closeCategoryDrawer();
}

function saveCategory() {
    const oldId = document.getElementById("editCategoryOldId").value;
    let newId = document.getElementById("cat-id").value.trim().toLowerCase();
    const th = document.getElementById("cat-titleTh").value.trim();
    const en = document.getElementById("cat-titleEn").value.trim();

    if (!newId || !th || !en) {
        showToast("กรุณากรอกข้อมูลให้ครบ", "error");
        return;
    }
    
    newId = slugify(newId);

    if (oldId !== newId && cmsData.categories.find(c => c.id === newId)) {
        showToast("รหัสหมวดหมู่นี้มีอยู่แล้ว!", "error");
        return;
    }

    if (oldId) {
        const cat = cmsData.categories.find(c => c.id === oldId);
        cat.id = newId;
        cat.name.th = th;
        cat.name.en = en;
        
        if (oldId !== newId) {
            cmsData.products.forEach(p => {
                if (p.category === oldId) p.category = newId;
            });
        }
    } else {
        cmsData.categories.push({
            id: newId,
            name: { th, en }
        });
    }

    closeCategoryDrawer();
    renderCategoryTable();
    updateCategoryDropdown();
    if (oldId && oldId !== newId) renderProductTable();
    saveToAPI();
    showToast("บันทึกหมวดหมู่เรียบร้อย", "success");
}

function deleteCategory(id) {
    const inUse = cmsData.products.some(p => p.category === id);
    if (inUse) {
        showToast("ไม่สามารถลบได้ มีสินค้าอยู่ในหมวดหมู่นี้", "error");
        return;
    }
    if (confirm("ยืนยันการลบหมวดหมู่นี้?")) {
        cmsData.categories = cmsData.categories.filter(c => c.id !== id);
        renderCategoryTable();
        updateCategoryDropdown();
        saveToAPI();
        showToast("ลบหมวดหมู่เรียบร้อย", "success");
    }
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
        leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];
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
        leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];
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
    a.download = `ThumbToe_Leads_${new Date().toISOString().slice(0,10)}.csv`;
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
        localStorage.removeItem("thumbtoe_leads");
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
    a.download = `thumbtoe_cms_backup_${new Date().toISOString().slice(0,10)}.json`;
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
    localStorage.removeItem("thumbtoe_cms_data");
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
