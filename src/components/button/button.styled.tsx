import { css, styled } from "styled-components";
import { ITheme } from "../../particles/themeInterface";

const deleteButtonCSS = css<{ theme: ITheme }>`
  font-size: 2rem;
  color: white;
  ${props => {
    const {bgButtonAlt, shadowButtonAlt} = props.theme.colors;
    return `
    background-color: ${bgButtonAlt};    
    box-shadow: 0px -4px 0px 0px ${shadowButtonAlt} inset;
  
    &:active {
      box-shadow: 0px 0px 0px 0px ${shadowButtonAlt} inset;
    }
    `
  }}
  
`;

const longButtonCSS = css<{ theme: ITheme }>`
  ${deleteButtonCSS}
  grid-column: span 2;
  aspect-ratio: 2.07;
`;

const resultButtonCss = css<{ theme: ITheme }>`
  ${(props) => {
    const { bgButtonResult, shadowResult, resultText } = props.theme.colors;
    return `        
    color: ${resultText};
    background-color: ${bgButtonResult};
    box-shadow: 0px -4px 0px 0px ${shadowResult} inset;
    &:active {
      box-shadow: 0px 0px 0px 0px ${shadowResult} inset;
    }
    `;
  }}
`;

export const BaseButton = styled.button<{theme: ITheme}>`
  border-radius: 5px;
  font-weight: 700;
  border: none;
  font-size: 3.2rem;
  aspect-ratio: 0.9375;
  
  ${props => {
      const {buttonText, bgButtonNumber, shadowButton } = props.theme.colors;
      return `
      background: ${bgButtonNumber};
      color: ${buttonText};    
      letter-spacing: -0.533px;
      box-shadow: 0px -4px 0px 0px ${shadowButton} inset;

    &:active {
      box-shadow: 0px 0px 0px 0px ${shadowButton} inset;
      padding-top: 4px;
    }
    `
  }}
`;

export const CalcButton = styled(BaseButton)<{
  red?: boolean;
  children: string | number;
}>`
  ${(props) => props.children === "DEL" && deleteButtonCSS};
  ${(props) =>
    (props.children === "RESET" || props.children === "=") && longButtonCSS};
  ${(props) => props.children === "=" && resultButtonCss}
`;
