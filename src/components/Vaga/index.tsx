import styled from 'styled-components'

const VagaLi = styled.li`
  border: 1px solid ${({ theme }) => theme.corPrincipal};
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.corPrincipal};
    color: ${({ theme }) => theme.corSecundaria};

    a {
      border-color: ${({ theme }) => theme.corPrincipal};
      background-color: ${({ theme }) => theme.corSecundaria};
      color: ${({ theme }) => theme.corPrincipal};
    }
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a.attrs({})<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>`
  border-color: ${({ theme }) => theme.corSecundaria};
  background-color: ${({ theme }) => theme.corPrincipal};
  color: ${({ theme }) => theme.corSecundaria};
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

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaLi>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaLi>
)

export default Vaga
