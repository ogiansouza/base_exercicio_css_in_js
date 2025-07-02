import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    cores: {
      principal: string
      secundaria: string
    }
    containerLargura: string
    fonte: string
  }
}
