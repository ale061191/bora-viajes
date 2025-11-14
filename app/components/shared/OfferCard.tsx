"use client";
import React from "react";
import styled from "styled-components";
import { FaPercent, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

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
  font-family: var(--font-poppins);
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
  font-family: var(--font-poppins);
`;

const OfferDescription = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.5;
  font-family: var(--font-poppins);
`;

const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-poppins);
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
    font-family: var(--font-poppins);
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

export interface OfferData {
  id: number;
  title: string;
  description: string;
  discount: string;
  destination: string;
  validUntil: string;
  image: string;
  themeColor: string;
  href?: string;
}

interface OfferCardProps {
  offer: OfferData;
  ctaText?: string;
}

export function OfferCard({ 
  offer, 
  ctaText = "Ver oferta completa" 
}: OfferCardProps) {
  return (
    <OfferCardLink
      href={offer.href || `/ofertas/${offer.id}`}
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
          <span>{ctaText}</span>
          <OfferCTAIcon>
            <FaArrowRight />
          </OfferCTAIcon>
        </OfferCTA>
      </OfferContent>
    </OfferCardLink>
  );
}

interface OffersGridProps {
  offers: OfferData[];
  ctaText?: string;
}

export function OffersGridComponent({ offers, ctaText }: OffersGridProps) {
  return (
    <OffersGrid>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} ctaText={ctaText} />
      ))}
    </OffersGrid>
  );
}

export { OffersGrid };

