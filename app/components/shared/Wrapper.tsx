"use client";
import React from "react";
import styled from "styled-components";
import ChatbotFAB from "./ChatbotFAB";

const WrapperStyled = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  font-family: var(--font-poppins);
`;

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <WrapperStyled>
      {children}
      <ChatbotFAB />
    </WrapperStyled>
  );
}

