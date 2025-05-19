// Extende o DefaultTheme para incluir corPrincipal e corSecundaria
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string
    corSecundaria: string
  }
}

const tema = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export default tema
