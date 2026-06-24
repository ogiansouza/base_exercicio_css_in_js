import styled from 'styled-components'

const CabecalhoContainer = styled.header`
  background-color: ${({ theme }) => theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.principal};
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoContainer>
    <h1>EBAC Jobs</h1>
  </CabecalhoContainer>
)

export default Cabecalho
