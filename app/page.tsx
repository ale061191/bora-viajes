"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Wrapper from "./components/shared/Wrapper";
import SimpleSearchForm from "./components/shared/SimpleSearchForm";
import TestimonialsMarquee from "./components/shared/TestimonialsMarquee";
import ScrollTopButton from "./components/shared/ScrollTopButton";
import HeroSection from "./components/shared/HeroSection";
import { DestinationCard } from "./components/shared/DestinationCard";
import { OffersGridComponent } from "./components/shared/OfferCard";
import FAQ, { FAQItemData } from "./components/shared/FAQ";
import { testimonials } from "./data/testimonials";
import { getAllOffers } from "./data/offers";

const Section = styled.section`
  padding: 3rem 0;
  background: var(--color-white);
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 2rem 0.5rem;
    max-width: 100vw;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    max-width: 100vw;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-great-vibes);
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  color: var(--color-text-dark);
  margin-bottom: 2rem;
`;

const CardGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }
`;

const DestinationCardWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
`;


const NewsletterSection = styled.section`
  background: #f7eafd;
  padding: 2.5rem 0;
  text-align: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NewsletterInput = styled.input`
  background: var(--color-bg-light);
  border-radius: 1rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  padding: 0.5rem 1rem;
  outline: none;
  font-family: var(--font-poppins);
  font-size: 1rem;
  width: 280px;
  max-width: 100%;
  color: var(--color-text-dark);
  
  &::placeholder {
    color: var(--color-text-dark);
    opacity: 0.7;
  }
  
  @media (max-width: 600px) {
    width: 100%;
    max-width: 280px;
  }
`;

const NewsletterButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #7c398f;
  }
`;


// Datos de ejemplo
const destinos = [
  {
    nombre: "Maldivas",
    precio: "$1,800",
    img: "/maldivas.jpg",
    flag: "🇲🇻",
    stats: "Más de 1,200 resorts • 18 paquetes exclusivos",
    themeColor: "199 85% 42%",
    href: "/ofertas"
  },
  {
    nombre: "Kyoto",
    precio: "$2,200",
    img: "/kyoto.jpg",
    flag: "🇯🇵",
    stats: "Experiencias culturales únicas • 22 circuitos guiados",
    themeColor: "29 70% 38%",
    href: "/ofertas"
  },
  {
    nombre: "Patagonia",
    precio: "$1,800",
    img: "/patagonia.jpg",
    flag: "🇦🇷",
    stats: "Aventuras al aire libre • 14 rutas escénicas",
    themeColor: "210 56% 32%",
    href: "/ofertas"
  },
];


const faqItems: FAQItemData[] = [
  {
    question: "¿Cómo puedo reservar mi viaje?",
    answer: "Reservar es muy fácil. Puedes usar nuestro formulario de búsqueda en la página principal, contactarnos directamente por teléfono o WhatsApp, o visitarnos en nuestra oficina. Nuestro equipo te guiará en cada paso del proceso y te ayudará a encontrar el paquete perfecto para ti."
  },
  {
    question: "¿Qué incluyen los paquetes de viaje?",
    answer: "Nuestros paquetes son personalizables según tus necesidades. Generalmente incluyen vuelos, alojamiento, traslados, seguro de viaje y en muchos casos tours guiados. Te proporcionamos un desglose detallado de todo lo incluido antes de confirmar tu reserva."
  },
  {
    question: "¿Puedo cancelar o modificar mi reserva?",
    answer: "Sí, entendemos que los planes pueden cambiar. Ofrecemos opciones flexibles de cancelación y modificación según el tipo de paquete que elijas. Las condiciones específicas se detallan al momento de la reserva. Te recomendamos contratar nuestro seguro de cancelación para mayor tranquilidad."
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer: "¡Por supuesto! Trabajamos con diversas opciones de financiamiento para que puedas hacer realidad tu viaje soñado. Aceptamos pagos con tarjetas de crédito, transferencias bancarias y ofrecemos planes de pago a plazos sin intereses en paquetes seleccionados."
  },
  {
    question: "¿Necesito visa para viajar a estos destinos?",
    answer: "Los requisitos de visa varían según tu nacionalidad y el destino. Nuestro equipo te asesorará sobre los documentos necesarios y, en muchos casos, podemos ayudarte con el proceso de solicitud de visa. Te proporcionamos una lista completa de requisitos al confirmar tu destino."
  },
  {
    question: "¿Qué medidas de seguridad tienen para los viajeros?",
    answer: "Tu seguridad es nuestra prioridad. Todos nuestros paquetes incluyen seguro de viaje, trabajamos solo con proveedores certificados y de confianza, y mantenemos comunicación 24/7 durante tu viaje. Además, te proporcionamos información actualizada sobre las condiciones de cada destino."
  }
];

export default function Home() {
  const [newsletter, setNewsletter] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Función para manejar la suscripción al newsletter
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias por suscribirte, ${newsletter}!`);
    setNewsletter("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Wrapper>
      <Header />
      <HeroSection
        title="Descubre el Mundo con Nosotros"
        subtitle="Más de 10,000 viajeros felices han confiado en nosotros. Planifica tu viaje perfecto con expertos que conocen cada destino."
        backgroundImage="/hero.jpg"
      >
        <SimpleSearchForm
          enableRealSearch={true}
          buttonText="Buscar Viajes"
          showWrapper={true}
        />
      </HeroSection>
      <Section id="destinos">
        <SectionTitle className="great-vibes">Destinos que Enamoran</SectionTitle>
        <SectionSubtitle>Los favoritos de nuestros viajeros. Experiencias únicas con los mejores precios garantizados.</SectionSubtitle>
        <CardGrid>
          {destinos.map((dest, index) => (
            <DestinationCardWrapper key={dest.nombre || index}>
              <DestinationCard
                destination={{
                  name: dest.nombre,
                  price: dest.precio,
                  image: dest.img,
                  flag: dest.flag,
                  stats: dest.stats,
                  themeColor: dest.themeColor,
                  href: dest.href
                }}
                ctaText="Explorar ahora"
              />
            </DestinationCardWrapper>
          ))}
        </CardGrid>
      </Section>
      <Section id="ofertas">
        <SectionTitle className="great-vibes">Ofertas Irresistibles</SectionTitle>
        <SectionSubtitle>Ahorra hasta 40% en paquetes seleccionados. ¡Plazas limitadas! Reserva ahora y asegura tu aventura.</SectionSubtitle>
        <OffersGridComponent offers={getAllOffers().slice(0, 3)} />
      </Section>
      <TestimonialsMarquee 
        testimonials={testimonials}
        title="Lo que dicen nuestros viajeros"
        subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
        showTitles={true}
      />
      <FAQ items={faqItems} />
      <NewsletterSection>
        <SectionTitle className="great-vibes">¡No te pierdas nuestras ofertas exclusivas!</SectionTitle>
        <SectionSubtitle>Únete a más de 10,000 viajeros que reciben descuentos especiales, consejos de viaje y destinos increíbles directo en su bandeja de entrada.</SectionSubtitle>
        <NewsletterForm onSubmit={handleNewsletter}>
          <NewsletterInput
            type="email"
            placeholder="Tu correo electrónico"
            value={newsletter}
            onChange={e => setNewsletter(e.target.value)}
            required
          />
          <NewsletterButton type="submit">¡Quiero ofertas!</NewsletterButton>
        </NewsletterForm>
      </NewsletterSection>
      <Footer />
      <ScrollTopButton $show={showScrollTop} />
    </Wrapper>
  );
}
