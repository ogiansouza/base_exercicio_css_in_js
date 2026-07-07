import styled from 'styled-components'

export const Vagas = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Resultado = styled.p`
  margin-top: 32px;
  font-size: 14px;
  color: ${({ theme }) => theme.cores.principalEscura};

  strong {
    font-weight: bold;
  }
`

export const SemResultados = styled.div`
  margin-top: 16px;
  padding: 48px 32px;
  text-align: center;
  border: 1px dashed ${({ theme }) => theme.cores.principal};
  border-radius: 12px;
  color: ${({ theme }) => theme.cores.principalEscura};

  h3 {
    font-family: ${({ theme }) => theme.fontes.destaque};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 8px;
  }
`
