<<<<<<< HEAD
import { Vaga as StyledVaga, VagaTitulo, VagaLink } from './styled';
=======
// src/components/Vaga/index.tsx

import { Vaga, VagaTitulo, VagaLink } from './styled'; // Importa os styled-components
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

<<<<<<< HEAD
const Vaga = (props: Props) => (
  <li>
    <StyledVaga>
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
      <VagaLink href="#">
        Ver detalhes e candidatar-se
      </VagaLink>
    </StyledVaga>
  </li>
);

export default Vaga;
=======
const VagaComponent = (props: Props) => (
  <Vaga>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </Vaga>
);

export default VagaComponent;
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
