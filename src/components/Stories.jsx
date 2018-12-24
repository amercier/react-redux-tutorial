import React from 'react';
import { arrayOf } from 'prop-types';
import './Stories.css';

import Story from './Story';

const Stories = ({ stories }) => (
  <div className="stories">
    {(stories || []).map(story => (
      <Story key={story.objectId} story={story} />
    ))}
  </div>
);

Stories.propTypes = {
  stories: arrayOf(Story.propTypes.story).isRequired,
};

export default Stories;
