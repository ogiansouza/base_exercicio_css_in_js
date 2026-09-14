import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

    :root {
    --cor-principal: #6c5ce7;
    --cor-secundaria: #f4f4f4;
    color-scheme: light;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
    }

    body {
    background: #fff;
    color: #222;
    padding-bottom: 120px;
    }

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

    @media (max-width: 480px) {
    .container {
        max-width: calc(100% - 32px);
    }
}
`
export default GlobalStyle
