import VacanciesList, { VacanciesLink, VacanciesTitle } from './styles'

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
  <VacanciesList>
    <VacanciesTitle>
      <h3>{props.titulo}</h3>
    </VacanciesTitle>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VacanciesLink href="#">Ver detalhes e candidatar-se</VacanciesLink>
  </VacanciesList>
)

export default Vaga
