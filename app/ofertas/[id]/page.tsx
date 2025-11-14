"use client";
import React, { useState, use, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlane, FaBed, FaHiking, FaShieldAlt, FaCheckCircle, FaStar, FaMinus, FaPlus, FaCalendarCheck, FaCalendarAlt } from "react-icons/fa";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import Wrapper from "../../components/shared/Wrapper";
import { getOfferById } from "../../data/offers";
import TestimonialsMarquee from "../../components/shared/TestimonialsMarquee";
import { testimonials } from "../../data/testimonials";

const PageContainer = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding-top: 70px;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%);
  padding: 3rem 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 3rem;
  color: var(--color-white);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin: 0;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 400px repeat(2, 200px);
  gap: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-rows: 300px repeat(2, 150px);
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const SecondaryImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SecondaryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const InfoCard = styled.div`
  background: var(--color-white);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(157, 74, 188, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h3`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--font-poppins);
  color: var(--color-text-dark);
  font-size: 0.95rem;
  line-height: 1.6;
  
  svg {
    color: var(--color-primary);
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`;

const BookingCard = styled.div`
  background: var(--color-white);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(157, 74, 188, 0.15);
  position: sticky;
  top: 90px;
  
  @media (max-width: 1024px) {
    position: relative;
    top: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const PriceLabel = styled.div`
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-family: var(--font-poppins);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-dark);
  }
`;

const SummaryBox = styled.div`
  background: rgba(157, 74, 188, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const SummaryTitle = styled.h4`
  font-family: var(--font-poppins);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  color: var(--color-text-dark);
  
  svg {
    color: var(--color-primary);
    font-size: 1rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  border-radius: 0.75rem;
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  color: var(--color-text-dark);
  background: var(--color-bg-light);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: var(--color-white);
    box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
  }
  
  &::placeholder {
    color: rgba(107, 107, 107, 0.5);
  }
`;

const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__input-container {
    width: 100%;
    position: relative;
    
    input {
      width: 100%;
      padding: 0.875rem 1rem 0.875rem 2.75rem;
      border: 1px solid rgba(157, 74, 188, 0.2);
      border-radius: 0.75rem;
      font-family: var(--font-poppins);
      font-size: 0.95rem;
      color: var(--color-text-dark);
      background: var(--color-bg-light);
      transition: all 0.2s ease;
      cursor: pointer;
      
      &:focus {
        outline: none;
        border-color: var(--color-primary);
        background: var(--color-white);
        box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
      }
      
      &::placeholder {
        color: rgba(107, 107, 107, 0.5);
      }
    }
  }
`;

const CalendarIcon = styled(FaCalendarAlt)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-primary);
  font-size: 1.1rem;
  pointer-events: none;
  z-index: 1;
`;

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(157, 74, 188, 0.05);
  border-radius: 0.75rem;
  color: var(--color-primary);
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  font-weight: 500;
  
  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

const TravelersControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  border-radius: 0.75rem;
  background: var(--color-bg-light);
`;

const TravelersButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #7c398f;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: rgba(157, 74, 188, 0.3);
    cursor: not-allowed;
    transform: scale(1);
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const TravelersCount = styled.span`
  font-family: var(--font-poppins);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-dark);
  min-width: 40px;
  text-align: center;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 1rem;
  font-family: var(--font-poppins);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.3);
  
  &:hover {
    background: #7c398f;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(157, 74, 188, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  font-family: var(--font-poppins);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgba(157, 74, 188, 0.1);
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid ${props => props.$active ? 'var(--color-primary)' : 'transparent'};
  font-family: var(--font-poppins);
  font-size: 1rem;
  font-weight: ${props => props.$active ? '600' : '500'};
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-dark)'};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;
  
  &:hover {
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

interface OfferDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function OfferDetailPage({ params }: OfferDetailPageProps) {
  // Unwrap params con React.use() (Next.js 15+)
  const { id } = use(params);
  
  const [travelers, setTravelers] = useState(2);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [calculatedEndDate, setCalculatedEndDate] = useState<Date | null>(null);
  const [activeTab, setActiveTab] = useState<"incluye" | "itinerario" | "faqs">("incluye");
  
  // Obtener los datos de la oferta
  const offer = getOfferById(Number(id));
  
  // Calcular fecha de fin automáticamente
  useEffect(() => {
    if (selectedStartDate && offer) {
      const endDate = new Date(selectedStartDate);
      endDate.setDate(endDate.getDate() + offer.days - 1);
      setCalculatedEndDate(endDate);
    } else {
      setCalculatedEndDate(null);
    }
  }, [selectedStartDate, offer]);

  // Si no existe la oferta, mostrar mensaje
  if (!offer) {
    return (
      <Wrapper>
        <Header currentPage="ofertas" />
        <PageContainer>
          <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
            <h1 style={{ color: "var(--color-primary)", fontFamily: "var(--font-poppins)" }}>
              Oferta no encontrada
            </h1>
            <p style={{ color: "var(--color-text-dark)", marginTop: "1rem" }}>
              La oferta que buscas no existe o ya no está disponible.
            </p>
            <a href="/ofertas" style={{ color: "var(--color-primary)", marginTop: "2rem", display: "inline-block" }}>
              ← Volver a ofertas
            </a>
          </div>
        </PageContainer>
        <Footer />
      </Wrapper>
    );
  }

  const handleReserve = () => {
    const fechasTexto = selectedStartDate && calculatedEndDate 
      ? `Del ${selectedStartDate.toLocaleDateString('es-ES')} al ${calculatedEndDate.toLocaleDateString('es-ES')}`
      : "Por seleccionar";
    alert(`¡Reserva iniciada para ${offer.title}!\nViajeros: ${travelers}\nFechas: ${fechasTexto}`);
  };

  const handlePersonalize = () => {
    alert(`Personalizando tu viaje a ${offer.destination}...`);
  };
  
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Wrapper>
      <Header currentPage="ofertas" />
      <PageContainer>
        <HeroSection>
          <HeroTitle className="great-vibes">{offer.heroTitle}</HeroTitle>
          <HeroSubtitle>{offer.heroSubtitle}</HeroSubtitle>
        </HeroSection>

        <ContentContainer>
          <MainContent>
            <ImageGallery>
              <MainImage 
                src={offer.mainImage} 
                alt={`${offer.title} - Vista principal`} 
              />
              <SecondaryImages>
                <SecondaryImage 
                  src={offer.secondaryImages[0]} 
                  alt={`${offer.title} - Vista 2`} 
                />
                <SecondaryImage 
                  src={offer.secondaryImages[1]} 
                  alt={`${offer.title} - Vista 3`} 
                />
              </SecondaryImages>
            </ImageGallery>

            <InfoCard>
              <TabsContainer>
                <Tab 
                  $active={activeTab === "incluye"} 
                  onClick={() => setActiveTab("incluye")}
                >
                  Qué incluye
                </Tab>
                <Tab 
                  $active={activeTab === "itinerario"} 
                  onClick={() => setActiveTab("itinerario")}
                >
                  Itinerario
                </Tab>
                <Tab 
                  $active={activeTab === "faqs"} 
                  onClick={() => setActiveTab("faqs")}
                >
                  FAQs
                </Tab>
              </TabsContainer>

              {activeTab === "incluye" && (
                <>
                  <SectionTitle>Lo que este paquete te ofrece</SectionTitle>
                  <FeaturesList>
                    {offer.includes.map((item, index) => (
                      <FeatureItem key={index}>
                        <FaCheckCircle />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </>
              )}

              {activeTab === "itinerario" && (
                <>
                  <SectionTitle>Itinerario día a día</SectionTitle>
                  <FeaturesList>
                    {offer.itinerary.map((item, index) => (
                      <FeatureItem key={index}>
                        <FaCheckCircle />
                        <span><strong>{item.day}:</strong> {item.description}</span>
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </>
              )}

              {activeTab === "faqs" && (
                <>
                  <SectionTitle>Preguntas frecuentes</SectionTitle>
                  <FeaturesList>
                    {offer.faqs.map((item, index) => (
                      <FeatureItem key={index}>
                        <FaCheckCircle />
                        <span><strong>{item.question}</strong> {item.answer}</span>
                      </FeatureItem>
                    ))}
                  </FeaturesList>
                </>
              )}
            </InfoCard>
          </MainContent>

          <aside>
            <BookingCard>
              <PriceLabel>Desde</PriceLabel>
              <Price>
                ${offer.price.toLocaleString()} <span>/persona</span>
              </Price>

              <SummaryBox>
                <SummaryTitle>Resumen del Viaje</SummaryTitle>
                <SummaryItem>
                  <FaPlane />
                  <span>{offer.days} Días / {offer.nights} Noches</span>
                </SummaryItem>
                <SummaryItem>
                  <FaBed />
                  <span>Alojamiento incluido</span>
                </SummaryItem>
                <SummaryItem>
                  <FaHiking />
                  <span>Actividades guiadas</span>
                </SummaryItem>
              </SummaryBox>

              <FormGroup>
                <Label>Fecha de Inicio</Label>
                <DatePickerWrapper>
                  <CalendarIcon />
                  <DatePicker
                    selected={selectedStartDate}
                    onChange={(date) => setSelectedStartDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona fecha de inicio"
                    locale="es"
                  />
                </DatePickerWrapper>
                {selectedStartDate && calculatedEndDate && (
                  <DateInfo>
                    <FaCalendarCheck />
                    <div>
                      <strong>Viaje:</strong> {formatDate(selectedStartDate)} al {formatDate(calculatedEndDate)}
                      <br />
                      <small>({offer.days} días / {offer.nights} noches)</small>
                    </div>
                  </DateInfo>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Viajeros</Label>
                <TravelersControl>
                  <TravelersButton 
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    disabled={travelers <= 1}
                  >
                    <FaMinus />
                  </TravelersButton>
                  <TravelersCount>{travelers}</TravelersCount>
                  <TravelersButton 
                    onClick={() => setTravelers(Math.min(10, travelers + 1))}
                    disabled={travelers >= 10}
                  >
                    <FaPlus />
                  </TravelersButton>
                </TravelersControl>
              </FormGroup>

              <PrimaryButton onClick={handleReserve}>
                Reservar Ahora
              </PrimaryButton>
              
              <SecondaryButton onClick={handlePersonalize}>
                Personalizar Viaje
              </SecondaryButton>
            </BookingCard>
          </aside>
        </ContentContainer>

        <TestimonialsMarquee 
          testimonials={testimonials}
          title="Opiniones de nuestros viajeros"
          subtitle="Experiencias reales que te inspirarán a viajar."
          showTitles={true}
        />
      </PageContainer>
      <Footer />
    </Wrapper>
  );
}

