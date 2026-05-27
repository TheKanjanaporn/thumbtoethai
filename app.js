// ==========================================
// CMS DATA LOADER
// โหลดข้อมูลจาก Admin Panel (localStorage)
// ==========================================
function isDuitData(data) {
    if (!data || !data.products) return false;
    const duitIds = ['water_pot', 'wave_pot', 'standing_board', 'nonslip_mat', 'silicone_mat', 'soft_brush', 'table_plus', 'peanut_board', 'poopoo_cube', 'poopoo_2way', 'poopoo_long', 'run_run_mat', 'dry_mat', 'mouse_bot', 'peek_a_poo', 'floating_bath_tub'];
    return data.products.some(p => p && (duitIds.includes(p.id) || p.category === 'furniture' || p.category === 'appliances'));
}

async function loadCMSSiteData() {
    try {
        const res = await fetch(`/api/data?_t=${Date.now()}`);
        _cmsData = await res.json();
        if (isDuitData(_cmsData)) {
            console.warn("Detected DUIT data in API data. Resetting...");
            _cmsData = null;
        }
    } catch (e) {
        console.warn("Failed to fetch from /api/data, using localStorage:", e);
    }
    
    // If KV data is empty, null or undefined, try to fallback to localStorage
    if (!_cmsData || Object.keys(_cmsData).length === 0) {
        const saved = localStorage.getItem("thumbtoe_cms_data");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (isDuitData(parsed)) {
                    console.warn("Detected DUIT data in localStorage. Resetting...");
                    localStorage.removeItem("thumbtoe_cms_data");
                } else {
                    _cmsData = parsed;
                    console.log("Loaded fallback data from localStorage");
                }
            } catch (err) {
                console.error("Failed to parse localStorage data", err);
            }
        }
    }
    
    // Fall back to default data.json if no CMS data exists anywhere
    if (!_cmsData || Object.keys(_cmsData).length === 0) {
        try {
            const res = await fetch('/data.json');
            _cmsData = await res.json();
        } catch (err) {
            console.warn("Failed to load default data.json, using hardcoded fallback", err);
        }
    }
    
    if (_cmsData && _cmsData.products && _cmsData.products.length > 0) {
        PRODUCTS = _cmsData.products;
    }
}

