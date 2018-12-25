import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const noop = () => {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App stories={[]} onArchive={noop} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
