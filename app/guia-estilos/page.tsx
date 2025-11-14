"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FaSearch, FaUser, FaCalendarAlt, FaArrowUp } from "react-icons/fa";
import Wrapper from "../components/shared/Wrapper";
import SearchForm from "../components/shared/SearchForm";
import FiltersBar from "../components/shared/FiltersBar";
import { OffersGridComponent, OfferData } from "../components/shared/OfferCard";
import TestimonialsMarquee, { TestimonialData } from "../components/shared/TestimonialsMarquee";

const PageHeader = styled.header`
  background: var(--color-white);
  border-bottom: 1px solid rgba(230,230,230,0.8);
  padding: 1.5rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: var(--font-poppins);
  font-size: 1.8rem;
  color: var(--color-primary);
`;

const Subtitle = styled.p`
  color: var(--color-text-dark);
  margin-top: 0.3rem;
`;

const Section = styled.section`
  padding: 2rem 0;
  background: var(--color-white);
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(157,74,188,0.07);
  margin-top: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding: 0 2rem;
`;

const Content = styled.div`
  padding: 0 2rem 1.5rem 2rem;
`;

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const Swatch = styled.div`
  border-radius: 0.8rem;
  border: 1px solid rgba(0,0,0,0.06);
  overflow: hidden;
  background: var(--color-bg-light);
`;

const SwatchColor = styled.div<{ bg: string }>`
  height: 80px;
  background: ${props => props.bg};
`;

const SwatchLabel = styled.div`
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  color: var(--color-text-dark);
`;

