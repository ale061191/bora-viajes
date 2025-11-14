"use client";
import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background: var(--color-text-dark);
  color: var(--color-white);
  padding: 2rem 0 1rem 0;
  text-align: center;
  font-size: 0.95rem;
  width: 100%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  
  a {
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;
    
    &:hover {
      color: var(--color-primary-light, #c084fc);
    }
  }
  
  span {
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <div style={{ marginBottom: "1rem" }}>
        <b>Bora Viajes</b> &nbsp;|&nbsp; Tu aventura comienza aquí.
      </div>
      <NavLinks>
        <a href="/">Inicio</a>
        <span>|</span>
        <a href="/destinos">Destinos</a>
        <span>|</span>
        <a href="/ofertas">Ofertas</a>
        <span>|</span>
        <a href="/sobre-nosotros">Nuestra Historia</a>
        <span>|</span>
        <a href="/contacto">Contacto</a>
      </NavLinks>
      <div style={{ marginBottom: "1rem" }}>
        <b>Contacto:</b> hola@boraviajes.com &nbsp;|&nbsp; +1 (234) 567-890
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <b>Síguenos:</b> <span style={{ fontSize: "1.2rem" }}>🐦 📘 📸</span>
      </div>
      <div style={{ fontSize: "0.85rem", color: "#ccc" }}>
        © 2024 Bora Viajes. Todos los derechos reservados. | Términos y Condiciones | Política de Privacidad
      </div>
    </FooterStyled>
  );
}

