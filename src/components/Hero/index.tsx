import { Form, Container, Title } from './Hero'

export type HeroProps = {
  title: string
  backgroundImage?: string
  colorOverlay?: string
}

const Hero = ({ title, backgroundImage, colorOverlay }: HeroProps) => (
  <Form backgroundImage={backgroundImage} colorOverlay={colorOverlay}>
    <Container>
      <Title>{title}</Title>
    </Container>
  </Form>
)

export default Hero
