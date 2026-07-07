import * as S from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const formatadorSalario = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
})

const Vaga = (props: Props) => (
  <S.Vaga>
    <S.Topo>
      <S.Titulo>{props.titulo}</S.Titulo>
      <S.Nivel $nivel={props.nivel}>{props.nivel}</S.Nivel>
    </S.Topo>
    <S.Detalhes>
      <li>
        <strong>Localização:</strong> {props.localizacao}
      </li>
      <li>
        <strong>Contratação:</strong> {props.modalidade.toUpperCase()}
      </li>
      <li>
        <strong>Salário:</strong> {formatadorSalario.format(props.salarioMin)} a{' '}
        {formatadorSalario.format(props.salarioMax)}
      </li>
    </S.Detalhes>
    <S.Requisitos>
      {props.requisitos.map((requisito) => (
        <S.Tag key={requisito}>{requisito}</S.Tag>
      ))}
    </S.Requisitos>
    <S.Link href="#">Ver detalhes e candidatar-se</S.Link>
  </S.Vaga>
)

export default Vaga
