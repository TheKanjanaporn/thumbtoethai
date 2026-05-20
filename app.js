// ==========================================
// PRODUCTS DATABASE (DUIT THAILAND)
// ==========================================
const PRODUCTS = [
    {
        id: "catthenon",
        title: "duit catthenon",
        category: "furniture",
        categoryLabel: "Furniture",
        price: "15,900 THB",
        badge: "Best Seller",
        image: "https://cdn.imweb.me/thumbnail/20241216/f2f68e665eb7f.jpg",
        description: "The Catthenon is the ultimate luxury kingdom for cats. Designed as a modular cat scratching and lounging tower, it allows your cat to scratch, play, stretch, and sleep in style. Perfect for minimalist home interiors.",
        dimensions: "60 x 40 x 125 cm",
        material: "Premium Eco-cardboard, Powder-coated Steel Frame",
        features: [
            "Modular and configurable layout",
            "Easily replaceable cardboard scratching pads",
            "Super-stable steel frame structure",
            "Non-toxic and pet-safe coatings"
        ]
    },
    {
        id: "fooddispenser",
        title: "duit automatic feeder",
        category: "appliances",
        categoryLabel: "Smart Appliance",
        price: "8,900 THB",
        badge: "Smart Tech",
        image: "https://cdn.imweb.me/thumbnail/20240419/4d999960b611b.jpg",
        description: "A sleek, customizable automatic feeder that dispenses dry food at set intervals. Built with pet-safe materials and dual-power options to ensure your cat never misses a meal.",
        dimensions: "22 x 22 x 35 cm",
        material: "Food-grade ABS, Stainless Steel Bowl",
        features: [
            "Custom feeding schedules & portions",
            "Smart app connectivity & tracking",
            "Backup battery power supply",
            "Anti-clog double impeller system"
        ]
    },
    {
        id: "yummyball",
        title: "duit yummy ball",
        category: "toys",
        categoryLabel: "Toys & Accessories",
        price: "1,290 THB",
        badge: "Hot Deal",
        image: "https://cdn.imweb.me/thumbnail/20250428/ddee63d251372.jpg",
        description: "Your pet's playful toy buddy and nose work master. Hide treats inside the pockets of the ball and let your pet sniff, roll, and forage. It exercises their brain and relieves stress.",
        dimensions: "12 cm Diameter",
        material: "Non-toxic Food-grade Silicone, Organic Felt Fabric",
        features: [
            "12 hidden treat-hiding pockets",
            "Machine washable and highly durable",
            "Stimulates natural sniffing and hunting instincts",
            "Soft on pet paws and teeth"
        ]
    },
    {
        id: "hammock",
        title: "duit windows hammock",
        category: "furniture",
        categoryLabel: "Furniture",
        price: "4,500 THB",
        badge: "New Arrival",
        image: "https://cdn.imweb.me/thumbnail/20250324/4dee882812e5b.jpg",
        description: "A sleek, space-saving cat hammock that attaches securely to windows. Gives your cat the best seat in the house to sunbathe and watch birds outside.",
        dimensions: "55 x 35 x 30 cm",
        material: "Premium Birch Plywood, Heavy-duty Suction Cups, Washable Cotton Canvas",
        features: [
            "Holds up to 15 kg of weight",
            "Industrial grade vacuum suction cups",
            "Foldable design lets you close window blinds easily",
            "Removable and washable cotton cover"
        ]
    },
    {
        id: "tentstation",
        title: "duit tent station",
        category: "furniture",
        categoryLabel: "Furniture",
        price: "6,500 THB",
        badge: "Premium Bed",
        image: "https://cdn.imweb.me/thumbnail/20250103/d84d8200f8e1e.jpg",
        description: "A cozy, minimalist cat play tent that acts as a private sanctuary. Offers a safe, quiet space for rest and matches modern home interior designs perfectly.",
        dimensions: "50 x 50 x 60 cm",
        material: "Organic Birchwood Frame, Washable Canvas Fabric",
        features: [
            "Cozy private shelter for cats",
            "Sturdy double-sided frame",
            "Highly breathable canvas cover",
            "Easy assembly and compact storage"
        ]
    },
    {
        id: "kittycinema",
        title: "duit kitty cinema",
        category: "toys",
        categoryLabel: "Toys & Accessories",
        price: "2,800 THB",
        badge: "Event Special",
        image: "https://cdn.imweb.me/thumbnail/20241021/d13bedf580f3a.jpg",
        description: "A cozy cardboard house shaped like a retro film projector. Features scratch pads inside and multiple peekaboo holes, perfect for cats who love dark, snug spaces.",
        dimensions: "45 x 35 x 40 cm",
        material: "Eco-friendly Reinforced Cardboard",
        features: [
            "100% recyclable heavy-duty cardboard",
            "Built-in horizontal scratcher flooring",
            "Unique retro projector aesthetic shape",
            "Multiple ventilation and play slots"
        ]
    },
    {
        id: "petbathtub",
        title: "duit pet bath tub",
        category: "toys",
        categoryLabel: "Toys & Accessories",
        price: "3,200 THB",
        badge: "Grooming Essential",
        image: "https://cdn.imweb.me/thumbnail/20240726/60c34fdb492d8.jpg",
        description: "A multi-functional collapsible bathtub for cats and small dogs. Highly portable, space-saving design with a non-slip bottom and safe drainage system to make bathing time stress-free.",
        dimensions: "60 x 40 x 25 cm (Expanded)",
        material: "Non-toxic TPE, Premium PP Plastic",
        features: [
            "Space-saving foldable design",
            "Safety drain plug built in",
            "Non-slip interior bottom pattern",
            "Comfortable double grip handles"
        ]
    },
    {
        id: "smartlitterbin",
        title: "duit smart litter bin",
        category: "appliances",
        categoryLabel: "Smart Appliance",
        price: "4,900 THB",
        badge: "Odor Care",
        image: "https://cdn.imweb.me/thumbnail/20240502/c3ff0de818975.jpg",
        description: "A touchless motion sensor waste bin designed specifically for disposing of scooped cat litter. Features complete odor-seal technology and automated opening for convenient sanitation.",
        dimensions: "25 x 25 x 42 cm",
        material: "Anti-fingerprint Stainless Steel, Odor-guard ABS",
        features: [
            "Motion-activated automatic smart lid",
            "Odor-sealing double mechanical flap",
            "Premium anti-bacterial inner lining",
            "Sleek and minimalist shape"
        ]
    }
];

