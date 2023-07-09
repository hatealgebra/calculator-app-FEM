import { useEffect, useState } from "react";
import "./App.css";
import {
  AppContainer,
  Result,
  SwitchButton,
  ThemeIndicator,
  TopPanel,
} from "./app.styled";
import Controls from "./Controls";

function App() {
  const [count, setCount] = useState<string>("0");
  const [higlightResult, setHighlightResult] = useState(false);

  const getResult = (stringQuery: string) => {
    try {
      const result = eval(stringQuery.replace("x", "*"));
      const resultString = result.toString();
      setCount(resultString);
    } catch(e) {
      setCount(stringQuery);
    } finally {
      setHighlightResult(true);
      console.log(count);
    }
  };


  useEffect(() => {
    if(count === undefined){
      setCount('0');
    }
    if(higlightResult){
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
            <button>1</button>
            <button>2</button>
            <button>3</button>
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
