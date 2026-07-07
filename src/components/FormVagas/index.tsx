import { FormEvent, useState } from 'react'

import * as S from './styles'

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
    <S.Form onSubmit={aoEnviarForm} role="search">
      <S.Campo
        placeholder="Front-end, fullstack, node, design"
        aria-label="Pesquisar vagas"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <S.BotaoPesquisar type="submit">Pesquisar</S.BotaoPesquisar>
    </S.Form>
  )
}

export default FormVagas
