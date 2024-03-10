import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const addToCounter = (value = 1) => setCounter(counter + value);

  const resetCounter = () => setCounter(initialValue);

  const substractCounter = (value = 1) => {
    if (counter <= 0) return;
    setCounter(counter - value);
  };

  return {
    counter,
    addToCounter,
    resetCounter,
    substractCounter,
  };
};
