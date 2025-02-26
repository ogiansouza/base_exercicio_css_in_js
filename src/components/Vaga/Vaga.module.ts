import styled from 'styled-components'
import colors from '../../themes/colors'

export const VagaItem = styled.li`
  border: 1px solid ${colors.primary};
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }

  &:hover a {
    border-color: ${colors.secondary};
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled('a')`
  border-color: ${colors.secondary};
  background-color: ${colors.primary};
  color: ${colors.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
