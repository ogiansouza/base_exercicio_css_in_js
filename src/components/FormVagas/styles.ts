import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 24px;
  }
`

export const Field = styled.input`
  min-width: 0;
  height: 40px;
  padding: 0 16px;
  border: 1px solid #b7b7b7;
  outline-color: ${({ theme }) => theme.colors.primary};
`

export const SearchButton = styled.button`
  height: 40px;
  margin-left: 8px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`
