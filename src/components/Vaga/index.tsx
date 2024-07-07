import React from 'react'
import { VagaContainer, VagaTitulo, StyledVagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<Props> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <StyledVagaLink href="#">Ver detalhes e candidatar-se</StyledVagaLink>
  </VagaContainer>
)

export default Vaga
