import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

const TodoItem = props => {
  const handleToggle = () => props.handleCheck(props.element);
  const handleDelete = () => props.handleDelete(props.element);
  const openModal = () => props.openModal(props.element);
  const buttonAction = props.element.isComplete ? handleDelete : openModal;
  return (
    <li>
      <input
        type="checkbox"
        checked={props.element.isComplete}
        onChange={handleToggle}
        className="TodoItem__CheckInput"
      />
      <span className="TodoItem__NameSpan" >{props.element.name}</span>
      <IconButton
        tooltip="Delete Todo"
        className="TodoItem__DeleteICon"
        tooltipStyles={{ top: '22px' }}
        onClick={buttonAction}
      >
        <NavigationCancel />
      </IconButton>
    </li>
  );
}

export default TodoItem;
