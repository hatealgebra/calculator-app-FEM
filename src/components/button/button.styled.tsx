import { css, styled } from "styled-components";



const deleteButtonCSS = css`
  font-size: 2rem;
  color: white;
  background-color: #647198;
  box-shadow: 0px -4px 0px 0px #414e73 inset;

  &:active {
    box-shadow: 0px 0px 0px 0px #414e73 inset;
  }
`;

const longButtonCSS = css`
  ${deleteButtonCSS}
  grid-column: span 2;
  aspect-ratio: 2.07;
`;

const redButtonCss = css`
  background-color: #d03f2f;
  box-shadow: 0px -4px 0px 0px #93261a inset;
  &:active {
    box-shadow: 0px 0px 0px 0px #93261a inset;
  }
`;

export const BaseButton = styled.button`
  border-radius: 5px;
  background: #eae3dc;
  box-shadow: 0px -4px 0px 0px #b3a497 inset;
  letter-spacing: -0.533px;
  font-weight: 700;
  color: rgba(67, 74, 89, 1);
  border: none;
  font-size: 3.2rem;
  aspect-ratio: 0.9375;

  &:active {
    box-shadow: 0px 0px 0px 0px #b3a497 inset;
    padding-top: 4px;
  }
`;

export const CalcButton = styled(BaseButton)<{
  red?: boolean;
  children: string | number;
}>`
  ${(props) => props.children === "DEL" && deleteButtonCSS};
  ${(props) =>
        (props.children === "RESET" || props.children === "=") && longButtonCSS};
  ${(props) => props.children === "=" && redButtonCss}
`;

export const DelButton = styled(BaseButton)`
  font-size: 2rem;
  color: white;
  background-color: #647198;
  box-shadow: 0px -4px 0px 0px #414e73 inset;

  &:active {
    box-shadow: 0px 0px 0px 0px #414e73 inset;
  }
`;

export const LongButton = styled(DelButton)<{ red?: boolean }>`
  grid-column: span 2;
  color: white;

  ${(props) =>
    props.red &&
    `
background: #D03F2F;
box-shadow: 0px -4px 0px 0px #93261A inset;
    &:active {
  box-shadow: 0px 0px 0px 0px #93261A inset;
}
  `}
`;
