import React from 'react';
import styled from 'styled-components';

export interface AbCampoTextoProps {
  label: string,
  placeholder: string,
  value: string,
  type?: "text" | "email" | "password" | "date",
  onChange: (value: string) => void
}

const LabelEstilizada = styled.label`
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #002f52;
  margin-bottom: 8px;
  margin-left: 24px;
  display: block;
`;

const InputEstilizado = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
`;

export const AbCampoTexto = ({ label, placeholder, value, onChange, type="text" }:AbCampoTextoProps) => {
  return (
    <div>
      <LabelEstilizada>{label}</LabelEstilizada>
      <InputEstilizado 
        type={type}
        value={value} 
        placeholder={placeholder} 
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
