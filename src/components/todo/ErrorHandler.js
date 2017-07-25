import React from 'react';

const ErrorHandler = props => (
  <ul>
    {
      props.errors.map((message, id) => <li key={id}><span className="error" >{ message }</span></li>)
    }
  </ul>
);


export default ErrorHandler;
