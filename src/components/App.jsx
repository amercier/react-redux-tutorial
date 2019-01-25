import React from 'react';
import './App.css';

import Stories from './Stories';
import SearchStories from './SearchStories';

/**
 * Main component of the application.
 *
 * @returns {React.Element} The rendered <div> element.
 */
const App = () => (
  <div className="app">
    <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
  </div>
);

export default App;
