import styled from 'styled-components'
import colors from '../../themes/colors'

export const Form = styled('form')`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchButton = styled('button')`
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${colors.secondary};
  margin-left: 8px;
  cursor: pointer;
`

export const Field = styled('input')`
  padding: 0 16px;
  outline-color: ${colors.primary};
`
