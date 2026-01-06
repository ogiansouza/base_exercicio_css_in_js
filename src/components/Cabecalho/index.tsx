import styled from 'styled-components'

const CabecalhoStyled = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoStyled>
    <h1>EBAC Jobs</h1>
  </CabecalhoStyled>
)

export default Cabecalho
