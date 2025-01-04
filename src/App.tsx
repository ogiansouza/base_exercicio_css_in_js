import { ThemeProvider } from 'styled-components'
import temaOriginal from './Theme/tema'
import Cabecalho from './components/Cabecalho/cabecalho-index'
import Hero from './components/Hero/hero-index'
import EstiloGlobal, { Container } from './styles'
import ListaVagas from './containers/ListaVagas/lista-index'

function App() {
  return (
    <ThemeProvider theme={temaOriginal}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
