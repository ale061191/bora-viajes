"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaGlobe, FaSuitcase, FaHeart, FaTimes, FaArrowRight } from "react-icons/fa";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Wrapper from "../components/shared/Wrapper";

const PageContainer = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  flex: 1;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  opacity: 0.8;
  text-align: center;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  border-radius: 8px;
  background: ${props => props.$active ? 'var(--color-primary)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--color-text-dark)'};
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.$active ? '#7c398f' : 'rgba(157, 74, 188, 0.05)'};
    border-color: var(--color-primary);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: none;
  background: transparent;
  color: var(--color-text-dark);
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
  margin-left: auto;
  
  &:hover {
    color: var(--color-primary);
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DestinationCardLink = styled.a<{ $image: string; $theme: string }>`
  position: relative;
  display: block;
  width: 100%;
  max-width: 320px;
  height: 420px;
  border-radius: 1.5rem;
  overflow: hidden;
  text-decoration: none;
  color: var(--color-white);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
  transition: transform 0.45s ease, box-shadow 0.45s ease;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${props => props.$image});
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: transform 0.6s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      hsl(${props => props.$theme} / 0.92),
      hsl(${props => props.$theme} / 0.65) 30%,
      transparent 65%
    );
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 60px -15px hsl(${props => props.$theme} / 0.55);
  }

  &:hover::before {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid hsl(${props => props.$theme} / 0.7);
    outline-offset: 4px;
  }
`;

const DestinationContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  gap: 1rem;
`;

const DestinationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
`;

const DestinationFlag = styled.span`
  font-size: 1.5rem;
`;

const DestinationStats = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
`;

const DestinationCTA = styled.div<{ $theme: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsl(${props => props.$theme} / 0.25);
  border: 1px solid hsl(${props => props.$theme} / 0.35);
  border-radius: 0.75rem;
  padding: 0.75rem 1.1rem;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  span {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  svg {
    transition: transform 0.3s ease;
  }

  ${DestinationCardLink}:hover & {
    background: hsl(${props => props.$theme} / 0.38);
    border-color: hsl(${props => props.$theme} / 0.5);
  }

  ${DestinationCardLink}:hover & svg {
    transform: translateX(6px);
  }
`;

const DestinationCTAIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
`;

const PaginationButton = styled.button<{ $active?: boolean }>`
  min-width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: ${props => props.$active ? 'var(--color-primary)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'var(--color-text-dark)'};
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  
  &:hover {
    background: ${props => props.$active ? '#7c398f' : 'rgba(157, 74, 188, 0.1)'};
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  region: string;
  type: string;
  interests: string[];
  flag: string;
  price: string;
  stats: string;
  themeColor: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris",
    location: "France",
    image: "/hero.jpg",
    region: "europe",
    type: "city",
    interests: ["culture", "romance"],
    flag: "🇫🇷",
    price: "$2,500",
    stats: "Más de 800 experiencias • 25 tours guiados",
    themeColor: "280 50% 45%"
  },
  {
    id: 2,
    name: "Kyoto",
    location: "Japan",
    image: "/kyoto.jpg",
    region: "asia",
    type: "cultural",
    interests: ["culture", "nature"],
    flag: "🇯🇵",
    price: "$2,200",
    stats: "Experiencias culturales únicas • 22 circuitos guiados",
    themeColor: "29 70% 38%"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "/hero.jpg",
    region: "europe",
    type: "beach",
    interests: ["romance", "relaxation"],
    flag: "🇬🇷",
    price: "$1,900",
    stats: "Vistas espectaculares • 15 hoteles boutique",
    themeColor: "210 85% 55%"
  },
  {
    id: 4,
    name: "Bora Bora",
    location: "French Polynesia",
    image: "/hero.jpg",
    region: "oceania",
    type: "beach",
    interests: ["relaxation", "luxury"],
    flag: "🇵🇫",
    price: "$3,500",
    stats: "Paraíso tropical • 12 resorts de lujo",
    themeColor: "199 85% 42%"
  },
  {
    id: 5,
    name: "Machu Picchu",
    location: "Peru",
    image: "/hero.jpg",
    region: "america",
    type: "adventure",
    interests: ["culture", "adventure"],
    flag: "🇵🇪",
    price: "$1,600",
    stats: "Maravilla del mundo • 18 rutas de trekking",
    themeColor: "10 75% 50%"
  },
  {
    id: 6,
    name: "Rome",
    location: "Italy",
    image: "/roma.jpg",
    region: "europe",
    type: "city",
    interests: ["culture", "gastronomy"],
    flag: "🇮🇹",
    price: "$2,100",
    stats: "Historia milenaria • 30 sitios arqueológicos",
    themeColor: "25 85% 48%"
  },
  {
    id: 7,
    name: "Dubai",
    location: "UAE",
    image: "/hero.jpg",
    region: "middle-east",
    type: "city",
    interests: ["luxury", "shopping"],
    flag: "🇦🇪",
    price: "$2,800",
    stats: "Lujo y modernidad • 50+ centros comerciales",
    themeColor: "45 95% 55%"
  },
  {
    id: 8,
    name: "Maldivas",
    location: "Indian Ocean",
    image: "/maldivas.jpg",
    region: "asia",
    type: "beach",
    interests: ["relaxation", "luxury"],
    flag: "🇲🇻",
    price: "$1,800",
    stats: "Más de 1,200 resorts • 18 paquetes exclusivos",
    themeColor: "199 85% 42%"
  },
  {
    id: 9,
    name: "New York",
    location: "USA",
    image: "/hero.jpg",
    region: "america",
    type: "city",
    interests: ["culture", "shopping"],
    flag: "🇺🇸",
    price: "$2,400",
    stats: "La ciudad que nunca duerme • 100+ atracciones",
    themeColor: "220 60% 40%"
  },
  {
    id: 10,
    name: "Patagonia",
    location: "Argentina",
    image: "/patagonia.jpg",
    region: "america",
    type: "adventure",
    interests: ["nature", "adventure"],
    flag: "🇦🇷",
    price: "$1,800",
    stats: "Aventuras al aire libre • 14 rutas escénicas",
    themeColor: "210 56% 32%"
  }
];

export default function DestinosPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredDestinations = destinations.filter(dest => {
    if (selectedRegion && dest.region !== selectedRegion) return false;
    if (selectedType && dest.type !== selectedType) return false;
    if (selectedInterest && !dest.interests.includes(selectedInterest)) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDestinations = filteredDestinations.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setSelectedRegion(null);
    setSelectedType(null);
    setSelectedInterest(null);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedRegion || selectedType || selectedInterest;

  return (
    <Wrapper>
      <Header currentPage="destinos" />
      <PageContainer>
        <ContentWrapper>
          <PageTitle>Find Your Next Adventure</PageTitle>
          <PageSubtitle>Explore our world of curated travel experiences</PageSubtitle>

          <FiltersContainer>
            <FilterButton
              $active={selectedRegion === 'europe'}
              onClick={() => {
                setSelectedRegion(selectedRegion === 'europe' ? null : 'europe');
                setCurrentPage(1);
              }}
            >
              <FaGlobe />
              Region
            </FilterButton>

            <FilterButton
              $active={selectedType === 'city'}
              onClick={() => {
                setSelectedType(selectedType === 'city' ? null : 'city');
                setCurrentPage(1);
              }}
            >
              <FaSuitcase />
              Type of Trip
            </FilterButton>

            <FilterButton
              $active={selectedInterest === 'culture'}
              onClick={() => {
                setSelectedInterest(selectedInterest === 'culture' ? null : 'culture');
                setCurrentPage(1);
              }}
            >
              <FaHeart />
              Interests
            </FilterButton>

            {hasActiveFilters && (
              <ResetButton onClick={resetFilters}>
                <FaTimes />
                Reset Filters
              </ResetButton>
            )}
          </FiltersContainer>

          <DestinationsGrid>
            {paginatedDestinations.map((destination) => (
              <DestinationCardLink
                key={destination.id}
                href={`/destinos/${destination.id}`}
                $image={destination.image}
                $theme={destination.themeColor}
              >
                <DestinationContent>
                  <DestinationTitle>
                    {destination.name} <DestinationFlag>{destination.flag}</DestinationFlag>
                  </DestinationTitle>
                  <DestinationStats>
                    Desde {destination.price} • {destination.stats}
                  </DestinationStats>
                  <DestinationCTA $theme={destination.themeColor}>
                    <span>Explorar ahora</span>
                    <DestinationCTAIcon>
                      <FaArrowRight />
                    </DestinationCTAIcon>
                  </DestinationCTA>
                </DestinationContent>
              </DestinationCardLink>
            ))}
          </DestinationsGrid>

          {totalPages > 1 && (
            <PaginationContainer>
              <PaginationButton
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                ‹
              </PaginationButton>

              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <PaginationButton
                      key={pageNum}
                      $active={currentPage === pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </PaginationButton>
                  );
                } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                  return <span key={pageNum}>...</span>;
                }
                return null;
              })}

              <PaginationButton
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                ›
              </PaginationButton>
            </PaginationContainer>
          )}
        </ContentWrapper>
      </PageContainer>
      <Footer />
    </Wrapper>
  );
}

