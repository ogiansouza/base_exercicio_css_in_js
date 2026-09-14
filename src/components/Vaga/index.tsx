import { VagaContainer, VagaTitulo, VagaLink } from './style'

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
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário:{' '}
        {props.salarioMin.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}{' '}
        -{' '}
        {props.salarioMax.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#candidatura">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