const TypoRow = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 1rem;
`;

const GreatVibesSample = styled.div`
  font-family: var(--font-great-vibes);
  font-size: 2rem;
  color: var(--color-primary);
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-bg-light);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  max-width: 360px;
`;

const Card = styled.div`
  background: var(--color-bg-light);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(157,74,188,0.07);
  overflow: hidden;
  width: 320px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const FabDemo = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(157, 74, 188, 0.18);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default function StyleGuide() {
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/");
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [router]);

  return (
    <Wrapper>
      <PageHeader>
        <Title>Guía de Estilos</Title>
        <Subtitle>
          Referencia visual de colores, tipografías, espaciados y componentes usados en la página de inicio.
        </Subtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Paleta de colores</SectionTitle>
        <Content>
          <SwatchGrid>
            <Swatch>
              <SwatchColor bg="var(--color-primary)" />
              <SwatchLabel>Primario — var(--color-primary)</SwatchLabel>
            </Swatch>
            <Swatch>
              <SwatchColor bg="var(--color-white)" />
              <SwatchLabel>Blanco — var(--color-white)</SwatchLabel>
            </Swatch>
            <Swatch>
              <SwatchColor bg="var(--color-bg-light)" />
              <SwatchLabel>Fondo claro — var(--color-bg-light)</SwatchLabel>
            </Swatch>
            <Swatch>
              <SwatchColor bg="var(--color-text-dark)" />
              <SwatchLabel>Texto oscuro — var(--color-text-dark)</SwatchLabel>
            </Swatch>
          </SwatchGrid>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Tipografía</SectionTitle>
        <Content>
          <TypoRow>
            <div>Great Vibes (títulos decorativos)</div>
            <GreatVibesSample>Tu Próxima Aventura</GreatVibesSample>
          </TypoRow>
          <TypoRow>
            <div>Poppins — H1/H2/H3</div>
            <h2 style={{ margin: 0, color: "var(--color-primary)" }}>Encabezado de Sección</h2>
          </TypoRow>
          <TypoRow>
            <div>Poppins — párrafos</div>
            <p style={{ margin: 0, color: "var(--color-text-dark)" }}>
              Texto de ejemplo para cuerpo y descripciones en tarjetas.
            </p>
          </TypoRow>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Botones</SectionTitle>
        <Content>
          <ButtonRow>
            <PrimaryButton>Primario</PrimaryButton>
            <PrimaryButton style={{ borderRadius: "2rem" }}>Redondeado</PrimaryButton>
          </ButtonRow>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Campos de formulario</SectionTitle>
        <Content>
          <InputContainer>
            <FaSearch />
            <input
              type="text"
              placeholder="¿A dónde?"
              style={{ border: "none", background: "transparent", outline: "none", width: "100%", fontSize: "1rem" }}
            />
          </InputContainer>
          <div style={{ height: "0.8rem" }} />
          <InputContainer>
            <FaCalendarAlt />
            <input
              type="text"
              placeholder="Elige tus fechas"
              style={{ border: "none", background: "transparent", outline: "none", width: "100%", fontSize: "1rem" }}
            />
          </InputContainer>
          <div style={{ height: "0.8rem" }} />
          <InputContainer>
            <FaUser />
            <span style={{ color: "#6b6b6b", fontSize: "1rem" }}>Selector de viajeros (ejemplo)</span>
          </InputContainer>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Tarjetas</SectionTitle>
        <Content style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Card>
            <CardImage src="/maldivas.jpg" alt="Maldivas" />
            <CardContent>
              <h3 style={{ margin: 0, color: "var(--color-primary)" }}>Maldivas</h3>
              <p style={{ margin: 0, color: "var(--color-text-dark)" }}>Desde $1,800</p>
            </CardContent>
          </Card>
          <Card>
            <CardImage src="/roma.jpg" alt="Roma" />
            <CardContent>
              <h3 style={{ margin: 0, color: "var(--color-primary)" }}>Roma</h3>
              <p style={{ margin: 0, color: "var(--color-text-dark)" }}>Escapada 30% DTO</p>
            </CardContent>
          </Card>
        </Content>
      </Section>

      <Section>
        <SectionTitle>FAB (Scroll al inicio)</SectionTitle>
        <Content>
          <FabDemo aria-label="Subir al inicio">
            <FaArrowUp />
          </FabDemo>
          <p style={{ marginTop: "0.6rem", color: "var(--color-text-dark)" }}>
            Circular, translúcido con blur, borde suave y sombra.
          </p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Iconografía</SectionTitle>
        <Content style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <FaSearch size={20} />
          <FaCalendarAlt size={20} />
          <FaUser size={20} />
          <FaArrowUp size={20} />
        </Content>
      </Section>

      <Section>
        <SectionTitle>Accesibilidad</SectionTitle>
        <Content>
          <ul>
            <li>Contraste suficiente para texto y elementos interactivos.</li>
            <li>Estados de foco visibles en inputs y botones.</li>
            <li>Uso de `aria-label` en íconos interactivos (ej. FAB).</li>
            <li>Contenido semántico: encabezados, listas y roles adecuados.</li>
          </ul>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Páginas Implementadas</SectionTitle>
        <Content>
          <ul style={{ lineHeight: "1.8", color: "var(--color-text-dark)" }}>
            <li><strong>Inicio (/):</strong> Hero, búsqueda, destinos, ofertas, testimonios, FAQ y newsletter.</li>
            <li><strong>Ofertas (/ofertas):</strong> Listado de ofertas con filtros por categoría, temporada y precio.</li>
            <li><strong>Detalle de Oferta (/ofertas/[id]):</strong> Galería de imágenes, información detallada con tabs, formulario de reserva sticky y testimonios.</li>
            <li><strong>Destinos (/destinos):</strong> Catálogo de destinos con filtros.</li>
            <li><strong>Sobre Nosotros (/sobre-nosotros):</strong> Historia, misión y valores.</li>
            <li><strong>Contacto (/contacto):</strong> Formulario de contacto e información.</li>
            <li><strong>Guía de Estilos (/guia-estilos):</strong> Documentación del sistema de diseño.</li>
          </ul>
        </Content>
      </Section>

      <ComponentsSection />
    </Wrapper>
  );
}

