export interface TestimonialData {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

export const testimonials: TestimonialData[] = [
  {
    author: {
      name: "Ana García",
      handle: "@anaviajera",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "¡El mejor viaje de mi vida! La organización fue impecable y los destinos, espectaculares. Totalmente recomendado.",
    href: "https://twitter.com/anaviajera"
  },
  {
    author: {
      name: "Carlos Martínez",
      handle: "@carlosviajes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Desde el primer contacto hasta el último día, todo fue perfecto. Los guías locales hicieron que la experiencia fuera inolvidable."
  },
  {
    author: {
      name: "Laura Fernández",
      handle: "@lauraviajera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Un servicio al cliente excepcional. Se preocuparon por cada detalle y se adaptaron a nuestro presupuesto. ¡Volveremos a viajar con ellos!"
  },
  {
    author: {
      name: "Miguel Rodríguez",
      handle: "@miguelviajes",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "La mejor agencia de viajes que he conocido. Cada destino superó mis expectativas y el trato fue personalizado en todo momento.",
    href: "https://twitter.com/miguelviajes"
  },
  {
    author: {
      name: "Sofia López",
      handle: "@sofiaviajes",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Experiencia increíble desde el primer momento. Los guías fueron excelentes y los hoteles seleccionados eran perfectos. 100% recomendado."
  }
];
