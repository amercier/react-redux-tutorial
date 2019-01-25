import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
} from '../constants/actionTypes';

/**
 * Create an STORIES_ADD action.
 *
 * @param {Object[]} stories - Stories to add.
 * @returns {Object} A new STORIES_ADD action.
 */
const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

/**
 * Create an STORIES_FETCH action.
 *
 * @param {string} query - Search query.
 * @returns {Object} A new STORIES_FETCH action.
 */
const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

/**
 * Create an STORIES_FETCH_ERROR action.
 *
 * @param {Error} error - Caught error.
 * @returns {Object} A new STORIES_FETCH_ERROR action.
 */
const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
});

export { doAddStories, doFetchStories, doFetchErrorStories };
