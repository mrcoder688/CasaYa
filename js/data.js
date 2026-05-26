// CasaYa - Sistema de datos local
const PROPERTIES = [
    {
        id: 1,
        title: "Villa Mediterránea con vistas al mar",
        location: "Marbella, Málaga",
        price: 2450000,
        beds: 5,
        baths: 4,
        sqm: 680,
        type: "villa",
        status: "venta",
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
        ],
        description: "Espectacular villa mediterránea con vistas panorámicas al mar Mediterráneo. Diseñada por el arquitecto reconocido Joaquín Torres, esta propiedad combina elegancia contemporánea con el encanto de la Costa del Sol.",
        features: ["Piscina infinita", "Jardín privado 2000m²", "Gimnasio", "Cinema room", "Garaje 3 coches", "Smart home", "Seguridad 24h"],
        agent: { name: "Elena Martínez", phone: "+34 612 345 678", email: "elena@casaya.com", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
        coordinates: { lat: 36.5103, lng: -4.8857 },
        date: "2026-05-15",
        views: 342
    },
    {
        id: 2,
        title: "Ático de diseño en el corazón de Madrid",
        location: "Salamanca, Madrid",
        price: 1890000,
        beds: 3,
        baths: 2,
        sqm: 210,
        type: "atico",
        status: "venta",
        featured: true,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
        ],
        description: "Ático de lujo en el exclusivo barrio de Salamanca. Diseño interior de la firma Ilmio Design con materiales de primera calidad. Terraza de 80m² con vistas a la ciudad.",
        features: ["Terraza 80m²", "Ascensor privado", "Domótica", "Aire acondicionado", "Trastero", "Portería"],
        agent: { name: "Carlos Ruiz", phone: "+34 623 456 789", email: "carlos@casaya.com", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" },
        coordinates: { lat: 40.427, lng: -3.686 },
        date: "2026-05-10",
        views: 289
    },
    {
        id: 3,
        title: "Casa minimalista con jardín privado",
        location: "Pedralbes, Barcelona",
        price: 3200000,
        beds: 4,
        baths: 3,
        sqm: 450,
        type: "casa",
        status: "venta",
        featured: true,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
        ],
        description: "Casa unifamiliar de diseño minimalista en el prestigioso barrio de Pedralbes. Arquitectura contemporánea con amplios espacios diáfanos y jardín privado diseñado por paisajistas.",
        features: ["Jardín privado 800m²", "Piscina climatizada", "Sótano diáfano", "Cocina Bulthaup", "Suelo radiante", "Alarma"],
        agent: { name: "Laura Gómez", phone: "+34 634 567 890", email: "laura@casaya.com", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
        coordinates: { lat: 41.394, lng: 2.128 },
        date: "2026-05-08",
        views: 456
    },
    {
        id: 4,
        title: "Finca histórica restaurada",
        location: "Sóller, Mallorca",
        price: 4750000,
        beds: 6,
        baths: 5,
        sqm: 890,
        type: "finca",
        status: "venta",
        featured: false,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"
        ],
        description: "Finca del siglo XVIII completamente restaurada con criterios de sostenibilidad. Ubicada en el valle de Sóller con vistas a las montañas del Tramuntana.",
        features: ["Viñedo propio", "Olivar", "Huerto ecológico", "Piscina natural", "Anexo invitados", "Bodega"],
        agent: { name: "Miguel Serra", phone: "+34 645 678 901", email: "miguel@casaya.com", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
        coordinates: { lat: 39.766, lng: 2.715 },
        date: "2026-05-01",
        views: 198
    },
    {
        id: 5,
        title: "Dúplex con terraza panorámica",
        location: "Eixample, Barcelona",
        price: 2100000,
        beds: 4,
        baths: 3,
        sqm: 320,
        type: "duplex",
        status: "venta",
        featured: false,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
        ],
        description: "Dúplex de lujo en el Eixample Derecho con terraza panorámica de 120m². Reforma integral con materiales de alta gama y sistema domótico integrado.",
        features: ["Terraza 120m²", "Vistas Sagrada Familia", "Cocina Santos", "Rooftop jacuzzi", "Parking doble", "Videoportero"],
        agent: { name: "Laura Gómez", phone: "+34 634 567 890", email: "laura@casaya.com", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
        coordinates: { lat: 41.392, lng: 2.165 },
        date: "2026-04-28",
        views: 267
    },
    {
        id: 6,
        title: "Chalet contemporáneo con piscina",
        location: "La Moraleja, Madrid",
        price: 3850000,
        beds: 5,
        baths: 4,
        sqm: 520,
        type: "chalet",
        status: "venta",
        featured: true,
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
        ],
        description: "Chalet de diseño contemporáneo en la exclusiva urbanización de La Moraleja. Parcela de 2.500m² con piscina climatizada y zonas de ocio al aire libre.",
        features: ["Parcela 2500m²", "Piscina climatizada", "Padel", "Sala de cine", "Cuarto de servicio", "Garaje 4 coches"],
        agent: { name: "Elena Martínez", phone: "+34 612 345 678", email: "elena@casaya.com", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
        coordinates: { lat: 40.483, lng: -3.648 },
        date: "2026-04-20",
        views: 512
    }
];

