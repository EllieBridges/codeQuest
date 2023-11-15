import React, { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      console.log("Countdown reached zero");
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Countdown;
