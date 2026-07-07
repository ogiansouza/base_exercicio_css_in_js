import styled from 'styled-components'

type NivelProps = {
  $nivel: string
}

export const Vaga = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.cores.principal};
  background-color: ${({ theme }) => theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.principal};
  padding: 16px;
  border-radius: 8px;
  transition: ${({ theme }) => theme.transicao};

  &:hover {
    background-color: ${({ theme }) => theme.cores.principal};
    color: ${({ theme }) => theme.cores.secundaria};
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.cores.principal}40;
  }
`

export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
`

export const Nivel = styled.span<NivelProps>`
  background-color: ${({ theme, $nivel }) =>
    theme.cores.niveis[$nivel] || theme.cores.principalEscura};
  color: ${({ theme }) => theme.cores.secundaria};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
`

export const Detalhes = styled.ul`
  display: grid;
  gap: 4px;
  font-size: 14px;

  li strong {
    font-weight: bold;
  }
`

export const Requisitos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 12px 0 16px;
`

export const Tag = styled.span`
  border: 1px solid currentColor;
  font-size: 12px;
  padding: 2px 10px;
  border-radius: 999px;
  transition: ${({ theme }) => theme.transicao};
`

export const Link = styled.a`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.cores.principal};
  color: ${({ theme }) => theme.cores.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: auto;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: ${({ theme }) => theme.transicao};

  ${Vaga}:hover & {
    background-color: ${({ theme }) => theme.cores.secundaria};
    color: ${({ theme }) => theme.cores.principal};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`
