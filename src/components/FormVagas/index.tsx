import { useState, FormEvent } from 'react'
import { Form, Input, Button } from './FormVagas'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <Button>Pesquisar</Button>
    </Form>
  )
}

export default FormVagas
