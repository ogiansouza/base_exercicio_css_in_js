import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

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
  min-width: 0;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #b8b3e6;
  border-radius: 8px;
  font-size: 1rem;

  &:focus-visible,
  ${BtnPesquisar}:focus-visible {
    outline: 3px solid #2d235f;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 15px;
  }
`
