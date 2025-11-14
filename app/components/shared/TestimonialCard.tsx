"use client";
import React from "react";
import styled from "styled-components";

const testimonialCardStyles = `
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border-top: 1px solid rgba(157, 74, 188, 0.1);
  background: linear-gradient(to bottom, rgba(241, 241, 241, 0.5), rgba(241, 241, 241, 0.1));
  padding: 1rem;
  text-align: left;
  max-width: 320px;
  min-width: 280px;
  transition: background 0.3s;
  
  &:hover {
    background: linear-gradient(to bottom, rgba(241, 241, 241, 0.6), rgba(241, 241, 241, 0.2));
  }
  
  @media (min-width: 640px) {
    padding: 1.5rem;
    min-width: 320px;
  }
`;

export const TestimonialCard = styled.div`${testimonialCardStyles}`;

export const TestimonialCardLinkStyled = styled.a`
  ${testimonialCardStyles}
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

