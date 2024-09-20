<<<<<<< HEAD
import { Form, TitleContainer, HeroTitle } from './styled'; // Atualize aqui

const Hero = () => (
  <Form>
    <TitleContainer className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </TitleContainer>
  </Form>
);

export default Hero;
=======
import React from 'react';
import { Hero, HeroTitle } from './styled';

const HeroComponent: React.FC = () => (
  <Hero>
    <div>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Hero>
);

export default HeroComponent;
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
