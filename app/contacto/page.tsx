"use client";
import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Wrapper from "../components/shared/Wrapper";

const PageWrapper = styled.div`
  padding: 120px 1rem 3rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(157,74,188,0.07);
  border: 1.5px solid rgba(255,255,255,0.35);
`;

const FormCard = styled(Card)`
  padding: 1.5rem 1.5rem 2rem;
`;

const FormTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 2.4rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
`;

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 0.4rem;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  background: var(--color-bg-light);
  outline: none;
  font-family: var(--font-poppins);
`;

const FullRow = styled.div`
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  background: var(--color-bg-light);
  resize: vertical;
  outline: none;
  font-family: var(--font-poppins);
`;

const SubmitButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #7c398f; }
`;

const SideCard = styled(Card)`
  padding: 1.5rem;
`;

const SideTitle = styled.h3`
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: grid;
  gap: 0.8rem;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--color-text-dark);
  & svg { color: var(--color-primary); }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1rem;
`;

const SocialButton = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: var(--color-bg-light);
  text-decoration: none;
  box-shadow: 0 1px 6px rgba(157,74,188,0.07);
  &:hover { filter: brightness(0.98); }
`;

const MapCard = styled(Card)`
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto pronto.");
  };
  return (
    <Wrapper>
      <Header currentPage="contacto" />
      <PageWrapper>
        <Container>
        <div style={{ display: "grid", gap: "1rem" }}>
          <FormCard>
            <FormTitle className="great-vibes">¡Planeemos juntos tu aventura!</FormTitle>
            <FormSubtitle>
              Rellena el formulario y uno de nuestros expertos en viajes se pondrá en contacto contigo.
            </FormSubtitle>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div>
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" name="nombre" placeholder="Ingresa tu nombre completo" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.com" required />
                </div>
              </FieldGroup>
              <FullRow>
                <Label htmlFor="asunto">Asunto</Label>
                <Input id="asunto" name="asunto" placeholder="¿Sobre qué te gustaría hablar?" />
              </FullRow>
              <FullRow>
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" name="mensaje" placeholder="Cuéntanos más sobre el viaje de tus sueños..." />
              </FullRow>
              <SubmitButton type="submit">Enviar Mensaje</SubmitButton>
            </form>
          </FormCard>
        </div>
        <div style={{ display: "grid", gap: "1rem" }}>
          <SideCard>
            <SideTitle>Otras formas de contactar</SideTitle>
            <ContactList>
              <ContactItem><FaPhoneAlt /> <div><b>Teléfono</b><div>+1 (23) 456-789</div></div></ContactItem>
              <ContactItem><FaEnvelope /> <div><b>Email</b><div>hola@agencia.com</div></div></ContactItem>
              <ContactItem><FaMapMarkerAlt /> <div><b>Dirección</b><div>123 Calle Aventura, Ciudad Viaje</div></div></ContactItem>
            </ContactList>
            <SideTitle>Síguenos</SideTitle>
            <SocialRow>
              <SocialButton href="#" aria-label="Instagram"><FaInstagram /></SocialButton>
              <SocialButton href="#" aria-label="Facebook"><FaFacebookF /></SocialButton>
              <SocialButton href="#" aria-label="Twitter"><FaTwitter /></SocialButton>
            </SocialRow>
          </SideCard>
          <MapCard>
            <MapImage src="/window.svg" alt="Mapa de ubicación" />
          </MapCard>
        </div>
        </Container>
      </PageWrapper>
      <Footer />
    </Wrapper>
  );
}