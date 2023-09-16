import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Counter-container">
      <Count count={count} />
      <Button text="Add 1!" onClick={incrementCount} />
      <Button text="Subtract 1" onClick={decrementCount} />
    </div>
  );
}

export default Counter;
