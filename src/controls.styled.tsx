import { styled } from "styled-components";
import { ITheme } from "./particles/themeInterface";

export const ControlsGrid = styled.div<{theme: ITheme}>`
    display: grid;
    padding: 2.4rem;
    background-color: ${({theme}) => theme.colors.bgControlsContainer};
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, auto);
    justify-content: center;
    gap:13px;
    border-radius: 10px;
    width:100%;
`