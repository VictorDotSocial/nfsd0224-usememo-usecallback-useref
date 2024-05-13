import { useState, useRef, useEffect } from "react";

const UseRefDemo = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style = "border: 4px solid red";
  }, []);

  const handleIncrement = () => {
    console.log("Incrementando!");
    setCounter(counter + 1);
    counterRef.current = counterRef.current + 1;
  };

  return (
    <div>
      <h1>UseRefDemo</h1>
      <p>CounterState: {counter}</p>
      <p>CounterRef: {counterRef.current}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <br />
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefDemo;
