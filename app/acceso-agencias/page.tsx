"use client";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  /* Subtle pattern to emulate travel stamps/texture */
  background-image: radial-gradient(#9d4abc 0.5px, transparent 0.5px), radial-gradient(#9d4abc 0.5px, #f8f9fa 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  position: relative;
  padding: 1rem;
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-family: var(--font-poppins);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease;
  z-index: 10;

  &:hover {
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
  }
`;

const Logo = styled.h1`
  font-family: var(--font-great-vibes);
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const LoginCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 450px;
  animation: ${fadeIn} 0.6s ease-out 0.2s backwards;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--color-primary), #ff6b6b);
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: 1.8rem;
  color: var(--color-text-dark);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 0.5rem;
  font-family: var(--font-poppins);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fcfcfc;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
    background: white;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-family: var(--font-poppins);
  font-size: 0.85rem;
  color: #ff6b6b;
  text-decoration: none;
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: #e55a5a;
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-family: var(--font-poppins);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(157, 74, 188, 0.3);

  &:hover {
    background: #8a3fa6;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(157, 74, 188, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-family: var(--font-poppins);
  font-size: 0.9rem;
  color: #666;

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 3rem;
  font-family: var(--font-poppins);
  font-size: 0.8rem;
  color: #888;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out 0.4s backwards;
`;

export default function AgencyAccessPage() {
    return (
        <PageContainer>
            <BackLink href="/">
                <FaArrowLeft /> Volver al Inicio
            </BackLink>

            <Logo>Bora Viajes</Logo>

            <LoginCard>
                <CardTitle>Acceso Agencias</CardTitle>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <Label>E-mail / Usuario</Label>
                        <Input type="text" placeholder="Ingresa tu usuario" />
                    </InputGroup>

                    <InputGroup>
                        <Label>Contraseña</Label>
                        <Input type="password" placeholder="••••••••" />
                    </InputGroup>

                    <ForgotPassword href="#">¿Olvidó sus datos?</ForgotPassword>

                    <LoginButton type="submit">Ingresar</LoginButton>

                    <RegisterLink>
                        ¿Aún no está registrado? <a href="#">Registro</a>
                    </RegisterLink>
                </form>
            </LoginCard>

            <Copyright>
                © {new Date().getFullYear()} Agencia de viajes y turismo Bora Viajes.
                <br />
                Todos los derechos reservados.
            </Copyright>
        </PageContainer>
    );
}
