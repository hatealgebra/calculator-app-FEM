import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ControlsGrid } from "./controls.styled";
import Button from "./components/button/Button";

interface ControlsProps {
  setCount: Dispatch<SetStateAction<string>>;
  getResult: () => void;
}

const Controls = ({ setCount, getResult }: ControlsProps) => {
  const resetCount = () => {
    setCount("0");
  };

  const regex = new RegExp(/[1-9]/, "i");

  const handleClick = (value: string | number) => {

    if (value === "RESET") {
      return resetCount();
    }

    setCount((prev) => {
      const prevString = prev.toString();
      switch (value) {
        case "DEL":
          if (prevString.length <= 1 || !prevString || prevString === '0') {
            return "0";
          }
          if (prevString[prevString.length - 2] === "-") {
            return prevString.substring(0, prevString.length - 2);
          }
          return prevString.substring(0, prevString.length - 1);
        case "=":
          getResult();
          break;
        default:
          if (
            prevString.length === 1 &&
            prev[0] === "0" &&
            regex.test(`${value}`)
          ) {
            return value;
          }
          return prevString + `${value}`;
      }
    });
  };

  

  const buttonsArray = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  return (
    <ControlsGrid>
      {buttonsArray.map((value) => (
        <Button
          key={`btn-${value}`}
          handleClick={handleClick}
        >{`${value}`}</Button>
      ))}
    </ControlsGrid>
  );
};

export default Controls;
