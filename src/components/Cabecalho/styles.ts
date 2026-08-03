import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 24px 0;
`
