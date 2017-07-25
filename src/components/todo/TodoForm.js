import React from 'react';

class TodoForm extends React.Component {
  state = {
    currentTodo: '',
  };

  validateSubmit = (todoName) => {
    const errors = [];
    if (todoName === '') {
      errors.push('Please type a todo');
    } else {
      this.props.validations.forEach((validation) => {
        const validationMessage = validation(this.props.todoList, this.state.currentTodo);
        if (validationMessage) {
          errors.push(validationMessage);
        }
      });
    }
    return errors;
  };

  handleInput = (evt) => {
    this.setState(Object.assign({}, this.state, { currentTodo: evt.target.value }));
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const submitError = this.validateSubmit(this.state.currentTodo);
    if (submitError.length === 0) {
      this.props.handleSubmit(evt);
    } else {
      this.props.handleValidationError(submitError);
    }
    this.setState({ currentTodo: '' });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          value={this.state.currentTodo}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}

export default TodoForm;
