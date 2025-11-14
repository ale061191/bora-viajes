# 🌍 Bora Viajes

> Sitio web moderno de agencia de viajes con Next.js 15, TypeScript, Styled Components y Chatbot IA

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-pink?style=flat-square&logo=styled-components)](https://styled-components.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## ✨ Características Principales

- 🎨 **Diseño Moderno**: UI/UX optimizada con guía de estilos consistente
- 🤖 **Chatbot IA**: Asistente virtual con 30+ respuestas predefinidas y detección inteligente de presupuestos
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos (mobile, tablet, desktop)
- 🔍 **Sistema de Búsqueda**: Formulario avanzado con DatePicker y filtros múltiples
- 💳 **Integración WhatsApp**: Botones de contacto directo con mensajes predefinidos
- 📊 **Datos Centralizados**: Arquitectura escalable con datos reutilizables
- 🎯 **CRO Optimizado**: Copys y elementos optimizados para conversión
- ♿ **Accesible**: Cumple con estándares WCAG de accesibilidad

## 🚀 Demo en Vivo

🔗 **[Ver Demo](https://bora-viajes.vercel.app)** *(Próximamente)*

## 📸 Capturas de Pantalla

### Página Principal
![Home Page](docs/screenshots/home.png)

### Ofertas Dinámicas
![Offers Page](docs/screenshots/offers.png)

### Chatbot IA
![Chatbot](docs/screenshots/chatbot.png)

## 🛠️ Tecnologías

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript 5.0
- **Estilos**: Styled Components 6.1
- **Iconos**: React Icons
- **Componentes UI**: React DatePicker, React Select

### Fuentes
- **Principal**: Poppins (Google Fonts)
- **Decorativa**: Great Vibes (Google Fonts)

### Herramientas
- **Linter**: ESLint
- **Control de Versiones**: Git & GitHub
- **Deploy**: Vercel

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/ale061191/bora-viajes.git
cd bora-viajes
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
bora_viajes/
├── app/
│   ├── components/
│   │   └── shared/           # Componentes reutilizables
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── ChatbotFAB.tsx
│   │       ├── OfferCard.tsx
│   │       ├── TestimonialsMarquee.tsx
│   │       └── ...
│   ├── data/                 # Datos centralizados
│   │   ├── offers.ts         # 9 ofertas completas
│   │   ├── testimonials.ts   # Testimonios
│   │   └── chatbotKnowledge.ts # Base de conocimiento del bot
│   ├── hooks/                # Custom hooks
│   │   └── useSearchForm.ts
│   ├── ofertas/              # Páginas de ofertas
│   │   ├── page.tsx          # Listado
│   │   └── [id]/page.tsx     # Detalles dinámicos
│   ├── destinos/
│   ├── sobre-nosotros/
│   ├── contacto/
│   ├── guia-estilos/         # Documentación de componentes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # Home
├── public/                   # Imágenes y assets
├── RESUMEN_DESARROLLO.md     # Documentación completa del desarrollo
├── package.json
└── README.md
```

## 🎨 Componentes Reutilizables

| Componente | Descripción | Props |
|------------|-------------|-------|
| `Header` | Navegación principal con atajo de teclado | `currentPage` |
| `Footer` | Pie de página con links | - |
| `ChatbotFAB` | Chatbot flotante con IA | - |
| `OfferCard` | Tarjeta de oferta con efectos | `offer`, `ctaText` |
| `TestimonialsMarquee` | Carrusel infinito de testimonios | `testimonials[]` |
| `SearchForm` | Formulario de búsqueda avanzado | `destino`, `fechas`, `viajeros` |
| `HeroSection` | Hero reutilizable | `title`, `subtitle`, `backgroundImage` |
| `ScrollTopButton` | Botón flotante para subir | `$show` |
| `StyledDatePicker` | DatePicker personalizado | `selected`, `onChange` |
| `FAQ` | Acordeón de preguntas | `items[]` |

## 🤖 Chatbot - Características

- ✅ 30+ respuestas predefinidas
- ✅ Detección inteligente de keywords
- ✅ Recomendaciones basadas en presupuesto (regex avanzado)
- ✅ Botones de acción rápida
- ✅ Indicador "Escribiendo..."
- ✅ Función de limpiar chat
- ✅ Diseño moderno con glassmorphism

### Ejemplo de Uso
```typescript
// El bot detecta presupuestos automáticamente
Usuario: "Tengo $1800, ¿qué me recomiendas?"
Bot: "💰 Con $1,800 estas son tus opciones:
      1. Cancún - $998
      2. Roma - $1,200
      3. Maldivas - $1,800
      ..."
```

## 🔑 Atajos de Teclado

- **`boraviajes`** (escribir en cualquier parte): Acceso a la guía de estilos
- **`ESC`** (en guía de estilos): Volver al home

## 📱 Integración WhatsApp

Todos los botones de contacto redirigen a WhatsApp con:
- **Número**: +584126851090
- **Mensaje predefinido**: "Hola, estoy interesado en informacion sobre ofertas y paquetes de viaje"

## 🎯 Optimización CRO

### Técnicas Implementadas
1. **Prueba Social**: "Más de 10,000 viajeros felices"
2. **Urgencia**: "¡Plazas limitadas!"
3. **Propuesta de Valor**: "Mejores precios garantizados"
4. **Reducción de Fricción**: FAQ con 6 preguntas estratégicas
5. **CTAs Optimizados**: Verbos de acción claros con iconos

## 📈 Estadísticas del Proyecto

- **Componentes Reutilizables**: 14
- **Páginas**: 7
- **Archivos de Datos**: 3
- **Hooks Personalizados**: 1
- **Líneas de Código**: ~3,500 (código de calidad)
- **Código Duplicado Eliminado**: ~730 líneas

## 🚀 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa el repositorio `ale061191/bora-viajes`
4. Vercel detectará automáticamente Next.js
5. Click en **"Deploy"**
6. ¡Listo! Tu sitio estará en vivo en minutos

### Opción 2: CLI de Vercel

```bash
npm install -g vercel
vercel login
vercel
```

### Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:

```env
NEXT_PUBLIC_SITE_URL=https://bora-viajes.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=584126851090
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Ezequiel Alejandro Rodríguez Bracho**
- GitHub: [@ale061191](https://github.com/ale061191)
- Email: ezequielrodriguez1991@gmail.com

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el increíble framework
- [Vercel](https://vercel.com/) por el hosting
- [Unsplash](https://unsplash.com/) por las imágenes de alta calidad
- [React Icons](https://react-icons.github.io/react-icons/) por los iconos

## 📚 Documentación Adicional

Para más detalles sobre el desarrollo, ver [RESUMEN_DESARROLLO.md](RESUMEN_DESARROLLO.md)

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub

**Hecho con ❤️ y ☕ por el equipo de Bora Viajes**
