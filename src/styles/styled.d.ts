import 'styled-components'
import tema from './tema'

type Tema = typeof tema

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Tema {}
}
