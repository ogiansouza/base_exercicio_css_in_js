import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyle } from './styles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container as="main">
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
