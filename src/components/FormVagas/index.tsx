import { FormEvent, useState } from 'react'

import { formulario, campo,btnPesquisar } from './styles'

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
    <formulario  onSubmit={aoEnviarForm}>
      <campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <btnPesquisar type="submit">
        Pesquisar
      </btnPesquisar>
    </formulario>
  )
}
export default FormVagas
