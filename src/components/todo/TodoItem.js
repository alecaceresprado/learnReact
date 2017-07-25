import React from 'react';

const TodoItem = props => {
  const handleToggel = () => props.handleCheck(props.element);
  return (
    <li>
      <input
        type="checkbox"
        checked={props.element.isComplete}
        onChange={handleToggel}
      />{props.element.name}
    </li>
  );
}

export default TodoItem;
