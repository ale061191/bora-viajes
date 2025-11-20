import React from "react";
import styled from "styled-components";

const MapSection = styled.section`
  padding: 4rem 0;
  background: white;
  
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

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #e8f4f8;
  
  @media (max-width: 768px) {
    height: 400px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
`;

const MapImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23e8f4f8' width='1200' height='600'/%3E%3Cpath fill='%23b8d4e0' d='M0 300 Q 300 250 600 300 T 1200 300 L 1200 600 L 0 600 Z'/%3E%3Cpath fill='%23d0e8f0' d='M0 350 Q 400 300 800 350 T 1200 350 L 1200 600 L 0 600 Z'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Marker = styled.div<{ $top: string; $left: string }>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  transform: translate(-50%, -100%);
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translate(-50%, -100%) scale(1.2);
  }
`;

const MarkerPin = styled.div`
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
  }
`;

const MarkerLabel = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  
  ${Marker}:hover & {
    opacity: 1;
  }
`;

interface Office {
    name: string;
    top: string;
    left: string;
}

const offices: Office[] = [
    { name: "Ciudad de México", top: "45%", left: "20%" },
    { name: "Buenos Aires", top: "75%", left: "35%" },
    { name: "Madrid", top: "35%", left: "48%" },
    { name: "Nueva York", top: "38%", left: "25%" },
    { name: "Tokio", top: "40%", left: "85%" },
];

const OfficesMap: React.FC = () => {
    return (
        <MapSection id="oficinas">
            <Container>
                <SectionTitle>NUESTRAS OFICINAS</SectionTitle>
                <MapContainer>
                    <MapImage>
                        {offices.map((office, index) => (
                            <Marker key={index} $top={office.top} $left={office.left}>
                                <MarkerLabel>{office.name}</MarkerLabel>
                                <MarkerPin />
                            </Marker>
                        ))}
                    </MapImage>
                </MapContainer>
            </Container>
        </MapSection>
    );
};

export default OfficesMap;
