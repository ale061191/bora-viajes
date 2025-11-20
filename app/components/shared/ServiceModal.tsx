"use client";
import React from "react";
import styled from "styled-components";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text-dark);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
  
  &:hover {
    color: var(--color-primary);
  }
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem 2rem;
  text-align: center;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ModalDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-dark);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ModalActions = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const WhatsAppButton = styled.a`
  background: #25D366;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  
  &:hover {
    background: #20BA5A;
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const CloseButtonBottom = styled.button`
  background: transparent;
  color: var(--color-text-dark);
  border: 2px solid var(--color-text-dark);
  border-radius: 8px;
  padding: 0.9rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.95rem;
  
  &:hover {
    background: var(--color-text-dark);
    color: white;
  }
`;

export interface ServiceData {
  title: string;
  description: string;
  image: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        
        <ModalHeader>
          <ModalTitle>{service.title}</ModalTitle>
          <ModalDescription>{service.description}</ModalDescription>
          <ModalImage src={service.image} alt={service.title} />
        </ModalHeader>
        
        <ModalActions>
          <WhatsAppButton
            href="https://wa.me/584126851090?text=Hola,%20estoy%20interesado%20en%20informacion%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> ¡Contáctanos en WhatsApp!
          </WhatsAppButton>
          <CloseButtonBottom onClick={onClose}>
            Cerrar
          </CloseButtonBottom>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
}
