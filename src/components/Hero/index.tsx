import React from 'react'
import { Form, HeroTitle } from './styles' // Corrigindo a importação
import { Container } from '../../styles'

const Hero = () => (
  <Form>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </Form>
)

export default Hero
