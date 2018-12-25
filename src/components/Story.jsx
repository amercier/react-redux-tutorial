import React from 'react';
import { number, string, func, shape } from 'prop-types';
import { ButtonInline } from './Button';
import './Story.css';

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, comments, points, objectId } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectId)}>Archive</ButtonInline>
      </span>
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
  onArchive: func.isRequired,
};

export default Story;
