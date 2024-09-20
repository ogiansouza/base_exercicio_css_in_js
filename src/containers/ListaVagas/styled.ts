<<<<<<< HEAD
import styled from 'styled-components';

export const VagasContainer = styled.ul`
=======
// src/components/ListaVagas/styled.ts

import styled from 'styled-components';

const VagasContainer = styled.ul`
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
<<<<<<< HEAD
=======

export { VagasContainer };

>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
