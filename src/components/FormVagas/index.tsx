import { FormEvent, useState } from 'react'

import { Formulario, BtnPesquisar, Campo } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.trim().toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <label htmlFor="busca-vagas">Buscar vagas</label>
      <Campo
        id="busca-vagas"
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        type="search"
        aria-label="Buscar vagas por título"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Formulario>
  )
}
export default FormVagas
