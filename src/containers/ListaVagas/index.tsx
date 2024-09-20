import { useState } from 'react';
<<<<<<< HEAD
import FormVagas from '../../components/FormVagas';
import Vaga from '../../components/Vaga';
import { VagasContainer } from './styled'; // Importação do Styled Component

type VagaType = {
=======
import Vaga from '../../components/Vaga';
import { VagasContainer } from './styled'; // Correto

type VagaProps = {
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  id: string;
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

<<<<<<< HEAD
const vagas: VagaType[] = [
=======
const vagas = [
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
<<<<<<< HEAD
  {
    id: '3',
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '4',
    titulo: 'Designer de interfaces',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '5',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '6',
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '7',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
=======
  // Adicione os outros itens aqui...
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('');

  const vagasFiltradas = vagas.filter(
<<<<<<< HEAD
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
=======
    (x) => x.titulo.toLocaleLowerCase().includes(filtro)
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  );

  return (
    <div>
<<<<<<< HEAD
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasContainer>
        {vagasFiltradas.map((vag) => (
=======
      <VagasContainer>
        {vagasFiltradas.map((vaga) => (
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
          />
        ))}
      </VagasContainer>
    </div>
  );
};

export default ListaVagas;
<<<<<<< HEAD
=======


>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1