// ข้อมูลจาก Cat Expo 2025 - Staff Manual
// 24 สินค้าทั้งหมด
// ==========================================
const PRODUCTS_DEFAULT = [
    {
        "id": "daisy",
        "category": "grip",
        "title": {
            "en": "Daisy",
            "th": "Daisy"
        },
        "subtitle": {
            "en": "Signature Flower Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเดซี่สีสันสดใส"
        },
        "badge": {
            "en": "Best Seller",
            "th": "ขายดี"
        },
        "price": "720",
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
            "en": "Bichon",
            "th": "Bichon"
        },
        "subtitle": {
            "en": "Cute Bichon Dog Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องหมาบิชองสุดน่ารัก"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "720",
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
            "en": "Bubble Bubble",
            "th": "Bubble Bubble"
        },
        "subtitle": {
            "en": "Vibrant Bubble Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายจุดฟองสบู่สดใส"
        },
        "badge": {
            "en": "New Arrival",
            "th": "มาใหม่"
        },
        "price": "720",
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
            "en": "Cosmos",
            "th": "Cosmos"
        },
        "subtitle": {
            "en": "Elegant Cosmos Space Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายอวกาศคอสมอส"
        },
        "badge": {
            "en": "Elegant",
            "th": "หรูหรา"
        },
        "price": "720",
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
            "en": "Emerald",
            "th": "Emerald"
        },
        "subtitle": {
            "en": "Rich Emerald Green Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมรกตพรีเมียม"
        },
        "badge": {
            "en": "Premium Solid",
            "th": "สีแนะนำ"
        },
        "price": "720",
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
            "en": "Flower",
            "th": "Flower"
        },
        "subtitle": {
            "en": "Sweet Blooming Flower Pattern",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายดอกไม้เบ่งบาน"
        },
        "badge": {
            "en": "Popular",
            "th": "ยอดนิยม"
        },
        "price": "720",
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
            "en": "Galaxy",
            "th": "Galaxy"
        },
        "subtitle": {
            "en": "Mystical Dusty Nebula Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายกาแล็กซีสีพาสเทลหม่น"
        },
        "badge": {
            "en": "Hot Item",
            "th": "ยอดฮิต"
        },
        "price": "720",
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
            "en": "Lemon",
            "th": "Lemon"
        },
        "subtitle": {
            "en": "Sunny Day Lemon Yellow Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเหลืองเลมอนสดใส"
        },
        "badge": {
            "en": "Fresh Aesthetic",
            "th": "สีสดใส"
        },
        "price": "840",
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
            "en": "Marble",
            "th": "Marble"
        },
        "subtitle": {
            "en": "Modern Abstract Marble Textures",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหินอ่อนสุดชิค"
        },
        "badge": {
            "en": "Modern Look",
            "th": "ลุคโมเดิร์น"
        },
        "price": "840",
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
            "en": "Woody",
            "th": "Woody"
        },
        "subtitle": {
            "en": "Warm Earthy Woody Brown Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำตาลลายไม้ธรรมชาติ"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "840",
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
            "en": "Polo Daily",
            "th": "Polo Daily"
        },
        "subtitle": {
            "en": "Sporty Ribbed Non-Grip Socks",
            "th": "ถุงเท้าแฟชั่นสตรีทลุคสไตล์โปโล (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Daily Sporty",
            "th": "ใส่ลำลอง"
        },
        "price": "720",
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
            "en": "Peach Lavender",
            "th": "Peach Lavender"
        },
        "subtitle": {
            "en": "Sweet Two-Tone Non-Grip Socks",
            "th": "ถุงเท้าห้านิ้วทูโทนสีพีช-ลาเวนเดอร์ (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Cozy Home",
            "th": "หวานละมุน"
        },
        "price": "720",
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
            "en": "Daisy Open Toe",
            "th": "Daisy Open Toe"
        },
        "subtitle": {
            "en": "Signature Open-Toe Flower Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าลายเดซี่สีสันสดใส"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "840",
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
            "en": "Earth White",
            "th": "Earth White"
        },
        "subtitle": {
            "en": "Minimalist Classic Off-White Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีขาวเอิร์ธโทนสุดคลาสสิก"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "840",
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
            "en": "Earth White Open Toe",
            "th": "Earth White Open Toe"
        },
        "subtitle": {
            "en": "Barefoot Feel Off-White Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีขาวเอิร์ธโทน"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "840",
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
            "en": "Marble Open Toe",
            "th": "Marble Open Toe"
        },
        "subtitle": {
            "en": "Modern Marble Open-Toe Design",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าลายหินอ่อนสุดชิค"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "840",
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
            "en": "Woody Open Toe",
            "th": "Woody Open Toe"
        },
        "subtitle": {
            "en": "Warm Earthy Brown Open-Toe Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีน้ำตาลลายไม้ธรรมชาติ"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "840",
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
            "en": "Pink",
            "th": "Pink"
        },
        "subtitle": {
            "en": "Sweet Dreamy Pink Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีชมพูหวานสดใส"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "840",
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
            "en": "Mud",
            "th": "Mud"
        },
        "subtitle": {
            "en": "Organic Deep Mud-Grey Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาโคลนธรรมชาติ"
        },
        "badge": {
            "en": "Earthy",
            "th": "สีธรรมชาติ"
        },
        "price": "720",
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
            "en": "Pink Panther",
            "th": "Pink Panther"
        },
        "subtitle": {
            "en": "Vibrant Panther Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเสือชมพูพาสเทลชิค"
        },
        "badge": {
            "en": "Playful",
            "th": "สายแฟชั่น"
        },
        "price": "720",
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
            "en": "Silver",
            "th": "Silver"
        },
        "subtitle": {
            "en": "Elegant Silver-Grey Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาเงินพรีเมียม"
        },
        "badge": {
            "en": "Classic",
            "th": "เรียบง่าย"
        },
        "price": "840",
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
            "en": "Green Plus",
            "th": "Green Plus"
        },
        "subtitle": {
            "en": "Vibrant Green Signature Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวสดใสรุ่นกรีนพลัส"
        },
        "badge": {
            "en": "New",
            "th": "ใหม่"
        },
        "price": "720",
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
            "en": "Knee High",
            "th": "Knee High"
        },
        "subtitle": {
            "en": "Elegant Over-the-Calf Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วแบบยาวถึงใต้เข่าสุดหรู"
        },
        "badge": {
            "en": "Knee High",
            "th": "ยาวใต้เข่า"
        },
        "price": "840",
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
            "en": "Frill",
            "th": "Frill"
        },
        "subtitle": {
            "en": "Sweet Ruffle Ankle Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วแต่งขอบระบายหวานละมุน"
        },
        "badge": {
            "en": "Sweet Ruffle",
            "th": "ขอบระบาย"
        },
        "price": "650",
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
            "en": "Sport",
            "th": "Sport"
        },
        "subtitle": {
            "en": "Athletic High-Performance Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสไตล์สปอร์ตข้อกลาง"
        },
        "badge": {
            "en": "Athletic",
            "th": "สปอร์ต"
        },
        "price": "720",
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
            "en": "Swan Princess",
            "th": "Swan Princess"
        },
        "subtitle": {
            "en": "Elegant Swan Ribbon Grip Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหงส์เจ้าหญิงสุดหรู"
        },
        "badge": {
            "en": "Elegant",
            "th": "หรูหรา"
        },
        "price": "840",
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
            "en": "Oat",
            "th": "Oat"
        },
        "subtitle": {
            "en": "Warm Minimalist Oat Beige Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีโอ๊ตเบจธรรมชาติ"
        },
        "badge": {
            "en": "Classic Solid",
            "th": "สีแนะนำ"
        },
        "price": "720",
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
            "en": "Oat Open Toe",
            "th": "Oat Open Toe"
        },
        "subtitle": {
            "en": "Barefoot Sensation Oat Socks",
            "th": "ถุงเท้ากันลื่นแบบเปิดนิ้วเท้าสีโอ๊ตเบจ"
        },
        "badge": {
            "en": "Open Toe",
            "th": "เปิดนิ้วเท้า"
        },
        "price": "840",
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
            "en": "Teddy",
            "th": "Teddy"
        },
        "subtitle": {
            "en": "Warm Cozy Teddy Bear Pattern Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องหมีเทดดี้แสนอบอุ่น"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "720",
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
            "en": "Purple",
            "th": "Purple"
        },
        "subtitle": {
            "en": "Sweet Lavender Purple Solid Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีม่วงหวานพรีเมียม"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "840",
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
            "en": "Lilac",
            "th": "Lilac"
        },
        "subtitle": {
            "en": "Delicate Pastel Lilac Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีไลแลคพาสเทลอ่อน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "840",
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
            "en": "Lime",
            "th": "Lime"
        },
        "subtitle": {
            "en": "Zesty Pastel Lime Green Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมะนาวสดใส"
        },
        "badge": {
            "en": "Fresh Dynamic",
            "th": "สีเปรี้ยวซ่า"
        },
        "price": "840",
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
            "en": "Cloudy",
            "th": "Cloudy"
        },
        "subtitle": {
            "en": "Soft Sky Cloudy White Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายก้อนเมฆนุ่มนวล"
        },
        "badge": {
            "en": "Fluffy Vibe",
            "th": "ลายก้อนเมฆ"
        },
        "price": "720",
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
            "en": "Cherry",
            "th": "Cherry"
        },
        "subtitle": {
            "en": "Sweet Sweet Red Cherry Pattern",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเชอร์รี่สีแดงสดใส"
        },
        "badge": {
            "en": "Sweet Cherry",
            "th": "ลายผลไม้"
        },
        "price": "720",
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
            "en": "Skyline",
            "th": "Skyline"
        },
        "subtitle": {
            "en": "Deep Blue Sky Horizon Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายขอบฟ้ายามเย็น"
        },
        "badge": {
            "en": "Mystic Sky",
            "th": "ลายท้องฟ้า"
        },
        "price": "720",
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
            "en": "Smoothie",
            "th": "Smoothie"
        },
        "subtitle": {
            "en": "Mixed Fruit Smoothie Pastel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีสมูทตี้ผลไม้พาสเทล"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีทูโทน"
        },
        "price": "720",
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
            "en": "Space",
            "th": "Space"
        },
        "subtitle": {
            "en": "Mystical Deep Space Galaxy Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายจักรวาลห้วงอวกาศ"
        },
        "badge": {
            "en": "Starry Night",
            "th": "หรูหราพิเศษ"
        },
        "price": "720",
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
            "en": "Oreo",
            "th": "Oreo"
        },
        "subtitle": {
            "en": "Black & White Classic Oreo Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายโอรีโอ้ขาวดำ"
        },
        "badge": {
            "en": "Contrast Look",
            "th": "สีทูโทน"
        },
        "price": "720",
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
            "en": "Cream",
            "th": "Cream"
        },
        "subtitle": {
            "en": "Clean Delicate Cream Off-White",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีครีมนมเกาหลีพรีเมียม"
        },
        "badge": {
            "en": "Clean Soft",
            "th": "สียอดฮิต"
        },
        "price": "720",
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
            "en": "Burgundy",
            "th": "Burgundy"
        },
        "subtitle": {
            "en": "Deep Luxurious Burgundy Red",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีแดงเบอร์กันดีสุดหรู"
        },
        "badge": {
            "en": "Luxurious",
            "th": "สีแนะนำ"
        },
        "price": "840",
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
            "en": "Dark Navy",
            "th": "Dark Navy"
        },
        "subtitle": {
            "en": "Professional Solid Dark Navy",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินกรมท่าเข้ม"
        },
        "badge": {
            "en": "Athletic",
            "th": "สปอร์ตเรียบหรู"
        },
        "price": "840",
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
            "en": "Olive Green",
            "th": "Olive Green"
        },
        "subtitle": {
            "en": "Deep Earthy Olive Green Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเขียวมะกอกธรรมชาติ"
        },
        "badge": {
            "en": "Earthy",
            "th": "เอิร์ธโทน"
        },
        "price": "350",
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
            "en": "Macaron",
            "th": "Macaron"
        },
        "subtitle": {
            "en": "Sweet Colorful Macaron Pastels",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีหวานพาสเทลมาการอง"
        },
        "badge": {
            "en": "Sweet Dream",
            "th": "หวานละมุน"
        },
        "price": "720",
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
            "en": "Fried Egg",
            "th": "Fried Egg"
        },
        "subtitle": {
            "en": "Cute Sunny Side Up Fried Egg Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายน้องไข่ดาวสุดคิ้วท์"
        },
        "badge": {
            "en": "Playful",
            "th": "สายแฟชั่นน่ารัก"
        },
        "price": "720",
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
            "en": "Love",
            "th": "Love"
        },
        "subtitle": {
            "en": "Sweet Scattered Hearts Love Theme",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายหัวใจสื่อรักพาสเทล"
        },
        "badge": {
            "en": "Popular",
            "th": "ลายน่ารัก"
        },
        "price": "840",
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
            "en": "Lucky",
            "th": "Lucky"
        },
        "subtitle": {
            "en": "Green Four-Leaf Clover Lucky Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายใบโคลเวอร์นำโชค"
        },
        "badge": {
            "en": "Lucky Vibe",
            "th": "มาใหม่"
        },
        "price": "720",
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
            "en": "Moon",
            "th": "Moon"
        },
        "subtitle": {
            "en": "Elegant Crescent Moon and Star Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายดวงจันทร์และดวงดาว"
        },
        "badge": {
            "en": "Starry Vibe",
            "th": "ลายท้องฟ้า"
        },
        "price": "720",
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
            "en": "Airplane",
            "th": "Airplane"
        },
        "subtitle": {
            "en": "Playful Little Airplane Travel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเครื่องบินท่องโลกกว้าง"
        },
        "badge": {
            "en": "Traveler Vibe",
            "th": "ลายน่ารัก"
        },
        "price": "840",
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
            "en": "Baby Blue",
            "th": "Baby Blue"
        },
        "subtitle": {
            "en": "Delicate Soft Sky Baby Blue Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีฟ้าเบบี้บลูอ่อนละมุน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "350",
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
            "en": "Baby Pink",
            "th": "Baby Pink"
        },
        "subtitle": {
            "en": "Sweet Soft Baby Blossom Pink",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีชมพูเบบี้พิงค์พาสเทลอ่อน"
        },
        "badge": {
            "en": "Sweet Pastels",
            "th": "สีพาสเทล"
        },
        "price": "350",
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
            "en": "Blueberry",
            "th": "Blueberry"
        },
        "subtitle": {
            "en": "Deep Fruity Blueberry Violet Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีม่วงบลูเบอร์รี่สดใส"
        },
        "badge": {
            "en": "Vibrant",
            "th": "สีสดใส"
        },
        "price": "720",
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
            "en": "Blurple",
            "th": "Blurple"
        },
        "subtitle": {
            "en": "Chic Blurple Blue-Purple Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินอมม่วงบลอเพิลสุดชิค"
        },
        "badge": {
            "en": "Modern Vibe",
            "th": "สีแนะนำ"
        },
        "price": "720",
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
            "en": "Cartoon",
            "th": "Cartoon"
        },
        "subtitle": {
            "en": "Adorable Cartoon Character Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลวดลายการ์ตูนคิ้วท์เกาหลี"
        },
        "badge": {
            "en": "Cute Choice",
            "th": "ลายน่ารัก"
        },
        "price": "720",
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
            "en": "Fluffy",
            "th": "Fluffy"
        },
        "subtitle": {
            "en": "Cloud Soft Cozy Fluffy Pastel Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีฟลัฟฟี่คลาวด์พาสเทล"
        },
        "badge": {
            "en": "Soft Comfort",
            "th": "สียอดฮิต"
        },
        "price": "720",
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
            "en": "Foggy",
            "th": "Foggy"
        },
        "subtitle": {
            "en": "Calming Pastel Foggy Grey Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเทาหมอกหมองละมุน"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "เอิร์ธโทน"
        },
        "price": "720",
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
            "en": "Navy Black",
            "th": "Navy Black"
        },
        "subtitle": {
            "en": "Contrast Navy Ankle Black Toes Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำเงินเนวี่ตัดดำสปอร์ต"
        },
        "badge": {
            "en": "Sporty Classic",
            "th": "สีแนะนำ"
        },
        "price": "350",
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
            "en": "Pencil",
            "th": "Pencil"
        },
        "subtitle": {
            "en": "Chic Pencil Sketch Stripes Socks",
            "th": "ถุงเท้ากันลื่นห้านิ้วลายเส้นดินสอสุดชิค"
        },
        "badge": {
            "en": "Artistic",
            "th": "ดีไซน์เก๋"
        },
        "price": "840",
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
            "en": "Woody N",
            "th": "Woody N"
        },
        "subtitle": {
            "en": "Warm Woody Natural Earthy Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีเอิร์ธโทนลายน้ำตาลธรรมชาติ"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "สียอดนิยม"
        },
        "price": "720",
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
            "en": "Oak",
            "th": "Oak"
        },
        "subtitle": {
            "en": "Deep Earthy Oak Brown Solid",
            "th": "ถุงเท้ากันลื่นห้านิ้วสีน้ำตาลโอ๊คเข้มพรีเมียม"
        },
        "badge": {
            "en": "Earthy Tones",
            "th": "สีแนะนำ"
        },
        "price": "840",
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
            "en": "Daily Five-Toe",
            "th": "Daily Five-Toe"
        },
        "subtitle": {
            "en": "Cozy Breathable Non-Slip Daily Socks",
            "th": "ถุงเท้าห้านิ้วสวมสบายสำหรับสวมใส่ทุกวัน (ไม่มีกันลื่น)"
        },
        "badge": {
            "en": "Everyday Comfort",
            "th": "สวมใส่ลำลอง"
        },
        "price": "350",
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


