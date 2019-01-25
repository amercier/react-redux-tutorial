import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(() => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        div,
      );
      ReactDOM.unmountComponentAtNode(div);
    }).not.toThrow();
  });
});
