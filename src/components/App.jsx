import React from 'react';
import { arrayOf } from 'prop-types';
import './App.css';

import Stories from './Stories';
import Story from './Story';

const App = ({ stories }) => (
  <div className="app">
    <Stories stories={stories} />
  </div>
);

App.propTypes = {
  stories: arrayOf(Story.propTypes.story).isRequired,
};

export default App;