// State variables
let currentCategory = "all";
let searchQuery = "";
let currentSlide = 0;
let slideInterval;

// ==========================================
// CORE INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Load products
    renderProducts();

    // Set up Hero Slider
    initSlider();

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
    checkExistingCoupon();
});

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
// CATALOG RENDERING & FILTERING
// ==========================================
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = "";

    // Filter array
    const filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No products found matching "${searchQuery}".</p>
                <button onclick="resetFilters()" class="btn-secondary-outline" style="margin-top: 1rem;">Reset Search</button>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("onclick", `openModal('${p.id}')`);
        card.innerHTML = `
            <div class="product-image-wrap">
                <span class="product-badge">${p.badge}</span>
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-meta">
                    <span>Category: <strong>${p.categoryLabel}</strong></span>
                </div>
                <div class="product-price">
                    <span>${p.price}</span>
                    <button class="btn-details">Details <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(category) {
    currentCategory = category;
    
    // Update active class on tab buttons
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        // Compare lowering categories or based on index/argument
        const text = tab.textContent.toLowerCase();
        if (category === "all" && text === "all") {
            tab.classList.add("active");
        } else if (category === "furniture" && text === "furniture") {
            tab.classList.add("active");
        } else if (category === "appliances" && text.includes("appliance")) {
            tab.classList.add("active");
        } else if (category === "toys" && text.includes("toy")) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    renderProducts();
    
    // Auto scroll down to grid on mobile
    if (window.innerWidth < 768) {
        document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    }
}

function handleSearch() {
    searchQuery = document.getElementById("searchInput").value;
    renderProducts();
}

function resetFilters() {
    document.getElementById("searchInput").value = "";
    searchQuery = "";
    currentCategory = "all";
    
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach((tab, index) => {
        if (index === 0) tab.classList.add("active");
        else tab.classList.remove("active");
    });

    renderProducts();
}

// ==========================================
// DETAILS MODAL DIALOG
// ==========================================
function openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const gridContent = document.getElementById("modalGridContent");

    // Map features list
    const featuresHtml = product.features.map(f => `<li><i class="fa-solid fa-circle-check" style="color:var(--color-accent); margin-right: 0.5rem;"></i> ${f}</li>`).join("");

    gridContent.innerHTML = `
        <div class="modal-visual">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="modal-body">
            <span class="product-badge">${product.badge}</span>
            <h3>${product.title}</h3>
            <p class="modal-price">${product.price}</p>
            <p class="modal-desc">${product.description}</p>
            
            <div class="spec-list">
                <div class="spec-item">
                    <span class="spec-label">Dimensions</span>
                    <span class="spec-value">${product.dimensions}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Materials</span>
                    <span class="spec-value">${product.material}</span>
                </div>
            </div>

            <ul style="list-style: none; padding: 0; margin-bottom: 2rem; font-size: 0.85rem; color: var(--color-text-muted);">
                ${featuresHtml}
            </ul>

            <div class="modal-actions">
                <a href="https://line.me/R/ti/p/@duit_thailand" target="_blank" class="btn-primary">
                    <i class="fa-brands fa-line"></i> Order via LINE
                </a>
                <button onclick="closeModal()" class="btn-secondary">Close</button>
            </div>
        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Lock page scroll
}

