import { Cabecalho as CabecalhoStyle } from './Cabecalho'

export type Props = {
  children: string
}

const Cabecalho = (props: Props) => {
  return <CabecalhoStyle>{props.children}</CabecalhoStyle>
}

export default Cabecalho
