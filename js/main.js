// ===================================
// Menu Data
// ===================================
const menuData = {
    'meat-dishes': [
        {
            name: "مندي لحم",
            price: "20,000 د.ع",
            description: "لحم ضأن مطبوخ ببطء مع أرز بسمتي العطري على الفحم",
            badge: "الأكثر مبيعاً",
            recommended: true,
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop"
        },
        {
            name: "مظبي لحم",
            price: "20,000 د.ع",
            description: "لحم مشوي على الفحم الحطب بنكهة يمنية أصيلة",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop"
        },
        {
            name: "مدفون لحم",
            price: "20,000 د.ع",
            description: "لحم مدفون مع أرز والتوابل اليمنية الخاصة",
            image: "https://images.unsplash.com/photo-1512058564366-185008080a48?w=600&h=400&fit=crop"
        },
        {
            name: "حنيذ لحم",
            price: "20,000 د.ع",
            description: "لحم حنيذ طري مطبوخ على الحجر الساخن",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
        },
        {
            name: "مضغوط لحم",
            price: "20,000 د.ع",
            description: "لحم مضغوط مع أرز وبهارات يمنية مميزة",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
        },
        {
            name: "فحسة",
            price: "20,000 د.ع",
            description: "يخنة اللحم اليمنية التقليدية بالحجر الساخن",
            badge: "طبق مميز",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop"
        },
        {
            name: "كتف لحم",
            price: "50,000 د.ع",
            description: "كتف لحم غنم كاملة - وجبة فاخرة للعائلة",
            badge: "فاخر",
            recommended: true,
            image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop"
        },
        {
            name: "ضلوع لحم",
            price: "35,000 د.ع",
            description: "ضلوع لحم مشوية على الفحم - طبق فاخر",
            badge: "فاخر",
            recommended: true,
            image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop"
        },
        {
            name: "طبق أرض اليمن",
            price: "35,000 د.ع",
            description: "طبقنا الخاص - تشكيلة فاخرة من أطيب الأطباق اليمنية",
            badge: "الأكثر مبيعاً",
            recommended: true,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
        }
    ],
    'chicken-mandi': [
        {
            name: "مندي دجاج",
            price: "20,000 د.ع",
            description: "دجاج كامل مندي على الفحم مع أرز عطري",
            badge: "الأكثر مبيعاً",
            recommended: true,
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop"
        },
        {
            name: "نصف مندي دجاج",
            price: "11,000 د.ع",
            description: "نصف دجاج مندي - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1606509767314-57856f14435e?w=600&h=400&fit=crop"
        },
        {
            name: "مدفون دجاج",
            price: "20,000 د.ع",
            description: "دجاج مدفون مع أرز والتوابل اليمنية",
            image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop"
        },
        {
            name: "نصف مدفون دجاج",
            price: "11,000 د.ع",
            description: "نصف دجاج مدفون - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1594191175019-93a2f3f85675?w=600&h=400&fit=crop"
        },
        {
            name: "حنيذ دجاج",
            price: "20,000 د.ع",
            description: "دجاج حنيذ طري على الحجر الساخن",
            image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop"
        },
        {
            name: "نصف حنيذ دجاج",
            price: "11,000 د.ع",
            description: "نصف دجاج حنيذ - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1607629507289-56357e904f9f?w=600&h=400&fit=crop"
        },
        {
            name: "كبسة دجاج",
            price: "20,000 د.ع",
            description: "كبسة دجاج يمنية بنكهة أصلية",
            image: "https://images.unsplash.com/photo-1512058564366-185008080a48?w=600&h=400&fit=crop"
        },
        {
            name: "نصف كبسة دجاج",
            price: "11,000 د.ع",
            description: "نصف كبسة دجاج - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d9?w=600&h=400&fit=crop"
        }
    ],
    'chicken-rice': [
        {
            name: "زربيان دجاج",
            price: "20,000 د.ع",
            description: "زربيان يمني أصيل مع دجاج متبل وبطاطس",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop"
        },
        {
            name: "نصف زربيان دجاج",
            price: "11,000 د.ع",
            description: "نصف زربيان دجاج - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1606509767314-57856f14435e?w=600&h=400&fit=crop"
        },
        {
            name: "مضغوط دجاج",
            price: "20,000 د.ع",
            description: "دجاج مضغوط مع أرز وبهارات خاصة",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=400&fit=crop"
        },
        {
            name: "نصف مضغوط دجاج",
            price: "11,000 د.ع",
            description: "نصف مضغوط دجاج - وجبة اقتصادية",
            badge: "اقتصادي",
            image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop"
        }
    ],
    'hot-drinks': [
        {
            name: "شاي",
            price: "500 د.ع",
            description: "شاي يمني أصيل بنكهة مميزة",
            image: "https://images.unsplash.com/photo-1571934811356-5cc061b6f54f?w=600&h=400&fit=crop"
        },
        {
            name: "قهوة تركية",
            price: "2,500 د.ع",
            description: "قهوة تركية أصلية محضرة بعناية",
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop"
        },
        {
            name: "اسبريسو",
            price: "2,500 د.ع",
            description: "اسبريسو إيطالي قوي وغني بالنكهة",
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc695ff6a?w=600&h=400&fit=crop"
        },
        {
            name: "اسبريسو دبل",
            price: "3,500 د.ع",
            description: "Shot مزدوج من الاسبريسو المركز",
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop"
        },
        {
            name: "قهوة عربية",
            price: "2,500 د.ع",
            description: "قهوة عربية تقليدية بالهيل والزعفران",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop"
        },
        {
            name: "هوت شوكليت",
            price: "3,500 د.ع",
            description: "شوكولاتة ساخنة فاخرة كريمية",
            image: "https://images.unsplash.com/photo-1542990253-0d0f5be54f83?w=600&h=400&fit=crop"
        },
        {
            name: "قهوة فرنسية",
            price: "3,500 د.ع",
            description: "قهوة فرنسية أنيقة بنكهة غنية",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop"
        },
        {
            name: "سحلب",
            price: "3,000 د.ع",
            description: "مشروب السحلب الدافئ بالقرفة والمكسرات",
            image: "https://images.unsplash.com/photo-1517701550929-16558a3c4cc2?w=600&h=400&fit=crop"
        },
        {
            name: "لاتيه",
            price: "3,000 د.ع",
            description: "قهوة لاتيه ناعمة مع حليب مبخر",
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop"
        },
        {
            name: "سبانش لاتيه",
            price: "3,500 د.ع",
            description: "لاتيه إسباني مميز بنكهة فريدة",
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop"
        },
        {
            name: "نسكافيه",
            price: "2,500 د.ع",
            description: "نسكافيه كلاسيكي محضر بعناية",
            image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"
        },
        {
            name: "كابتشينو",
            price: "3,000 د.ع",
            description: "كابتشينو إيطالي برغوة حليب مثالية",
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop"
        },
        {
            name: "امريكان كافيه",
            price: "3,000 د.ع",
            description: "قهوة أمريكية سوداء كلاسيكية",
            image: "https://images.unsplash.com/photo-1551055890-36b1f53d0db1?w=600&h=400&fit=crop"
        }
    ],
    'cold-drinks': [
        {
            name: "عصير برتقال",
            price: "4,500 د.ع",
            description: "عصير برتقال طازج طبيعي 100%",
            image: "https://images.unsplash.com/photo-1613478223719-2ab80265a4e1?w=600&h=400&fit=crop"
        },
        {
            name: "عصير ليمون",
            price: "4,500 د.ع",
            description: "ليمونادة منعشة طازجة",
            image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=600&h=400&fit=crop"
        },
        {
            name: "ليمون نعناع",
            price: "4,500 د.ع",
            description: "مزيج منعش من الليمون والنعناع الطازج",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop"
        },
        {
            name: "عصير اناناس",
            price: "4,500 د.ع",
            description: "عصير اناناس استوائي منعش",
            image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&h=400&fit=crop"
        },
        {
            name: "عصير رمان",
            price: "5,000 د.ع",
            description: "عصير رمان طبيعي فاخر",
            image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop"
        },
        {
            name: "عصير كيوي",
            price: "5,000 د.ع",
            description: "عصير كيوي طازج غني بالفيتامينات",
            image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&h=400&fit=crop"
        },
        {
            name: "عصير بطيخ",
            price: "4,500 د.ع",
            description: "عصير بطيخ مثلج ومنعش",
            image: "https://images.unsplash.com/photo-1589733955941-5eeaf279319d?w=600&h=400&fit=crop"
        },
        {
            name: "عصير موز",
            price: "4,500 د.ع",
            description: "عصير موز كريمي ولذيذ",
            image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11bfe8?w=600&h=400&fit=crop"
        },
        {
            name: "موهيتو",
            price: "3,500 د.ع",
            description: "موهيتو منعش بجميع النكهات المتوفرة",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop"
        },
        {
            name: "ميلك شيك",
            price: "5,000 د.ع",
            description: "نوتيلا / لوتس / اوريو / بستاشيو / أرض اليمن",
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop"
        }
    ],
    'hookah': [
        {
            name: "أركيلة بابلي",
            price: "8,000 د.ع",
            description: "نكهة بابلي الكلاسيكية المنعشة",
            image: "https://images.unsplash.com/photo-1542331604-31ae625d6e0d?w=600&h=400&fit=crop"
        },
        {
            name: "أركيلة ألماني",
            price: "10,000 د.ع",
            description: "مزيج ألماني فاخر ومميز",
            image: "https://images.unsplash.com/photo-1520013573731-15ee88d141c2?w=600&h=400&fit=crop"
        },
        {
            name: "أركيلة سبيشل",
            price: "12,000 د.ع",
            description: "خلطة سبيشل حصرية من أرض اليمن",
            image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&h=400&fit=crop"
        }
    ],
    'crepes': [
        {
            name: "كريب",
            price: "5,000 د.ع",
            description: "كريب فرنسي رقيق - جميع النكهات متوفرة",
            image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&h=400&fit=crop"
        },
        {
            name: "وافل",
            price: "5,000 د.ع",
            description: "وافل بلجيكي مقرمش - جميع النكهات متوفرة",
            image: "https://images.unsplash.com/photo-1562376552-0d16cd20053f?w=600&h=400&fit=crop"
        }
    ],
    'extra-drinks': [
        {
            name: "ماء",
            price: "500 د.ع",
            description: "مياه معدنية باردة",
            image: "https://images.unsplash.com/photo-1548839140-2f9a7bf5ea3b?w=600&h=400&fit=crop"
        },
        {
            name: "مشروبات غازية",
            price: "1,000 د.ع",
            description: "كولا، سبرايت، فانتا، بيبسي",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=400&fit=crop"
        }
    ]
};

