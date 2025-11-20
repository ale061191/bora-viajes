"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroCarouselContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSlide = styled.div<{ $backgroundImage: string; $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('${props => props.$backgroundImage}') center/cover no-repeat;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  animation: ${props => props.$isActive ? fadeIn : 'none'} 1.5s ease-in-out;
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    gap: 0.5rem;
  }
`;

const Indicator = styled.button<{ $isActive: boolean }>`
  width: ${props => props.$isActive ? '2.5rem' : '0.75rem'};
  height: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background: ${props => props.$isActive 
    ? 'var(--color-white)' 
    : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-white);
  }
  
  @media (max-width: 768px) {
    width: ${props => props.$isActive ? '2rem' : '0.6rem'};
    height: 0.6rem;
  }
`;

interface HeroSectionProps {
  images?: string[];
  autoPlayInterval?: number;
}

const defaultImages = [
  "/hero.jpg",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
];

export default function HeroSection({
  images = defaultImages,
  autoPlayInterval = 5000
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <HeroCarouselContainer>
      {images.map((image, index) => (
        <HeroSlide
          key={index}
          $backgroundImage={image}
          $isActive={currentSlide === index}
        />
      ))}
      <CarouselIndicators>
        {images.map((_, index) => (
          <Indicator
            key={index}
            $isActive={currentSlide === index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </CarouselIndicators>
    </HeroCarouselContainer>
  );
}
