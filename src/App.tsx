import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import tema from './themes/theme'

import './styles.ts'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <ThemeProvider theme={tema}>
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
