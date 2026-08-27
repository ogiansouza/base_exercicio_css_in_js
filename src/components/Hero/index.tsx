import { Form, HeroTitle } from './styles' // ← Corrigido: importa de './styles'

const Hero = () => (
  <Form>
    {' '}
    {/* ← Corrigido: usa o Styled Component, não className */}
    <div className="container">
      {' '}
      {/* ← Pode manter ou remover */}
      <HeroTitle>
        {' '}
        {/* ← Corrigido: usa o Styled Component */}
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero
