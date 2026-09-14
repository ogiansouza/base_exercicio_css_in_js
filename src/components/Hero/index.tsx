import { FormularioHero, FormDiv, HeroTitle } from './style'

const Hero = () => (
  <FormularioHero aria-labelledby="hero-title">
    <FormDiv>
      <HeroTitle id="hero-title">
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </FormDiv>
  </FormularioHero>
)

export default Hero