// Componente separado para los ejemplos de componentes reutilizables
function ComponentsSection() {
  const [destino, setDestino] = useState("");
  const [fechaInicio, setFechaInicio] = useState<Date | null>(null);
  const [fechaFin, setFechaFin] = useState<Date | null>(null);
  const [viajeros, setViajeros] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fechaInicioStr = fechaInicio ? fechaInicio.toLocaleDateString() : "No especificada";
    const fechaFinStr = fechaFin ? fechaFin.toLocaleDateString() : "No especificada";
    alert(`Búsqueda: ${destino || "Cualquier destino"}, ${viajeros} viajero(s), desde ${fechaInicioStr} hasta ${fechaFinStr}`);
  };

  const sampleOffers: OfferData[] = [
    {
      id: 1,
      title: "Escapada a Roma",
      description: "Descubre la ciudad eterna con un descuento increíble.",
      discount: "30% DTO",
      destination: "Roma, Italia",
      validUntil: "Válido hasta 31 Dic",
      image: "/roma.jpg",
      themeColor: "25 85% 48%"
    },
    {
      id: 2,
      title: "Crucero Mediterráneo",
      description: "Viaja con un acompañante y paga solo un pasaje.",
      discount: "2x1",
      destination: "Mediterráneo",
      validUntil: "Reserva ahora",
      image: "/crucero.jpg",
      themeColor: "210 85% 55%"
    },
    {
      id: 3,
      title: "Todo Incluido Cancún",
      description: "Relájate en el Caribe con todo pagado.",
      discount: "Desde $998",
      destination: "Cancún, México",
      validUntil: "Oferta limitada",
      image: "/cancun.jpg",
      themeColor: "199 85% 42%"
    }
  ];

  const sampleTestimonials: TestimonialData[] = [
    {
      author: {
        name: "Ana García",
        handle: "@anaviajera",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "¡El mejor viaje de mi vida! La organización fue impecable y los destinos, espectaculares.",
      href: "https://twitter.com/anaviajera"
    },
    {
      author: {
        name: "Carlos Martínez",
        handle: "@carlosviajes",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Desde el primer contacto hasta el regreso a casa, todo fue perfecto. Gracias por hacer nuestras vacaciones soñadas una realidad."
    },
    {
      author: {
        name: "Laura Fernández",
        handle: "@lauraviajera",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Atención personalizada y destinos increíbles. Sin duda volveré a reservar con ellos."
    }
  ];

  return (
    <>
      <Section>
        <SectionTitle>Componentes Reutilizables</SectionTitle>
        <Content>
          <p style={{ marginBottom: "1.5rem", color: "var(--color-text-dark)" }}>
            Estos componentes están disponibles en <code>app/components/shared/</code> y pueden ser importados y utilizados en cualquier página.
          </p>
        </Content>
      </Section>

      <Section>
        <SectionTitle>1. SearchForm (Formulario de Búsqueda)</SectionTitle>
        <Content>
          <p style={{ marginBottom: "1rem", color: "var(--color-text-dark)" }}>
            Formulario de búsqueda con glassmorphism, incluye campos para destino, rango de fechas (inicio y fin) y número de viajeros.
          </p>
          <div style={{ background: "var(--color-bg-light)", padding: "2rem", borderRadius: "1rem" }}>
            <SearchForm
              destino={destino}
              setDestino={setDestino}
              fechaInicio={fechaInicio}
              setFechaInicio={setFechaInicio}
              fechaFin={fechaFin}
              setFechaFin={setFechaFin}
              viajeros={viajeros}
              setViajeros={setViajeros}
              onSubmit={handleSearchSubmit}
              showWrapper={false}
            />
          </div>
          <div style={{ marginTop: "1rem", background: "#f8f8f8", padding: "1rem", borderRadius: "0.5rem", fontSize: "0.9rem" }}>
            <strong>Uso:</strong>
            <pre style={{ margin: "0.5rem 0 0 0", overflow: "auto" }}>{`import SearchForm from "../components/shared/SearchForm";

<SearchForm
  destino={destino}
  setDestino={setDestino}
  fechaInicio={fechaInicio}
  setFechaInicio={setFechaInicio}
  fechaFin={fechaFin}
  setFechaFin={setFechaFin}
  viajeros={viajeros}
  setViajeros={setViajeros}
  onSubmit={handleSearchSubmit}
  buttonText="Buscar Viajes"
  showWrapper={true}
/>`}</pre>
          </div>
        </Content>
      </Section>

      <Section>
        <SectionTitle>2. FiltersBar (Barra de Filtros)</SectionTitle>
        <Content>
          <p style={{ marginBottom: "1rem", color: "var(--color-text-dark)" }}>
            Barra de filtros configurable con botones de categoría, temporada y rango de precios.
          </p>
          <FiltersBar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            showPriceFilter={true}
          />
          <div style={{ marginTop: "1rem", background: "#f8f8f8", padding: "1rem", borderRadius: "0.5rem", fontSize: "0.9rem" }}>
            <strong>Uso:</strong>
            <pre style={{ margin: "0.5rem 0 0 0", overflow: "auto" }}>{`import FiltersBar from "../components/shared/FiltersBar";

<FiltersBar
  selectedType={selectedType}
  setSelectedType={setSelectedType}
  selectedSeason={selectedSeason}
  setSelectedSeason={setSelectedSeason}
  selectedPriceRange={selectedPriceRange}
  setSelectedPriceRange={setSelectedPriceRange}
  showPriceFilter={true}
  onPageChange={(page) => setCurrentPage(page)}
/>`}</pre>
          </div>
        </Content>
      </Section>

      <Section>
        <SectionTitle>3. OffersGrid (Grid de Ofertas)</SectionTitle>
        <Content>
          <p style={{ marginBottom: "1rem", color: "var(--color-text-dark)" }}>
            Grid responsivo de tarjetas de ofertas con efectos hover y diseño moderno.
          </p>
          <OffersGridComponent offers={sampleOffers} ctaText="Ver oferta completa" />
          <div style={{ marginTop: "1rem", background: "#f8f8f8", padding: "1rem", borderRadius: "0.5rem", fontSize: "0.9rem" }}>
            <strong>Uso:</strong>
            <pre style={{ margin: "0.5rem 0 0 0", overflow: "auto" }}>{`import { OffersGridComponent, OfferData } from "../components/shared/OfferCard";

const offers: OfferData[] = [
  {
    id: 1,
    title: "Escapada a Roma",
    description: "Descubre la ciudad eterna...",
    discount: "30% DTO",
    destination: "Roma, Italia",
    validUntil: "Válido hasta 31 Dic",
    image: "/roma.jpg",
    themeColor: "25 85% 48%"
  }
];

<OffersGridComponent offers={offers} ctaText="Ver oferta" />`}</pre>
          </div>
        </Content>
      </Section>

      <Section>
        <SectionTitle>4. TestimonialsMarquee (Carrusel de Testimonios)</SectionTitle>
        <Content>
          <p style={{ marginBottom: "1rem", color: "var(--color-text-dark)" }}>
            Carrusel infinito de testimonios con animación automática y pausa al hover.
          </p>
          <TestimonialsMarquee 
            testimonials={sampleTestimonials}
            title="Lo que dicen nuestros viajeros"
            subtitle="Experiencias reales de personas que confiaron en nosotros."
            showTitles={true}
          />
          <div style={{ marginTop: "1rem", background: "#f8f8f8", padding: "1rem", borderRadius: "0.5rem", fontSize: "0.9rem" }}>
            <strong>Uso:</strong>
            <pre style={{ margin: "0.5rem 0 0 0", overflow: "auto" }}>{`import TestimonialsMarquee, { TestimonialData } from "../components/shared/TestimonialsMarquee";

const testimonials: TestimonialData[] = [
  {
    author: {
      name: "Ana García",
      handle: "@anaviajera",
      avatar: "https://example.com/avatar.jpg"
    },
    text: "¡El mejor viaje de mi vida!",
    href: "https://twitter.com/anaviajera"
  }
];

<TestimonialsMarquee 
  testimonials={testimonials}
  title="Lo que dicen nuestros viajeros"
  subtitle="Experiencias reales"
  showTitles={true}
/>`}</pre>
          </div>
        </Content>
      </Section>

      <Section>
        <SectionTitle>Propiedades y Configuración</SectionTitle>
        <Content>
          <div style={{ color: "var(--color-text-dark)" }}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>SearchForm Props:</h3>
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><code>destino, setDestino</code>: Estado del campo de destino</li>
              <li><code>fechaInicio, setFechaInicio</code>: Estado del selector de fecha de inicio</li>
              <li><code>fechaFin, setFechaFin</code>: Estado del selector de fecha de fin</li>
              <li><code>viajeros, setViajeros</code>: Estado del selector de viajeros</li>
              <li><code>onSubmit</code>: Función a ejecutar al enviar el formulario</li>
              <li><code>buttonText</code>: Texto del botón (opcional, default: "Buscar Viajes")</li>
              <li><code>showWrapper</code>: Mostrar wrapper con ancho completo (opcional, default: true)</li>
            </ul>

            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>FiltersBar Props:</h3>
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><code>typeFilters</code>: Array de filtros de tipo (opcional)</li>
              <li><code>seasonFilters</code>: Array de filtros de temporada (opcional)</li>
              <li><code>selectedType, setSelectedType</code>: Estado del filtro de tipo</li>
              <li><code>selectedSeason, setSelectedSeason</code>: Estado del filtro de temporada</li>
              <li><code>selectedPriceRange, setSelectedPriceRange</code>: Estado del filtro de precio</li>
              <li><code>showPriceFilter</code>: Mostrar selector de precio (opcional, default: false)</li>
              <li><code>onPageChange</code>: Callback al cambiar filtros (opcional)</li>
              <li><code>onReset</code>: Callback al resetear filtros (opcional)</li>
            </ul>

            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>OfferCard Props:</h3>
            <ul style={{ marginBottom: "1.5rem" }}>
              <li><code>offer</code>: Objeto con datos de la oferta (OfferData)</li>
              <li><code>ctaText</code>: Texto del botón CTA (opcional, default: "Ver oferta completa")</li>
            </ul>

            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>TestimonialsMarquee Props:</h3>
            <ul>
              <li><code>testimonials</code>: Array de testimonios (TestimonialData[])</li>
              <li><code>title</code>: Título de la sección (opcional)</li>
              <li><code>subtitle</code>: Subtítulo de la sección (opcional)</li>
              <li><code>showTitles</code>: Mostrar título y subtítulo (opcional, default: true)</li>
            </ul>
          </div>
        </Content>
      </Section>
    </>
  );
}