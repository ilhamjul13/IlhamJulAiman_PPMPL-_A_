import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0); // Menambahkan fungsi reset

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button> {/* Tombol reset */}
    </div>
  );
}

export default Counter;
