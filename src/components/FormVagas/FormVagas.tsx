import React from 'react';
import { FormVagasContainer, BotaoPesquisar, Campo } from './FormVagas.styled';

export function FormVagas() {
  return (
    <FormVagasContainer>
      <Campo placeholder="Buscar vagas…" />
      <BotaoPesquisar>Buscar</BotaoPesquisar>
    </FormVagasContainer>
  );
}
