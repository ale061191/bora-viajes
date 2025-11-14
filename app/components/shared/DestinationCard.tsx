"use client";
import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

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
  font-family: var(--font-poppins);
`;

const DestinationFlag = styled.span`
  font-size: 1.5rem;
`;

const DestinationStats = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: var(--font-poppins);
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
  margin-top: 0.5rem;

  span {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    font-family: var(--font-poppins);
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

export interface DestinationData {
  id?: number;
  name: string;
  price: string;
  image: string;
  flag: string;
  stats: string;
  themeColor: string;
  href: string;
}

interface DestinationCardProps {
  destination: DestinationData;
  ctaText?: string;
}

export function DestinationCard({ 
  destination, 
  ctaText = "Explorar ahora" 
}: DestinationCardProps) {
  return (
    <DestinationCardLink
      href={destination.href}
      $image={destination.image}
      $theme={destination.themeColor}
      aria-label={`Explorar ${destination.name}`}
    >
      <DestinationContent>
        <DestinationTitle>
          {destination.name}
          <DestinationFlag>{destination.flag}</DestinationFlag>
        </DestinationTitle>
        <DestinationStats>
          Desde {destination.price} • {destination.stats}
        </DestinationStats>
        <DestinationCTA $theme={destination.themeColor}>
          <span>{ctaText}</span>
          <DestinationCTAIcon>
            <FaArrowRight />
          </DestinationCTAIcon>
        </DestinationCTA>
      </DestinationContent>
    </DestinationCardLink>
  );
}

interface DestinationsGridProps {
  destinations: DestinationData[];
  ctaText?: string;
}

export function DestinationsGridComponent({ destinations, ctaText }: DestinationsGridProps) {
  return (
    <DestinationsGrid>
      {destinations.map((destination, index) => (
        <DestinationCard 
          key={destination.id || index} 
          destination={destination} 
          ctaText={ctaText} 
        />
      ))}
    </DestinationsGrid>
  );
}

export { DestinationsGrid };

