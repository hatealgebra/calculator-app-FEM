import { createGlobalStyle } from "styled-components";
import { ITheme } from "./themeInterface";


const GlobalStyle = createGlobalStyle<{theme: ITheme}>`

* {
  box-sizing: border-box !important;
  margin: 0;
  padding: 0
}

html {
  font-family: 'League Spartan', sans-serif;
  font-size: 62.5%;
  font-weight: 700;
}

html, body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
}

button {
  font-family: 'League Spartan', sans-serif;
  cursor: pointer;
}
`

export default GlobalStyle;

