import { ThemeProvider } from 'styled-components'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import themeOrigin from './containers/theme/origin'

import Cabecalho from './components/Cabecalho'
import GlobalStyle, { Container } from './styles'

import './styles'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