const CATEGORIES_DEFAULT = [
    { id: "grip", name: { th: "ถุงเท้ากันลื่น", en: "Grip Socks" } },
    { id: "daily", name: { th: "ถุงเท้าใส่ทุกวัน", en: "Daily Socks" } },
    { id: "accessories", name: { th: "อุปกรณ์เสริม", en: "Accessories" } }
];

// ==========================================
// ACTIVE DATA (CMS override or defaults)
// ==========================================
let _cmsData = null;
let PRODUCTS = [...PRODUCTS_DEFAULT];

// ==========================================
// STATE VARIABLES
// ==========================================
let currentCategory = "all";
let searchQuery = "";
let currentSlide = 0;
let slideInterval;
let currentLanguage = localStorage.getItem("thumbtoe_lang") || "th";

// ==========================================
// CORE INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    // Load CMS Data first
    await loadCMSSiteData();

    // Apply CMS overrides to static HTML elements
    applyCMSOverrides();

    // Apply saved language on load
    applyLanguage();

    // Load products
    renderProducts();

    // Set up Hero Slider (render from CMS or HTML)
    initSlider();

    // Check for ?product=id in URL for QR code scanning
    const urlParams = new URLSearchParams(window.location.search);
    const productIdParam = urlParams.get('product');
    if (productIdParam) {
        setTimeout(() => {
            openModal(productIdParam);
        }, 100);
    }

    // Setup navigation clicks to close menu on mobile
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const navLinks = document.getElementById("navLinks");
            if (navLinks.classList.contains("open")) {
                toggleMenu();
            }
        });
    });

    // Check if user already claimed a coupon in this session
    checkExistingMembership();
});

