import styled from 'styled-components'
import { Cores } from '../../styles/styles'

export const Form = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(167, 114, 125, 0.7);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const FormContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${Cores.corSecundaria};
  text-align: center;
  max-width: 800px;
  padding: 0 16px;
`

export const HeroTitle = styled.h1`
  font-family: 'Gloock', serif;
  font-size: 48px;
  color: ${Cores.corSecundaria};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
