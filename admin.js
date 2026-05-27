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
    },
    {
        "id": "green_plus",
        "category": "grip",
        "title": {
            "en": "Green Plus Grip Socks",
            "th": "Green Plus Grip Socks"
        },
        "subtitle": {
            "en": "Vibrant Green Signature Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวสดใสรุ่นกรีนพลัส"
        },
        "badge": {
            "en": "New",
            "th": "ใหม่"
        },
        "price": "390",
        "image": "assets/green_plus.jpg",
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe",
        "description": {
            "en": "Vibrant green signature five-toe grip socks. Provides optimal grip for your toes and sole. Designed in Korea.",
            "th": "ถุงเท้ากันลื่นแยกห้านิ้วสีเขียวรุ่นกรีนพลัสที่เป็นเอกลักษณ์ ปุ่มซิลิโคนเต็มฝ่าเท้าและทุกนิ้วเท้า ยึดเกาะเครื่องรีฟอร์เมอร์ได้ดีเยี่ยม สไตล์น่ารักส่งตรงจากเกาหลี"
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
        "id": "knee_socks",
        "category": "grip",
        "title": {
            "en": "Knee High Grip Socks",
            "th": "Knee High Grip Socks"
        },
        "subtitle": {
            "en": "Elegant Over-the-Calf Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบยาวถึงใต้เข่าสุดหรู"
        },
        "badge": {
            "en": "Knee High",
            "th": "ยาวใต้เข่า"
        },
        "price": "450",
        "image": "assets/knee_socks_black.jpg",
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe",
        "description": {
            "en": "Elegant over-the-calf five-toe grip socks for Pilates and studio practice. Offers full calf coverage, muscle warmth, and superior non-slip grip.",
            "th": "ถุงเท้ากันลื่นแยกห้านิ้วแบบยาวสูงถึงใต้ข้อเข่า ช่วยรักษาความอบอุ่นของกล้ามเนื้อน่องและกระชับกล้ามเนื้อ ยึดเกาะเครื่องมั่นคงเป็นเลิศ เหมาะสำหรับสตูดิโอ"
        },
        "features": {
            "en": [
                "Over-the-calf knee high fit",
                "Keeps calf muscles warm",
                "Silicon grip across the entire sole",
                "Breathable combed cotton"
            ],
            "th": [
                "ดีไซน์ยาวสูงถึงใต้ข้อเข่า กระชับพอดี",
                "ช่วยประคองและรักษาความอบอุ่นของกล้ามเนื้อ",
                "ซิลิโคนกันลื่นเต็มฝ่าเท้าเกาะเครื่องมั่นคง",
                "ผลิตจากผ้าฝ้าย Combed ซับเหงื่อระบายดี"
            ]
        },
        "variants": [
            {
                "name": {
                    "th": "สีดำ",
                    "en": "Black"
                },
                "image": "assets/knee_socks_black.jpg",
                "desc": {
                    "th": "Knee Socks สีดำสปอร์ตคลาสสิก",
                    "en": "Classic sport black Knee Socks"
                }
            },
            {
                "name": {
                    "th": "สีเทาเงิน (Ash)",
                    "en": "Ash Grey"
                },
                "image": "assets/knee_socks_ash.jpg",
                "desc": {
                    "th": "Knee Socks สีเทาเงินสว่างเรียบหรู",
                    "en": "Sleek and elegant Ash Grey Knee Socks"
                }
            },
            {
                "name": {
                    "th": "สีน้ำตาลลายไม้ (Oak)",
                    "en": "Oak Brown"
                },
                "image": "assets/knee_socks_oak.jpg",
                "desc": {
                    "th": "Knee Socks สีน้ำตาลลายไม้ธรรมชาติอบอุ่น",
                    "en": "Warm and natural Oak Brown Knee Socks"
                }
            }
        ]
    },
    {
        "id": "frill_socks",
        "category": "grip",
        "title": {
            "en": "Frill Grip Socks",
            "th": "Frill Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Ruffle Ankle Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วแต่งขอบระบายหวานละมุน"
        },
        "badge": {
            "en": "Sweet Ruffle",
            "th": "ขอบระบาย"
        },
        "price": "390",
        "image": "assets/frill_socks.jpg",
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe",
        "description": {
            "en": "Sweet ruffle ankle five-toe grip socks. Add a feminine touch and colorful aesthetic to your pilates practice with a secure fit.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแต่งระบายรอบขอบข้อเท้าสไตล์หวานละมุนตา น่ารักสุดชิค เหมาะสำหรับการแมทช์ชุดออกกำลังกาย เพิ่มความคิ้วท์ในสตูดิโอ"
        },
        "features": {
            "en": [
                "Sweet ruffled ankle design",
                "Premium combed cotton blend",
                "Silicon gel non-slip sole print",
                "Breathable comfort weave"
            ],
            "th": [
                "แต่งขอบระบายน่ารักรอบข้อเท้า สวยหวาน",
                "เนื้อผ้าคอตตอนพรีเมียมนุ่มหนาพอดี",
                "ปุ่มซิลิโคนเจลกันลื่นเกาะแน่นเสถียร",
                "ระบายอากาศหน้าเท้าได้ดี แห้งสบาย"
            ]
        }
    },
    {
        "id": "sport_socks",
        "category": "grip",
        "title": {
            "en": "Sport Grip Socks",
            "th": "Sport Grip Socks"
        },
        "subtitle": {
            "en": "Athletic High-Performance Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสไตล์สปอร์ตข้อกลาง"
        },
        "badge": {
            "en": "Athletic",
            "th": "สปอร์ต"
        },
        "price": "390",
        "image": "assets/sport_socks.jpg",
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe",
        "description": {
            "en": "High-performance athletic five-toe grip socks. Features extra thick sole cushioning, secure mid-crew ankle height, and strong grip control.",
            "th": "ถุงเท้ากันลื่นห้านิ้วข้อกลางสไตล์สปอร์ตสุดเท่ เสริมความหนาใต้ฝ่าเท้าเพื่อรองรับแรงกดและการเคลื่อนไหวแบบหนักหน่วง ระบายอากาศยอดเยี่ยม"
        },
        "features": {
            "en": [
                "Mid-crew sporty ribbed ankle",
                "High-density cushioned sole",
                "Mesh breathability on instep",
                "Heavy-duty silicon non-slip grip"
            ],
            "th": [
                "ทรงสปอร์ตข้อกลาง ลอนขอบรัดกระชับข้อ",
                "พื้นใต้เท้าบุนุ่มหนาพิเศษซับแรงกระแทก",
                "ทอตาข่ายโปร่งระบายเหงื่อและอากาศไว",
                "ปุ่มเจลกันลื่นยึดเกาะเครื่องได้อย่างมั่นใจ"
            ]
        }
    },
    {
        "id": "swan_socks",
        "category": "grip",
        "title": {
            "en": "Swan Princess Grip Socks",
            "th": "Swan Princess Grip Socks"
        },
        "subtitle": {
            "en": "Elegant Swan Ribbon Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหงส์เจ้าหญิงสุดหรู"
        },
        "badge": {
            "en": "Elegant",
            "th": "หรูหรา"
        },
        "price": "450",
        "image": "assets/swan_socks.jpg",
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe",
        "description": {
            "en": "Elegant swan themed five-toe grip socks. The beautiful swan print patterns and dreamy color palette offer a premium princess aesthetic for Pilates.",
            "th": "ถุงเท้ากันลื่นห้านิ้วดีไซน์ลวดลายหงส์เจ้าหญิงและริบบิ้นสีพาสเทลหรูหรา เพิ่มระดับความสวยเด่นสะดุดตา ให้ลุคพรีเมียมเสมือนเจ้าหญิงในคลาสเรียน"
        },
        "features": {
            "en": [
                "Dreamy swan princess design theme",
                "Arch compression band for support",
                "Thick heels cushion for blister protection",
                "High-density durable silicone grip"
            ],
            "th": [
                "ลายพิมพ์รูปหงส์และริบบิ้นสวยหรูพรีเมียม",
                "แถบกระชับอุ้งเท้าเพิ่มความสมดุลเคลื่อนไหว",
                "บุนุ่มป้องกันการเสียดสีบริเวณหลังข้อเท้า",
                "เจลซิลิโคนเต็มฝ่าเท้าเกาะแน่นมั่นคงยาวนาน"
            ]
        }
    },
    {
        "id": "oat",
        "category": "grip",
        "title": {
            "en": "Oat Grip Socks",
            "th": "Oat Grip Socks"
        },
        "subtitle": {
            "en": "Warm Minimalist Oat Beige Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีโอ๊ตเบจธรรมชาติ"
        },
        "badge": {
            "en": "Classic Solid",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/oat.jpg",
        "description": {
            "en": "Minimalist oat beige solid five-toe grip socks. Perfect clean aesthetic to pair with any outfit.",
            "th": "ถุงเท้ากันลื่นแยกห้านิ้วสีครีมโอ๊ตเบจสไตล์มินิมอลเกาหลี สีสุภาพ แมทช์ง่าย ยึดเกาะแน่นมั่นคง"
        },
        "features": {
            "en": [
                "Premium combed cotton blend",
                "Silicon non-slip full-sole grip",
                "Elastic arch support band"
            ],
            "th": [
                "ผลิตจากเนื้อผ้าฝ้ายผสมพรีเมียมนุ่ม",
                "ปุ่มซิลิโคนกันลื่นหนาแน่นเต็มฝ่าเท้า",
                "แถบพยุงอุ้งเท้าเพิ่มความมั่นคง"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "oat_open_toe",
        "category": "grip",
        "title": {
            "en": "Oat Open Toe Grip Socks",
            "th": "Oat Open Toe Grip Socks"
        },
        "subtitle": {
            "en": "Barefoot Sensation Oat Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีโอ๊ตเบจ"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "390",
        "image": "assets/oat_open_toe.jpg",
        "description": {
            "en": "Minimalist open-toe five-toe grip socks in soft oat beige. Allows natural toe movement and barefoot feedback.",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบเปิดปลายสีโอ๊ตเบจเรียบหรู ปล่อยปลายเท้าอิสระ สัมผัสเครื่องรีฟอร์เมอร์ได้เป็นธรรมชาติ"
        },
        "features": {
            "en": [
                "Open toe barefoot movement design",
                "High density silicon print",
                "Comfort arch compression"
            ],
            "th": [
                "ดีไซน์เปิดนิ้วเท้า เคลื่อนไหวเป็นธรรมชาติ",
                "ปุ่มซิลิโคนหนาพิเศษเกาะเครื่องแน่น",
                "ขอบถุงเท้ายืดหยุ่นไม่เลื่อนหลุด"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "teddy",
        "category": "grip",
        "title": {
            "en": "Teddy Grip Socks",
            "th": "Teddy Grip Socks"
        },
        "subtitle": {
            "en": "Warm Cozy Teddy Bear Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องหมีเทดดี้แสนอบอุ่น"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "420",
        "image": "assets/teddy.jpg",
        "description": {
            "en": "Cozy teddy bear patterned five-toe grip socks. Sweet pastel brown tones with high-density non-slip sole grip.",
            "th": "ถุงเท้าห้านิ้วลายน้องหมีเทดดี้สีน้ำตาลสุดอบอุ่นละมุนตา ดีไซน์คิ้วท์สไตล์คาเฟ่เกาหลี ยึดเกาะแน่นและนุ่มนวล"
        },
        "features": {
            "en": [
                "Cute teddy character pattern",
                "Thick cushioned sole comfort",
                "Safe eco-friendly silicon gel"
            ],
            "th": [
                "ลายน้องหมีและหัวใจน่ารักสดใส",
                "บุนุ่มใต้ฝ่าเท้าซับแรงกระแทกบริเวณส้น",
                "ซิลิโคนกันลื่นหนาพิเศษเป็นมิตรต่อผิว"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "purple",
        "category": "grip",
        "title": {
            "en": "Purple Grip Socks",
            "th": "Purple Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Lavender Purple Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีม่วงหวานพรีเมียม"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "390",
        "image": "assets/purple.jpg",
        "description": {
            "en": "Lovely lavender purple solid five-toe grip socks. Brightens up your outfit while offering maximum support.",
            "th": "ถุงเท้ากันลื่นสีพื้นสีม่วงพาสเทลแสนหวาน ช่วยเพิ่มความสดใสสดชื่นในชั้นเรียนพิลาทิส ทนทานและระบายดีเยี่ยม"
        },
        "features": {
            "en": [
                "Lovely purple shade design",
                "Breathable instep knit structure",
                "Durable wash-resistant gel"
            ],
            "th": [
                "โทนสีม่วงลาเวนเดอร์หวานละมุนตา",
                "หลังเท้าทอตาข่ายโปร่งระบายอากาศแห้งไว",
                "ปุ่มเจลยึดเกาะเครื่องทนทานสูง"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "lilac",
        "category": "grip",
        "title": {
            "en": "Lilac Grip Socks",
            "th": "Lilac Grip Socks"
        },
        "subtitle": {
            "en": "Delicate Pastel Lilac Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีไลแลคพาสเทลอ่อน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "390",
        "image": "assets/lilac.jpeg",
        "description": {
            "en": "Delicate pastel lilac shade five-toe grip socks. Offers a soft, feminine look with premium slip-free sole stability.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีไลแลคอ่อนละมุน นุ่มสบายเท้า ดูอ่อนโยนพรีเมียม ยึดเกาะเครื่องได้อย่างมั่นใจ ปลอดภัย"
        },
        "features": {
            "en": [
                "Delicate pastel lilac color",
                "Anatomical split toe fit",
                "Premium grip dots covering sole"
            ],
            "th": [
                "เฉดสีม่วงไลแลคอ่อน สวยหวานสไตล์เกาหลี",
                "ช่องแยกนิ้วเท้านุ่มไม่ระคายเคืองช่องนิ้ว",
                "ซิลิโคนหนาพิเศษเกาะเครื่องเล่นโยคะแน่น"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "lime",
        "category": "grip",
        "title": {
            "en": "Lime Grip Socks",
            "th": "Lime Grip Socks"
        },
        "subtitle": {
            "en": "Zesty Pastel Lime Green Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมะนาวสดใส"
        },
        "badge": {
            "en": "Fresh Dynamic",
            "th": "สีเปรี้ยวซ่า"
        },
        "price": "390",
        "image": "assets/lime.jpeg",
        "description": {
            "en": "Zesty pastel lime green five-toe grip socks. Add a fun, energetic pop of fresh green to your studio workouts.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมะนาวเลมอนอมเขียว สว่างสดใส ให้ความรู้สึกสดชื่นมีชีวิตชีวา ยึดเกาะดีเยี่ยมในทุกท่า"
        },
        "features": {
            "en": [
                "Fresh bright lime shade",
                "Highly sweat-absorbent comb cotton",
                "Strong silicon grip covering all toes"
            ],
            "th": [
                "สีเขียวไลม์สว่างสดใส สไตล์แฟชั่นสตรีท",
                "ดูดซับความชื้นและเหงื่อแห้งรวดเร็ว",
                "ปุ่มซิลิโคนกันลื่นแน่นเต็มฝ่าเท้าและนิ้ว"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "cloudy",
        "category": "grip",
        "title": {
            "en": "Cloudy Grip Socks",
            "th": "Cloudy Grip Socks"
        },
        "subtitle": {
            "en": "Soft Sky Cloudy White Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายก้อนเมฆนุ่มนวล"
        },
        "badge": {
            "en": "Fluffy Vibe",
            "th": "ลายก้อนเมฆ"
        },
        "price": "390",
        "image": "assets/cloudy.png",
        "description": {
            "en": "Dreamy soft sky cloudy patterned five-toe grip socks. Light off-white and blue sky aesthetic for premium comfort.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องก้อนเมฆสีพาสเทลสวรรค์ละมุนตา อ่อนโยน น่ารักคิ้วท์ๆ ทอยางยืดข้อสั้นแน่นกระชับ ไม่ย้วยง่าย"
        },
        "features": {
            "en": [
                "Cute soft cloud print design",
                "Double-yarn durable architecture",
                "Anti-skid industrial grade dots"
            ],
            "th": [
                "ลายพิมพ์ก้อนเมฆและท้องฟ้าน่ารักคลาสสิก",
                "ทอเส้นด้ายคู่หนาแน่นทนต่อการเสียดสีดึงรั้ง",
                "ซิลิโคนเต็มฝ่าเท้าป้องกันการลื่นไถลเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "cherry",
        "category": "grip",
        "title": {
            "en": "Cherry Grip Socks",
            "th": "Cherry Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Sweet Red Cherry Pattern",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเชอร์รี่สีแดงสดใส"
        },
        "badge": {
            "en": "Sweet Cherry",
            "th": "ลายผลไม้"
        },
        "price": "390",
        "image": "assets/cherry.jpg",
        "description": {
            "en": "Adorable cherry patterned five-toe grip socks. Red cherries print brings a sweet youthful charm to your workout style.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายลูกเชอร์รี่สีแดงสดสลับใบไม้เขียว สุดน่ารักและเซ็กซี่เบาๆ สไตล์สาวเกาหลี ยึดเกาะดีเป็นเลิศ"
        },
        "features": {
            "en": [
                "Adorable red cherry patterns",
                "Instep mesh breathability zone",
                "Strong traction anti-slip pads"
            ],
            "th": [
                "ลายพิมพ์รูปเชอร์รี่สีแดงสดใสน่ารักสะดุดตา",
                "ช่องทอโปร่งกลางหลังเท้าช่วยให้อากาศถ่ายเท",
                "เจลซิลิโคนกันลื่นหนาพิเศษยึดเกาะได้มั่นคง"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "skyline",
        "category": "grip",
        "title": {
            "en": "Skyline Grip Socks",
            "th": "Skyline Grip Socks"
        },
        "subtitle": {
            "en": "Deep Blue Sky Horizon Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายขอบฟ้ายามเย็น"
        },
        "badge": {
            "en": "Mystic Sky",
            "th": "ลายท้องฟ้า"
        },
        "price": "390",
        "image": "assets/skyline.jpg",
        "description": {
            "en": "Beautiful gradient blue skyline themed five-toe grip socks. Offers a elegant grounded horizon vibe for your Pilates sequences.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายไล่ระดับเฉดสีขอบฟ้าสกายไลน์น้ำเงินเข้มขรึม เรียบหรู ทรงพลัง เพิ่มสมาธิและยึดเกาะยอดเยี่ยม"
        },
        "features": {
            "en": [
                "Beautiful deep blue skyline print",
                "Comfort snug arch band splay",
                "High-density silicon non-slip sole"
            ],
            "th": [
                "ลายเฉดสีสกายไลน์น้ำเงินเท่ห์สะดุดตาพรีเมียม",
                "แถบอุ้มอุ้งเท้าช่วยลดแรงกดและการเมื่อยล้า",
                "ปุ่มซิลิโคนกันลื่นเจลโปร่งแสงเกาะแน่นเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "smoothie",
        "category": "grip",
        "title": {
            "en": "Smoothie Grip Socks",
            "th": "Smoothie Grip Socks"
        },
        "subtitle": {
            "en": "Mixed Fruit Smoothie Pastel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีสมูทตี้ผลไม้พาสเทล"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีทูโทน"
        },
        "price": "390",
        "image": "assets/smoothie.jpg",
        "description": {
            "en": "Mixed pastel tones reminiscent of a delicious fruit smoothie. Brings colorful positive energy and premium safety to your feet.",
            "th": "ถุงเท้ากันลื่นห้านิ้วถักสลับโทนสีสมูทตี้พาสเทลน่ารักสดใส สวมใส่นุ่มสบายเท้าขั้นสุด พร้อมปุ่มซิลิโคนเจลใสกันลื่นเหนียวแน่น"
        },
        "features": {
            "en": [
                "Colorful pastel smoothie blend",
                "Thick heels padding protection",
                "Non-slip eco friendly gel prints"
            ],
            "th": [
                "เฉดสีผสมสีพาสเทลสมูทตี้ หวานละมุนน่ารัก",
                "บุส้นส้นเท้าหนาพิเศษป้องกันรองเท้ากัดและรั้ง",
                "ซิลิโคนเจลแบบใสพิเศษปลอดสารพิษยึดเกาะแน่น"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "space",
        "category": "grip",
        "title": {
            "en": "Space Grip Socks",
            "th": "Space Grip Socks"
        },
        "subtitle": {
            "en": "Mystical Deep Space Galaxy Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายจักรวาลห้วงอวกาศ"
        },
        "badge": {
            "en": "Starry Night",
            "th": "หรูหราพิเศษ"
        },
        "price": "450",
        "image": "assets/space.jpg",
        "description": {
            "en": "Mystical deep space themed five-toe grip socks. Premium galaxy cosmic gradients and star prints for a highly distinct look.",
            "th": "ถุงเท้ากันลื่นห้านิ้วดีไซน์ลายดวงดาวและเนบิวลาห้วงจักรวาลสีเข้มหรูหราพรีเมียม เสริมลุคสุดสมาร์ท ชิค และดูแพงในสตูดิโอ"
        },
        "features": {
            "en": [
                "Deep cosmic space galaxy theme",
                "Snug supportive compression cuff",
                "Heavy duty non-slip silicon gel cover"
            ],
            "th": [
                "ลายพิมพ์กาแล็กซี่หมอกควันอวกาศล้ำยุคสวยงาม",
                "ข้อขอบถุงเท้ายืดหยุ่นกระชับรัดข้อเท้ามั่นคง",
                "ซิลิโคนแผ่นเต็มฝ่าเท้าพร้อมรับทุกท่าฝึกซ้อม"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "oreo",
        "category": "grip",
        "title": {
            "en": "Oreo Grip Socks",
            "th": "Oreo Grip Socks"
        },
        "subtitle": {
            "en": "Black & White Classic Oreo Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายโอรีโอ้ขาวดำ"
        },
        "badge": {
            "en": "Contrast Look",
            "th": "สีทูโทน"
        },
        "price": "390",
        "image": "assets/oreo.jpg",
        "description": {
            "en": "Sleek contrast black and white cookie theme five-toe grip socks. Sporty, chic, and timeless minimalist aesthetic.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีทูโทนสลับขาว-ดำสไตล์คุกกี้โอรีโอ้ ดูเท่สปอร์ต ย้อนยุคเข้าได้ง่ายกับทุกสีเสื้อผ้า สวมใส่สบายกระชับมั่นใจ"
        },
        "features": {
            "en": [
                "Sporty contrast black & white cookies",
                "Premium stretch combed cotton",
                "High-density non-slip grip control"
            ],
            "th": [
                "การสลับขอบสีโอรีโอ้สุดชิคดูมินิมอลโมเดิร์น",
                "ผ้าฝ้าย Combed คุณภาพสูงนุ่มหนาพอดีผิว",
                "ปุ่มซิลิโคนเจลดำตัดขาว ยึดเกาะมั่นใจระดับดีเลิศ"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "cream",
        "category": "grip",
        "title": {
            "en": "Cream Grip Socks",
            "th": "Cream Grip Socks"
        },
        "subtitle": {
            "en": "Clean Delicate Cream Off-White",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีครีมนมเกาหลีพรีเมียม"
        },
        "badge": {
            "en": "Clean Soft",
            "th": "สียอดฮิต"
        },
        "price": "390",
        "image": "assets/cream.jpg",
        "description": {
            "en": "Classic clean cream off-white solid five-toe grip socks. Snug comfortable fit designed for Pilates, Yoga, and Barre.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีพื้นสีครีมนมไข่ไก่อ่อนละมุน สะอาด เรียบร้อย คุมโทนสไตล์เอิร์ธโทนเกาหลี ซิลิโคนเกาะหนึบแน่นหนา"
        },
        "features": {
            "en": [
                "Delicate soft cream solid tone",
                "Mesh air cooling flow on instep",
                "Silicon non-slip gel across sole"
            ],
            "th": [
                "สีครีมนวลพรีเมียม คลาสสิกยอดนิยมแมทช์ง่าย",
                "ตาข่ายหลังเท้าระบายเหงื่อและความร้อนสะสม",
                "ปุ่มซิลิโคนเจลเกรดสูงสุดยึดเกาะเครื่องได้อย่างปลอดภัย"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "burgundy",
        "category": "grip",
        "title": {
            "en": "Burgundy Grip Socks",
            "th": "Burgundy Grip Socks"
        },
        "subtitle": {
            "en": "Deep Luxurious Burgundy Red",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีแดงเบอร์กันดีสุดหรู"
        },
        "badge": {
            "en": "Luxurious",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/burgundy.jpg",
        "description": {
            "en": "Deep luxurious solid burgundy wine red five-toe grip socks. Add an elegant touch of mature premium aesthetic to your feet.",
            "th": "ถุงเท้ากันลื่นสีพื้นสีแดงไวน์เบอร์กันดีเข้มขรึมดูสง่างาม หรูหราสะดุดตา ช่วยให้รูปเท้าดูเรียวยาว ทอหนานุ่มกระชับมั่นคงเป็นพิเศษ"
        },
        "features": {
            "en": [
                "Deep elegant burgundy red tone",
                "Reinforced seamless toes pocket",
                "Transparent heavy duty silicon grip"
            ],
            "th": [
                "เฉดสีแดงไวน์เบอร์กันดีลึก สุขุมเรียบหรูดูแพง",
                "ปลายแยกนิ้วทอละเอียดเป็นชิ้นเดียวไม่เบียดนิ้ว",
                "ปุ่มซิลิโคนหนาพิเศษ ยึดเกาะได้ดีเยี่ยมทุกทิศทาง"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "dark_navy",
        "category": "grip",
        "title": {
            "en": "Dark Navy Grip Socks",
            "th": "Dark Navy Grip Socks"
        },
        "subtitle": {
            "en": "Professional Solid Dark Navy",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินกรมท่าเข้ม"
        },
        "badge": {
            "en": "Athletic",
            "th": "สปอร์ตเรียบหรู"
        },
        "price": "390",
        "image": "assets/dark_navy.jpg",
        "description": {
            "en": "Classic professional solid dark navy five-toe grip socks. Ultimate athletic performance with a clean, low-profile style.",
            "th": "ถุงเท้ากันลื่นสีน้ำเงินกรมท่าเข้มพรีเมียม เรียบง่าย ลุคสปอร์ตเท่เป็นมืออาชีพ ทำความสะอาดง่ายไม่เลอะ ปุ่มซิลิโคนเกาะเครื่องแน่นหนา"
        },
        "features": {
            "en": [
                "Classic solid dark navy shade",
                "Excellent elastic arch compression band",
                "Premium durable silicon gel sole print"
            ],
            "th": [
                "สีน้ำเงินกรมท่าคลาสสิกเข้มลึก ดูเรียบร้อยมั่นใจ",
                "ขอบยางรัดอุ้งเท้าประคองการทรงตัวได้ดีเยี่ยม",
                "ซิลิโคนเกรดทนทานต่อการซักเครื่องไม่ลอกง่าย"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "olive_green",
        "category": "grip",
        "title": {
            "en": "Olive Green Grip Socks",
            "th": "Olive Green Grip Socks"
        },
        "subtitle": {
            "en": "Deep Earthy Olive Green Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมะกอกธรรมชาติ"
        },
        "badge": {
            "en": "Earthy",
            "th": "เอิร์ธโทน"
        },
        "price": "390",
        "image": "assets/olive_green.jpg",
        "description": {
            "en": "Earthy solid olive green five-toe grip socks. Blends beautifully with nature-themed studio designs and coordinates cleanly.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวใบมะกอกเอิร์ธโทนธรรมชาติ อบอุ่น เรียบง่าย ได้บรรยากาศธรรมชาติ ยึดเกาะมั่นคงด้วยซิลิโคนเต็มแผ่น"
        },
        "features": {
            "en": [
                "Warm earthy olive green tone",
                "Snug blister-prevention comfortable fit",
                "Anti-skid full footbed gel grip print"
            ],
            "th": [
                "เฉดสีเขียวมะกอกธรรมชาติ อบอุ่น ผ่อนคลาย",
                "ทอละเอียดนุ่มพอดีป้องกันตุ่มน้ำพุพองจากการขูดรีด",
                "ซิลิโคนหนาพิเศษช่วยกระจายแรงกดอย่างเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "macaron",
        "category": "grip",
        "title": {
            "en": "Macaron Grip Socks",
            "th": "Macaron Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Colorful Macaron Pastels",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีหวานพาสเทลมาการอง"
        },
        "badge": {
            "en": "Sweet Dream",
            "th": "หวานละมุน"
        },
        "price": "390",
        "image": "assets/macaron.jpg",
        "description": {
            "en": "Sweet multi-pastel block colors reminiscent of delicious french macarons. Dreamy, playful look to elevate your mood.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสไตล์สลับสีพาสเทลพรีเมียมหวานสไตล์ขนมฝรั่งเศสมาการอง เพิ่มความคิ้วท์และลูกเล่นเก๋ไก๋ให้กับเท้า ยึดเกาะเสถียร"
        },
        "features": {
            "en": [
                "Sweet colorful macaron pastel blocks",
                "High elasticity moisture wicking threads",
                "Transparent non-slip gel grip pads"
            ],
            "th": [
                "คู่สีพาสเทลสลับบล็อก มาการองน่ารักสะดุดตา",
                "เส้นใยยืดหยุ่นสูง ซับเหงื่อแห้งไวพิเศษหมดกลิ่นอับ",
                "ซิลิโคนโปร่งแสงยึดเกาะได้แม่นยำยาวนาน"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "fried_egg",
        "category": "grip",
        "title": {
            "en": "Fried Egg Grip Socks",
            "th": "Fried Egg Grip Socks"
        },
        "subtitle": {
            "en": "Cute Sunny Side Up Fried Egg Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องไข่ดาวสุดคิ้วท์"
        },
        "badge": {
            "en": "Playful",
            "th": "สายแฟชั่นน่ารัก"
        },
        "price": "420",
        "image": "assets/fried_egg.jpg",
        "description": {
            "en": "Playful and funny sunny side up fried egg patterned five-toe grip socks. Add a joyful splash of breakfast charm to Pilates.",
            "th": "ถุงเท้าห้านิ้วพิมพ์ลายก้อนไข่ดาวทอดสีเหลืองขาวน่ารักตลกสดใส ปลุกความกระปรี้กระเปร่ามีพลังในยามเช้า ปุ่มซิลิโคนเกาะเครื่องดีเยี่ยม"
        },
        "features": {
            "en": [
                "Funny sunny side up egg patterns",
                "Snug secure ankle grip wrap",
                "Safe non-slip eco friendly silicone gel"
            ],
            "th": [
                "ลวดลายไข่ดาวทอดสุดคิ้วท์แปลกใหม่ไม่ซ้ำใคร",
                "โครงสร้างรัดอุ้งเท้าและส้นกันถุงเท้าบิดเบี้ยวระหว่างเล่น",
                "ซิลิโคนเจลกันลื่นแน่นหนาเกาะได้แม่นยำทุกองศา"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "love",
        "category": "grip",
        "title": {
            "en": "Love Grip Socks",
            "th": "Love Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Scattered Hearts Love Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหัวใจสื่อรักพาสเทล"
        },
        "badge": {
            "en": "Popular",
            "th": "ลายน่ารัก"
        },
        "price": "390",
        "image": "assets/love.jpg",
        "description": {
            "en": "Sweet pink and white patterned hearts scattered five-toe grip socks. Brings positive, sweet romantic vibes to your practice sessions.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายมินิหัวใจดวงน้อยสลับสีพาสเทลอ่อนละมุน ให้ความรู้สึกน่ารักสดใส อ่อนโยนและกระชับส้นเท้ายึดเกาะมั่นคงแน่นหนา"
        },
        "features": {
            "en": [
                "Sweet romantic love hearts theme",
                "Snug ankle comfort elastic splay",
                "Dense heavy duty silicon grip print"
            ],
            "th": [
                "ลายพิมพ์มินิหัวใจน่ารักอบอุ่น สไตล์หวานแหวว",
                "ขอบถุงเท้ายืดหยุ่นสูงพิเศษใส่สบายไม่รัดแน่นจนช้ำ",
                "ซิลิโคนกันลื่นหนาแน่นเต็มฝ่าเท้ายึดเกาะดีเยี่ยม"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "lucky",
        "category": "grip",
        "title": {
            "en": "Lucky Grip Socks",
            "th": "Lucky Grip Socks"
        },
        "subtitle": {
            "en": "Green Four-Leaf Clover Lucky Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายใบโคลเวอร์นำโชค"
        },
        "badge": {
            "en": "Lucky Vibe",
            "th": "มาใหม่"
        },
        "price": "390",
        "image": "assets/lucky.jpg",
        "description": {
            "en": "Lucky four-leaf clover patterned five-toe grip socks. Green and white pastel elements bring positive energy and fortune to you.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายใบโคลเวอร์สี่แฉกสีเขียวนำโชคพาสเทล ช่วยเติมเต็มพลังบวกและความโชคดีในการฝึกซ้อม ยึดเกาะเสถียรและมั่นคง"
        },
        "features": {
            "en": [
                "Lucky four-leaf clover prints",
                "Snug arch stability compression band",
                "Silicon slip free sole coverage"
            ],
            "th": [
                "ลายใบโคลเวอร์สี่แฉกสัญลักษณ์นำโชคสดใส",
                "ยางรัดรอบอุ้งเท้าช่วยพยุงข้อและรักษาการทรงตัว",
                "ซิลิโคนเจลเกาะเครื่องแน่นหนาในทุกจุดรับแรงส้น"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "moon",
        "category": "grip",
        "title": {
            "en": "Moon Grip Socks",
            "th": "Moon Grip Socks"
        },
        "subtitle": {
            "en": "Elegant Crescent Moon and Star Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายดวงจันทร์และดวงดาว"
        },
        "badge": {
            "en": "Starry Vibe",
            "th": "ลายท้องฟ้า"
        },
        "price": "390",
        "image": "assets/moon.jpg",
        "description": {
            "en": "Elegant crescent moon and starry night sky themed five-toe grip socks. A mystical dark background with bright yellow moon accents.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเสี้ยวพระจันทร์สีทองสุกสว่างและหมู่ดาวพาสเทล เพิ่มระดับความหรูหรา ลึกลับและดูชิคเป็นพิเศษ ยึดเกาะมั่นคง"
        },
        "features": {
            "en": [
                "Crescent moon and stars dream print",
                "High breathing sweat absorbing fibers",
                "Silicon non slip gel sole cover"
            ],
            "th": [
                "ลายพิมพ์เสี้ยวจันทร์เสี้ยวทองและดวงดาวสุดชิค",
                "ผลิตจากเส้นใยฝ้าย Combed ซับเหงื่อแห้งไวหมดกลิ่นอับ",
                "เจลซิลิโคนกันลื่นหนาพิเศษเกาะเครื่องเล่นเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "airplane",
        "category": "grip",
        "title": {
            "en": "Airplane Grip Socks",
            "th": "Airplane Grip Socks"
        },
        "subtitle": {
            "en": "Playful Little Airplane Travel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเครื่องบินท่องโลกกว้าง"
        },
        "badge": {
            "en": "Traveler Vibe",
            "th": "ลายน่ารัก"
        },
        "price": "390",
        "image": "assets/airplane.jpg",
        "description": {
            "en": "Playful little airplane themed five-toe grip socks. Bright blue and white prints to fly through your pilates exercises with secure grip.",
            "th": "ถุงเท้าห้านิ้วลายมินิเครื่องบินลัดฟ้าพาสเทลน่ารักสดใส ให้ลุคนักเดินทางผู้เต็มเปี่ยมไปด้วยความฝัน ยึดเกาะกระชับเหนียวแน่นยอดเยี่ยม"
        },
        "features": {
            "en": [
                "Cute little travel airplane prints",
                "Soft double-yarn cotton cushion",
                "Non-slip eco friendly silicone gel"
            ],
            "th": [
                "ลายพิมพ์เครื่องบินและควันปุยเมฆน่ารักสดชื่น",
                "พื้นบุนุ่มซับน้ำหนักส้นเท้าถนอมข้อต่อกระดูก",
                "ซิลิโคนปลอดสารพิษยึดเกาะแน่นหนาเสถียรดีเลิศ"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "baby_blue",
        "category": "grip",
        "title": {
            "en": "Baby Blue Grip Socks",
            "th": "Baby Blue Grip Socks"
        },
        "subtitle": {
            "en": "Delicate Soft Sky Baby Blue Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีฟ้าเบบี้บลูอ่อนละมุน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "390",
        "image": "assets/baby_blue.jpg",
        "description": {
            "en": "Delicate solid baby blue sky themed five-toe grip socks. Dreamy pastel aesthetics with premium non-slip performance.",
            "th": "ถุงเท้ากันลื่นสีพื้นในเฉดสีฟ้าเบบี้บลูอ่อนโยน สดใสสไตล์พาสเทลเกาหลี ช่วยให้เท้าดูสว่างขาวและแมทช์ชุดง่าย ยึดเกาะเหนียวแน่น"
        },
        "features": {
            "en": [
                "Delicate soft sky blue solid tone",
                "Mesh cool air flow knit channels",
                "High density transparent non-slip print"
            ],
            "th": [
                "เฉดสีฟ้าพาสเทลเบบี้บลูอ่อนโยนน่ารักยอดฮิต",
                "ทอโปร่งหน้าเท้าเพื่อการระบายอากาศและระเหยเหงื่อ",
                "ซิลิโคนแผ่นเจลใสพิเศษเกาะแน่นเหนียวเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "baby_pink",
        "category": "grip",
        "title": {
            "en": "Baby Pink Grip Socks",
            "th": "Baby Pink Grip Socks"
        },
        "subtitle": {
            "en": "Sweet Soft Baby Blossom Pink",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีชมพูเบบี้พิงค์พาสเทลอ่อน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "390",
        "image": "assets/baby_pink.jpg",
        "description": {
            "en": "Delicate soft baby blossom pink solid five-toe grip socks. Ultimate sweet princess vibe with reliable non-slip safety.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีพื้นชมพูเบบี้พาสเทลอ่อนหวานละมุน ได้ลุคเจ้าหญิงพรีเมียม สวมใส่นุ่มสบายและยึดเกาะแน่นหนาหนึบเซฟตี้ที่สุด"
        },
        "features": {
            "en": [
                "Sweet soft baby pink solid color",
                "Comfort snug elastic arch support band",
                "Premium transparent non-slip gel sole"
            ],
            "th": [
                "สีชมพูเบบี้พาสเทลนม สุดหวานละมุนตาคลาสสิก",
                "แถบรัดอุ้งเท้ายืดหยุ่นพยุงทรงตัวลดความเมื่อยล้า",
                "ปุ่มซิลิโคนโปร่งแสงยึดเกาะแน่นและทนทานต่องานเครื่อง"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "blueberry_sock",
        "category": "grip",
        "title": {
            "en": "Blueberry Grip Socks",
            "th": "Blueberry Grip Socks"
        },
        "subtitle": {
            "en": "Deep Fruity Blueberry Violet Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีม่วงบลูเบอร์รี่สดใส"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "390",
        "image": "assets/blueberry_sock.jpg",
        "description": {
            "en": "Vibrant fruity blueberry deep violet five-toe grip socks. Add a splash of elegant deep purple to your Pilates collections.",
            "th": "ถุงเท้ากันลื่นแยกห้านิ้วสีม่วงบลูเบอร์รี่เข้มขรึม เรียบหรู สะกดทุกสายตา เพิ่มออร่าในคลาสฝึกซ้อม ยึดเกาะแน่นทนทานมั่นคง"
        },
        "features": {
            "en": [
                "Deep elegant blueberry purple shade",
                "Highly breathing moisture absorbing yarn",
                "Transparent high-density silicon gel grip"
            ],
            "th": [
                "เฉดสีม่วงบลูเบอร์รี่ลึก ดูโดดเด่นมีรสนิยมเรียบหรู",
                "เส้นใยระบายอากาศชั้นยอดป้องกันเหงื่อแห้งรวดเร็ว",
                "ปุ่มซิลิโคนหนาเหนียวเป็นพิเศษเซฟการลื่นไถล"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "blurple",
        "category": "grip",
        "title": {
            "en": "Blurple Grip Socks",
            "th": "Blurple Grip Socks"
        },
        "subtitle": {
            "en": "Chic Blurple Blue-Purple Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินอมม่วงบลอเพิลสุดชิค"
        },
        "badge": {
            "en": "Modern Vibe",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/blurple.jpg",
        "description": {
            "en": "Chic solid blurple (blue-purple blend) five-toe grip socks. Highly modern dynamic color blocks to pop your activewear outfit.",
            "th": "ถุงเท้ากันลื่นสีพื้นสีน้ำเงินเหลือบม่วงบลอเพิล โดดเด่น ทันสมัย ชิคสไตล์นีออนเบาๆ เสริมลุคสุดชอปและสปอร์ตเต็มร้อย"
        },
        "features": {
            "en": [
                "Modern chic blue-purple blend color",
                "Flexible separate toe pocket pocket",
                "Heavy density silicone anti-slip prints"
            ],
            "th": [
                "เฉดสีบลอเพิลสลับสี ชิคทันสมัยมีระดับสไตล์โมเดิร์น",
                "ทอแยกส้นและแยกนิ้วอิสระ สวมใส่ง่ายไม่ระคายเคือง",
                "ซิลิโคนเต็มแผ่นฝ่าเท้าป้องกันลื่นล้มไถลในทุกสตูดิโอ"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "cartoon",
        "category": "grip",
        "title": {
            "en": "Cartoon Grip Socks",
            "th": "Cartoon Grip Socks"
        },
        "subtitle": {
            "en": "Adorable Cartoon Character Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายการ์ตูนคิ้วท์เกาหลี"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "420",
        "image": "assets/cartoon.jpg",
        "description": {
            "en": "Playful and sweet colorful cartoon print five-toe grip socks. Designed for practitioners who love cheerful, fun studio looks.",
            "th": "ถุงเท้าห้านิ้วลวดลายตัวการ์ตูนพาสเทลน่ารักคิ้วท์สตรีท เพิ่มความสดใสและรอยยิ้มในการออกกำลังกาย ยึดเกาะเครื่องได้อย่างมั่นใจ"
        },
        "features": {
            "en": [
                "Cheerful pastel cartoon print theme",
                "Cushioned double yarn heel protection",
                "Safe industrial grade non-slip gel"
            ],
            "th": [
                "ลวดลายการ์ตูนสลักสีสันพาสเทลโดดเด่นสะดุดตา",
                "บุนุ่มลดการกระแทกและเสียดสีรอบส้นเท้าอย่างมีประสิทธิภาพ",
                "ซิลิโคนเจลกันลื่นแน่นกระชับสูง ปลอดภัยเป็นมิตรต่อผิว"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "fluffy",
        "category": "grip",
        "title": {
            "en": "Fluffy Grip Socks",
            "th": "Fluffy Grip Socks"
        },
        "subtitle": {
            "en": "Cloud Soft Cozy Fluffy Pastel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีฟลัฟฟี่คลาวด์พาสเทล"
        },
        "badge": {
            "en": "Soft Comfort",
            "th": "สียอดฮิต"
        },
        "price": "390",
        "image": "assets/fluffy.jpg",
        "description": {
            "en": "Extremely soft cloudy fluffy styled five-toe grip socks. Mixed gentle pastel hues for top comfort and slip-free performance.",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีทอผสมพาสเทลฟลัฟฟี่นุ่มเหมือนปุยเมฆ สวมใส่นุ่มสบายเท้า โอบกระชับเสถียรและกันลื่นเกราะหนึบ"
        },
        "features": {
            "en": [
                "Delicate cloud soft fluffy pastel tones",
                "Reinforced heel buffer cushion splay",
                "Dense anti skid silicon print covering sole"
            ],
            "th": [
                "เฉดสีทอพาสเทลผสมผสาน อ่อนโยน นุ่มสบายตา",
                "เสริมความหนาพิเศษทอซับรองรับการเดินกระแทกส้น",
                "ซิลิโคนโปร่งแสงยึดเกาะแน่นเหนียวตลอดการฝึกฝน"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "foggy",
        "category": "grip",
        "title": {
            "en": "Foggy Grip Socks",
            "th": "Foggy Grip Socks"
        },
        "subtitle": {
            "en": "Calming Pastel Foggy Grey Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาหมอกหมองละมุน"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "390",
        "image": "assets/foggy.jpg",
        "description": {
            "en": "Calming solid foggy grey five-toe grip socks. Earthy grounded tone that gives a clean, peaceful professional aesthetic.",
            "th": "ถุงเท้ากันลื่นสีเทาหมอกหมองเอิร์ธโทน สุภาพ เรียบง่าย คลาสสิก เหมาะสำหรับผู้ชื่นชอบลุคคุมโทนพรีเมียม สวมสบายทนทานดีเลิศ"
        },
        "features": {
            "en": [
                "Calming solid foggy grey tone",
                "Snug supportive instep compression band",
                "Silicon non slip gel across sole cover"
            ],
            "th": [
                "เฉดสีเทาหมอกหม่นสุภาพ สวยงามเข้าได้ง่ายทุกคอลเลกชัน",
                "แถบรัดกลางเท้าเพิ่มความมั่นคงล็อกถุงเท้าไม่ให้เลื่อนหมุน",
                "เจลซิลิโคนกันลื่นหนาพิเศษเกาะเครื่องเล่นเสถียร"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "navy_black",
        "category": "grip",
        "title": {
            "en": "Navy Black Grip Socks",
            "th": "Navy Black Grip Socks"
        },
        "subtitle": {
            "en": "Contrast Navy Ankle Black Toes Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินเนวี่ตัดดำสปอร์ต"
        },
        "badge": {
            "en": "Sporty Classic",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/navy_black.jpg",
        "description": {
            "en": "Chic sporty contrast navy blue and black splay five-toe grip socks. Deep, professional look with ultimate traction safety.",
            "th": "ถุงเท้ากันลื่นสีทูโทนสลับน้ำเงินเนวี่กรมท่าเข้มและปลายเท้าดำ สไตล์คลาสสิกสปอร์ต ดูสมาร์ทเรียบร้อย ยึดเกาะแน่นระดับพรีเมียม"
        },
        "features": {
            "en": [
                "Snug sporty contrast navy & black",
                "Premium stretch sweat absorbing combed cotton",
                "High-density silicone anti slip gel prints"
            ],
            "th": [
                "เฉดสีน้ำเงินสลับปลายเท้าดำสุดเท่หรูหรามินิมอล",
                "ผ้าฝ้าย Combed ซับเหงื่อระบายความชื้นได้อย่างดีเยี่ยม",
                "เจลกันลื่นเต็มส้นและนิ้วเกาะเครื่อง Reformer นิ่งสงบ"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "pencil",
        "category": "grip",
        "title": {
            "en": "Pencil Grip Socks",
            "th": "Pencil Grip Socks"
        },
        "subtitle": {
            "en": "Chic Pencil Sketch Stripes Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเส้นดินสอสุดชิค"
        },
        "badge": {
            "en": "Artistic",
            "th": "ดีไซน์เก๋"
        },
        "price": "390",
        "image": "assets/pencil.jpg",
        "description": {
            "en": "Artistic pencil sketch thin striped five-toe grip socks. Modern minimalist layout to show style and performance in studio classes.",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายเส้นดินสอสีทอยูนิคสไตล์ลายทางเก๋ๆ เรียบง่ายแต่เต็มเปี่ยมไปด้วยศิลปะ สวมใส่กระชับยึดเกาะมั่นคงยิ่ง"
        },
        "features": {
            "en": [
                "Artistic pencil line thin stripes",
                "Snug comfortable seamless toe box",
                "Strong transparent non-slip gel prints"
            ],
            "th": [
                "ลวดลายเส้นลายทางสุดชิคมินิมอล เรียบร้อยสวยหรู",
                "ช่องแยกนิ้วเท้าสวมใส่สบายไร้รอยตะเข็บเบียดคัน",
                "เจลซิลิโคนแผ่นใสเกรดสูงกันลื่นมั่นใจเต็มที่"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "woody_n",
        "category": "grip",
        "title": {
            "en": "Woody N Grip Socks",
            "th": "Woody N Grip Socks"
        },
        "subtitle": {
            "en": "Warm Woody Natural Earthy Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเอิร์ธโทนลายน้ำตาลธรรมชาติ"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "สียอดนิยม"
        },
        "price": "390",
        "image": "assets/woody_n.jpeg",
        "description": {
            "en": "Cozy warm natural woody earthy brown five-toe grip socks. Gives a calming organic warmth feel with superior stability.",
            "th": "ถุงเท้ากันลื่นห้านิ้วเฉดสีน้ำตาลธรรมชาติเอิร์ธโทนละมุน อบอุ่น ผ่อนคลาย เรียบง่ายน่ารักสไตล์ธรรมชาติ ยึดเกาะมั่นคงเสถียร"
        },
        "features": {
            "en": [
                "Natural warm woody brown earthy solid",
                "Mesh air breath cooling instep panels",
                "Durable silicon anti-skid print sole cover"
            ],
            "th": [
                "สีน้ำตาลธรรมชาติเอิร์ธโทนสุดนุ่มละมุนตาคลาสสิก",
                "ตาข่ายโปร่งระบายเหงื่อกลิ่นอับบริเวณหลังเท้าได้ไว",
                "ปุ่มซิลิโคนเจลแบบใสยึดเกาะเครื่องได้อย่างมั่นใจสูงสุด"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "oak",
        "category": "grip",
        "title": {
            "en": "Oak Grip Socks",
            "th": "Oak Grip Socks"
        },
        "subtitle": {
            "en": "Deep Earthy Oak Brown Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำตาลโอ๊คเข้มพรีเมียม"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "สีแนะนำ"
        },
        "price": "390",
        "image": "assets/oak.jpg",
        "description": {
            "en": "Classic deep solid oak brown five-toe grip socks. Grounded natural tone designed to provide top performance stability.",
            "th": "ถุงเท้ากันลื่นสีพื้นสีน้ำตาลไม้โอ๊คเข้มพรีเมียม ดูหรูหรา อบอุ่น ผ่อนคลาย คลุมโทนเรียบร้อย ยึดเกาะเครื่องเสถียรและเกาะเครื่องหนึบแน่นที่สุด"
        },
        "features": {
            "en": [
                "Deep classic solid oak brown tone",
                "Snug arch stability compression band splay",
                "High-density transparent non-slip gel print"
            ],
            "th": [
                "เฉดสีน้ำตาลโอ๊คเข้มลายไม้สุภาพ หรูหราคลาสสิก",
                "ยางรัดพยุงอุ้งเท้าประคองป้องกันหน้าเท้าหมุนและรั้ง",
                "ซิลิโคนแผ่นเจลกันลื่นเกรดเครื่องยึดมั่นใจสูงสุด"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
    },
    {
        "id": "daily_sock",
        "category": "daily",
        "title": {
            "en": "Daily Five-Toe Socks",
            "th": "Daily Five-Toe Socks"
        },
        "subtitle": {
            "en": "Cozy Breathable Non-Slip Daily Socks",
            "th": "ถุงเท้าห้านิ้วสวมสบายสำหรับสวมใส่ทุกวัน (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Everyday Comfort",
            "th": "สวมใส่ลำลอง"
        },
        "price": "290",
        "image": "assets/daily_sock.jpg",
        "description": {
            "en": "Soft, cozy, and highly breathable five-toe socks without silicon sole grip. Perfect everyday choice for shoes, casual walks, and sweat absorption.",
            "th": "ถุงเท้าแฟชั่นสวมใส่ห้านิ้วแบบไม่มีกันลื่น ทรงข้อสั้น นุ่มสบายเท้าแห้งสบายตลอดวัน เหมาะสำหรับใส่เดินนอกบ้านในรองเท้าผ้าใบ ช่วยลดกลิ่นอับชื้นและนิ้วเท้าเบียด"
        },
        "features": {
            "en": [
                "No silicon print for outdoor shoes comfort",
                "Ultra soft premium combed cotton threads",
                "High moisture wicking anti friction splay"
            ],
            "th": [
                "แบบไม่มีซิลิโคน สวมใส่ในรองเท้าเดินนอกบ้านได้นุ่มนวล",
                "ผลิตจากผ้าคอตตอนเนื้อนุ่มพิเศษทนทานซักล้างง่าย",
                "แยกสิบนิ้วระเหยเหงื่อและอากาศแห้งไว ป้องกันตุ่มเสียดสี"
            ]
        },
        "shopeeUrl": "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe"
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
     "prod-price","prod-shopeeUrl","prod-badgeTh","prod-badgeEn","prod-descTh","prod-descEn",
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
    document.getElementById("prod-shopeeUrl").value   = p.shopeeUrl || "";
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
        shopeeUrl: document.getElementById("prod-shopeeUrl").value.trim(),
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
