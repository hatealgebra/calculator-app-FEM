import { ITheme } from "./themeInterface";

const theme: ITheme = {
    name: 'default',
    colors: {
        bg: '#3A4663',
        bgResultField: '#181f33',
        textContrast: '#FFFFFF',
        buttonText: 'rgba(67, 74, 89, 1)',
        resultText: '#FFFFF',
        bgControlsContainer: '#242D44',
        bgSwitchButton: '#242d44',
        bgButtonNumber: '#eae3dc',
        bgButtonAlt: '#647198;',
        bgButtonResult:'#D03F2F',
        shadowButtonAlt: '#414e73',
        shadowResult: '#93261a',
        shadowButton: '#b3a497'
    }
}

export const neonTheme: ITheme = {
    name: 'neon',
    colors: {
        bg: '#3A4663',
        bgResultField: '#1E0936',
        textContrast: '#FFE53D',
        buttonText: '#FFE53D',
        resultText: '#1A2327',
        bgControlsContainer: '#242D44',
        bgSwitchButton: '#242d44',
        bgButtonNumber: '#331C4D',
        bgButtonAlt: '#56077C;',
        bgButtonResult:'#00DED0',
        shadowButtonAlt: '#BE15F4',
        shadowResult: '#6CF9F1',
        shadowButton: '#881C9E'
    }
}

export const lightTheme: ITheme = {
    name: 'light',
    colors: {
        bg: '#E6E6E6',
        bgResultField: '#EEE',
        textContrast: '#36362C',
        buttonText: 'rgba(67, 74, 89, 1)',
        resultText: '1A2327',
        bgControlsContainer: '#D2CDCD',
        bgSwitchButton: '#D2CDCD',
        bgButtonNumber: '#E5E4E1',
        bgButtonAlt: '#378187;',
        bgButtonResult:'#C85402',
        shadowButtonAlt: '#1B6066',
        shadowResult: '#873901',
        shadowButton: '#A79E91'
    }
}

export default theme;