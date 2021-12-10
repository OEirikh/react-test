import React from 'react';

function TodoFiltr({ value, onChange }) {
  return (
    <label>
      Filtr for word
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default TodoFiltr;
