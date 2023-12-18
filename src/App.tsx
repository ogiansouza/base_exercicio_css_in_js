import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { container} from './styles'

function App() {
  return (
    <EstiloGlobal>
      <Header />
      <Hero />
      <container>
        <ListaVagas />
      </container>
    </EstiloGlobal>
  )
}

export default App
