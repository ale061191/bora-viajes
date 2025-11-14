// Base de conocimiento del chatbot
export interface KnowledgeItem {
  keywords: string[];
  response: string;
  category: string;
}

export const chatbotKnowledge: KnowledgeItem[] = [
  // Información General
  {
    keywords: ["hola", "buenos días", "buenas tardes", "buenas noches", "hey", "hi"],
    response: "¡Hola! 👋 Soy el asistente virtual de Bora Viajes. Estoy aquí para ayudarte con información sobre nuestros destinos, ofertas, precios y más. ¿En qué puedo ayudarte hoy?",
    category: "saludo"
  },
  {
    keywords: ["gracias", "muchas gracias", "thank you", "thanks"],
    response: "¡De nada! 😊 Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en escribirme.",
    category: "agradecimiento"
  },
  {
    keywords: ["ayuda", "help", "qué puedes hacer", "que haces"],
    response: "Puedo ayudarte con:\n• Información sobre destinos 🌍\n• Ofertas y promociones 💰\n• Precios y presupuestos 💵\n• Reservas y contacto 📞\n• Preguntas frecuentes ❓\n\n¿Sobre qué te gustaría saber?",
    category: "ayuda"
  },

  // Destinos
  {
    keywords: ["destinos", "lugares", "países", "ciudades", "dónde puedo viajar", "a donde viajar"],
    response: "Tenemos destinos increíbles como:\n\n🇲🇻 **Maldivas** - Paraíso tropical desde $1,800\n🇯🇵 **Kyoto, Japón** - Cultura y tradición desde $2,200\n🇦🇷 **Patagonia** - Aventura natural desde $1,800\n🇮🇹 **Roma** - Historia y cultura desde $1,200\n🇬🇷 **Santorini** - Romance mediterráneo desde $1,500\n\n¿Sobre cuál te gustaría saber más?",
    category: "destinos"
  },
  {
    keywords: ["maldivas", "maldives"],
    response: "🇲🇻 **Maldivas** es un paraíso tropical perfecto para:\n• Luna de miel 💑\n• Buceo y snorkel 🤿\n• Relax total 🏖️\n\n**Precio:** Desde $1,800/persona\n**Incluye:** Más de 1,200 resorts y 18 paquetes exclusivos\n\n¿Te gustaría hacer una reserva?",
    category: "destinos"
  },
  {
    keywords: ["kyoto", "japón", "japan"],
    response: "🇯🇵 **Kyoto, Japón** ofrece:\n• Templos históricos ⛩️\n• Jardines zen 🌸\n• Gastronomía única 🍱\n\n**Precio:** Desde $2,200/persona\n**Incluye:** 22 circuitos guiados y experiencias culturales únicas\n\n¿Quieres más detalles?",
    category: "destinos"
  },
  {
    keywords: ["patagonia", "argentina"],
    response: "🇦🇷 **Patagonia** es ideal para aventureros:\n• Glaciares impresionantes 🏔️\n• Trekking y senderismo 🥾\n• Naturaleza salvaje 🦙\n\n**Precio:** Desde $1,800/persona\n**Incluye:** 14 rutas escénicas y actividades al aire libre\n\n¿Te interesa este destino?",
    category: "destinos"
  },
  {
    keywords: ["roma", "italia", "italy"],
    response: "🇮🇹 **Roma** - La Ciudad Eterna:\n• Coliseo y Foro Romano 🏛️\n• Vaticano y Capilla Sixtina ⛪\n• Gastronomía italiana 🍝\n\n**Oferta especial:** 30% de descuento\n**Precio:** Desde $1,200/persona\n**Duración:** 5 días / 4 noches\n\n¿Quieres ver el itinerario completo?",
    category: "destinos"
  },

  // Ofertas
  {
    keywords: ["ofertas", "promociones", "descuentos", "deals", "especiales"],
    response: "🎉 **Ofertas Especiales Activas:**\n\n1. **Roma** - 30% DTO ($1,200)\n2. **Crucero Mediterráneo** - 2x1\n3. **Cancún Todo Incluido** - Desde $998\n4. **Suiza** - Paquete aventura ($2,499)\n5. **Egipto** - Tour cultural ($1,800)\n\nTodas válidas hasta fin de año. ¿Cuál te interesa?",
    category: "ofertas"
  },
  {
    keywords: ["cancún", "caribe", "méxico", "todo incluido"],
    response: "🏖️ **Cancún Todo Incluido:**\n• Resort 5 estrellas frente al mar 🌊\n• Comidas y bebidas ilimitadas 🍹\n• Actividades acuáticas 🏄\n\n**Precio:** Desde $998/persona\n**Oferta:** Paquetes especiales disponibles\n\n¿Quieres reservar?",
    category: "ofertas"
  },
  {
    keywords: ["crucero", "mediterráneo", "barco"],
    response: "🚢 **Crucero Mediterráneo 2x1:**\n• Viaja con un acompañante gratis 👥\n• Múltiples destinos europeos 🇪🇺\n• Todo incluido a bordo 🍽️\n\n**Oferta especial:** ¡Paga 1, viajan 2!\n\n¿Te gustaría más información?",
    category: "ofertas"
  },

  // Precios y Presupuestos
  {
    keywords: ["precio", "costo", "cuánto cuesta", "cuanto vale", "presupuesto", "barato", "económico"],
    response: "💰 **Rangos de Precios:**\n\n**Económico:** $998 - $1,500\n• Cancún, Roma (con oferta)\n\n**Medio:** $1,500 - $2,000\n• Maldivas, Patagonia, Egipto\n\n**Premium:** $2,000+\n• Kyoto, Suiza, Cruceros\n\nTodos los precios son por persona e incluyen vuelos y alojamiento. ¿Buscas algo específico?",
    category: "precios"
  },
  {
    keywords: ["más barato", "mas barato", "económico", "oferta barata"],
    response: "🏷️ **Mejores Ofertas Económicas:**\n\n1. **Cancún** - $998 (Todo incluido)\n2. **Roma** - $1,200 (30% descuento)\n3. **Santorini** - $1,500\n\nTodas incluyen vuelos, alojamiento y traslados. ¿Cuál prefieres?",
    category: "precios"
  },

  // Reservas y Proceso
  {
    keywords: ["reservar", "reserva", "booking", "cómo reservo", "como reservo"],
    response: "📝 **Para Reservar:**\n\n1. Elige tu destino 🌍\n2. Selecciona fechas 📅\n3. Indica número de viajeros 👥\n4. Contacta con nosotros:\n   • WhatsApp: +1 (234) 567-890\n   • Email: hola@boraviajes.com\n   • Botón 'Contactar' en el sitio\n\n¿Quieres que te ayude a elegir un destino?",
    category: "reservas"
  },
  {
    keywords: ["contacto", "teléfono", "email", "whatsapp", "hablar"],
    response: "📞 **Contáctanos:**\n\n• **Email:** hola@boraviajes.com\n• **Teléfono:** +1 (234) 567-890\n• **WhatsApp:** +1 (234) 567-890\n\n**Horario:** Lun-Vie 9:00-18:00\n\n¿Prefieres que te contactemos nosotros?",
    category: "contacto"
  },

  // Viajeros y Grupos
  {
    keywords: ["personas", "viajeros", "grupo", "cuántos pueden ir", "familia"],
    response: "👥 **Viajeros:**\n\n• **Mínimo:** 1 persona\n• **Máximo:** 10+ personas (grupos)\n• **Familias:** Paquetes especiales disponibles\n• **Parejas:** Ofertas de luna de miel\n• **Grupos:** Descuentos especiales\n\n¿Para cuántas personas buscas?",
    category: "viajeros"
  },
  {
    keywords: ["niños", "bebés", "familia con niños"],
    response: "👶 **Viajes con Niños:**\n\n• Aceptamos todas las edades\n• Tarifas especiales para menores\n• Actividades familiares disponibles\n• Hoteles family-friendly\n\n¿Cuántos adultos y niños viajarán?",
    category: "viajeros"
  },

  // Duración
  {
    keywords: ["duración", "días", "noches", "cuánto dura", "tiempo"],
    response: "⏱️ **Duración de Paquetes:**\n\n• **Cortos:** 3-5 días (Roma, Cancún)\n• **Medios:** 6-8 días (Suiza, Egipto)\n• **Largos:** 9-15 días (Japón, Patagonia)\n\nPodemos personalizar la duración según tus necesidades. ¿Cuántos días tienes disponibles?",
    category: "duracion"
  },

  // Incluye
  {
    keywords: ["incluye", "qué incluye", "que incluye", "incluido"],
    response: "✅ **Nuestros Paquetes Incluyen:**\n\n• ✈️ Vuelos ida y vuelta\n• 🏨 Alojamiento (hoteles 4-5⭐)\n• 🚗 Traslados aeropuerto-hotel\n• 🛡️ Seguro de viaje\n• 🗺️ Tours guiados (según paquete)\n• 📱 Asistencia 24/7\n\n¿Qué destino te interesa?",
    category: "incluye"
  },

  // Visa y Documentos
  {
    keywords: ["visa", "pasaporte", "documentos", "requisitos"],
    response: "📄 **Documentos Necesarios:**\n\n• **Pasaporte** válido (mín. 6 meses)\n• **Visa** (depende del destino y nacionalidad)\n• **Vacunas** (según destino)\n\nTe asesoramos con:\n• Requisitos específicos por país\n• Proceso de solicitud de visa\n• Documentación necesaria\n\n¿A qué país quieres viajar?",
    category: "documentos"
  },

  // Pago
  {
    keywords: ["pago", "forma de pago", "tarjeta", "financiamiento", "cuotas"],
    response: "💳 **Formas de Pago:**\n\n• Tarjetas de crédito/débito 💳\n• Transferencia bancaria 🏦\n• PayPal\n• **Planes de financiamiento** disponibles\n• Cuotas sin intereses (paquetes seleccionados)\n\n¿Necesitas información sobre financiamiento?",
    category: "pago"
  },

  // Cancelación
  {
    keywords: ["cancelar", "cancelación", "modificar", "cambios"],
    response: "🔄 **Política de Cancelación:**\n\n• Cancelación flexible disponible\n• Modificaciones según tipo de paquete\n• **Recomendamos:** Seguro de cancelación\n• Condiciones específicas al reservar\n\n¿Necesitas más detalles sobre políticas?",
    category: "cancelacion"
  },

  // Mejor época
  {
    keywords: ["mejor época", "cuándo viajar", "cuando ir", "temporada"],
    response: "🌤️ **Mejor Época para Viajar:**\n\n• **Maldivas:** Nov-Abr (seco)\n• **Japón:** Mar-May, Sep-Nov (cerezos/otoño)\n• **Europa:** Abr-Oct (primavera/verano)\n• **Patagonia:** Oct-Mar (verano austral)\n• **Caribe:** Dic-Abr (seco)\n\n¿A dónde quieres ir?",
    category: "epoca"
  },

  // Seguridad
  {
    keywords: ["seguro", "seguridad", "covid", "salud"],
    response: "🛡️ **Seguridad y Salud:**\n\n• Todos los paquetes incluyen seguro de viaje\n• Cobertura médica completa\n• Asistencia 24/7 durante el viaje\n• Protocolos de seguridad actualizados\n• Información sobre requisitos sanitarios\n\n¿Tienes alguna preocupación específica?",
    category: "seguridad"
  },

  // Default
  {
    keywords: ["default"],
    response: "🤔 No estoy seguro de entender tu pregunta. Puedo ayudarte con:\n\n• Destinos y lugares 🌍\n• Ofertas y precios 💰\n• Reservas y contacto 📞\n• Información de viajes ✈️\n\n¿Podrías reformular tu pregunta?",
    category: "default"
  }
];

