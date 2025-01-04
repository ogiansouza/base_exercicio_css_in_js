import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://raw.githubusercontent.com/PolarBearGG/PolarBearGG/master/web-developer.gif');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: ${(props) => props.theme.CorTextoHero};
    font-family: Lato, serif;
    font-weight: bold;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    div {
      font-size: 32px;
    }
  }
`

export const HeroTitle = styled.h2`
  font-family: Lato, serif;
  font-weight: bold;
  font-size: 48px;
`
