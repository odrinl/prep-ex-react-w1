import React from 'react';

function Count({ count }) {
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <p>Count: {count}</p>
      <p>{feedback}</p>
    </div>
  );
}

export default Count;
