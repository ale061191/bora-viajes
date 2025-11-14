"use client";
import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FaSearch, FaUser, FaCalendarAlt } from "react-icons/fa";

const SearchFormWrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const StyledSearchForm = styled.form`
  display: flex;
  gap: 1.2rem;
  background: rgba(255,255,255,0.18);
  border-radius: 2rem;
  padding: 1.2rem 2.5rem;
  box-shadow: 0 8px 32px rgba(157,74,188,0.18);
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(255,255,255,0.35);
  width: 100%;
  max-width: 1100px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.7rem;
    padding: 1rem 1rem;
    max-width: 100vw;
  }
  @media (max-width: 600px) {
    padding: 0.7rem 0.5rem;
    border-radius: 1rem;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-bg-light);
  border-radius: 1rem;
  border: 1px solid rgba(157, 74, 188, 0.2);
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
  
  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: 1rem;
    font-family: var(--font-poppins);
    color: var(--color-text-dark);
    
    &::placeholder {
      color: var(--color-text-dark);
      opacity: 0.7;
    }
  }
  
  svg {
    color: var(--color-text-dark);
    opacity: 0.7;
  }
`;

const SearchButton = styled.button`
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-family: var(--font-poppins);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #7c398f;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

interface SearchFormProps {
  destino: string;
  setDestino: (value: string) => void;
  fechaInicio: Date | null;
  setFechaInicio: (date: Date | null) => void;
  fechaFin: Date | null;
  setFechaFin: (date: Date | null) => void;
  viajeros: number;
  setViajeros: (value: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText?: string;
  showWrapper?: boolean;
}

const viajeroOptions = [
  { value: 1, label: "1 viajero" },
  { value: 2, label: "2 viajeros" },
  { value: 3, label: "3 viajeros" },
  { value: 4, label: "4+ viajeros" }
];

export default function SearchForm({
  destino,
  setDestino,
  fechaInicio,
  setFechaInicio,
  fechaFin,
  setFechaFin,
  viajeros,
  setViajeros,
  onSubmit,
  buttonText = "Buscar Viajes",
  showWrapper = true
}: SearchFormProps) {
  const FormContent = (
    <StyledSearchForm onSubmit={onSubmit}>
      <SearchInput>
        <FaSearch />
        <input
          type="text"
          placeholder="¿A dónde?"
          value={destino}
          onChange={e => setDestino(e.target.value)}
        />
      </SearchInput>
      <SearchInput>
        <FaCalendarAlt />
        <DatePicker
          selected={fechaInicio}
          onChange={(date) => setFechaInicio(date)}
          placeholderText="Fecha de inicio"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          selectsStart
          startDate={fechaInicio}
          endDate={fechaFin}
          customInput={
            <input
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                width: "100%",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
                color: "var(--color-text-dark)"
              }}
            />
          }
        />
      </SearchInput>
      <SearchInput>
        <FaCalendarAlt />
        <DatePicker
          selected={fechaFin}
          onChange={(date) => setFechaFin(date)}
          placeholderText="Fecha de fin"
          dateFormat="dd/MM/yyyy"
          minDate={fechaInicio || new Date()}
          selectsEnd
          startDate={fechaInicio}
          endDate={fechaFin}
          customInput={
            <input
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                width: "100%",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
                color: "var(--color-text-dark)"
              }}
            />
          }
        />
      </SearchInput>
      <SearchInput>
        <FaUser />
        <Select
          value={viajeroOptions.find(opt => opt.value === viajeros)}
          onChange={(selected) => setViajeros(selected?.value || 1)}
          options={viajeroOptions}
          styles={{
            control: (base) => ({
              ...base,
              border: "none",
              background: "transparent",
              boxShadow: "none",
              minHeight: "auto",
              fontFamily: "var(--font-poppins)"
            }),
            valueContainer: (base) => ({
              ...base,
              padding: 0
            }),
            indicatorSeparator: () => ({ display: "none" }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: 0,
              paddingLeft: "4px"
            }),
            menu: (base) => ({
              ...base,
              fontFamily: "var(--font-poppins)"
            })
          }}
          isSearchable={false}
        />
      </SearchInput>
      <SearchButton type="submit">
        <FaSearch />
        {buttonText}
      </SearchButton>
    </StyledSearchForm>
  );

  if (showWrapper) {
    return <SearchFormWrapper>{FormContent}</SearchFormWrapper>;
  }

  return FormContent;
}

