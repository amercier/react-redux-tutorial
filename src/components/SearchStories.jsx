import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

/**
 * A form to search stories.
 */
class SearchStories extends Component {
  /**
   * Create an instance of SearchStories.
   *
   * @param {Object} props - Component properties.
   */
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  /**
   * Function called whenever the form is submitted.
   *
   * @param {InputEvent} event - The submit event.
   * @returns {undefined} Nothing.
   */
  handleSubmit = event => {
    const { query } = this.state;
    if (query) {
      const { onFetchStories } = this.props;
      onFetchStories(query);
      this.setState({ query: '' });
    }

    event.preventDefault();
  };

  /**
   * Function called whenever the search query has changed.
   *
   * @param {InputEvent} event - The submit event.
   * @returns {undefined} Nothing.
   */
  handleQueryChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  /**
   * Render the component.
   *
   * @returns {React.Element} The rendered element.
   */
  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={query} onChange={this.handleQueryChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

SearchStories.propTypes = {
  onFetchStories: func.isRequired,
};

/**
 * Map Redux dispatch to properties.
 *
 * @param {Function} dispatch - Redux's dispatch.
 * @returns {Object} Properties.
 */
const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchStories);