function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Unlock page scroll
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
// EVENT LEAD CAPTURE & COUPON GENERATION
// ==========================================
function generateCoupon(event) {
    event.preventDefault();

    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const line = document.getElementById("userLine").value;

    // Generate unique code suffix
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const promoCode = `DUIT-EVENT-${randomSuffix}`;

    // Store in local storage
    const newLead = {
        name: name,
        phone: phone,
        line: line,
        code: promoCode,
        timestamp: new Date().toLocaleString()
    };

    let leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    leads.push(newLead);
    localStorage.setItem("duit_leads", JSON.stringify(leads));

    // Also store coupon session
    localStorage.setItem("claimed_coupon", JSON.stringify(newLead));

    // Show Voucher View
    showVoucher(newLead);
}

function showVoucher(lead) {
    document.getElementById("couponForm").style.display = "none";
    document.getElementById("couponResult").style.display = "block";
    
    document.getElementById("voucherName").textContent = lead.name;
    document.getElementById("voucherCode").textContent = lead.code;
}

function resetCouponForm() {
    localStorage.removeItem("claimed_coupon");
    document.getElementById("couponResult").style.display = "none";
    document.getElementById("couponForm").style.display = "block";
    document.getElementById("couponForm").reset();
}

function checkExistingCoupon() {
    const saved = localStorage.getItem("claimed_coupon");
    if (saved) {
        const lead = JSON.parse(saved);
        showVoucher(lead);
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
    document.body.style.overflow = "hidden";
}

function closeStaffPortal() {
    document.getElementById("staffModal").style.display = "none";
    document.body.style.overflow = "";
}

function verifyPin() {
    const pin = document.getElementById("staffPin").value;
    if (pin === "1234") {
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

    const leads = JSON.parse(localStorage.getItem("duit_leads")) || [];

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
        localStorage.removeItem("duit_leads");
        localStorage.removeItem("claimed_coupon");
        renderLeadsTable();
        alert("All leads have been cleared.");
    }
}

function exportLeads() {
    const leads = JSON.parse(localStorage.getItem("duit_leads")) || [];
    if (leads.length === 0) {
        alert("No leads available to export.");
        return;
    }

    // Build CSV Content
    let csvContent = "\uFEFF"; // Add BOM for Excel Thai language support
    csvContent += "Name,Mobile Number,LINE ID,Promo Code,Registration Date\n";

    leads.forEach(lead => {
        // Wrap fields in quotes to prevent delimiter breaking
        const name = `"${lead.name.replace(/"/g, '""')}"`;
        const phone = `"${lead.phone.replace(/"/g, '""')}"`;
        const line = `"${lead.line.replace(/"/g, '""')}"`;
        const code = `"${lead.code.replace(/"/g, '""')}"`;
        const time = `"${lead.timestamp.replace(/"/g, '""')}"`;
        csvContent += `${name},${phone},${line},${code},${time}\n`;
    });

    // Create Download Link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `DUIT_Leads_Export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
