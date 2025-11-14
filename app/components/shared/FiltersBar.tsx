"use client";
import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaTimes } from "react-icons/fa";

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

export interface FilterConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface FiltersBarProps {
  typeFilters?: FilterConfig[];
  seasonFilters?: FilterConfig[];
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
  selectedSeason?: string | null;
  setSelectedSeason?: (season: string | null) => void;
  selectedPriceRange?: string;
  setSelectedPriceRange?: (range: string) => void;
  showPriceFilter?: boolean;
  onPageChange?: (page: number) => void;
  onReset?: () => void;
}

const defaultTypeFilters: FilterConfig[] = [
  { id: 'cultural', label: 'Cultural', icon: <FaMapMarkerAlt /> },
  { id: 'playa', label: 'Playa', icon: <FaMapMarkerAlt /> },
  { id: 'aventura', label: 'Aventura', icon: <FaMapMarkerAlt /> }
];

const defaultSeasonFilters: FilterConfig[] = [
  { id: 'verano', label: 'Verano', icon: <FaCalendarAlt /> },
  { id: 'invierno', label: 'Invierno', icon: <FaCalendarAlt /> }
];

export default function FiltersBar({
  typeFilters = defaultTypeFilters,
  seasonFilters = defaultSeasonFilters,
  selectedType,
  setSelectedType,
  selectedSeason,
  setSelectedSeason,
  selectedPriceRange = "all",
  setSelectedPriceRange,
  showPriceFilter = false,
  onPageChange,
  onReset
}: FiltersBarProps) {
  const handleTypeClick = (typeId: string) => {
    setSelectedType(selectedType === typeId ? null : typeId);
    if (onPageChange) onPageChange(1);
  };

  const handleSeasonClick = (seasonId: string) => {
    if (setSelectedSeason) {
      setSelectedSeason(selectedSeason === seasonId ? null : seasonId);
      if (onPageChange) onPageChange(1);
    }
  };

  const handlePriceChange = (range: string) => {
    if (setSelectedPriceRange) {
      setSelectedPriceRange(range);
      if (onPageChange) onPageChange(1);
    }
  };

  const handleReset = () => {
    setSelectedType(null);
    if (setSelectedSeason) setSelectedSeason(null);
    if (setSelectedPriceRange) setSelectedPriceRange("all");
    if (onReset) onReset();
    if (onPageChange) onPageChange(1);
  };

  const hasActiveFilters = selectedType || selectedSeason || (selectedPriceRange && selectedPriceRange !== "all");

  return (
    <FiltersContainer>
      {typeFilters.map(filter => (
        <FilterButton
          key={filter.id}
          $active={selectedType === filter.id}
          onClick={() => handleTypeClick(filter.id)}
        >
          {filter.icon}
          {filter.label}
        </FilterButton>
      ))}

      {seasonFilters && setSelectedSeason && seasonFilters.map(filter => (
        <FilterButton
          key={filter.id}
          $active={selectedSeason === filter.id}
          onClick={() => handleSeasonClick(filter.id)}
        >
          {filter.icon}
          {filter.label}
        </FilterButton>
      ))}

      {showPriceFilter && setSelectedPriceRange && (
        <PriceRangeContainer>
          <FaDollarSign />
          <select 
            value={selectedPriceRange}
            onChange={(e) => handlePriceChange(e.target.value)}
          >
            <option value="all">Todos los precios</option>
            <option value="0-1500">Hasta $1,500</option>
            <option value="1500-2500">$1,500 - $2,500</option>
            <option value="2500+">Más de $2,500</option>
          </select>
        </PriceRangeContainer>
      )}

      {hasActiveFilters && (
        <ResetButton onClick={handleReset}>
          <FaTimes />
          Limpiar Filtros
        </ResetButton>
      )}
    </FiltersContainer>
  );
}

