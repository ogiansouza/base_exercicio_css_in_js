import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}

`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
