import styled from 'styled-components'

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 360px;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-position: center;
  background-size: cover;

  &::before {
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroContent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.lightText};
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
