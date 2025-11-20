"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaBus, FaShip, FaSuitcase, FaLifeRing, FaUserFriends, FaHandHoldingHeart } from "react-icons/fa";
import ServiceModal, { ServiceData } from "./ServiceModal";

const ServicesSection = styled.section`
  padding: 4rem 0;
  background: var(--color-white);
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(157, 74, 188, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ServiceButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.7rem 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 0.95rem;
  width: 100%;
  max-width: 200px;
  
  &:hover {
    background: #7c398f;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
`;

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const services: Service[] = [
    { 
        icon: <FaPlane />, 
        title: "Boleteria", 
        description: "Acceso a boletos aéreos nacionales e internacionales con todas las aerolíneas, buscando las mejores opciones de vuelo según el presupuesto del cliente.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    },
    { 
        icon: <FaHotel />, 
        title: "Hoteles", 
        description: "Amplia gama de alojamientos a nivel mundial, con tarifas competitivas gracias a alianzas estratégicas con una red de hoteles.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    { 
        icon: <FaUmbrellaBeach />, 
        title: "Atracciones", 
        description: "Creación de itinerarios a medida que incluyen entradas VIP para parques temáticos y tours exclusivos en destinos variados.",
        image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80"
    },
    { 
        icon: <FaBus />, 
        title: "Traslados", 
        description: "Servicios de traslado cómodos y seguros, así como alquiler de coches y transporte local.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
    },
    { 
        icon: <FaShip />, 
        title: "Circuitos", 
        description: "Ofrecen circuitos internacionales para amantes de la aventura y la cultura, con una variedad de destinos impresionantes.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
    },
    { 
        icon: <FaSuitcase />, 
        title: "Paquetes", 
        description: "Diseño de paquetes de viaje personalizados para asegurar experiencias únicas y memorables.",
        image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
    },
    { 
        icon: <FaLifeRing />, 
        title: "Asistencia", 
        description: "Servicio de asistencia personalizada para garantizar que cada aspecto del viaje sea sin contratiempos.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
    },
    { 
        icon: <FaUserFriends />, 
        title: "Asesoramiento", 
        description: "Asesoramiento a medida para crear itinerarios adaptados a las preferencias y deseos del viajero.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
    },
    { 
        icon: <FaHandHoldingHeart />, 
        title: "Otros Servicios", 
        description: "Variedad de servicios turísticos adicionales para satisfacer todas las necesidades del cliente.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
    },
];

const ServicesGrid: React.FC = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceClick = (service: Service) => {
        setSelectedService({
            title: service.title,
            description: service.description,
            image: service.image
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <>
            <ServicesSection id="servicios">
                <Container>
                    <SectionTitle>NUESTROS SERVICIOS</SectionTitle>
                    <Grid>
                        {services.map((service, index) => (
                            <ServiceCard key={index}>
                                <IconWrapper>{service.icon}</IconWrapper>
                                <ServiceTitle>{service.title}</ServiceTitle>
                                <ServiceButton onClick={() => handleServiceClick(service)}>
                                    Leer mas
                                </ServiceButton>
                            </ServiceCard>
                        ))}
                    </Grid>
                </Container>
            </ServicesSection>
            <ServiceModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </>
    );
};

export default ServicesGrid;
