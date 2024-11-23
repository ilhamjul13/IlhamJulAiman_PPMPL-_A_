import React, { useState } from 'react';

const GreetingWithAlert = ({ name }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={handleClick}>Say Hello</button>
      {clicked && <p>You clicked the button!</p>}
    </div>
  );
}

export default GreetingWithAlert;
