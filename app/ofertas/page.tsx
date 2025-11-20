"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { FaPercent, FaMapMarkerAlt, FaTimes, FaArrowRight, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Wrapper from "../components/shared/Wrapper";
import ScrollTopButton from "../components/shared/ScrollTopButton";
import HeroWithSearch from "../components/shared/HeroWithSearch";
import SimpleSearchForm from "../components/shared/SimpleSearchForm";
import { getAllOffers, type OfferDetail } from "../data/offers";

const PageContainer = styled.div`
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

const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  opacity: 0.8;
  text-align: center;
`;

const SearchResultsBanner = styled.div`
  background: linear-gradient(135deg, rgba(157, 74, 188, 0.1), rgba(157, 74, 188, 0.05));
  border-left: 4px solid var(--color-primary);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchResultsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-primary);
    margin: 0;
    font-family: var(--font-poppins);
  }
  
  p {
    font-size: 0.95rem;
    color: var(--color-text-dark);
    margin: 0;
    opacity: 0.8;
  }
  
  strong {
    color: var(--color-primary);
  }
`;

const ClearSearchButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #7c398f;
  }
  
  svg {
    font-size: 0.85rem;
  }
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

const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  border-radius: 8px;
  background: white;
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  font-weight: 500;
  
  svg {
    font-size: 1rem;
    color: var(--color-text-dark);
  }
  
  select {
    border: none;
    background: transparent;
    outline: none;
    font-family: var(--font-poppins);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--color-text-dark);
    cursor: pointer;
    
    &:hover {
      color: var(--color-primary);
    }
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
  
  &:hover {
    color: var(--color-primary);
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const OffersGrid = styled.div`
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

const OfferCardLink = styled.a<{ $image: string; $theme: string }>`
  position: relative;
  display: block;
  width: 100%;
  max-width: 380px;
  height: 460px;
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
      hsl(${props => props.$theme} / 0.65) 35%,
      transparent 70%
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

const DiscountBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  z-index: 3;
  box-shadow: 0 4px 12px rgba(157, 74, 188, 0.3);
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const OfferContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  gap: 0.75rem;
`;

const OfferTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1.3;
`;

const OfferDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;
`;

const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
`;

const OfferDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 0.85rem;
  }
`;

const OfferCTA = styled.div<{ $theme: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsl(${props => props.$theme} / 0.25);
  border: 1px solid hsl(${props => props.$theme} / 0.35);
  border-radius: 0.75rem;
  padding: 0.75rem 1.1rem;
  margin-top: 0.5rem;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  span {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  svg {
    transition: transform 0.3s ease;
  }

  ${OfferCardLink}:hover & {
    background: hsl(${props => props.$theme} / 0.38);
    border-color: hsl(${props => props.$theme} / 0.5);
  }

  ${OfferCardLink}:hover & svg {
    transform: translateX(6px);
  }
`;

