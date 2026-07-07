import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { Container, EstiloGlobal } from './styles/global'
import tema from './styles/tema'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container as="main">
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
