"use client";
import React from "react";
import styled from "styled-components";

const CTASection = styled.section`
  background: var(--color-primary);
  padding: 3rem 2rem;
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CTAText = styled.h2`
  font-family: var(--font-great-vibes);
  font-size: 2.8rem;
  color: var(--color-white);
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

interface CTABannerProps {
  text?: string;
}

export default function CTABanner({ 
  text = "¡Tu próxima aventura comienza aquí, viaja con nosotros!" 
}: CTABannerProps) {
  return (
    <CTASection>
      <CTAContainer>
        <CTAText className="great-vibes">{text}</CTAText>
      </CTAContainer>
    </CTASection>
  );
}
