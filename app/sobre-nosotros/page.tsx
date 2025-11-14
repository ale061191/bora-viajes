"use client";
import React from "react";
import styled from "styled-components";
import { FaShieldAlt, FaHeart, FaStar, FaPlane, FaWhatsapp } from "react-icons/fa";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Wrapper from "../components/shared/Wrapper";

const Hero = styled.section`
  background: url('/hero.jpg') center/cover no-repeat;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    min-height: 350px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(157,74,188,0.15) 0%, rgba(241,241,241,0.75) 100%);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-primary);
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-dark);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-poppins);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-light);
`;

const ContentSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-dark);
  font-family: var(--font-poppins);
  margin: 0;
`;

const TimelineSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const TimelineTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding: 0;
  
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(157, 74, 188, 0.2);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  justify-content: ${props => props.$align === 'left' ? 'flex-start' : 'flex-end'};
  margin-bottom: 4rem;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

const TimelineContent = styled.div<{ $align: 'left' | 'right' }>`
  width: 45%;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.08);
  text-align: ${props => props.$align === 'left' ? 'right' : 'left'};
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const TimelineYear = styled.h3`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-dark);
  margin: 0;
  font-family: var(--font-poppins);
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 1.5rem;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.3);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 20px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const MissionSection = styled.section`
  background: white;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const MissionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const MissionTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const MissionQuote = styled.blockquote`
  border-left: 4px solid var(--color-primary);
  padding: 1.5rem 2rem;
  margin: 0;
  background: var(--color-bg-light);
  border-radius: 0.5rem;
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const QuoteText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--color-text-dark);
  font-style: italic;
  margin: 0;
  font-family: var(--font-poppins);
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const ValuesSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(157, 74, 188, 0.15);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #b84fc7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 8px 20px rgba(157, 74, 188, 0.25);
`;

const ValueTitle = styled.h3`
  font-family: var(--font-poppins);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
`;

const ValueText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-dark);
  margin: 0;
  font-family: var(--font-poppins);
`;

const CTASection = styled.section`
  background: var(--color-bg-light);
  padding: 4rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const CTATitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.05rem;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  font-family: var(--font-poppins);
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: var(--font-poppins);
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.25);
  
  &:hover {
    background: #7c398f;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(157, 74, 188, 0.35);
  }
  
  svg {
    font-size: 1.3rem;
  }
`;

const FooterNote = styled.div`
  background: white;
  padding: 2rem;
  text-align: center;
  color: var(--color-text-dark);
  font-size: 0.9rem;
  font-family: var(--font-poppins);
  border-top: 1px solid rgba(157, 74, 188, 0.1);
`;

export default function SobreNosotrosPage() {
  const timelineData = [
    {
      year: "2015",
      text: "Nació la idea: un pequeño equipo con un gran sueño: fundar la agencia para ofrecer experiencias de viaje auténticas y personalizadas.",
      align: "right" as const
    },
    {
      year: "2017",
      text: "Organizamos nuestro primer viaje grupal internacional, llevando a 20 viajeros en una aventura inolvidable por el sudeste asiático.",
      align: "left" as const
    },
    {
      year: "2020",
      text: "Expandimos nuestros horizontes, abriendo nuevas rutas en Sudamérica y África, y fortaleciendo nuestro compromiso con el turismo sostenible.",
      align: "right" as const
    },
    {
      year: "Hoy",
      text: "Con más de 10,000 viajeros felices, seguimos innovando para hacer de cada viaje una obra de arte, única e irrepetible.",
      align: "left" as const
    }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Confianza",
      text: "La tranquilidad es nuestra prioridad. Operamos con total transparencia y te acompañamos en cada paso de tu aventura."
    },
    {
      icon: <FaHeart />,
      title: "Pasión",
      text: "Amamos lo que hacemos. Cada pasión se refleja en cada detalle, desde la planificación hasta tu regreso a casa."
    },
    {
      icon: <FaStar />,
      title: "Excelencia",
      text: "Buscamos siempre las experiencias más extraordinarias, ofreciendo servicios de la más alta calidad y experiencias verdaderamente únicas."
    }
  ];

  return (
    <Wrapper>
      <Header currentPage="sobre-nosotros" />
      
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle className="great-vibes">Nuestra Historia</HeroTitle>
          <HeroSubtitle>
            Un viaje que comenzó con un sueño: compartir la belleza del mundo contigo.
          </HeroSubtitle>
        </HeroContent>
      </Hero>
      
      <PageContainer>
        <ContentSection>
          <IntroText>
            Nuestra agencia nació de una pasión incontrolable por explorar, descubrir y 
            conectar. Creemos que viajar es más que visitar nuevos lugares: es una oportunidad 
            para enriquecer el alma, crear recuerdos imborrables y comprender mejor el mundo 
            que compartimos.
          </IntroText>
        </ContentSection>

        <TimelineSection>
          <TimelineTitle>Nuestra Trayectoria</TimelineTitle>
          <Timeline>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} $align={item.align}>
                <TimelineContent $align={item.align}>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineText>{item.text}</TimelineText>
                </TimelineContent>
                <TimelineDot>
                  <FaPlane />
                </TimelineDot>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>

        <MissionSection>
          <MissionContainer>
            <MissionTitle>Nuestra Misión</MissionTitle>
            <MissionQuote>
              <QuoteText>
                "Diseñar viajes que transformen, conecten y dejen una huella positiva. Buscamos 
                inspirar la curiosidad y el respeto por nuestro planeta, creando experiencias que 
                perduren toda la vida."
              </QuoteText>
            </MissionQuote>
          </MissionContainer>
        </MissionSection>

        <ValuesSection>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueText>{value.text}</ValueText>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        <CTASection>
          <CTATitle>¿Listo para tu próxima aventura?</CTATitle>
          <CTASubtitle>
            Permítenos ser parte de tu historia. Juntos, crearemos el viaje que siempre has soñado.
          </CTASubtitle>
          <CTAButton 
            href="https://wa.me/584126851090?text=Hola,%20estoy%20interesado%20en%20informacion%20sobre%20ofertas%20y%20paquetes%20de%20viaje"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos Ahora <FaWhatsapp />
          </CTAButton>
        </CTASection>

        <FooterNote>
          © 2024 Agencia de Viajes Aventuras. Todos los derechos reservados.
        </FooterNote>
      </PageContainer>
      
      <Footer />
    </Wrapper>
  );
}

