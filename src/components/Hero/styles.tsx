import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`

export const HeroTitle = styled.h2`
  background-color: ${(props) => props.theme.corSecundaria};
  content: '';
  opacity: 0.7;
  font-family: Gloock, serif;
  font-size: 48px;
`
