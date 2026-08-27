import styled from 'styled-components'
import { AnchorHTMLAttributes } from 'react'

export const VagaItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  list-style: none;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaInfo = styled.ul`
  padding: 0;
  margin: 0 0 16px 0;
  list-style: none;
`

export const VagaInfoItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
`

export const VagaLink = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>`
  border: 1px solid var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 8px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: all ease 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    display: block;
  }
`
