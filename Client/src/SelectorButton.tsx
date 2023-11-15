import React, { MouseEvent } from "react";

function SelectorButton({
  text,
  handleClick,
  value,
  isHighlighted,
}: {
  text: string;
  handleClick: (event: MouseEvent<HTMLElement>, value: string) => void;
  value: string;
  isHighlighted: boolean;
}) {
  const highlighted = isHighlighted ? "clicked" : undefined;

  return (
    <button
      onClick={(event) => handleClick(event, value)}
      className={`${text} button ${highlighted}`}
      value={value}
    >
      {text}
    </button>
  );
}

export default SelectorButton;
