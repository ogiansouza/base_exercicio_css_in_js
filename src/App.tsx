import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho/index'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './styles'
import colors from './theme/colors'

function App() {
  return (
    <ThemeProvider theme={colors}>
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
