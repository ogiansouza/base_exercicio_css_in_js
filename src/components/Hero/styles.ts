import styled from 'styled-components'
import { Cores } from '../../styles/styles' // importa as cores definidas

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Cores.corPrincipal};
    content: '';
    opacity: 0.7;
    z-index: 1;
  }

  div {
    position: relative;
    color: #eee;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;
  color: ${Cores.corSecundaria};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
