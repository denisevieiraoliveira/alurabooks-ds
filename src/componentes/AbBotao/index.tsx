import React from "react";
import styled from "styled-components";

export interface AbBotaoProps {
  texto?: string,
  tipo?: 'primario' | 'secundario',
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  padding: 16px 32px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  ${(props) => props.tipo === 'primario' && `
    color: #FFF;
    background: #EB9B00;
    border: 2px solid #EB9B00;
    &:hover {
      background: #B87900;
      border: 2px solid #B87900;
    }
  `}

  ${(props) => props.tipo === 'secundario' && `
    background: transparent;
    border: 2px solid #EB9B00;
    color: #EB9B00;
    &:hover {
      color: #B87900;
      border: 2px solid #B87900;
    }
  `}
`;

export const AbBotao = ({ texto, tipo = 'primario', onClick }:AbBotaoProps) => {
  return(
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto}
    </BotaoEstilizado>
  )
}


// #B87900
// #EB9B00