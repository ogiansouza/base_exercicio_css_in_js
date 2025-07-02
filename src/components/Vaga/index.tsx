import { VagaItem, Titulo, Link } from './Vaga'

export type VagaProps = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
  destaque?: boolean
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos,
  destaque = false
}: VagaProps) => (
  <VagaItem destaque={destaque}>
    <Titulo>{titulo}</Titulo>
    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </VagaItem>
)

export default Vaga
