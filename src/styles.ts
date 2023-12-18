import styled, { createGlobalStyle } from 'styled-components'

const temaCor {
  corPrincipal: #a7727d;
  corSsecundaria: #f9f5e7;
}

export default temaCor

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`
export const container = styled.div`
  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`
