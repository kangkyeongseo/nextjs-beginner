import { useState } from "react";

export default function Name() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  return (
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
