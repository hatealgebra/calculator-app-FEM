import { useContext, useEffect, useState } from "react";
import "./App.css";
import {
  AppContainer,
  Result,
  SwitchButton,
  ThemeIndicator,
  TopPanel,
} from "./app.styled";
import Controls from "./Controls";
import  { CustomThemeContext } from "./particles/ThemeProvider";

function App() {
  console
  const {theme, setTheme} = useContext(CustomThemeContext);
  const [count, setCount] = useState<string>("0");
  const [higlightResult, setHighlightResult] = useState(false);

console.log(theme)
  const getResult = (stringQuery: string) => {
    try {
      const result = eval(stringQuery.replace("x", "*"));
      const resultString = result.toString();
      setCount(resultString);
    } catch (e) {
      setCount(stringQuery);
    } finally {
      setHighlightResult(true);
      console.log(count);
    }
  };

  useEffect(() => {
    if (count === undefined) {
      setCount("0");
    }
    if (higlightResult) {
      setTimeout(() => {
        setHighlightResult(false);
      }, 300);
    }
  }, [higlightResult, count]);


  return (
      <AppContainer>
        <TopPanel>
          <h1>calc</h1>
          <div className="theme">
            <h2>Theme</h2>
            <ThemeIndicator>
              <button onClick={() => setTheme('default')}>1</button>
              <button onClick={() => setTheme('light')}>2</button>
              <button onClick={() => setTheme('neon')}>3</button>
            </ThemeIndicator>
            <SwitchButton>
              <button></button>
            </SwitchButton>
          </div>
        </TopPanel>
        <Result highlightResult={higlightResult}>{count}</Result>
        <Controls setCount={setCount} getResult={() => getResult(count)} />
      </AppContainer>
  );
}

export default App;
