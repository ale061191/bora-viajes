"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import { TestimonialCard, TestimonialCardLinkStyled } from "./TestimonialCard";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TestimonialsSection = styled.section`
  background: var(--color-bg-light);
  color: var(--color-text-dark);
  padding: 3rem 0;
  text-align: center;
  overflow: hidden;
  
  @media (min-width: 640px) {
    padding: 6rem 0;
  }
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const TestimonialsTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: ${scroll} 40s linear infinite;
  width: max-content;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: var(--color-text-dark);
  font-size: 0.95rem;
`;

const AuthorHandle = styled.div`
  font-size: 0.85rem;
  color: var(--color-text-dark);
  opacity: 0.6;
`;

const TestimonialText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-dark);
  margin: 0;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-great-vibes);
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  font-family: var(--font-poppins);
`;

export interface TestimonialData {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

interface TestimonialsMarqueeProps {
  testimonials: TestimonialData[];
  title?: string;
  subtitle?: string;
  showTitles?: boolean;
}

export default function TestimonialsMarquee({
  testimonials,
  title = "Lo que dicen nuestros viajeros",
  subtitle = "Experiencias reales de personas que confiaron en nosotros.",
  showTitles = true
}: TestimonialsMarqueeProps) {
  return (
    <TestimonialsSection>
      {showTitles && (
        <>
          <SectionTitle className="great-vibes">{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
        </>
      )}
      <TestimonialsTrack>
        {[...Array(2)].map((_, setIndex) => (
          testimonials.map((testimonial, i) => {
            const cardContent = (
              <>
                <TestimonialAuthor>
                  <Avatar>
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                  </Avatar>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author.name}</AuthorName>
                    <AuthorHandle>{testimonial.author.handle}</AuthorHandle>
                  </AuthorInfo>
                </TestimonialAuthor>
                <TestimonialText>{testimonial.text}</TestimonialText>
              </>
            );
            
            if (testimonial.href) {
              return (
                <TestimonialCardLinkStyled
                  key={`${setIndex}-${i}`}
                  href={testimonial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </TestimonialCardLinkStyled>
              );
            }
            
            return (
              <TestimonialCard key={`${setIndex}-${i}`}>
                {cardContent}
              </TestimonialCard>
            );
          })
        ))}
      </TestimonialsTrack>
    </TestimonialsSection>
  );
}

export {
  TestimonialsSection,
  TestimonialsTrack,
  TestimonialAuthor,
  Avatar,
  AvatarImage,
  AuthorInfo,
  AuthorName,
  AuthorHandle,
  TestimonialText
};

