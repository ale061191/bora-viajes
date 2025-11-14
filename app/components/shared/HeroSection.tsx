"use client";
import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section<{ $backgroundImage?: string }>`
  background: ${props => props.$backgroundImage 
    ? `url('${props.$backgroundImage}') center/cover no-repeat` 
    : 'linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%)'};
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 70px;
  
  @media (max-width: 768px) {
    min-height: 350px;
    padding-top: 60px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(157,74,188,0.12) 0%, rgba(241,241,241,0.7) 100%);
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-primary);
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = "/hero.jpg",
  children
}: HeroSectionProps) {
  return (
    <HeroStyled $backgroundImage={backgroundImage}>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle className="great-vibes">{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        {children}
      </HeroContent>
    </HeroStyled>
  );
}
