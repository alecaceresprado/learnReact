import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
    <div className="Todo-List">
      <ul>
        {props.list.map(listElement => (
          <TodoItem key={listElement.id} element={listElement} handleCheck={props.handleCheck} />
        ))}
      </ul>
    </div>
);

export default TodoList;

