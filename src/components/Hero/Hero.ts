import styled from 'styled-components'

export type FormProps = {
  backgroundImage?: string
  colorOverlay?: string
  children?: React.ReactNode
}
export const Form = styled.form<FormProps>`
  position: relative;
  height: 360px;
  width: 100%;
  background-image: ${(props) =>
    `url("${
      props.backgroundImage ||
      'https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg'
    }")`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: var(--cor-principal);
    opacity: 0.7;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const Container = styled.div`
  position: relative;
  color: #eee;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`

export const Title = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
