import { styled } from "styled-components";
import { ITheme } from "./particles/themeInterface";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3rem;

  * {
    font-weight: 700;
  }
`;

export const TopPanel = styled.div<{theme: ITheme}>`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.textContrast};
  align-items: center;

  h1 {
    font-size: 3.2rem;
    letter-spacing: -0.533px;
  }

  .theme {
    display: grid;
    column-gap: 3rem;
    row-gap: 5px;
    height: fit-content;

    h2 {
      align-self: center;
      grid-area: 2/1/3/2;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

export const ThemeIndicator = styled.div<{theme: ITheme}>`
  display: flex;
  gap: 11px;
  grid-area: 1/2/2/3;
  justify-content: space-around;

  button {
    font-weight: 700 ;
    color: ${({theme}) => theme.colors.textContrast};
    background-color: transparent;
    border: none;
  }
`;

export const SwitchButton = styled.button<{theme: ITheme}>`
  grid-area: 2/2/3/3;
  border-radius: 13px;
  background: ${({theme}) => theme.colors.bgSwitchButton};
  width: 61px;
  padding: 5px;
  flex-shrink: 0;
  border: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  align-items: center;

  button {
    height: 16px;
    width: 16px;
    background-color: ${({theme}) => theme.colors.bgButtonResult};
    border-radius: 50%;
    border: none;
    grid-column: ${({theme}) => theme.name === "light" ? "2/3" : theme.name === "neon"? "3/4":"1/2"};
  }
`;


// FIXME: Fix overflow with the padding, rn it does not respect the boundaries on left side
export const Result = styled.div<{ highlightResult: boolean, theme: ITheme }>`
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  display: flex;
  width: 100%;
  padding: 3rem 2.4rem;
  line-height: 4.8rem;
  letter-spacing: -0.667px;
  font-size: ${(props) => (props.highlightResult ? "6rem" : "4rem")};
  border-radius: 10px;
  position: relative;
  justify-content: flex-end;
  transition: font-size 0.2s ease-in-out;
  overflow-x:  hidden;

  ${({theme}) => {
    const {textContrast, bgResultField} = theme.colors;
    return `
      color: ${textContrast};
      background-color: ${bgResultField};
    `
  }}
`;
