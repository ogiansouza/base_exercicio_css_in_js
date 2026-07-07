import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: ${({ theme }) => theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.principal};
  text-align: center;
  padding: 24px 0;
  border-bottom: 3px solid ${({ theme }) => theme.cores.principal};
`

export const Titulo = styled.h1`
  font-family: ${({ theme }) => theme.fontes.destaque};
  font-weight: 400;
  letter-spacing: 1px;

  span {
    font-family: inherit;
    color: ${({ theme }) => theme.cores.principalEscura};
    font-style: italic;
  }
`
