"use client";
import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

interface ScrollTopButtonProps {
  $show?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const ScrollTopButtonStyled = styled.button<ScrollTopButtonProps>`
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(157, 74, 188, 0.18);
  color: var(--color-primary);
  display: ${props => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 100;
  
  &:hover {
    background: rgba(255, 255, 255, 0.24);
    box-shadow: 0 12px 32px rgba(157, 74, 188, 0.24);
  }
  
  &:active {
    transform: translateX(-50%) scale(0.98);
  }
`;

export default function ScrollTopButton({
  $show = false,
  onClick,
  ariaLabel = "Subir al inicio"
}: ScrollTopButtonProps) {
  const handleClick = () => {
    onClick?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollTopButtonStyled 
      $show={$show} 
      onClick={handleClick} 
      aria-label={ariaLabel}
    >
      <FaArrowUp />
    </ScrollTopButtonStyled>
  );
}
