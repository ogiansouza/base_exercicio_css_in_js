import styled from 'styled-components'

export const ContainerEstilizado = styled.div`
  max-width: ${({ theme }) => theme.containerLargura};
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`
