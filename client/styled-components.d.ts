import theme from 'styles/theme';

// ? Type inferring based on the values that are already declared on the theme's file
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
