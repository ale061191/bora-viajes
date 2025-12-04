"use client";
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

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
        <a href="/nosotros">Nosotros</a>
        <span>|</span>
        <a href="/acceso-agencias">Acceso a Agencias</a>
        <span>|</span>
        <a href="/contacto">Contacto</a>
      </NavLinks>
      <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
        <div>
          <b>Contacto:</b> <a href="mailto:boraviajesvzla@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>boraviajesvzla@gmail.com</a> &nbsp;|&nbsp; <a href="tel:+584124265960" style={{ color: "inherit", textDecoration: "none" }}>+58 412 426 5960</a>
        </div>
        <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
          Guasdualito, estado Apure &nbsp;•&nbsp; Caracas
        </div>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <b>Síguenos:</b>
        <span style={{ fontSize: "1.2rem", marginLeft: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a href="https://www.instagram.com/boraviajes/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", margin: "0 0.3rem", display: "flex", alignItems: "center" }}><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", margin: "0 0.3rem", display: "flex", alignItems: "center" }}><FaFacebookF /></a>
          <a href="https://wa.me/584124265960" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", margin: "0 0.3rem", display: "flex", alignItems: "center" }}><FaWhatsapp /></a>
        </span>
      </div>
      <div style={{ fontSize: "0.85rem", color: "#ccc" }}>
        © {new Date().getFullYear()} Bora Viajes. Todos los derechos reservados.
      </div>
    </FooterStyled>
  );
}

