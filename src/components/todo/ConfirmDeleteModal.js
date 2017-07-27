import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const ConfirmDeleteModal = (props) => {
  const acceptAction = () => props.acceptAction(props.todoElement);
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={props.cancelAction}
    />,
    <FlatButton
      label="Accept"
      primary={true}
      onTouchTap={acceptAction}
    />,
  ];

  return (
    <div>
      <Dialog
        title="Confirm deleting this Todo"
        actions={actions}
        modal={true}
        open={true}
      >
        "{props.todoElement.name}" Todo is not marked as completed.
        Delete it anyway?
      </Dialog>
    </div>
  );
};

export default ConfirmDeleteModal;
