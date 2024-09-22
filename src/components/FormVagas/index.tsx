import { FormEvent, SetStateAction, useState } from 'react'
import { Campo, Pesquisar, Stylesform } from './FormVagas.Styles'

export type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Stylesform onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <Pesquisar type="submit">Pesquisar</Pesquisar>
    </Stylesform>
  )
}
export default FormVagas
