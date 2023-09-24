import { BaseSyntheticEvent, SetStateAction, useContext, useEffect, useState } from "react";
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
  const {setTheme} = useContext(CustomThemeContext);
  const [count, setCount] = useState<string | number | undefined>("0");
  const [higlightResult, setHighlightResult] = useState(false);

  const getResult = (stringQuery: string) => {
    try {
      const result = eval(stringQuery.replace("x", "*")) as string;
      const resultString = result.toString();
      setCount(resultString);
    } catch (e) {
      setCount(stringQuery);
    } finally {
      setHighlightResult(true);
    
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

  
  const handleSwitchClick = (e: BaseSyntheticEvent): SetStateAction<string> => {
    const currTarget = e.currentTarget as HTMLElement;
    const nativeEvent = e.nativeEvent as MouseEvent;
    
    const switchButtonWidth = currTarget.offsetWidth ;
    const relativeClickPosition = nativeEvent.offsetX;
    
    if (relativeClickPosition <= switchButtonWidth / 3) {
      return setTheme("default")
    }
  

    if(relativeClickPosition <= switchButtonWidth * 2/3) {
      return setTheme("light");
    }


    return setTheme('neon');

  }  


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
            <SwitchButton onClick={(e: BaseSyntheticEvent)=> handleSwitchClick(e)}>
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
