"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

// Importar el mapa dinámicamente para evitar errores de SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const MapSection = styled.section`
  padding: 4rem 0;
  background: white;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
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

const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
  
  .leaflet-popup-content-wrapper {
    border-radius: 8px;
    font-family: var(--font-poppins);
  }
  
  .leaflet-popup-content {
    margin: 1rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-text-dark);
  }
  
  @media (max-width: 768px) {
    height: 400px;
  }
  
  @media (max-width: 480px) {
    height: 350px;
  }
`;

interface Office {
  name: string;
  position: [number, number];
}

const offices: Office[] = [
  { name: "Cancún, México", position: [21.1619, -86.8515] },
  { name: "Playa del Carmen, México", position: [20.6296, -87.0739] },
  { name: "Tulum, México", position: [20.2114, -87.4654] },
  { name: "Ciudad de México", position: [19.4326, -99.1332] },
  { name: "Miami, USA", position: [25.7617, -80.1918] },
];

const OfficesMap: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    import("leaflet").then((leaflet) => {
      setL(leaflet.default);
      
      // Fix para los iconos de Leaflet
      delete (leaflet.default.Icon.Default.prototype as any)._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    });
  }, []);

  if (!isClient || !L) {
    return (
      <MapSection id="oficinas">
        <Container>
          <SectionTitle>NUESTRAS OFICINAS</SectionTitle>
          <MapWrapper>
            <div style={{ 
              width: "100%", 
              height: "100%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              background: "#f0f0f0",
              color: "#666"
            }}>
              Cargando mapa...
            </div>
          </MapWrapper>
        </Container>
      </MapSection>
    );
  }

  return (
    <MapSection id="oficinas">
      <Container>
        <SectionTitle>NUESTRAS OFICINAS</SectionTitle>
        <MapWrapper>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
          <MapContainer
            center={[20.0, -87.0]}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map((office, index) => (
              <Marker key={index} position={office.position}>
                <Popup>{office.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapWrapper>
      </Container>
    </MapSection>
  );
};

export default OfficesMap;
