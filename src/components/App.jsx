import React from 'react';
import { func, arrayOf } from 'prop-types';
import './App.css';

import Stories from './Stories';
import Story from './Story';

const App = ({ stories, onArchive }) => (
  <div className="app">
    <Stories stories={stories} onArchive={onArchive} />
  </div>
);

App.propTypes = {
  stories: arrayOf(Story.propTypes.story).isRequired,
  onArchive: func.isRequired,
};

export default App;
