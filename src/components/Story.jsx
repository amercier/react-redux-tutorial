import React from 'react';
import { number, string, shape } from 'prop-types';
import './Story.css';

const Story = ({ story }) => {
  const { title, url, author, comments, points } = story;

  return (
    <div className="story">
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{comments}</span>
      <span>{points}</span>
    </div>
  );
};

Story.propTypes = {
  story: shape({
    title: string.isRequired,
    url: string.isRequired,
    author: string.isRequired,
    comments: number.isRequired,
    points: number.isRequired,
    objectId: number.isRequired,
  }).isRequired,
};

export default Story;
