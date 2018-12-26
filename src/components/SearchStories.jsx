import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onSubmit = event => {
    const { query } = this.state;
    if (query) {
      const { onFetchStories } = this.props;
      onFetchStories(query);
      this.setState({ query: '' });
    }

    event.preventDefault();
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={query} onChange={this.onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

SearchStories.propTypes = {
  onFetchStories: func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SearchStories);
