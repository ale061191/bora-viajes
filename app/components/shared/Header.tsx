"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  background: rgba(241, 241, 241, 0.28);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(157,74,188,0.07);
  border-bottom: 1.5px solid rgba(255,255,255,0.35);
  padding: 0 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    height: auto;
    padding: 0.5rem 1rem;
    & > div { flex-direction: column; gap: 1rem; }
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0.5rem;
    & > div { max-width: 100vw; padding: 0; }
  }
`;

const Logo = styled.div`
  font-family: var(--font-great-vibes);
  font-size: 2.2rem;
  color: var(--color-primary);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  font-weight: 500;
`;

const NavLink = styled.a<{ $active?: boolean }>`
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-dark)'};
  text-decoration: none;
  transition: color 0.2s;
  font-weight: ${props => props.$active ? '600' : '500'};
  &:hover { color: var(--color-primary); }
`;

const ContactBtn = styled.a`
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover { background: #7c398f; }
  
  svg {
    font-size: 1.2rem;
  }
`;

interface HeaderProps {
  currentPage?: 'home' | 'contacto' | 'destinos' | 'ofertas' | 'sobre-nosotros' | 'guia-estilos';
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const router = useRouter();

  useEffect(() => {
    let typedText = "";
    let typingTimeout: NodeJS.Timeout;

    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignorar si está escribiendo en un input o textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      typedText += e.key.toLowerCase();

      // Limpiar el texto después de 2 segundos de inactividad
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        typedText = "";
      }, 2000);

      // Verificar si se escribió "boraviajes"
      if (typedText.includes("boraviajes")) {
        router.push("/guia-estilos");
        typedText = "";
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      clearTimeout(typingTimeout);
    };
  }, [router]);

  return (
    <HeaderStyled>
      <div>
        <Logo>Bora Viajes</Logo>
        <Nav>
          <NavLink href="/" $active={currentPage === 'home'}>Inicio</NavLink>
          <NavLink href="/destinos" $active={currentPage === 'destinos'}>Destinos</NavLink>
          <NavLink href="/ofertas" $active={currentPage === 'ofertas'}>Ofertas</NavLink>
          <NavLink href="/sobre-nosotros" $active={currentPage === 'sobre-nosotros'}>Nuestra Historia</NavLink>
          <NavLink href="/contacto" $active={currentPage === 'contacto'}>Contacto</NavLink>
        </Nav>
        <ContactBtn 
          href="https://wa.me/584126851090?text=Hola,%20estoy%20interesado%20en%20informacion%20sobre%20ofertas%20y%20paquetes%20de%20viaje"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar <FaWhatsapp />
        </ContactBtn>
      </div>
    </HeaderStyled>
  );
}

