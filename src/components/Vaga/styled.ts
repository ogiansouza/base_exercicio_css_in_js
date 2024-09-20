<<<<<<< HEAD
import styled from 'styled-components';

export const Vaga = styled.div`
=======
// src/components/Vaga/styled.ts

import styled from 'styled-components';

// Estiliza o componente Vaga
const Vaga = styled.div`
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
<<<<<<< HEAD
  transition: all ease 0.3s;
=======
  transition: all ease .3s;
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  border-radius: 8px;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`;

<<<<<<< HEAD
export const VagaTitulo = styled.h3`
=======
// Estiliza o título da Vaga
const VagaTitulo = styled.h2`
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  font-weight: bold;
  margin-bottom: 16px;
`;

<<<<<<< HEAD
export const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria;
=======
// Estiliza o link da Vaga
const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`;
<<<<<<< HEAD
=======

export { Vaga, VagaTitulo, VagaLink };
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
