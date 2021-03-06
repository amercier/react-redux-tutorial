import React from 'react';
import { number, string, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { ButtonInline } from './Button';
import './Story.css';

const style = shape({
  label: string,
  width: string.isRequired,
});

export const StoryProptypes = {
  story: shape({
    title: string,
    url: string,
    author: string,
    num_comments: number,
    points: number,
    objectID: string,
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

/**
 * Display a story.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.story - Story to display.
 * @param {Object} props.columns - Columns settings.
 * @param {Function} props.onArchive - Function to call when the Archive button is clicked.
 * @returns {React.Element} The rendered element.
 */
const Story = ({ story, columns, onArchive }) => {
  const {
    title,
    url,
    author,
    num_comments: comments,
    points,
    objectID,
  } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline type="button" onClick={() => onArchive(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
};

Story.propTypes = StoryProptypes;

/**
 * Map Redux dispatch to properties.
 *
 * @param {Function} dispatch - Redux's dispatch.
 * @returns {Object} Properties.
 */
const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Story);
