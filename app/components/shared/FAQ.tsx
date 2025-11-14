"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FAQTitle = styled.h2`
  font-family: var(--font-great-vibes);
  font-size: 2.5rem;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FAQSubtitle = styled.p`
  text-align: center;
  color: var(--color-text-dark);
  font-size: 1.05rem;
  margin-bottom: 3rem;
  font-family: var(--font-poppins);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div<{ $isOpen: boolean }>`
  background: white;
  border-radius: 1rem;
  border: 1px solid ${props => props.$isOpen ? 'var(--color-primary)' : 'rgba(157, 74, 188, 0.15)'};
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isOpen ? '0 4px 20px rgba(157, 74, 188, 0.15)' : '0 2px 8px rgba(157, 74, 188, 0.08)'};
  
  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 4px 20px rgba(157, 74, 188, 0.15);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-poppins);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text-dark);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.25rem 1.5rem;
  }
`;

const FAQIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.$isOpen ? 'var(--color-primary)' : 'rgba(157, 74, 188, 0.1)'};
  color: ${props => props.$isOpen ? 'white' : 'var(--color-primary)'};
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-left: 1rem;
  
  svg {
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
    font-size: 0.85rem;
  }
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.4s ease;
  padding: ${props => props.$isOpen ? '0 1.75rem 1.5rem 1.75rem' : '0 1.75rem'};
  
  p {
    color: var(--color-text-dark);
    line-height: 1.7;
    font-size: 0.98rem;
    margin: 0;
    font-family: var(--font-poppins);
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.$isOpen ? '0 1.5rem 1.25rem 1.5rem' : '0 1.5rem'};
    
    p {
      font-size: 0.95rem;
    }
  }
`;

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItemData[];
}

export default function FAQ({ 
  title = "Preguntas Frecuentes", 
  subtitle = "Resolvemos tus dudas para que planifiques tu viaje con total confianza.",
  items 
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle className="great-vibes">{title}</FAQTitle>
      <FAQSubtitle>{subtitle}</FAQSubtitle>
      <FAQList>
        {items.map((item, index) => (
          <FAQItem key={index} $isOpen={openIndex === index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <FAQIcon $isOpen={openIndex === index}>
                <FaChevronDown />
              </FAQIcon>
            </FAQQuestion>
            <FAQAnswer $isOpen={openIndex === index}>
              <p>{item.answer}</p>
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQSection>
  );
}

