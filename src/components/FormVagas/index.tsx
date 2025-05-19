import { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { BtnPesquisar, StyledForm } from './styles'

const Input = styled.input.attrs({})<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`
interface Props {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <Input
        type="text"
        placeholder="Pesquisar vagas..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </StyledForm>
  )
}

export default FormVagas
