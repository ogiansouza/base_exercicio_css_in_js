import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 16px;
    border-radius: 8px;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    border-radius: 8px;
    padding: 15px;
  }
`
