import styled from 'styled-components'

const Cabecalho = styled.header`
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

export default Cabecalho
