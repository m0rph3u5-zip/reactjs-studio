import React, { useState, useEffect } from "react";

const useCounter = (isPlus = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => isPlus ? prevCounter + 1 : prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlus]);

  return counter;
}

export default useCounter