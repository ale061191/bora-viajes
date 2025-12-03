"use client";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaCheckCircle } from 'react-icons/fa';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import OfficesMap from '../components/shared/OfficesMap';
import CTABanner from '../components/shared/CTABanner';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const ContactHero = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/values/value-2.png'); /* Reusing a nice travel image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 5rem;
  color: white;
  text-align: center;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  color: white;
  text-align: center;
  max-width: 700px;
  margin: 1rem auto 0;
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoSection = styled.div`
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const SectionText = styled.p`
  font-family: var(--font-poppins);
  font-size: 1rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(157, 74, 188, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const DetailContent = styled.div`
  h3 {
    font-family: var(--font-poppins);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-dark);
    margin-bottom: 0.2rem;
  }
  
  p, a, li {
    font-family: var(--font-poppins);
    font-size: 0.95rem;
    color: #666;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--color-primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialBtn = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #8a3fa6;
    transform: translateY(-3px);
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
  border: 1px solid rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 0.5rem;
  font-family: var(--font-poppins);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9f9f9;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 0.5rem;
  font-family: var(--font-poppins);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9f9f9;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-family: var(--font-poppins);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 15px rgba(157, 74, 188, 0.2);

  &:hover {
    background: #8a3fa6;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(157, 74, 188, 0.3);
  }
`;

const MapContainer = styled.div`
  width: 100%;
  padding-bottom: 4rem;
`;

const SuccessOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  color: #28a745;
  margin-bottom: 1rem;
  animation: ${scaleIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const SuccessTitle = styled.h3`
  font-family: var(--font-poppins);
  font-size: 1.5rem;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const SuccessMessage = styled.p`
  font-family: var(--font-poppins);
  color: #666;
  text-align: center;
`;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset after a few seconds if desired, or leave it
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Wrapper>
      <Header currentPage="contacto" />
      <ContactHero>
        <div style={{ zIndex: 1, textAlign: 'center' }}>
          <HeroTitle>Contáctanos</HeroTitle>
          <HeroSubtitle>Estamos listos para hacer realidad el viaje de tus sueños</HeroSubtitle>
        </div>
      </ContactHero>

      <ContentContainer>
        <InfoSection>
          <SectionTitle>Estamos aquí para ayudarte</SectionTitle>
          <SectionText>
            ¿Tienes alguna pregunta sobre nuestros destinos o servicios?
            No dudes en contactarnos. Nuestro equipo está listo para planificar
            tu próxima aventura inolvidable.
          </SectionText>

          <ContactDetail>
            <IconWrapper><FaPhone /></IconWrapper>
            <DetailContent>
              <h3>Llámanos</h3>
              <p><a href="tel:+584124265960">+58 412 426 5960</a></p>
            </DetailContent>
          </ContactDetail>

          <ContactDetail>
            <IconWrapper><FaEnvelope /></IconWrapper>
            <DetailContent>
              <h3>Escríbenos</h3>
              <p><a href="mailto:boraviajesvzla@gmail.com">boraviajesvzla@gmail.com</a></p>
            </DetailContent>
          </ContactDetail>

          <ContactDetail>
            <IconWrapper><FaMapMarkerAlt /></IconWrapper>
            <DetailContent>
              <h3>Visítanos</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                  <span>Guasdualito, estado Apure, carrera Rondón, entre calle Sucre y Cedeño, edificio Victoria.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                  <span>Caracas.</span>
                </li>
              </ul>
            </DetailContent>
          </ContactDetail>

          <SocialLinks>
            <SocialBtn href="https://www.instagram.com/boraviajes/" target="_blank"><FaInstagram /></SocialBtn>
            <SocialBtn href="#" target="_blank"><FaFacebookF /></SocialBtn>
            <SocialBtn href="https://wa.me/584124265960" target="_blank"><FaWhatsapp /></SocialBtn>
          </SocialLinks>
        </InfoSection>

        <FormSection>
          {isSubmitted && (
            <SuccessOverlay>
              <SuccessIcon><FaCheckCircle /></SuccessIcon>
              <SuccessTitle>¡Mensaje Enviado!</SuccessTitle>
              <SuccessMessage>Gracias por contactarnos.<br />Te responderemos a la brevedad posible.</SuccessMessage>
            </SuccessOverlay>
          )}
          <form onSubmit={handleSubmit}>
            <FormGrid>
              <FormGroup>
                <Label>Nombre Completo</Label>
                <Input type="text" placeholder="Tu nombre" required />
              </FormGroup>
              <FormGroup>
                <Label>Correo Electrónico</Label>
                <Input type="email" placeholder="tucorreo@ejemplo.com" required />
              </FormGroup>
            </FormGrid>

            <FormGroup>
              <Label>Asunto</Label>
              <Input type="text" placeholder="¿En qué podemos ayudarte?" required />
            </FormGroup>

            <FormGroup>
              <Label>Mensaje</Label>
              <TextArea placeholder="Escribe tu mensaje aquí..." required />
            </FormGroup>

            <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
          </form>
        </FormSection>
      </ContentContainer>

      <MapContainer>
        <OfficesMap />
      </MapContainer>
      <CTABanner text="Estamos aquí para escucharte, ¡no dudes en escribirnos!" />
      <Footer />
    </Wrapper>
  );
}