const OfferCTAIcon = styled.div`
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

// Usar el alias Offer para compatibilidad con el código existente
type Offer = OfferDetail;

// Componente que usa searchParams envuelto en Suspense
function OfertasPageContent() {
  // Obtener todas las ofertas desde el archivo centralizado
  const offers = getAllOffers();
  const searchParams = useSearchParams();
  
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Estados del formulario de búsqueda (solo necesitamos destino y viajeros)
  const [destino, setDestino] = useState("");
  const [viajeros, setViajeros] = useState<number>(1);
  
  // Estados de búsqueda desde URL
  const [searchDestino, setSearchDestino] = useState<string>("");
  const [searchViajeros, setSearchViajeros] = useState<number | null>(null);
  
  const itemsPerPage = 6;

  // Procesar parámetros de búsqueda desde URL
  useEffect(() => {
    const destinoParam = searchParams.get('destino');
    const viajerosParam = searchParams.get('viajeros');
    
    if (destinoParam) {
      setSearchDestino(destinoParam);
      setDestino(destinoParam);
    }
    if (viajerosParam) {
      const viajerosNum = parseInt(viajerosParam, 10);
      setSearchViajeros(viajerosNum);
      setViajeros(viajerosNum);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const filteredOffers = offers.filter(offer => {
    // Filtro de búsqueda por destino (desde URL)
    if (searchDestino) {
      const matchesDestination = offer.destination.toLowerCase().includes(searchDestino.toLowerCase()) ||
                                 offer.title.toLowerCase().includes(searchDestino.toLowerCase());
      if (!matchesDestination) return false;
    }
    
    // Filtro de búsqueda por viajeros (desde URL) - informativo, no filtra pero se puede usar para recomendaciones
    // Por ahora, todas las ofertas son válidas para cualquier número de viajeros
    
    // Filtros de categoría
    if (selectedType && offer.type !== selectedType) return false;
    if (selectedSeason && offer.season !== selectedSeason) return false;
    
    // Filtro de precio
    if (selectedPriceRange !== "all") {
      if (selectedPriceRange === "0-1500" && offer.price > 1500) return false;
      if (selectedPriceRange === "1500-2500" && (offer.price < 1500 || offer.price > 2500)) return false;
      if (selectedPriceRange === "2500+" && offer.price < 2500) return false;
    }
    
    return true;
  });

  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOffers = filteredOffers.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setSelectedType(null);
    setSelectedSeason(null);
    setSelectedPriceRange("all");
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchDestino("");
    setSearchViajeros(null);
    setDestino("");
    setViajeros(1);
    // Navegar a /ofertas sin parámetros
    window.history.pushState({}, '', '/ofertas');
  };

  const hasActiveFilters = selectedType || selectedSeason || selectedPriceRange !== "all";

  return (
    <Wrapper>
      <Header currentPage="ofertas" />
      
      <HeroWithSearch
        title="Ofertas Especiales"
        subtitle="Aprovecha nuestros descuentos exclusivos y ahorra en tu próxima aventura"
        backgroundImage="/hero.jpg"
      >
        <SimpleSearchForm
          destino={destino}
          setDestino={setDestino}
          viajeros={viajeros}
          setViajeros={setViajeros}
          enableRealSearch={true}
          buttonText="Buscar Ofertas"
          showWrapper={true}
        />
      </HeroWithSearch>
      
      <PageContainer>
        <ContentWrapper>
          <PageTitle>Explora Nuestras Ofertas Exclusivas</PageTitle>
          <PageSubtitle>
            Filtra por categoría, temporada o presupuesto para encontrar la oferta perfecta
          </PageSubtitle>

          {(searchDestino || searchViajeros) && (
            <SearchResultsBanner>
              <SearchResultsText>
                <h3>🔍 Resultados de búsqueda</h3>
                <p>
                  {searchDestino && <span>Destino: <strong>{searchDestino}</strong></span>}
                  {searchDestino && searchViajeros && <span> • </span>}
                  {searchViajeros && <span>Viajeros: <strong>{searchViajeros}</strong></span>}
                  {' '} • <strong>{filteredOffers.length}</strong> {filteredOffers.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}
                </p>
              </SearchResultsText>
              <ClearSearchButton onClick={clearSearch}>
                <FaTimes />
                Limpiar búsqueda
              </ClearSearchButton>
            </SearchResultsBanner>
          )}

          <FiltersContainer>
            <FilterButton
              $active={selectedType === 'cultural'}
              onClick={() => {
                setSelectedType(selectedType === 'cultural' ? null : 'cultural');
                setCurrentPage(1);
              }}
            >
              <FaMapMarkerAlt />
              Cultural
            </FilterButton>

            <FilterButton
              $active={selectedType === 'playa'}
              onClick={() => {
                setSelectedType(selectedType === 'playa' ? null : 'playa');
                setCurrentPage(1);
              }}
            >
              <FaMapMarkerAlt />
              Playa
            </FilterButton>

            <FilterButton
              $active={selectedType === 'aventura'}
              onClick={() => {
                setSelectedType(selectedType === 'aventura' ? null : 'aventura');
                setCurrentPage(1);
              }}
            >
              <FaMapMarkerAlt />
              Aventura
            </FilterButton>

            <FilterButton
              $active={selectedSeason === 'verano'}
              onClick={() => {
                setSelectedSeason(selectedSeason === 'verano' ? null : 'verano');
                setCurrentPage(1);
              }}
            >
              <FaCalendarAlt />
              Verano
            </FilterButton>

            <FilterButton
              $active={selectedSeason === 'invierno'}
              onClick={() => {
                setSelectedSeason(selectedSeason === 'invierno' ? null : 'invierno');
                setCurrentPage(1);
              }}
            >
              <FaCalendarAlt />
              Invierno
            </FilterButton>

            <PriceRangeContainer>
              <FaDollarSign />
              <select 
                value={selectedPriceRange}
                onChange={(e) => {
                  setSelectedPriceRange(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">Todos los precios</option>
                <option value="0-1500">Hasta $1,500</option>
                <option value="1500-2500">$1,500 - $2,500</option>
                <option value="2500+">Más de $2,500</option>
              </select>
            </PriceRangeContainer>

            {hasActiveFilters && (
              <ResetButton onClick={resetFilters}>
                <FaTimes />
                Limpiar Filtros
              </ResetButton>
            )}
          </FiltersContainer>

          <OffersGrid>
            {paginatedOffers.map((offer) => (
              <OfferCardLink
                key={offer.id}
                href={`/ofertas/${offer.id}`}
                $image={offer.image}
                $theme={offer.themeColor}
              >
                <DiscountBadge>
                  <FaPercent style={{ fontSize: '0.9rem' }} />
                  {offer.discount}
                </DiscountBadge>
                <OfferContent>
                  <OfferTitle>{offer.title}</OfferTitle>
                  <OfferDescription>{offer.description}</OfferDescription>
                  <OfferDetails>
                    <OfferDetailItem>
                      <FaMapMarkerAlt />
                      {offer.destination}
                    </OfferDetailItem>
                    <OfferDetailItem>
                      <FaCalendarAlt />
                      {offer.validUntil}
                    </OfferDetailItem>
                  </OfferDetails>
                  <OfferCTA $theme={offer.themeColor}>
                    <span>Ver oferta completa</span>
                    <OfferCTAIcon>
                      <FaArrowRight />
                    </OfferCTAIcon>
                  </OfferCTA>
                </OfferContent>
              </OfferCardLink>
            ))}
          </OffersGrid>

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
      
      <ScrollTopButton $show={showScrollTop} />
    </Wrapper>
  );
}

// Loading component para Suspense
function OfertasPageLoading() {
  return (
    <Wrapper>
      <Header currentPage="ofertas" />
      <HeroWithSearch
        title="Ofertas Especiales"
        subtitle="Aprovecha nuestros descuentos exclusivos y ahorra en tu próxima aventura"
        backgroundImage="/hero.jpg"
      >
        <div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
          Cargando ofertas...
        </div>
      </HeroWithSearch>
      <Footer />
    </Wrapper>
  );
}

// Componente principal que envuelve con Suspense
export default function OfertasPage() {
  return (
    <Suspense fallback={<OfertasPageLoading />}>
      <OfertasPageContent />
    </Suspense>
  );
}
