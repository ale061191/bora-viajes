"use client";
import React from "react";
import styled from "styled-components";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Wrapper from "../components/shared/Wrapper";
import CTABanner from "../components/shared/CTABanner";

// --- Styled Components ---

const PageContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/vision-mission.png'); /* Placeholder */
  background-size: cover;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: var(--color-white);
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  h2 {
    font-family: var(--font-great-vibes);
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  h3 {
    font-family: var(--font-poppins);
    font-size: 1.5rem;
    color: var(--color-text-dark);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  p {
    font-family: var(--font-poppins);
    color: var(--color-text-dark);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ValuesSection = styled.section`
  background: var(--color-bg-light);
  padding: 4rem 1rem;
  text-align: center;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`;

const ValueCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
  cursor: pointer;
  padding: 1.5rem;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: var(--bg-image);
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    z-index: 0;
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.3s ease;
    z-index: 1;
  }

  &:hover::after {
    background: rgba(157, 74, 188, 0.75);
  }

  h3 {
    position: relative;
    z-index: 2;
    font-family: var(--font-poppins);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }

  p {
    position: relative;
    z-index: 2;
    font-family: var(--font-poppins);
    font-size: 1rem;
    font-weight: 400;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease 0.1s;
    max-width: 90%;
  }

  &:hover h3 {
    transform: translateY(-10px);
  }

  &:hover p {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ValuePropSection = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// --- Component ---

export default function NosotrosPage() {
  return (
    <Wrapper>
      <Header currentPage="nosotros" />

      <HeroSection>
        <HeroContent>
          <HeroTitle>Sobre Nosotros</HeroTitle>
          <HeroSubtitle>Diseñando experiencias inolvidables, un destino a la vez.</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <TwoColumnContainer>
          <TextContent>
            <h2>Nuestra Visión</h2>
            <p>
              Ser la agencia de viajes líder en innovación y servicio personalizado,
              reconocida por transformar sueños en realidades tangibles. Aspiramos a conectar
              culturas y personas a través de experiencias de viaje auténticas y memorables,
              estableciendo nuevos estándares de excelencia en la industria turística.
            </p>
            <h2>Nuestra Misión</h2>
            <p>
              Brindar asesoría experta y soluciones de viaje integrales que superen las
              expectativas de nuestros clientes. Nos dedicamos a cuidar cada detalle,
              desde la planificación hasta el regreso, asegurando viajes seguros, placenteros
              y llenos de descubrimientos, respaldados por tecnología de vanguardia y un equipo humano apasionado.
            </p>
          </TextContent>
          <ImageContainer>
            {/* Placeholder for Vision Image - using a div for now if image missing, or img tag */}
            <img src="/images/vision-mission.png" alt="Visión y Misión" />
          </ImageContainer>
        </TwoColumnContainer>
      </Section>

      <ValuesSection>
        <h2 className="great-vibes" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Nuestros Valores</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-dark)' }}>
          Los pilares que sostienen cada uno de nuestros servicios y relaciones.
        </p>

        <ValuesGrid>
          {[
            { title: 'Felicidad', desc: 'Creamos momentos mágicos que perduran para siempre en tu memoria.' },
            { title: 'Integridad', desc: 'La ética y la rectitud guían cada uno de nuestros pasos.' },
            { title: 'Trabajo en Equipo', desc: 'Juntos llegamos más lejos, sumando esfuerzos por un objetivo común.' },
            { title: 'Honestidad', desc: 'La transparencia es nuestra base para construir confianza sólida.' },
            { title: 'Responsabilidad', desc: 'Tu satisfacción y seguridad son nuestra máxima prioridad y compromiso.' },
            { title: 'Pasión por el Servicio', desc: 'Nos desvivimos por ofrecerte una atención única y a tu medida.' },
            { title: 'Respeto', desc: 'Valoramos profundamente a cada persona que forma parte de nuestra comunidad.' },
            { title: 'Liderazgo', desc: 'Marcamos el rumbo con innovación y excelencia en el turismo.' },
            { title: 'Compromiso', desc: 'Damos siempre el extra para superar lo que esperas de nosotros.' }
          ].map((item, idx) => (
            <ValueCard key={idx} style={{ '--bg-image': `url('/images/values/value-${idx + 1}.png')` } as React.CSSProperties}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <ValuePropSection>
        <TwoColumnContainer>
          <ImageContainer>
            <img src="/images/value-proposition.png" alt="Propuesta de Valor" />
          </ImageContainer>
          <TextContent>
            <h2>Propuesta de Valor</h2>
            <h3>Tecnología y Servicio a tu Alcance</h3>
            <p>
              En Bora Viajes, combinamos la calidez de la atención humana con la eficiencia de la tecnología moderna.
              Te ofrecemos acceso exclusivo a un inventario global de hoteles, vuelos y experiencias a precios competitivos.
            </p>
            <p>
              Nuestra plataforma y equipo de expertos trabajan en sincronía para garantizarte:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Atención personalizada 24/7.',
                'Mejores tarifas negociadas directamente.',
                'Gestión integral de tu itinerario.',
                'Seguridad y respaldo en cada viaje.'
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-dark)' }}>
                  <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </TextContent>
        </TwoColumnContainer>
      </ValuePropSection>

      <CTABanner text="¿Listo para vivir la experiencia Bora Viajes?" />
      <Footer />
    </Wrapper>
  );
}
