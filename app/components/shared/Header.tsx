"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  background: rgba(241, 241, 241, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(157,74,188,0.07);
  border-bottom: 1.5px solid rgba(255,255,255,0.35);
  padding: 0 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: var(--font-great-vibes);
  font-size: 2.2rem;
  color: var(--color-primary);
  z-index: 21;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 21;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(241, 241, 241, 0.98);
    backdrop-filter: blur(12px);
    padding: 1.5rem;
    gap: 1rem;
    box-shadow: 0 4px 12px rgba(157,74,188,0.1);
    transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
    opacity: ${props => props.$isOpen ? '1' : '0'};
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  color: ${props => props.$active ? 'var(--color-primary)' : 'var(--color-text-dark)'};
  text-decoration: none;
  transition: color 0.2s;
  font-weight: ${props => props.$active ? '600' : '500'};
  &:hover { color: var(--color-primary); }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(157, 74, 188, 0.1);
  }
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
  justify-content: center;
  
  &:hover { background: #7c398f; }
  
  svg {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1.2rem;
    margin-top: 0.5rem;
  }
`;

interface HeaderProps {
  currentPage?: 'home' | 'contacto' | 'destinos' | 'ofertas' | 'sobre-nosotros' | 'guia-estilos';
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Cerrar menú móvil al hacer clic en un link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo>Bora Viajes</Logo>
        
        {/* Desktop Navigation */}
        <DesktopNav>
          <NavLink href="/" $active={currentPage === 'home'}>Inicio</NavLink>
          <NavLink href="/destinos" $active={currentPage === 'destinos'}>Destinos</NavLink>
          <NavLink href="/ofertas" $active={currentPage === 'ofertas'}>Ofertas</NavLink>
          <NavLink href="/sobre-nosotros" $active={currentPage === 'sobre-nosotros'}>Nuestra Historia</NavLink>
          <NavLink href="/contacto" $active={currentPage === 'contacto'}>Contacto</NavLink>
          <ContactBtn 
            href="https://wa.me/584126851090?text=Hola,%20estoy%20interesado%20en%20informacion%20sobre%20ofertas%20y%20paquetes%20de%20viaje"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar <FaWhatsapp />
          </ContactBtn>
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContainer>

      {/* Mobile Navigation */}
      <MobileNav $isOpen={mobileMenuOpen}>
        <NavLink href="/" $active={currentPage === 'home'} onClick={handleNavClick}>Inicio</NavLink>
        <NavLink href="/destinos" $active={currentPage === 'destinos'} onClick={handleNavClick}>Destinos</NavLink>
        <NavLink href="/ofertas" $active={currentPage === 'ofertas'} onClick={handleNavClick}>Ofertas</NavLink>
        <NavLink href="/sobre-nosotros" $active={currentPage === 'sobre-nosotros'} onClick={handleNavClick}>Nuestra Historia</NavLink>
        <NavLink href="/contacto" $active={currentPage === 'contacto'} onClick={handleNavClick}>Contacto</NavLink>
        <ContactBtn 
          href="https://wa.me/584126851090?text=Hola,%20estoy%20interesado%20en%20informacion%20sobre%20ofertas%20y%20paquetes%20de%20viaje"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleNavClick}
        >
          Contactar <FaWhatsapp />
        </ContactBtn>
      </MobileNav>
    </HeaderStyled>
  );
}

