import styled from 'styled-components'
import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'

export type FormProps = FormHTMLAttributes<HTMLFormElement>
export type InputProps = InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Form = styled.form<FormProps>`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
`

export const Input = styled.input<InputProps>`
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.cores.principal};
  border: 1px solid ${({ theme }) => theme.cores.principal};
  color: ${({ theme }) => theme.cores.secundaria};
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.cores.secundaria};
    color: ${({ theme }) => theme.cores.principal};
  }
`
