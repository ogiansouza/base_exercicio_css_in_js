import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  border: 1px solid ${({ theme }) => theme.cores.principal};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`

export const Campo = styled.input`
  height: 40px;
  min-width: 0;
  padding: 0 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.cores.texto};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.cores.branco};
  transition: ${({ theme }) => theme.transicao};

  &::placeholder {
    color: ${({ theme }) => theme.cores.principal};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.cores.principal}55;
  }
`

export const BotaoPesquisar = styled.button`
  height: 40px;
  padding: 0 24px;
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.cores.secundaria};
  background-color: ${({ theme }) => theme.cores.principal};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  border-radius: 8px;
  transition: ${({ theme }) => theme.transicao};

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.cores.principalEscura};
    border-color: ${({ theme }) => theme.cores.principalEscura};
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 8px;
  }
`
