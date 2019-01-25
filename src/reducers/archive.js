import { STORY_ARCHIVE } from '../constants/actionTypes';

/**
 * Initial Archive state.
 *
 * @type {Array}
 */
const INITIAL_STATE = [];

/**
 * Archive a story.
 *
 * @param {Object} state - Previous state.
 * @param {Object} action - STORY_ARCHIVE action.
 * @returns {Object} Next state.
 */
const applyArchiveStory = (state, action) => [...state, action.id];

/**
 * Archive reducer.
 *
 * @param {Object} [state=INITIAL_STATE] - Previous state.
 * @param {Object} action - Action to handle.
 * @returns {Object} Next state.
 */
export default function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE: {
      return applyArchiveStory(state, action);
    }
    default:
      return state;
  }
}
