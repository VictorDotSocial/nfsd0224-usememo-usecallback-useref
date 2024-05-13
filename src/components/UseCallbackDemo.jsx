import { useState, useCallback } from "react";
import shuffle from "../utils/shuffle";
import UseCallbackSearchDemo from "./UseCallbackSearchDemo";

const itemsList = ["lentejas", "judías", "garbanzos", "espinacas", "patatas"];

const UseCallbackDemo = () => {
  const [items, setItems] = useState(itemsList);
  const [counter, setCounter] = useState(0);

  const handleSearch = useCallback(
    (text) => {
      console.log("ITEMS", items[0]);

      const filteredItems = itemsList.filter((item) => item.includes(text));
      setItems(filteredItems);
    },
    [items]
  );

  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <div>
        <button onClick={() => setItems(shuffle(itemsList))}>Mezclar</button>
        <UseCallbackSearchDemo onChange={handleSearch} />
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <br />
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      </div>
    </div>
  );
};

export default UseCallbackDemo;
