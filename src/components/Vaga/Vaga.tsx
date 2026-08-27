import {
  VagaItem,
  VagaTitulo,
  VagaInfo,
  VagaInfoItem,
  VagaLink
} from './styles'

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
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaInfo>
      <VagaInfoItem>Localização: {props.localizacao}</VagaInfoItem>
      <VagaInfoItem>Senioridade: {props.nivel}</VagaInfoItem>
      <VagaInfoItem>Tipo de contratação: {props.modalidade}</VagaInfoItem>
      <VagaInfoItem>
        Salário: R$ {props.salarioMin} - R$ {props.salarioMax}
      </VagaInfoItem>
      <VagaInfoItem>Requisitos: {props.requisitos.join(', ')}</VagaInfoItem>
    </VagaInfo>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
