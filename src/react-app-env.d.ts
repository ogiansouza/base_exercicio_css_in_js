/// <reference types="react-scripts" />

import 'styled-components'
import colors from './theme/colors'

type ThemeType = typeof colors

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
