"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Wrapper from "./components/shared/Wrapper";
import TestimonialsMarquee from "./components/shared/TestimonialsMarquee";
import HeroSection from "./components/shared/HeroSection";
import ServicesGrid from "./components/shared/ServicesGrid";
import CTABanner from "./components/shared/CTABanner";
import OfficesMap from "./components/shared/OfficesMap";
import FAQ, { FAQItemData } from "./components/shared/FAQ";
import { testimonials } from "./data/testimonials";

const Section = styled.section`
  padding: 3rem 0;
  background: transparent;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 2rem 0.5rem;
    max-width: 100vw;
  }
  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
    max-width: 100vw;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-great-vibes);
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const NewsletterSection = styled.section`
  background: #f7eafd;
  padding: 2.5rem 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

const NewsletterInput = styled.input`
  background: var(--color-bg-light);
  border-radius: 1rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  padding: 0.75rem 1rem;
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
    max-width: 100%;
  }
`;

const NewsletterButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #7c398f;
  }
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

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

  // Función para manejar la suscripción al newsletter
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias por suscribirte, ${newsletter}!`);
    setNewsletter("");
  };

  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <ServicesGrid />
      <CTABanner text="¡Tu próxima aventura comienza aquí, viaja con nosotros!" />
      <FAQ items={faqItems} />
      <OfficesMap />
      <TestimonialsMarquee
        testimonials={testimonials}
        title="Lo que dicen nuestros viajeros"
        subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
        showTitles={true}
        rating={4.6}
        reviewCount={2847}
      />
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
    </Wrapper>
  );
}
