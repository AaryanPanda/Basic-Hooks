import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [currentAge, setAge] = useState(0);
  const [currentSib, setSib] = useState(0);

  useEffect(() => {
    alert(`My age is ${currentAge}`);
    alert(`My sib is ${currentSib}`);
  }, [currentAge, currentSib]);

  return (
    <>
      <h3>My Current Age is {currentAge} </h3>
      <h4>My sibilings {currentSib}</h4>

      <button onClick={() => setAge((prev) => prev + 1)}>age</button>
      <button onClick={() => setSib((prev) => prev + 1)}>sib</button>
    </>
  );
};

export default UseEffect;
