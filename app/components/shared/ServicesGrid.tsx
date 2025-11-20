import React from "react";
import styled from "styled-components";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaBus, FaShip, FaSuitcase, FaLifeRing, FaUserFriends, FaHandHoldingHeart } from "react-icons/fa";

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
    link: string;
}

const services: Service[] = [
    { icon: <FaPlane />, title: "Boleteria", link: "/pasajeros" },
    { icon: <FaHotel />, title: "Hoteles", link: "/hoteles" },
    { icon: <FaUmbrellaBeach />, title: "Atracciones", link: "/atracciones" },
    { icon: <FaBus />, title: "Traslados", link: "/traslados" },
    { icon: <FaShip />, title: "Circuitos", link: "/cruceros" },
    { icon: <FaSuitcase />, title: "Paquetes", link: "/paquetes" },
    { icon: <FaLifeRing />, title: "Asistencia", link: "/asistencia" },
    { icon: <FaUserFriends />, title: "Asesoramiento", link: "/asesoramiento" },
    { icon: <FaHandHoldingHeart />, title: "Otros Servicios", link: "/otros-servicios" },
];

const ServicesGrid: React.FC = () => {
    return (
        <ServicesSection id="servicios">
            <Container>
                <SectionTitle>NUESTROS SERVICIOS</SectionTitle>
                <Grid>
                    {services.map((service, index) => (
                        <ServiceCard key={index}>
                            <IconWrapper>{service.icon}</IconWrapper>
                            <ServiceTitle>{service.title}</ServiceTitle>
                            <ServiceButton onClick={() => window.location.href = service.link}>
                                Leer mas
                            </ServiceButton>
                        </ServiceCard>
                    ))}
                </Grid>
            </Container>
        </ServicesSection>
    );
};

export default ServicesGrid;