// ==========================================
// CMS OVERRIDES — apply to live page
// ==========================================
function applyCMSOverrides() {
    if (!_cmsData) {
        renderCategoryTabs(CATEGORIES_DEFAULT);
        return;
    }

    // --- Hero Slider ---
    if (_cmsData.slides && _cmsData.slides.length > 0) {
        renderCMSSlider(_cmsData.slides);
    }

    // --- Categories ---
    const activeCats = (_cmsData.categories && _cmsData.categories.length > 0) 
        ? _cmsData.categories 
        : CATEGORIES_DEFAULT;
    renderCategoryTabs(activeCats);

    // --- Event Section ---
    if (_cmsData.event) {
        applyEventCMS(_cmsData.event);
    }

    // --- Store / Footer ---
    if (_cmsData.store) {
        applyStoreCMS(_cmsData.store);
    }

    // --- Staff PIN override ---
    if (_cmsData.settings && _cmsData.settings.staffPin) {
        window.__staffPin = _cmsData.settings.staffPin;
    }
}

function renderCategoryTabs(categories) {
    const tabsContainer = document.getElementById("categoryTabs");
    if (!tabsContainer) return;
    
    const allTab = tabsContainer.querySelector("[data-category='all']");
    tabsContainer.innerHTML = "";
    if (allTab) tabsContainer.appendChild(allTab);

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "tab-btn" + (currentCategory === cat.id ? " active" : "");
        btn.setAttribute("onclick", `filterCategory('${escHTML(cat.id)}')`);
        btn.setAttribute("data-category", escHTML(cat.id));
        btn.setAttribute("data-en", escHTML(cat.name.en));
        btn.setAttribute("data-th", escHTML(cat.name.th));
        btn.textContent = currentLanguage === "th" ? cat.name.th : cat.name.en;
        tabsContainer.appendChild(btn);
    });
}

function renderCMSSlider(slides) {
    const container = document.getElementById("slidesContainer");
    if (!container) return;
    container.innerHTML = "";

    slides.forEach((slide, idx) => {
        const div = document.createElement("div");
        div.className = "slide" + (idx === 0 ? " active" : "");
        div.innerHTML = `
            <div class="slide-image" style="background-image: linear-gradient(rgba(26,26,46,0.15), rgba(26,26,46,0.35)), url('${slide.image}');"></div>
            <div class="slide-content">
                <span class="slide-badge" data-en="${escHTMLAttr(slide.badgeEn)}" data-th="${escHTMLAttr(slide.badgeTh)}">${escHTML(slide.badgeTh)}</span>
                <h2 data-en="${escHTMLAttr(slide.titleEn)}" data-th="${escHTMLAttr(slide.titleTh)}">${escHTML(slide.titleTh)}</h2>
                <p data-en="${escHTMLAttr(slide.descEn)}" data-th="${escHTMLAttr(slide.descTh)}">${escHTML(slide.descTh)}</p>
                <a href="#shop" class="btn-outline-white" onclick="filterCategory('${slide.btnCategory}');"
                    data-en="${escHTMLAttr(slide.btnEn)}" data-th="${escHTMLAttr(slide.btnTh)}">${escHTML(slide.btnTh)}</a>
            </div>`;
        container.appendChild(div);
    });
}

