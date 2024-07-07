import styled from 'styled-components'

interface FormProps {
  theme: {
    corSecundaria: string
  }
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

interface InputProps {
  theme: {
    corPrincipal: string
  }
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

interface ButtonProps {
  theme: {
    corPrincipal: string
    corSecundaria: string
  }
  type?: string
  children?: React.ReactNode
}

export const Form = styled.form<FormProps>`
  display: grid
  grid-template-columns: 1fr auto
  background-color: ${(props) => props.theme.corSecundaria}
  padding: 32px
  border-radius: 12px
  margin-top: 40px
`

export const Campo = styled.input<InputProps>`
  padding: 0 16px
  outline-color: ${(props) => props.theme.corPrincipal}
`

export const BtnPesquisar = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.corPrincipal}
  border: 1px solid ${(props) => props.theme.corPrincipal}
  height: 40px
  padding: 0 16px
  font-size: 18px
  color: ${(props) => props.theme.corSecundaria}
  margin-left: 8px
  cursor: pointer
`
