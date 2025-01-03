import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
export const Botao = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
