import React from "react";

const Title = ({ text, slogan }: { text: string; slogan: string }) => {
  return (
    <div className="titleContainer">
      <h1 className="title">{text}</h1>
      <h3 className="slogan">{slogan}</h3>
    </div>
  );
};

export default Title;
