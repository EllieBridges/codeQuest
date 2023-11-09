import React, { useState } from "react";
import Button from "./SelectorButton";

const Selector = ({
  type,
  descriptor,
  buttons,
  quizType,
}: {
  type: string;
  descriptor: string;
  buttons: string[];
  quizType: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const [selected, setSelected] = useState();

  const handleClick = (button) => {
    setSelected(button);
    quizType(type, button);
  };

  return (
    <div className={`${type}Container`}>
      <h2 className="descriptor">{descriptor}</h2>
      <div className={`buttonContainer`}>
        {buttons.map((button) => {
          return (
            <Button
              key={button}
              text={button}
              onClick={handleClick}
              highlight={selected === button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
