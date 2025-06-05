import { FormEvent, useState } from 'react'

import FormSearch, { ButtonSearch, InputSearch } from './styles'

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
    <FormSearch onSubmit={aoEnviarForm}>
      <InputSearch
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonSearch type="submit">Pesquisar</ButtonSearch>
    </FormSearch>
  )
}
export default FormVagas
