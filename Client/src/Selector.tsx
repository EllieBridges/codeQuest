import React, { useState, MouseEvent } from "react";
import SelectorButton from "./SelectorButton";
import "./Selector.css";

const Selector = ({
  type,
  descriptor,
  buttons,
  makeQuiz,
}: {
  type: string;
  descriptor: string;
  buttons: string[];
  makeQuiz: (event: MouseEvent<HTMLElement>) => void;
}) => {
  const [highlightedButton, setHighlightedButton] = useState<string | null>(
    null
  );

  const handleClick = (event: MouseEvent<HTMLElement>, value: string) => {
    setHighlightedButton(value);
    makeQuiz(event);
  };

  return (
    <div className={`${type}container configSelector`}>
      <h2 className="descriptor">{descriptor}</h2>
      <div className={`${type}buttonContainer`}>
        {buttons.map((button) => {
          return (
            <SelectorButton
              key={button}
              text={button}
              handleClick={handleClick}
              value={button}
              isHighlighted={highlightedButton === button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
