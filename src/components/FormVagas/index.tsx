import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const CampoBusca = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.cores.principal};
`

const BotaoPesquisar = styled.button`
  background-color: ${({ theme }) => theme.cores.principal};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <CampoBusca
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </FormContainer>
  )
}

export default FormVagas
