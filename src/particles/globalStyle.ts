import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

* {
  box-sizing: border-box !important;
  margin: 0;
  padding: 0
}

html {
  font-size: 62.5%;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
}

html, body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
}

button {
  cursor: pointer;
}
`

export default GlobalStyle;

