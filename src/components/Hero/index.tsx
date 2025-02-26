import { Form, FormContent, HeroTitle } from './Hero.module'
import { Container } from '../../styles'

const Hero = () => (
  <Form>
    <FormContent>
      <Container>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </Container>
    </FormContent>
  </Form>
)

export default Hero