// Función para extraer números (presupuestos) del mensaje
function extractBudget(message: string): number | null {
  // Buscar patrones como: $1800, 1800, $1,800, 1.800, etc.
  const patterns = [
    /\$\s*(\d{1,3}(?:[,.]?\d{3})*)/g,  // $1800 o $1,800
    /(\d{1,3}(?:[,.]?\d{3})*)\s*(?:dólares|dolares|usd)/gi,  // 1800 dólares
    /tengo\s*(\d{1,3}(?:[,.]?\d{3})*)/gi,  // tengo 1800
    /presupuesto\s*(?:de\s*)?(\d{1,3}(?:[,.]?\d{3})*)/gi,  // presupuesto de 1800
  ];

  for (const pattern of patterns) {
    const matches = message.matchAll(pattern);
    for (const match of matches) {
      const numberStr = match[1].replace(/[,.]/g, '');
      const number = parseInt(numberStr);
      if (number > 0 && number < 100000) {
        return number;
      }
    }
  }
  
  return null;
}

// Función para recomendar ofertas según presupuesto
function getOffersByBudget(budget: number): string {
  const offers = [
    { name: "Cancún Todo Incluido", price: 998, description: "Resort 5 estrellas frente al mar 🏖️" },
    { name: "Roma con 30% DTO", price: 1200, description: "La Ciudad Eterna 🏛️" },
    { name: "Santorini", price: 1500, description: "Romance mediterráneo 🇬🇷" },
    { name: "Maldivas", price: 1800, description: "Paraíso tropical 🇲🇻" },
    { name: "Egipto Cultural", price: 1800, description: "Pirámides y templos 🐪" },
    { name: "Patagonia Aventura", price: 1800, description: "Naturaleza salvaje 🏔️" },
    { name: "Kyoto, Japón", price: 2200, description: "Cultura y tradición 🇯🇵" },
    { name: "Suiza Aventura", price: 2499, description: "Alpes Suizos ⛷️" },
  ];

  const affordableOffers = offers.filter(offer => offer.price <= budget);
  
  if (affordableOffers.length === 0) {
    return `💰 Con un presupuesto de $${budget.toLocaleString()}, te recomendaría ahorrar un poco más o considerar nuestras opciones de financiamiento.\n\nNuestra oferta más económica es:\n🏖️ **Cancún Todo Incluido** - $998\n\n¿Te gustaría información sobre planes de pago?`;
  }

  let response = `💰 ¡Perfecto! Con un presupuesto de $${budget.toLocaleString()}, estas son las mejores opciones para ti:\n\n`;
  
  affordableOffers.forEach((offer, index) => {
    response += `${index + 1}. **${offer.name}** - $${offer.price.toLocaleString()}\n   ${offer.description}\n\n`;
  });

  const remaining = budget - affordableOffers[affordableOffers.length - 1].price;
  if (remaining > 100) {
    response += `💡 ¡Te sobrarían aproximadamente $${remaining.toLocaleString()} que podrías usar para excursiones adicionales!\n\n`;
  }

  response += "¿Sobre cuál te gustaría saber más detalles?";
  
  return response;
}

// Función para encontrar la mejor respuesta
export function findBestResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Primero, verificar si el mensaje contiene un presupuesto
  const budget = extractBudget(userMessage);
  if (budget !== null) {
    // Verificar si el usuario está preguntando sobre recomendaciones
    const budgetKeywords = ["recomienda", "recomendas", "puedo", "opciones", "paquetes", "ofertas", "tengo", "presupuesto", "con"];
    const hasBudgetQuestion = budgetKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (hasBudgetQuestion) {
      return getOffersByBudget(budget);
    }
  }
  
  // Buscar coincidencias exactas
  for (const item of chatbotKnowledge) {
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return item.response;
      }
    }
  }
  
  // Si no hay coincidencia, devolver respuesta por defecto
  const defaultItem = chatbotKnowledge.find(item => item.category === "default");
  return defaultItem?.response || "Lo siento, no pude entender tu pregunta. ¿Podrías reformularla?";
}

