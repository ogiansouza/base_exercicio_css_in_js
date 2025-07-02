import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export const Lista = styled.ul<HTMLAttributes<HTMLUListElement>>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
