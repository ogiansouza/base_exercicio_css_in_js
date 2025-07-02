import styled from 'styled-components'
import type { LiHTMLAttributes, AnchorHTMLAttributes } from 'react'

export interface VagaItemProps extends LiHTMLAttributes<HTMLLIElement> {
  destaque?: boolean
}

export const VagaItem = styled.li<VagaItemProps>`
  border: 1px solid ${({ theme }) => theme.cores.principal};
  background-color: ${({ theme, destaque }) =>
    destaque ? '#fffbe6' : theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.cores.principal};
    color: ${({ theme }) => theme.cores.secundaria};

    a {
      border-color: ${({ theme }) => theme.cores.principal};
      background-color: ${({ theme }) => theme.cores.secundaria};
      color: ${({ theme }) => theme.cores.principal};
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const Link = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>`
  border: 1px solid ${({ theme }) => theme.cores.secundaria};
  background-color: ${({ theme }) => theme.cores.principal};
  color: ${({ theme }) => theme.cores.secundaria};
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
`
