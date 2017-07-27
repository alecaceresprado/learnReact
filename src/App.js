/* eslint-disable no-param-reassign */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList, ErrorHandler, ConfirmDeleteModal } from './components/todo';
import { addTodo, updateTodo, toggleTodo, checkForDuplicates, deleteTodo } from './lib/todoHelpers';

class App extends React.Component {
  state = {
    TODO: [
      {
        id: 0,
        name: 'this is a training',
        isComplete: false,
      },
      {
        id: 1,
        name: 'learn jsx',
        isComplete: false,
      },
      {
        id: 2,
        name: 'skipping a few lessons',
        isComplete: false,
      },
    ],
    errors: [],
    modalOpen: false,
    todoForModal: {},
  };

  handleCheck = (todoElement) => {
    const toggled = toggleTodo(todoElement);
    const updatedTodoList = updateTodo(this.state.TODO, toggled);
    this.setState({ TODO: updatedTodoList });
  }

  handleDelete = (todoElement) => {
    const updatedTodoList = deleteTodo(this.state.TODO, todoElement);
    this.setState({ TODO: updatedTodoList });
  }

  openModal = (todoElement) => {
    this.setState({ modalOpen: true, todoForModal: todoElement });
  }

  closeModal = () => {
    this.setState({ modalOpen: false, todoForModal: {} });
  }

  handleModalAccept = (todoElement) => {
    this.handleDelete(todoElement);
    this.closeModal();
  }

  handleSubmit = (evt) => {
    const newId = this.state.TODO.length > 0 ? this.state.TODO[this.state.TODO.length - 1].id + 1 : -1;
    const newTodo = {
      id: newId,
      name: evt.target.children[0].value,
      isComplete: false,
    };
    const newState = Object.assign({}, this.state, { TODO: addTodo(this.state.TODO, newTodo), errors: [] });
    this.setState(newState);
  }

  handleValidationError = (errors) => {
    this.setState(Object.assign({}, this.state, { errors }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Todo-App">
          {
            this.state.modalOpen &&
            <ConfirmDeleteModal
              cancelAction={this.closeModal}
              acceptAction={this.handleModalAccept}
              todoElement={this.state.todoForModal}
            />
          }
          <h2>React List</h2>
          {
            this.state.errors.length > 0 && <ErrorHandler errors={ this.state.errors } />
          }
          <TodoForm
            todoList={this.state.TODO}
            handleSubmit={this.handleSubmit}
            handleValidationError={this.handleValidationError}
            validations={[checkForDuplicates]}
          />
          <TodoList
            list={this.state.TODO}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
            openModal={this.openModal}
          />
        </div>
      </div>
    );
  }
}

export default App;
