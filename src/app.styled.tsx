import { styled } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3rem;
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
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

export const ThemeIndicator = styled.div`
  display: flex;
  gap: 11px;
  grid-area: 1/2/2/3;
  justify-content: space-around;

  button {
    color: #fff;
    background-color: transparent;
    border: none;
  }
`;

export const SwitchButton = styled.button`
  grid-area: 2/2/3/3;
  border-radius: 13px;
  background: #242d44;
  width: 61px;
  padding: 5px;
  flex-shrink: 0;
  border: none;
  display: inline-flex;
  align-items: center;

  button {
    height: 16px;
    width: 16px;
    background-color: #d03f2f;
    border-radius: 50%;
    border: none;
  }
`;

export const Result = styled.div<{ highlightResult: boolean }>`
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
  display: flex;
  color: white;
  width: 100%;
  padding: 3rem 2.4rem;
  line-height: 4.8rem;
  letter-spacing: -0.667px;
  font-size: ${(props) => (props.highlightResult ? "6rem" : "4rem")};
  border-radius: 10px;
  position: relative;
  background: #181f33;
  justify-content: flex-end;
  transition: font-size 0.2s ease-in-out;
  overflow-x:  hidden;
`;
