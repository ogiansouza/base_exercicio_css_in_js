// styles.ts

import styled from 'styled-components'

export const VagaContainer = styled.li`
  border: 1px solid var(--corPrincipal);
  background-color: var(--corSecundaria);
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: var(--cor-secundaria);
  }

  &:hover a {
    border-color: ${(props) => props.theme.corPrincipal};
    background-color: var(--cor-secundaria);
    color: ${(props) => props.theme.corPrincipal};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

interface StyledVagaLinkProps {
  href?: string
  children?: React.ReactNode
}

export const StyledVagaLink = styled.a<StyledVagaLinkProps>`
  color: ${(props) => props.theme.corSecundaria};
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
