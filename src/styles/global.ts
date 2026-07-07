import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontes.corpo};
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    background-color: ${({ theme }) => theme.cores.fundo};
    color: ${({ theme }) => theme.cores.texto};
  }

  ::selection {
    background-color: ${({ theme }) => theme.cores.principal};
    color: ${({ theme }) => theme.cores.secundaria};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 80%;
  }
`
