import React from 'react';
import { VagaContainer, VagaTitulo, VagaLink } from './Vaga.styled';

type VagaProps = {
  id: string;
  titulo: string;
  url: string;
};

export function Vaga({ id, titulo, url }: VagaProps) {
  return (
    <VagaContainer>
      <VagaTitulo>{titulo}</VagaTitulo>
      <VagaLink href={url}>Saiba mais</VagaLink>
    </VagaContainer>
  );
}