// LocalStorage helpers
const Storage = {
    getFavorites() {
        return JSON.parse(localStorage.getItem('casaya_favorites') || '[]');
    },
    addFavorite(id) {
        const favs = this.getFavorites();
        if (!favs.includes(id)) {
            favs.push(id);
            localStorage.setItem('casaya_favorites', JSON.stringify(favs));
        }
    },
    removeFavorite(id) {
        const favs = this.getFavorites().filter(f => f !== id);
        localStorage.setItem('casaya_favorites', JSON.stringify(favs));
    },
    isFavorite(id) {
        return this.getFavorites().includes(id);
    },
    getInquiries() {
        return JSON.parse(localStorage.getItem('casaya_inquiries') || '[]');
    },
    addInquiry(inquiry) {
        const inquiries = this.getInquiries();
        inquiries.push({ ...inquiry, id: Date.now(), date: new Date().toISOString(), status: 'nuevo' });
        localStorage.setItem('casaya_inquiries', JSON.stringify(inquiries));
    },
    getUser() {
        return JSON.parse(localStorage.getItem('casaya_user') || 'null');
    },
    setUser(user) {
        localStorage.setItem('casaya_user', JSON.stringify(user));
    },
    logout() {
        localStorage.removeItem('casaya_user');
    }
};

// Format price
function formatPrice(price) {
    return price.toLocaleString('es-ES') + ' €';
}

// Get property by ID
function getProperty(id) {
    return PROPERTIES.find(p => p.id === parseInt(id));
}

// Search properties
function searchProperties(query, filters = {}) {
    let results = PROPERTIES;
    
    if (query) {
        const q = query.toLowerCase();
        results = results.filter(p => 
            p.title.toLowerCase().includes(q) ||
            p.location.toLowerCase().includes(q) ||
            p.type.toLowerCase().includes(q)
        );
    }
    
    if (filters.type && filters.type !== 'todos') {
        results = results.filter(p => p.type === filters.type);
    }
    
    if (filters.minPrice) {
        results = results.filter(p => p.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
        results = results.filter(p => p.price <= parseInt(filters.maxPrice));
    }
    
    if (filters.beds) {
        results = results.filter(p => p.beds >= parseInt(filters.beds));
    }
    
    return results;
}

// Admin data
function getAdminStats() {
    const inquiries = Storage.getInquiries();
    return {
        totalProperties: PROPERTIES.length,
        totalInquiries: inquiries.length,
        newInquiries: inquiries.filter(i => i.status === 'nuevo').length,
        totalViews: PROPERTIES.reduce((sum, p) => sum + p.views, 0),
        avgPrice: Math.round(PROPERTIES.reduce((sum, p) => sum + p.price, 0) / PROPERTIES.length),
        recentInquiries: inquiries.slice(-5).reverse()
    };
}
