import { FormEvent, useState } from 'react'

import { Field, Form, SearchButton } from './styles'

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
    <Form onSubmit={aoEnviarForm}>
      <Field
        aria-label="Termo da pesquisa"
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </Form>
  )
}
export default FormVagas
