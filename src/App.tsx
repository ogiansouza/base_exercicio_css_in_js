import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { Container } from './styles'
import TemaPadrao from './themes/default'
import GlobalStyle from './styles'

function App() {
  return (
    <ThemeProvider theme={TemaPadrao}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
