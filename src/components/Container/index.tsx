import { ReactNode } from 'react'
import { ContainerEstilizado } from './Container'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <ContainerEstilizado>{children}</ContainerEstilizado>
}

export default Container
