import React from 'react';
import { number, string, shape } from 'prop-types';
import './Story.css';

const Story = ({ story, columns }) => {
  const { title, url, author, comments, points } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }} />
    </div>
  );
};

const style = shape({
  label: string,
  width: string.isRequired,
});

Story.propTypes = {
  story: shape({
    title: string.isRequired,
    url: string.isRequired,
    author: string.isRequired,
    comments: number.isRequired,
    points: number.isRequired,
    objectId: number.isRequired,
  }).isRequired,
  columns: shape({
    title: style.isRequired,
    author: style.isRequired,
    comments: style.isRequired,
    points: style.isRequired,
    archive: style.isRequired,
  }).isRequired,
};

export default Story;
