"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__input-container {
    width: 100%;
    position: relative;
    
    input {
      width: 100%;
      padding: 0.875rem 1rem 0.875rem 2.75rem;
      border: 1px solid rgba(157, 74, 188, 0.2);
      border-radius: 0.75rem;
      font-family: var(--font-poppins);
      font-size: 0.95rem;
      color: var(--color-text-dark);
      background: var(--color-bg-light);
      transition: all 0.2s ease;
      cursor: pointer;
      
      &:focus {
        outline: none;
        border-color: var(--color-primary);
        background: var(--color-white);
        box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
      }
      
      &::placeholder {
        color: rgba(107, 107, 107, 0.5);
      }
    }
  }
`;

interface StyledDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholderText?: string;
  minDate?: Date;
  dateFormat?: string;
  locale?: string;
  selectsStart?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  customInput?: React.ReactElement;
  showIcon?: boolean;
}

export default function StyledDatePicker({
  selected,
  onChange,
  placeholderText = "Selecciona fecha",
  minDate = new Date(),
  dateFormat = "dd/MM/yyyy",
  locale = "es",
  selectsStart = false,
  startDate,
  endDate,
  customInput,
  showIcon = true,
  ...props
}: StyledDatePickerProps) {
  return (
    <DatePickerWrapper>
      {showIcon && (
        <CalendarIcon />
      )}
      <DatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        dateFormat={dateFormat}
        placeholderText={placeholderText}
        locale={locale}
        selectsStart={selectsStart}
        startDate={startDate}
        endDate={endDate}
        customInput={customInput}
        {...props}
      />
    </DatePickerWrapper>
  );
}

const CalendarIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-primary);
  font-size: 1.1rem;
  pointer-events: none;
  z-index: 1;
`;
