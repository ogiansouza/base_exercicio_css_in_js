import React from 'react';
import { VagasContainer } from './ListaVagas.styled';
import { Vaga } from '../../components/Vaga/Vaga';

type ListaVagasProps = {
  vagas: {
    id: string;
    titulo: string;
    url: string;
  }[];
};

export function ListaVagas({ vagas }: ListaVagasProps) {
  return (
    <VagasContainer>
      {vagas.map(vaga => (
        <Vaga key={vaga.id} id={vaga.id} titulo={vaga.titulo} url={vaga.url} />
      ))}
    </VagasContainer>
  );
}
