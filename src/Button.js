import React from 'react';

function Button({ text, onClick }) {
  return (
    <button className="Button-style" onClick={onClick}>{text}</button>
  );
}

export default Button;
