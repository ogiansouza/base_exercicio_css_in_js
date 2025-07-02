import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import { tema } from './theme'
import GlobalStyle from './Globalstyle'
import Container from './components/Container'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />

      <Cabecalho />

      <Hero
        title="As melhores vagas para tecnologia, design e artes visuais."
        backgroundImage="https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg"
        colorOverlay="rgba(0, 0, 0, 0.6)"
      />

      <Container>
        <FormVagas
          aoPesquisar={(termo) => console.log('Termo pesquisado:', termo)}
        />
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
