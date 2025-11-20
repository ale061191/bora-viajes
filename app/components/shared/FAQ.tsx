"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FAQTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FAQContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FAQImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const FAQImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FAQListContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div<{ $isOpen: boolean }>`
  background: ${props => props.$isOpen ? '#e6f2ff' : 'white'};
  border-radius: 0.5rem;
  border: 1px solid ${props => props.$isOpen ? 'var(--color-primary)' : '#e5e5e5'};
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-primary);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-poppins);
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme?.$isOpen ? 'var(--color-primary)' : 'var(--color-text-dark)'};
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 1rem 1.25rem;
  }
`;

const FAQIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-left: 1rem;
  
  svg {
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
    font-size: 0.9rem;
  }
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.4s ease;
  padding: ${props => props.$isOpen ? '0 1.5rem 1.2rem 1.5rem' : '0 1.5rem'};
  
  p {
    color: var(--color-text-dark);
    line-height: 1.7;
    font-size: 0.95rem;
    margin: 0;
    font-family: var(--font-poppins);
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.$isOpen ? '0 1.25rem 1rem 1.25rem' : '0 1.25rem'};
    
    p {
      font-size: 0.9rem;
    }
  }
`;

export interface FAQItemData {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItemData[];
  imageUrl?: string;
}

export default function FAQ({ 
  title = "PREGUNTAS FRECUENTES", 
  items,
  imageUrl = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>{title}</FAQTitle>
      <FAQContent>
        <FAQImageContainer>
          <FAQImage src={imageUrl} alt="FAQ illustration" />
        </FAQImageContainer>
        <FAQListContainer>
          <FAQList>
            {items.map((item, index) => (
              <FAQItem key={index} $isOpen={openIndex === index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} theme={{ $isOpen: openIndex === index }}>
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
        </FAQListContainer>
      </FAQContent>
    </FAQSection>
  );
}

