import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
`

export const Vacancies = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default Vacancies
