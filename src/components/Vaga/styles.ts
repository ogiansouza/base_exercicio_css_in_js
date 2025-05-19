import styled from 'styled-components'

export const Vaga = styled.div`
  border: 1px solid var ${({ theme }) => theme.corPrincipal};
  background-color: var ${({ theme }) => theme.corSecundaria};
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.corPrincipal};
    color: var ${({ theme }) => theme.corSecundaria};

    a {
      border-color: ${({ theme }) => theme.corPrincipal};
      background-color: var ${({ theme }) => theme.corSecundaria};
      color: ${({ theme }) => theme.corPrincipal};
    }
  }
`

export const VagaTitulo = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${({ theme }) => theme.corSecundaria};
  background-color: ${({ theme }) => theme.corPrincipal};
  color: var ${({ theme }) => theme.corSecundaria};
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