// Gallery Data
const galleryData = [
    { icon: "☕", title: "قهوة عربية", image: "https://images.unsplash.com/photo-1512568400617-f977583f5947?w=800&h=600&fit=crop" },
    { icon: "🍖", title: "مندي لحم", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop" },
    { icon: "🧃", title: "عصائر طازجة", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop" },
    { icon: "🍗", title: "دجاج مندي", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop" },
    { icon: "🧇", title: "وافل بلجيكي", image: "https://images.unsplash.com/photo-1562376552-0d16cd20053f?w=800&h=600&fit=crop" },
    { icon: "🥞", title: "كريب فرنسي", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&h=600&fit=crop" },
    { icon: "🍹", title: "موهيتو منعش", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=600&fit=crop" },
    { icon: "🍫", title: "ميلك شيك", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop" },
    { icon: "💨", title: "أراكيل فاخرة", image: "https://images.unsplash.com/photo-1542331604-31ae625d6e0d?w=800&h=600&fit=crop" },
    { icon: "🥩", title: "مشويات فاخرة", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop" }
];

// ===================================
// Loading Screen
// ===================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
});

// ===================================
// Sticky Navigation
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ===================================
// Menu Tabs
// ===================================
const menuTabs = document.querySelectorAll('.menu-tab');
const menuGrid = document.getElementById('menuGrid');

function renderMenuItems(category) {
    const items = menuData[category];
    menuGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card fade-in';
        if (item.recommended) {
            card.classList.add('recommended');
        }
        card.style.animationDelay = `${index * 0.1}s`;
        
        let badgeHTML = '';
        if (item.badge) {
            const badgeClass = item.badge === 'الأكثر مبيعاً' ? 'badge-bestseller' : 
                              item.badge === 'فاخر' ? 'badge-premium' :
                              item.badge === 'اقتصادي' ? 'badge-economy' : 'badge-special';
            badgeHTML = `<div class="menu-badge ${badgeClass}">${item.badge}</div>`;
        }
        
        const imageHTML = item.image ? 
            `<img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">` :
            `<div class="menu-card-image"></div>`;
        
        card.innerHTML = `
            ${imageHTML}
            ${badgeHTML}
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <span class="menu-card-price">${item.price}</span>
                </div>
                <p class="menu-card-description">${item.description}</p>
            </div>
        `;
        
        menuGrid.appendChild(card);
    });
    
    // Re-observe new elements
    const newFadeElements = menuGrid.querySelectorAll('.fade-in');
    newFadeElements.forEach(element => {
        fadeObserver.observe(element);
        // Trigger animation immediately for menu items
        setTimeout(() => {
            element.classList.add('visible');
        }, 100);
    });
}

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Render menu items for selected category
        const category = tab.dataset.category;
        renderMenuItems(category);
    });
});

// Initial render
renderMenuItems('meat-dishes');

// ===================================
// Gallery
// ===================================
const galleryGrid = document.getElementById('galleryGrid');

function renderGallery() {
    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        const imageHTML = item.image ?
            `<img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">` :
            `<div class="gallery-placeholder">${item.icon}</div>`;
        
        galleryItem.innerHTML = `
            ${imageHTML}
            <div class="gallery-overlay"></div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        
        galleryGrid.appendChild(galleryItem);
    });
}

renderGallery();

// ===================================
// Lightbox
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const item = galleryData[currentImageIndex];
    if (item.image) {
        lightboxImage.innerHTML = `<img src="${item.image}" alt="${item.title}" class="lightbox-full-img">`;
    } else {
        lightboxImage.textContent = item.icon;
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxImage();
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// ===================================
// Parallax Effect for Hero
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Performance Optimization
// ===================================

// Lazy load images (for future implementation with real images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// ===================================
// Console Welcome Message
// ===================================
console.log('%c أرض اليمن ', 'background: #c9a84c; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c المذاق اليمني الأصيل - جرب الأصالة في كل لقمة ', 'color: #b0b0b0; font-size: 12px;');
