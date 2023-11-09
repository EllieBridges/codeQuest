import React from "react";

const PlayButton = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: string;
}) => {
  return (
    <button onClick={handleClick} className={`${children} button`}>
      {children}
    </button>
  );
};

export default PlayButton;
