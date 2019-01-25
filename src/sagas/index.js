import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStories } from './story';

/**
 * Root saga.
 *
 * @returns {Object} The root saga generator.
 */
export default function* watchAll() {
  /* eslint-disable redux-saga/no-unhandled-errors */
  yield all([takeEvery(STORIES_FETCH, handleFetchStories)]);
  /* eslint-enable redux-saga/no-unhandled-errors */
}