function applyEventCMS(ev) {
    const lang = currentLanguage;
    // Title
    const h2 = document.querySelector("#event h2[data-en]");
    if (h2) { h2.setAttribute("data-en", ev.titleEn || ""); h2.setAttribute("data-th", ev.titleTh || ""); }
    // Description
    const desc = document.querySelector("#event p[data-en]");
    if (desc) { desc.setAttribute("data-en", ev.descEn || ""); desc.setAttribute("data-th", ev.descTh || ""); }
    // Perks
    const perksContainer = document.querySelector(".event-perks");
    if (perksContainer && ev.perks && ev.perks.length > 0) {
        perksContainer.innerHTML = ev.perks.map(p =>
            `<div class="perk"><i class="fa-solid fa-circle-check"></i> <span data-en="${escHTMLAttr(p.en)}" data-th="${escHTMLAttr(p.th)}">${escHTML(p.th)}</span></div>`
        ).join("");
    }
    // QR Code
    if (ev.lineUrl) {
        const qrImg = document.querySelector(".qr-placeholder img");
        if (qrImg) qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(ev.lineUrl)}`;
        document.querySelectorAll(`a[href="https://line.me/R/ti/p/@thumbtoe_th"]`).forEach(el => el.href = ev.lineUrl);
    }
    // Coupon form title (%)
    const claimTitle = document.querySelector("#couponForm h3[data-en]");
    if (claimTitle && ev.discount) {
        const pct = ev.discount + "%";
        claimTitle.setAttribute("data-en", `Claim Your ${pct} Discount`);
        claimTitle.setAttribute("data-th", `รับคูปองส่วนลด ${pct}`);
    }
}

function applyStoreCMS(store) {
    // Address
    const addrEl = document.querySelector(".footer-contact p [data-en]");
    if (addrEl) { addrEl.setAttribute("data-en", store.addressEn || ""); addrEl.setAttribute("data-th", store.addressTh || ""); }
    // Email
    const emailPs = document.querySelectorAll(".footer-contact p");
    emailPs.forEach(p => {
        if (p.innerHTML.includes("fa-envelope") && store.email) p.innerHTML = `<i class="fa-solid fa-envelope"></i> ${escHTML(store.email)}`;
        if (p.innerHTML.includes("fa-phone") && store.phone) p.innerHTML = `<i class="fa-solid fa-phone"></i> ${escHTML(store.phone)}`;
        if (p.innerHTML.includes("fa-brands fa-line") && store.lineId) p.innerHTML = `<i class="fa-brands fa-line"></i> LINE: ${escHTML(store.lineId)}`;
    });
    // Social links
    const socialLinks = document.querySelectorAll(".social-links .social-icon");
    if (socialLinks[0] && store.lineUrl) socialLinks[0].href = store.lineUrl;
    if (socialLinks[1] && store.fbUrl)   socialLinks[1].href = store.fbUrl;
    if (socialLinks[2] && store.igUrl)   socialLinks[2].href = store.igUrl;
    if (socialLinks[3] && store.globalUrl) socialLinks[3].href = store.globalUrl;
    // Thumb Toe Global link
    document.querySelectorAll(`a[href="https://thumbtoe.shop/"]`).forEach(el => { if (store.globalUrl) el.href = store.globalUrl; });
    // About brand description
    const aboutLead = document.querySelector(".about-lead");
    if (aboutLead && (store.aboutEn || store.aboutTh)) {
        if (store.aboutEn) aboutLead.setAttribute("data-en", store.aboutEn);
        if (store.aboutTh) aboutLead.setAttribute("data-th", store.aboutTh);
    }
}

function escHTMLAttr(str) {
    return String(str || "").replace(/[&<>"']/g, c =>
        ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":'&#39;' }[c])
    );
}

function escHTML(str) {
    return String(str || "").replace(/[&<>]/g, c =>
        ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[c])
    );
}

// ==========================================
// LANGUAGE TOGGLE SYSTEM
// ==========================================
function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "th" : "en";
    localStorage.setItem("thumbtoe_lang", currentLanguage);
    applyLanguage();
    renderProducts();
}

function applyLanguage() {
    const lang = currentLanguage;
    const langBtnText = document.getElementById("langBtnText");
    if (langBtnText) {
        langBtnText.textContent = lang === "th" ? "EN" : "TH";
    }

    // Update all static elements with data-en / data-th attributes
    document.querySelectorAll("[data-en]").forEach(el => {
        const enText = el.getAttribute("data-en");
        const thText = el.getAttribute("data-th");
        if (lang === "th" && thText) {
            el.innerHTML = thText;
        } else if (enText) {
            el.innerHTML = enText;
        }
    });

    // Update search input placeholder
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.placeholder = lang === "th" ? "ค้นหาสินค้า..." : "Search products...";
    }
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const menuBtn = document.getElementById("menuBtn");

    const isOpen = navLinks.classList.contains("open");

    if (isOpen) {
        navLinks.classList.remove("open");
        mobileMenuOverlay.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navLinks.classList.add("open");
        mobileMenuOverlay.classList.add("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}

// ==========================================
// HERO SLIDER LOGIC
// ==========================================
function initSlider() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("sliderDots");

    // Clear and build dots
    dotsContainer.innerHTML = "";
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Start auto slide
    startSlideTimer();
}

function startSlideTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 6000);
}

function updateSlides() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
    startSlideTimer();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
    startSlideTimer();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
    startSlideTimer();
}

// ==========================================
// DISCOUNT / SALE UTILITIES
// ==========================================
function getDiscountConfig() {
    const cms = _cmsData;
    if (cms && cms.discount && cms.discount.enabled) {
        return {
            enabled: true,
            defaultPercent: parseInt(cms.discount.percent) || 0,
            overrides: cms.discount.overrides || {}
        };
    }
    return { enabled: false, defaultPercent: 0, overrides: {} };
}

function getProductDiscountPercent(disc, productId) {
    if (!disc.enabled) return null;
    const ov = disc.overrides[productId];
    if (ov !== undefined && ov !== null && String(ov).trim() !== "" && !isNaN(parseInt(ov))) {
        return parseInt(ov);
    }
    return disc.defaultPercent;
}

function calcDiscountedPrice(priceStr, percent) {
    if (!priceStr || percent <= 0) return priceStr;
    // Handle range prices like "3,690 / 4,390"
    if (priceStr.includes('/')) {
        return priceStr.split('/').map(p => calcDiscountedPrice(p.trim(), percent)).join(' / ');
    }
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if (isNaN(num) || num === 0) return priceStr;
    const discounted = Math.round(num * (1 - percent / 100));
    return discounted.toLocaleString('th-TH');
}

// ==========================================
// CATALOG RENDERING & FILTERING
// ==========================================
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";
    const lang = currentLanguage;
    const disc = getDiscountConfig();

    // Show/hide expo banner
    let banner = document.getElementById("expoDiscountBanner");
    if (disc.enabled) {
        if (!banner) {
            banner = document.createElement("div");
            banner.id = "expoDiscountBanner";
            banner.className = "expo-discount-banner";
            grid.parentElement.insertBefore(banner, grid);
        }
        // Use defaultPercent for the banner, maybe add "สูงสุด" (Up to) if overrides exist
        const hasOverrides = Object.keys(disc.overrides || {}).length > 0;
        const maxPct = hasOverrides ? Math.max(disc.defaultPercent, ...Object.values(disc.overrides)) : disc.defaultPercent;
        
        const bannerTitle = lang === "th" ? "สิทธิพิเศษ · PET EXPO" : "PET EXPO SPECIAL";
        const bannerDesc  = lang === "th"
            ? `ส่วนลดพิเศษสูงสุด ${maxPct}% เฉพาะในงานเท่านั้น`
            : `Up to ${maxPct}% OFF — Event exclusive`;
        banner.innerHTML = `
            <div class="expo-banner-text">
                <div class="expo-banner-title">${bannerTitle}</div>
                <div class="expo-banner-desc">${bannerDesc}</div>
            </div>
            <div class="expo-banner-pct">${maxPct}<span>%</span></div>`;
    } else {
        if (banner) banner.remove();
    }

    // Filter array
    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const titleText  = (p.title[lang]    || p.title.en).toLowerCase();
        const subText    = (p.subtitle[lang] || p.subtitle.en).toLowerCase();
        const q = searchQuery.toLowerCase();
        const matchesSearch = titleText.includes(q) || subText.includes(q) || p.category.includes(q);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        const noMsg = lang === "th"
            ? `ไม่พบสินค้าที่ค้นหา "${searchQuery}"`
            : `No products found matching "${searchQuery}"`;
        const resetLabel = lang === "th" ? "ล้างการค้นหา" : "Reset Search";
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>${noMsg}</p>
                <button onclick="resetFilters()" class="btn-secondary-outline" style="margin-top: 1rem;">${resetLabel}</button>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        const productPct = getProductDiscountPercent(disc, p.id); // null if OFF
        const hasSale = productPct !== null && productPct > 0;
        card.className = "product-card" + (hasSale ? " on-sale" : "");
        card.setAttribute("onclick", `openModal('${p.id}')`);

        const title    = p.title[lang]    || p.title.en;
        const subtitle = p.subtitle[lang] || p.subtitle.en;
        const badge    = p.badge[lang]    || p.badge.en;
        const detailsLabel = lang === "th" ? "รายละเอียด" : "Details";

        // Build price HTML
        let priceHtml;
        if (hasSale) {
            const salePrice = calcDiscountedPrice(p.price, productPct);
            const saveLbl   = `-${productPct}%`;
            priceHtml = `
                <div class="price-block">
                    <span class="price-original">฿${p.price}</span>
                    <span class="price-sale">฿${salePrice}<span class="price-save-chip">${saveLbl}</span></span>
                </div>`;
        } else {
            priceHtml = `<span>฿${p.price}</span>`;
        }

        let variantsHtml = "";
        if (p.variants && p.variants.length > 0) {
            // รูปหลักเป็นปุ่มแรกเสมอ (index -1 = กลับมารูปเดิม)
            const coverBtn = `<button type="button" class="variant-btn-mini active" style="background-image:url('${p.image}')" title="${subtitle}" onclick="event.stopPropagation(); changeCardVariant(this, '${p.id}', -1)"></button>`;
            const varHtml = p.variants.map((v, vIdx) => {
                const vName = v.name[lang] || v.name.en;
                return `<button type="button" class="variant-btn-mini" style="background-image:url('${v.image}')" title="${vName}" onclick="event.stopPropagation(); changeCardVariant(this, '${p.id}', ${vIdx})"></button>`;
            }).join("");
            variantsHtml = `<div class="card-variants" style="display:flex; gap:6px; margin-top:8px;">${coverBtn}${varHtml}</div>`;
        }

        card.innerHTML = `
            <div class="product-image-wrap">
                ${badge && badge.trim() !== "" ? `<span class="product-badge">${badge}</span>` : ""}
                <img id="card-img-${p.id}" src="${p.image}" alt="${title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <div class="product-meta">
                    <span id="card-sub-${p.id}">${subtitle}</span>
                    ${variantsHtml}
                </div>
                <div class="product-price">
                    ${priceHtml}
                    <button class="btn-details">${detailsLabel} <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    currentCategory = category;

    // Update active class using data-category attribute
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    renderProducts();

    if (window.innerWidth < 768) {
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    }
}

