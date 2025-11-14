export interface OfferDetail {
  id: number;
  title: string;
  description: string;
  discount: string;
  destination: string;
  validUntil: string;
  image: string;
  type: string;
  season: string;
  themeColor: string;
  price: number;
  // Detalles específicos
  heroTitle: string;
  heroSubtitle: string;
  days: number;
  nights: number;
  mainImage: string;
  secondaryImages: string[];
  includes: string[];
  itinerary: { day: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const offersData: OfferDetail[] = [
  {
    id: 1,
    title: "Escapada a Roma",
    description: "Descubre la ciudad eterna con un descuento increíble. Incluye vuelos y hotel 4 estrellas.",
    discount: "30% DTO",
    destination: "Roma, Italia",
    validUntil: "Válido hasta 31 Dic",
    image: "/roma.jpg",
    type: "cultural",
    season: "invierno",
    themeColor: "25 85% 48%",
    price: 1200,
    heroTitle: "Descubre la",
    heroSubtitle: "CIUDAD ETERNA",
    days: 5,
    nights: 4,
    mainImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> desde ciudades principales.",
      "<strong>4 noches de alojamiento</strong> en hotel 4 estrellas con desayuno.",
      "<strong>Traslados aeropuerto-hotel</strong> incluidos.",
      "<strong>Tour guiado por el Coliseo</strong> y Foro Romano.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1-2", description: "Llegada a Roma. Visita al Coliseo, Foro Romano y Palatino. Noche en Trastevere." },
      { day: "Día 3", description: "Ciudad del Vaticano. Museos Vaticanos, Capilla Sixtina y Basílica de San Pedro." },
      { day: "Día 4", description: "Fontana di Trevi, Plaza de España y Panteón. Tarde libre para compras." },
      { day: "Día 5", description: "Desayuno y traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para viajar?", answer: "Primavera (abril-mayo) y otoño (septiembre-octubre) tienen clima ideal y menos turistas." },
      { question: "¿Necesito visa?", answer: "Depende de tu nacionalidad. Ciudadanos de muchos países no necesitan visa para estancias cortas." },
      { question: "¿El tour incluye todas las entradas?", answer: "Sí, todas las entradas a monumentos del tour guiado están incluidas." },
      { question: "¿Puedo modificar el itinerario?", answer: "Sí, todos nuestros paquetes son personalizables según tus preferencias." }
    ]
  },
  {
    id: 2,
    title: "Crucero Mediterráneo",
    description: "Viaja con un acompañante y paga solo un pasaje. 7 noches visitando las mejores ciudades.",
    discount: "2x1",
    destination: "Mediterráneo",
    validUntil: "Reserva hasta 15 Ene",
    image: "/crucero.jpg",
    type: "crucero",
    season: "verano",
    themeColor: "210 85% 55%",
    price: 2500,
    heroTitle: "Navegando por el",
    heroSubtitle: "MEDITERRÁNEO",
    days: 8,
    nights: 7,
    mainImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> al puerto de embarque.",
      "<strong>7 noches en crucero</strong> con pensión completa.",
      "<strong>Todas las comidas incluidas</strong> (desayuno, almuerzo, cena y snacks).",
      "<strong>Entretenimiento a bordo</strong> (shows, piscinas, gimnasio).",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Embarque en Barcelona. Cóctel de bienvenida y cena a bordo." },
      { day: "Día 2-3", description: "Marsella y Niza (Francia). Excursiones opcionales a la Riviera Francesa." },
      { day: "Día 4-5", description: "Florencia y Roma (Italia). Tours guiados por ciudades históricas." },
      { day: "Día 6", description: "Santorini (Grecia). Día libre en la isla más romántica del Egeo." },
      { day: "Día 7", description: "Navegación. Día en el barco disfrutando de todas las amenidades." },
      { day: "Día 8", description: "Desembarque en Barcelona. Traslado al aeropuerto." }
    ],
    faqs: [
      { question: "¿Qué incluye el todo incluido?", answer: "Todas las comidas, bebidas no alcohólicas, entretenimiento y uso de instalaciones. Bebidas alcohólicas y excursiones son extra." },
      { question: "¿Puedo llevar niños?", answer: "Sí, contamos con programas especiales para niños y adolescentes." },
      { question: "¿Qué documentos necesito?", answer: "Pasaporte vigente y visas según los países que visites." },
      { question: "¿Las excursiones están incluidas?", answer: "Las excursiones en tierra son opcionales y tienen costo adicional." }
    ]
  },
  {
    id: 3,
    title: "Todo Incluido Cancún",
    description: "Relájate en el Caribe con todo pagado. Resort 5 estrellas frente al mar.",
    discount: "Desde $998",
    destination: "Cancún, México",
    validUntil: "Oferta limitada",
    image: "/cancun.jpg",
    type: "playa",
    season: "verano",
    themeColor: "199 85% 42%",
    price: 998,
    heroTitle: "Paraíso en",
    heroSubtitle: "CANCÚN",
    days: 6,
    nights: 5,
    mainImage: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> desde ciudades principales.",
      "<strong>5 noches en resort 5 estrellas</strong> todo incluido.",
      "<strong>Alimentos y bebidas ilimitadas</strong> (restaurantes y bares).",
      "<strong>Actividades acuáticas</strong> no motorizadas incluidas.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Llegada a Cancún. Check-in en resort y cóctel de bienvenida." },
      { day: "Día 2-4", description: "Días libres para disfrutar de playa, piscinas, deportes acuáticos y spa." },
      { day: "Día 5", description: "Excursión opcional a ruinas mayas de Chichén Itzá o Tulum." },
      { day: "Día 6", description: "Check-out y traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Qué incluye el todo incluido?", answer: "Todas las comidas, bebidas (alcohólicas y no alcohólicas), actividades y entretenimiento del resort." },
      { question: "¿Cuál es la mejor época para ir?", answer: "De diciembre a abril (temporada seca). Evita septiembre-octubre (temporada de huracanes)." },
      { question: "¿Necesito visa?", answer: "Depende de tu nacionalidad. Muchos países no requieren visa para turismo." },
      { question: "¿Las excursiones están incluidas?", answer: "Las excursiones fuera del resort tienen costo adicional." }
    ]
  },
  {
    id: 4,
    title: "Safari en Kenia",
    description: "Vive la emoción de la vida salvaje con nuestros guías expertos. Incluye safaris diarios.",
    discount: "25% DTO",
    destination: "Nairobi, Kenia",
    validUntil: "Válido hasta 28 Feb",
    image: "/hero.jpg",
    type: "aventura",
    season: "todo-año",
    themeColor: "29 70% 38%",
    price: 3200,
    heroTitle: "Safari en",
    heroSubtitle: "KENIA",
    days: 8,
    nights: 7,
    mainImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> a Nairobi.",
      "<strong>7 noches de alojamiento</strong> en lodges de lujo.",
      "<strong>Safaris diarios 4x4</strong> con guías expertos.",
      "<strong>Todas las comidas incluidas</strong> durante el safari.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1-2", description: "Llegada a Nairobi. Safari en el Parque Nacional de Nairobi." },
      { day: "Día 3-5", description: "Masai Mara. Safaris matutinos y vespertinos. Los \"Big Five\"." },
      { day: "Día 6", description: "Lago Nakuru. Flamencos rosados y rinocerontes." },
      { day: "Día 7", description: "Amboseli. Vistas del Kilimanjaro y manadas de elefantes." },
      { day: "Día 8", description: "Regreso a Nairobi. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para el safari?", answer: "Junio a octubre (temporada seca) para ver la gran migración en Masai Mara." },
      { question: "¿Qué vacunas necesito?", answer: "Fiebre amarilla (obligatoria), hepatitis A y B, tifoidea. Consulta con tu médico." },
      { question: "¿Es seguro?", answer: "Sí, los safaris son muy seguros. Siempre estarás con guías expertos certificados." },
      { question: "¿Qué debo llevar?", answer: "Ropa cómoda en tonos neutros, sombrero, protector solar, binoculares y cámara con buen zoom." }
    ]
  },
  {
    id: 5,
    title: "Auroras Boreales",
    description: "Contempla uno de los espectáculos naturales más asombrosos del mundo bajo el cielo ártico.",
    discount: "20% DTO",
    destination: "Islandia",
    validUntil: "Temporada limitada",
    image: "/hero.jpg",
    type: "aventura",
    season: "invierno",
    themeColor: "280 50% 45%",
    price: 2800,
    heroTitle: "Magia de las",
    heroSubtitle: "AURORAS BOREALES",
    days: 7,
    nights: 6,
    mainImage: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> a Reikiavik.",
      "<strong>6 noches de alojamiento</strong> con desayuno.",
      "<strong>3 tours de auroras boreales</strong> con guía experto.",
      "<strong>Entrada a Blue Lagoon</strong> (aguas termales).",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Llegada a Reikiavik. Check-in y orientación." },
      { day: "Día 2", description: "Golden Circle: géiseres, cascadas y Parque Nacional Þingvellir." },
      { day: "Día 3", description: "Tour de auroras boreales nocturno. Fotografía bajo las luces." },
      { day: "Día 4", description: "Costa Sur: cascadas Seljalandsfoss y Skógafoss, playa de arena negra." },
      { day: "Día 5", description: "Blue Lagoon. Relax en aguas termales naturales." },
      { day: "Día 6", description: "Último tour de auroras boreales. Despedida islandesa." },
      { day: "Día 7", description: "Traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuándo puedo ver auroras boreales?", answer: "De septiembre a marzo, con mejores oportunidades entre diciembre y febrero." },
      { question: "¿Está garantizado ver auroras?", answer: "Depende del clima y actividad solar. Incluimos 3 tours para aumentar probabilidades." },
      { question: "¿Qué tan frío es?", answer: "Invierno: -5°C a 5°C. Proporcionamos lista de ropa térmica recomendada." },
      { question: "¿Puedo conducir yo mismo?", answer: "Sí, ofrecemos opción de self-drive. Las rutas son seguras y bien señalizadas." }
    ]
  },
  {
    id: 6,
    title: "Maravillas de Egipto",
    description: "Descubre los secretos de los faraones explorando pirámides, tumbas y el río Nilo.",
    discount: "35% DTO",
    destination: "Cairo, Egipto",
    validUntil: "Válido hasta 20 Mar",
    image: "/hero.jpg",
    type: "cultural",
    season: "invierno",
    themeColor: "45 95% 55%",
    price: 1800,
    heroTitle: "Misterios de",
    heroSubtitle: "EGIPTO",
    days: 9,
    nights: 8,
    mainImage: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> a El Cairo.",
      "<strong>8 noches de alojamiento</strong> (hoteles + crucero por el Nilo).",
      "<strong>Todas las comidas incluidas</strong> durante el crucero.",
      "<strong>Tours guiados</strong> a pirámides, templos y tumbas.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1-2", description: "El Cairo. Pirámides de Giza, Esfinge y Museo Egipcio." },
      { day: "Día 3", description: "Vuelo a Luxor. Embarque en crucero por el Nilo." },
      { day: "Día 4-5", description: "Valle de los Reyes, Templo de Karnak y Luxor." },
      { day: "Día 6", description: "Navegación. Templo de Edfu y Kom Ombo." },
      { day: "Día 7", description: "Asuán. Presa, Templo de Philae y paseo en faluca." },
      { day: "Día 8", description: "Opcional: Abu Simbel. Regreso a El Cairo." },
      { day: "Día 9", description: "Traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para viajar?", answer: "Octubre a abril (clima más fresco). Evita verano (muy caluroso)." },
      { question: "¿Necesito visa?", answer: "Sí, visa de turista. Se puede obtener a la llegada o en línea." },
      { question: "¿Es seguro viajar a Egipto?", answer: "Sí, las zonas turísticas son seguras. Viajamos con guías locales certificados." },
      { question: "¿Qué debo vestir?", answer: "Ropa ligera y modesta. En templos, cubre hombros y rodillas." }
    ]
  },
  {
    id: 7,
    title: "Aventura en Patagonia",
    description: "Recorre paisajes impresionantes, desde glaciares hasta montañas majestuosas.",
    discount: "15% DTO",
    destination: "Patagonia, Argentina",
    validUntil: "Válido hasta 30 Abr",
    image: "/patagonia.jpg",
    type: "aventura",
    season: "verano",
    themeColor: "210 56% 32%",
    price: 1800,
    heroTitle: "Aventura en la",
    heroSubtitle: "PATAGONIA",
    days: 7,
    nights: 6,
    mainImage: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> a Ushuaia o El Calafate.",
      "<strong>6 noches de alojamiento</strong> en lodges y hoteles de montaña.",
      "<strong>Excursiones guiadas</strong> a glaciares y parques nacionales.",
      "<strong>Traslados terrestres</strong> entre destinos incluidos.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Llegada a El Calafate. Check-in y orientación." },
      { day: "Día 2-3", description: "Glaciar Perito Moreno. Trekking sobre hielo y navegación." },
      { day: "Día 4", description: "El Chaltén. Capital del trekking. Sendero a Laguna de los Tres." },
      { day: "Día 5", description: "Torres del Paine (Chile). Excursión de día completo al parque." },
      { day: "Día 6", description: "Ushuaia. Navegación por Canal Beagle. Pingüinera." },
      { day: "Día 7", description: "Traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para visitar?", answer: "Diciembre a marzo (verano austral). Clima más estable para trekking." },
      { question: "¿Qué nivel físico se requiere?", answer: "Nivel medio. Caminatas de 4-6 horas. Hay opciones más suaves disponibles." },
      { question: "¿Qué ropa debo llevar?", answer: "Ropa técnica en capas, impermeable, botas de trekking, gorro y guantes." },
      { question: "¿Incluye entrada a parques?", answer: "Sí, todas las entradas a parques nacionales están incluidas." }
    ]
  },
  {
    id: 8,
    title: "Paraíso en Maldivas",
    description: "Resort de lujo con bungalows sobre el agua. Snorkel, spa y gastronomía incluida.",
    discount: "40% DTO",
    destination: "Maldivas",
    validUntil: "Reserva anticipada",
    image: "/maldivas.jpg",
    type: "playa",
    season: "todo-año",
    themeColor: "199 85% 42%",
    price: 1800,
    heroTitle: "Paraíso en",
    heroSubtitle: "MALDIVAS",
    days: 7,
    nights: 6,
    mainImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos internacionales</strong> y traslados en hidroavión.",
      "<strong>6 noches en water villa</strong> sobre el océano Índico.",
      "<strong>Régimen todo incluido</strong> con bebidas premium.",
      "<strong>Actividades acuáticas</strong> (snorkel, kayak, paddle) incluidas.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Llegada a Malé. Traslado en hidroavión al resort. Check-in en water villa." },
      { day: "Día 2-4", description: "Días libres para disfrutar del resort. Snorkel, spa, playa privada." },
      { day: "Día 5", description: "Excursión de buceo. Arrecife de coral y tortugas marinas." },
      { day: "Día 6", description: "Cena romántica en la playa. Puesta de sol y fogata." },
      { day: "Día 7", description: "Check-out. Traslado en hidroavión y vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para viajar?", answer: "Todo el año. Noviembre a abril (temporada seca) es ideal." },
      { question: "¿Qué incluye el todo incluido?", answer: "Todas las comidas, bebidas premium, actividades acuáticas no motorizadas." },
      { question: "¿Necesito certificación de buceo?", answer: "No es obligatorio. Hay opciones de snorkel y cursos de buceo para principiantes." },
      { question: "¿Es apto para luna de miel?", answer: "¡Absolutamente! Incluimos upgrades especiales para parejas en luna de miel." }
    ]
  },
  {
    id: 9,
    title: "Experiencia en Kyoto",
    description: "Sumérgete en la cultura milenaria de Japón, visitando templos antiguos y jardines serenos.",
    discount: "25% DTO",
    destination: "Kyoto, Japón",
    validUntil: "Válido hasta 31 May",
    image: "/kyoto.jpg",
    type: "cultural",
    season: "primavera",
    themeColor: "29 70% 38%",
    price: 2200,
    heroTitle: "Esencia de",
    heroSubtitle: "KYOTO",
    days: 6,
    nights: 5,
    mainImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    secondaryImages: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop"
    ],
    includes: [
      "<strong>Vuelos de ida y vuelta</strong> a Osaka (cercano a Kyoto).",
      "<strong>5 noches en ryokan tradicional</strong> con cena kaiseki.",
      "<strong>JR Pass</strong> para transporte ilimitado en tren.",
      "<strong>Ceremonia del té</strong> y clase de caligrafía incluidas.",
      "<strong>Seguro de viaje</strong> con cobertura completa."
    ],
    itinerary: [
      { day: "Día 1", description: "Llegada a Osaka. Traslado a Kyoto. Check-in en ryokan tradicional." },
      { day: "Día 2", description: "Templos de Kinkaku-ji (Pabellón Dorado) y Ryoan-ji. Ceremonia del té." },
      { day: "Día 3", description: "Fushimi Inari (10,000 torii gates). Gion (distrito geisha)." },
      { day: "Día 4", description: "Arashiyama. Bosque de bambú y templo Tenryu-ji. Clase de caligrafía." },
      { day: "Día 5", description: "Nara (día completo). Parque de los ciervos y Todai-ji." },
      { day: "Día 6", description: "Mercado Nishiki. Traslado al aeropuerto. Vuelo de regreso." }
    ],
    faqs: [
      { question: "¿Cuál es la mejor época para ver cerezos?", answer: "Finales de marzo a principios de abril. También incluimos fechas en otoño (noviembre)." },
      { question: "¿Necesito hablar japonés?", answer: "No es necesario. Nuestros guías hablan español e inglés." },
      { question: "¿Qué es un ryokan?", answer: "Hotel tradicional japonés con tatami, futones, onsen (aguas termales) y cena kaiseki." },
      { question: "¿Puedo visitar otras ciudades?", answer: "Sí, el JR Pass permite visitar Osaka, Nara, Hiroshima. Consulta extensiones disponibles." }
    ]
  }
];

export function getOfferById(id: number): OfferDetail | undefined {
  return offersData.find(offer => offer.id === id);
}

export function getAllOffers(): OfferDetail[] {
  return offersData;
}

