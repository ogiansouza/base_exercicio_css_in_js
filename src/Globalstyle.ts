import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonte};
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    background-color: #fff;
  }

  .container {
    max-width: ${({ theme }) => theme.containerLargura};
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`

export default GlobalStyle
