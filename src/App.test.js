import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

injectTapEventPlugin();

const ThemedApp = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemedApp />, div);
});
