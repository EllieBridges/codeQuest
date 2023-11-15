import React from "react";

function PlayButton({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: string;
}) {
  return (
    <button onClick={handleClick} className={`${children} button`}>
      {children}
    </button>
  );
}

export default PlayButton;
