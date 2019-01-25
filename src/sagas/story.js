import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchErrorStories } from '../actions/story';
import { fetchStories } from '../api/story';

/**
 * Generate a call to `fetchStories` and a `STORIES_FETCH_ERROR` action, if successful. If not,
 * generate a `STORIES_FETCH_ERROR` action.
 *
 * @param {Object} action - `STORIES_FETCH` action.
 * @returns {Object} An iterator that yields the call and the resulting action.
 */
export function* handleFetchStories(action) {
  const { query } = action;

  try {
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits));
  } catch (error) {
    yield put(doFetchErrorStories(error));
  }
}
