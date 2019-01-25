import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';

/**
 * Initial Story state.
 *
 * @type {Object}
 */
const INITIAL_STATE = {
  stories: [],
  error: null,
};

/**
 * Add stories.
 *
 * @param {Object} state - Previous state.
 * @param {Object} action - STORIES_ADD action.
 * @returns {Object} Next state.
 */
const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null,
});

/**
 * Handle fetch stories error.
 *
 * @param {Object} state - Previous state.
 * @param {Object} action - STORIES_FETCH_ERROR action.
 * @returns {Object} Next state.
 */
const applyFetchErrorStories = (state, action) => ({
  stories: [],
  error: action.error,
});

/**
 * Story reducer.
 *
 * @param {Object} [state=INITIAL_STATE] - Previous state.
 * @param {Object} action - Action to handle.
 * @returns {Object} Next state.
 */
export default function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_ADD: {
      return applyAddStories(state, action);
    }
    case STORIES_FETCH_ERROR: {
      return applyFetchErrorStories(state, action);
    }
    default:
      return state;
  }
}
