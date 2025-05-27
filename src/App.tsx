import React from 'react'

import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './global'
import { ThemeProvider } from 'styled-components'
import mainTheme from './Theme/temaPrincipal'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Cabecalho>EBAC Vagas</Cabecalho>
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
