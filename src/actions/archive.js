import { STORY_ARCHIVE } from '../constants/actionTypes';

/**
 * Create an STORY_ARCHIVE action.
 *
 * @param {string} id - Story id.
 * @returns {Object} A new STORY_ARCHIVE action.
 */
const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});

export { doArchiveStory };