window.changeCardVariant = function(btnElement, productId, vIdx) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const lang = currentLanguage;
    let newImage, newSubtitle;

    if (vIdx === -1) {
        // กลับมารูปหลัก (cover)
        newImage = product.image;
        newSubtitle = product.subtitle[lang] || product.subtitle.en;
    } else {
        if (!product.variants || !product.variants[vIdx]) return;
        const v = product.variants[vIdx];
        newImage = v.image;
        newSubtitle = v.name[lang] || v.name.en;
    }

    // เปลี่ยนรูป
    const imgEl = document.getElementById(`card-img-${productId}`);
    if (imgEl && newImage) imgEl.src = newImage;

    // เปลี่ยน subtitle
    const subEl = document.getElementById(`card-sub-${productId}`);
    if (subEl) subEl.innerText = newSubtitle;

    // อัปเดต active class
    const container = btnElement.parentElement;
    container.querySelectorAll('.variant-btn-mini').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
};

function handleSearch() {
    searchQuery = document.getElementById("searchInput").value;
    renderProducts();
}

function resetFilters() {
    document.getElementById("searchInput").value = "";
    searchQuery = "";
    currentCategory = "all";

    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        if (tab.dataset.category === "all") {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    renderProducts();
}

// ==========================================
// DETAILS MODAL DIALOG
// ==========================================
function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const lang = currentLanguage;
    const disc = getDiscountConfig();
    const modal = document.getElementById("productModal");
    const gridContent = document.getElementById("modalGridContent");

    const title       = product.title[lang]       || product.title.en;
    const subtitle    = product.subtitle[lang]    || product.subtitle.en;
    const badge       = product.badge[lang]       || product.badge.en;
    const description = product.description[lang] || product.description.en;
    const features    = product.features[lang]    || product.features.en;
    const dimensions  = (product.dimensions && product.dimensions[lang]) || (product.dimensions && product.dimensions.en) || "";
    
    // Store variants globally for the selector function
    window.currentVariants = product.variants || [];
    const currency    = lang === "th" ? "บาท" : "THB";
    const featuresLabel = lang === "th" ? "จุดเด่นสินค้า" : "Product Highlights";
    const orderLabel  = lang === "th" ? "สั่งซื้อผ่าน LINE" : "Order via LINE";
    const shopeeLabel = lang === "th" ? "ช้อปผ่าน Shopee" : "Shop via Shopee";
    const closeLabel  = lang === "th" ? "ปิด" : "Close";
    const shopeeUrl   = product.shopeeUrl || "https://shopee.co.th/thumbtoe_th?entryPoint=ShopBySearch&searchKeyword=thumb%20toe";

    const featuresHtml = features.map(f =>
        `<li><i class="fa-solid fa-circle-check" style="color:var(--color-accent); margin-right: 0.5rem;"></i> ${f}</li>`
    ).join("");

    // Build price HTML (with or without discount)
    const productPct = getProductDiscountPercent(disc, product.id);
    const hasSale = productPct !== null && productPct > 0;
    let priceHtml;
    if (hasSale) {
        const salePrice  = calcDiscountedPrice(product.price, productPct);
        const discLbl    = `-${productPct}%`;
        priceHtml = `
            <div class="modal-price-block">
                <span class="modal-price-sale">฿${salePrice}</span>
                <span class="modal-discount-badge">${discLbl}</span>
            </div>
            <div class="modal-price-original">ราคาปกติ ฿${product.price} ${currency}</div>`;
    } else {
        priceHtml = `<p class="modal-price" style="display:flex; align-items:baseline;">฿${product.price} <span style="font-size:1rem; font-weight:400; color:var(--color-text-muted); margin-left:6px;">${currency}</span></p>`;
    }

    // Build dimensions HTML
    let dimensionsHtml = "";
    if (dimensions) {
        const dimLabel = lang === "th" ? "ขนาดสินค้า" : "Dimensions";
        dimensionsHtml = `
            <div class="spec-item" style="border-bottom: 1px solid var(--color-border); padding-bottom: 1rem; margin-bottom: 1rem;">
                <span class="spec-label" style="font-size: 0.95rem;">${dimLabel}</span>
                <span class="spec-value" style="font-size: 0.95rem;">${dimensions}</span>
            </div>
        `;
    }

    // Build unified variants array including the main cover image
    let finalVariants = [];
    if (product.image) {
        finalVariants.push({
            name: { th: "หน้าปก", en: "Cover" },
            image: product.image,
            desc: product.description // Use main desc
        });
    }

    if (window.currentVariants && window.currentVariants.length > 0) {
        window.currentVariants.forEach(v => {
            // Avoid exact duplicate of cover image
            if (v.image !== product.image) {
                finalVariants.push(v);
            }
        });
    }

    window.currentVariants = finalVariants;

    // Build variants HTML
    let variantsHtml = "";
    if (window.currentVariants.length > 1) {
        const varLabel = lang === "th" ? "ตัวเลือกสินค้า:" : "Options:";
        const btnHtml = window.currentVariants.map((v, idx) => {
            const vName = v.name[lang] || v.name.en;
            return `<button class="variant-btn" onclick="selectVariant(${idx}, this)" title="${vName}" style="background-image:url('${v.image}')"></button>`;
        }).join("");
        variantsHtml = `
            <div class="modal-variants-wrap" style="margin-top: 1rem; margin-bottom: 1rem;">
                <div style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">${varLabel} <span id="selectedVariantName" style="color:var(--color-accent); font-weight:700;"></span></div>
                <div class="variant-btn-container" style="display: flex; gap: 8px; flex-wrap: wrap;">
                    ${btnHtml}
                </div>
            </div>
        `;
    }

    // Get LINE URL from CMS if set
    const lineUrl = (_cmsData && _cmsData.store && _cmsData.store.lineUrl)
        ? _cmsData.store.lineUrl
        : "https://line.me/R/ti/p/@thumbtoe_th";

    // Prepare for dynamic descriptions
    window.currentProductDesc = description;
    window.currentVariantIndex = 0;

    let sliderArrows = '';
    if (window.currentVariants && window.currentVariants.length > 1) {
        sliderArrows = `
            <button class="slider-arrow slider-arrow-left" onclick="prevVariant(event)"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-arrow slider-arrow-right" onclick="nextVariant(event)"><i class="fa-solid fa-chevron-right"></i></button>
        `;
    }

    gridContent.innerHTML = `
        <div class="modal-visual" style="position:relative;">
            <img id="modalMainImage" src="${product.image}" alt="${title}">
            ${sliderArrows}
        </div>
        <div class="modal-body">
            <div class="modal-body-content">
                ${badge && badge.trim() !== "" ? `<span class="product-badge" style="margin-bottom:1rem; display:inline-block;">${badge}</span>` : ""}
                <h3 style="font-size: 1.8rem; font-weight:600;">${title}</h3>
                <p class="modal-subtitle" style="color: var(--color-text-muted); margin-bottom: 1.5rem; font-size: 1rem;">${subtitle}</p>
                ${priceHtml}
                ${variantsHtml}
                <p class="modal-desc" id="modalDescription" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem;">${description}</p>

                <div class="spec-list" style="margin-bottom: 2rem; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
                    ${dimensionsHtml}
                    <div class="features-section">
                        <div class="spec-label" style="font-size: 0.95rem; margin-bottom: 0.75rem;">${featuresLabel}</div>
                        <ul style="list-style: none; padding: 0; margin-bottom: 2rem; font-size: 0.95rem; color: var(--color-text-muted);">
                            ${featuresHtml}
                        </ul>
                    </div>
                </div>

                <div class="modal-actions" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <a href="${lineUrl}" target="_blank" class="btn-primary" style="flex: 1; min-width: 140px; justify-content: center; gap: 6px;">
                        <i class="fa-brands fa-line"></i> ${orderLabel}
                    </a>
                    <a href="${shopeeUrl}" target="_blank" class="btn-primary" style="flex: 1; min-width: 140px; justify-content: center; gap: 6px; background-color: #ee4d2d; color: #ffffff;">
                        <i class="fa-solid fa-bag-shopping"></i> ${shopeeLabel}
                    </a>
                    <button onclick="closeModal()" class="btn-secondary" style="flex: 1; min-width: 90px; justify-content: center;">${closeLabel}</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = "flex";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Auto-select first variant (which is now the cover image)
    if (window.currentVariants && window.currentVariants.length > 0) {
        selectVariant(0);
    }
    // Force synchronize heights for all browsers (Bulletproof fallback)
    syncModalHeights();
}

// Global function to synchronize visual height to details height
function syncModalHeights() {
    setTimeout(() => {
        const visual = document.querySelector('.modal-visual');
        if (visual) {
            if (window.innerWidth > 768) {
                const body = document.querySelector('.modal-body');
                if (body && body.offsetHeight > 0) {
                    visual.style.height = body.offsetHeight + 'px';
                }
            } else {
                visual.style.height = ''; // Reset height to let CSS/mobile styles govern it
            }
        }
    }, 50);
}

// Global function to handle variant selection
window.selectVariant = function(index, btnElement) {
    if (!window.currentVariants) return;
    const variant = window.currentVariants[index];
    if (!variant) return;

    window.currentVariantIndex = index;

    // Update main image
    const mainImg = document.getElementById("modalMainImage");
    if (mainImg && variant.image) {
        mainImg.src = variant.image;
    }

    // Update label
    const lang = currentLanguage;
    const vName = variant.name[lang] || variant.name.en;
    const labelEl = document.getElementById("selectedVariantName");
    if (labelEl) labelEl.innerText = vName;

    // Update Description
    const descEl = document.getElementById("modalDescription");
    if (descEl) {
        let vDesc = "";
        if (variant.desc) {
            vDesc = variant.desc[lang] || variant.desc.en || "";
        }
        // Fallback to main product description if variant description is empty
        descEl.innerHTML = vDesc.trim() !== "" ? vDesc : window.currentProductDesc;
    }

    // Update active class on buttons
    document.querySelectorAll(".variant-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    } else {
        // Find the button by index if btnElement is not passed (e.g. from arrow clicks)
        const buttons = document.querySelectorAll(".variant-btn");
        if (buttons[index]) buttons[index].classList.add("active");
    }

    // Recalculate heights dynamically on variant change to prevent layout breakdown and scrollbars!
    syncModalHeights();
};

window.nextVariant = function(e) {
    if (e) e.stopPropagation();
    if (!window.currentVariants) return;
    let newIndex = window.currentVariantIndex + 1;
    if (newIndex >= window.currentVariants.length) newIndex = 0;
    selectVariant(newIndex);
};

window.prevVariant = function(e) {
    if (e) e.stopPropagation();
    if (!window.currentVariants) return;
    let newIndex = window.currentVariantIndex - 1;
    if (newIndex < 0) newIndex = window.currentVariants.length - 1;
    selectVariant(newIndex);
};

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
}

// Close modal when clicking outside content container
window.addEventListener("click", (e) => {
    const modal = document.getElementById("productModal");
    const staffModal = document.getElementById("staffModal");
    if (e.target === modal) {
        closeModal();
    }
    if (e.target === staffModal) {
        closeStaffPortal();
    }
});

// ==========================================
// EVENT LEAD CAPTURE & VIP MEMBERSHIP REGISTRATION
// ==========================================
async function registerMembership(event) {
    event.preventDefault();

    const name  = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const line  = document.getElementById("userLine").value;

    // Generate unique member ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const memberId = `TT-VIP-${randomSuffix}`;

    const newMember = {
        name: name,
        phone: phone,
        line: line,
        code: memberId,
        timestamp: new Date().toLocaleString('th-TH')
    };

    try {
        const res = await fetch('/api/leads');
        let leads = [];
        if (res.ok) leads = await res.json();
        
        leads.push(newMember);
        await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leads)
        });
    } catch (e) {
        // Fallback handled below
    }

    let leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];
    leads.push(newMember);
    localStorage.setItem("thumbtoe_leads", JSON.stringify(leads));

    localStorage.setItem("claimed_membership", JSON.stringify(newMember));

    showMembershipSuccess(newMember);
}

function showMembershipSuccess(member) {
    const formEl = document.getElementById("membershipForm");
    const resultEl = document.getElementById("membershipResult");
    if (formEl) formEl.style.display = "none";
    if (resultEl) resultEl.style.display = "block";

    const nameDisp = document.getElementById("memberNameDisplay");
    const idDisp = document.getElementById("memberIdDisplay");
    if (nameDisp) nameDisp.textContent = member.name;
    if (idDisp) idDisp.textContent = member.code;
}

function resetMembershipForm() {
    localStorage.removeItem("claimed_membership");
    const resultEl = document.getElementById("membershipResult");
    const formEl = document.getElementById("membershipForm");
    if (resultEl) resultEl.style.display = "none";
    if (formEl) {
        formEl.style.display = "block";
        formEl.reset();
    }
}

function checkExistingMembership() {
    const saved = localStorage.getItem("claimed_membership");
    if (saved) {
        const member = JSON.parse(saved);
        showMembershipSuccess(member);
    }
}

function copyVoucherCode() {
    const codeText = document.getElementById("voucherCode").textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        const btn = document.querySelector(".copy-code-btn");
        btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--color-success)"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
    }).catch(err => {
        console.error("Clipboard write failed", err);
    });
}

// ==========================================
// STAFF LEADS PORTAL LOGIC
// ==========================================
function openStaffPortal() {
    document.getElementById("staffModal").style.display = "flex";
    document.getElementById("staffPin").value = "";
    document.getElementById("pinError").style.display = "none";
    document.getElementById("pinSection").style.display = "block";
    document.getElementById("leadsSection").style.display = "none";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

function closeStaffPortal() {
    document.getElementById("staffModal").style.display = "none";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
}

function verifyPin() {
    const pin = document.getElementById("staffPin").value;
    // Use PIN from CMS settings if available, fall back to default
    const correctPin = (window.__staffPin) || "1234";
    if (pin === correctPin) {
        document.getElementById("pinSection").style.display = "none";
        document.getElementById("leadsSection").style.display = "block";
        renderLeadsTable();
    } else {
        document.getElementById("pinError").style.display = "block";
    }
}

function renderLeadsTable() {
    const tbody = document.getElementById("leadsTableBody");
    tbody.innerHTML = "";

    const leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];

    if (leads.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--color-text-muted);">No leads captured yet.</td></tr>`;
        return;
    }

    leads.reverse().forEach(lead => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${escapeHTML(lead.name)}</strong></td>
            <td>${escapeHTML(lead.phone)}</td>
            <td>${escapeHTML(lead.line)}</td>
            <td><code style="background-color: var(--color-accent-light); padding: 0.15rem 0.4rem; border-radius: 3px;">${escapeHTML(lead.code)}</code></td>
            <td>${escapeHTML(lead.timestamp)}</td>
        `;
        tbody.appendChild(tr);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function clearLeads() {
    if (confirm("Are you sure you want to permanently clear ALL captured lead records? This cannot be undone.")) {
        localStorage.removeItem("thumbtoe_leads");
        localStorage.removeItem("claimed_coupon");
        renderLeadsTable();
        alert("All leads have been cleared.");
    }
}

function exportLeads() {
    const leads = JSON.parse(localStorage.getItem("thumbtoe_leads")) || [];
    if (leads.length === 0) {
        alert("No leads available to export.");
        return;
    }

    // Build CSV Content
    let csvContent = "\uFEFF"; // Add BOM for Excel Thai language support
    csvContent += "Name,Mobile Number,LINE ID,Promo Code,Registration Date\n";

    leads.forEach(lead => {
        const name  = `"${lead.name.replace(/"/g, '""')}"`;
        const phone = `"${lead.phone.replace(/"/g, '""')}"`;
        const line  = `"${lead.line.replace(/"/g, '""')}"`;
        const code  = `"${lead.code.replace(/"/g, '""')}"`;
        const time  = `"${lead.timestamp.replace(/"/g, '""')}"`;
        csvContent += `${name},${phone},${line},${code},${time}\n`;
    });

    // Create Download Link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `ThumbToe_Leads_Export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ==========================================
// TOUCH SWIPE — HERO SLIDER (Mobile)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector(".hero-slider");
    if (!sliderEl) return;
    let touchStartX = 0;
    const MIN_SWIPE = 50;
    sliderEl.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    sliderEl.addEventListener("touchend", (e) => {
        const delta = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(delta) >= MIN_SWIPE) {
            delta > 0 ? nextSlide() : prevSlide();
        }
    }, { passive: true });
});
