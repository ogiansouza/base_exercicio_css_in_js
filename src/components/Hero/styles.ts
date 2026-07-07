import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/global'

const surgir = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Hero = styled.section`
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
    content: '';
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.cores.principal} 0%,
      ${({ theme }) => theme.cores.principalEscura} 100%
    );
    opacity: 0.75;
  }

  ${Container} {
    position: relative;
    color: #eee;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    padding: 24px 0;
  }
`

export const Titulo = styled.h2`
  font-family: ${({ theme }) => theme.fontes.destaque};
  font-weight: 400;
  font-size: 48px;
  max-width: 720px;
  animation: ${surgir} 0.8s ease both;

  em {
    font-family: inherit;
    font-style: normal;
    border-bottom: 3px solid ${({ theme }) => theme.cores.secundaria};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`
